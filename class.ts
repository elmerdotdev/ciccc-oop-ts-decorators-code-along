function Logger(target: Function, context: ClassDecoratorContext) {
  console.log(target)
  console.log(context)
}

function AddPrototype(target: Function, context: ClassDecoratorContext) {
  target.prototype.schoolYear = new Date().getFullYear()
}

function AddSchool<T extends { new (...args: any[]): {} }>(target: T, context: ClassDecoratorContext) {
  return class extends target {
    college = "CICCC"
    city = "Vancouver"
  
    constructor(...args: any[]) {
      super(...args)
      console.log(`Added college and city into ${context.name} class...`)
    }
  }
}

@Logger
@AddPrototype
@AddSchool
class Student {
  name: string

  constructor(n: string) {
    this.name = n
  }
}

const newStudent: Student = new Student("John")
console.log(newStudent)


////////////

function AddEngineering<T extends { new (...args: any[]): {}}>(target: T, context: ClassDecoratorContext) {
  return class extends target {
    constructor(...args: any[]) {
      super(...args)
    }

    department = "Engineering"
    age = 30

    getDepartment(): string {
      return `This person works under the ${this.department}.`
    }
  }
}

@AddEngineering
class Employee {
  firstName = "John"
  lastName = "Smith"

  constructor(fn: string, ln: string) {
    this.firstName = fn
    this.lastName = ln
  }
}

const employee1 = new Employee("John", "Smith")
console.log(employee1)