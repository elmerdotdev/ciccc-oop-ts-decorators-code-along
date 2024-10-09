type Assignment = {
  name: string
  difficulty: 'easy' | 'hard'
  submitted: boolean
}

function AddAssignment<T, U extends Assignment[]>(target: undefined, context: ClassFieldDecoratorContext<T, U>) {
  console.log(target)
  console.log(context)
  return function (args: U) {
    args.push({
      name: 'Figma 101',
      difficulty: 'easy',
      submitted: true
    })
    return args
  }
}

class Course {
  @AddAssignment
  assignments: Assignment[] = []
}

const course = new Course()
console.log(course)



// User Profile
function defaultValue<T, U>(value: U) {
  return function(initialValue: undefined, context: ClassFieldDecoratorContext<T, U>) {
    console.log(initialValue)
    console.log(typeof value)
    console.log(context.name)
    if (context.name === "dateJoined"){
      const message = value as number >= 2024 ? 'You are a new user' : 'You are a old user'
      console.log(message)
    }
    return () => value
  }
}

class UserProfile {
  @defaultValue('Anonymous')
  username: string;

  @defaultValue(2000)
  dateJoined: number;

  @defaultValue(0)
  age: number;
}

const user = new UserProfile()
console.log(user.username)


// TasK Manager
type Task = {
  name: string
  completed: boolean
}

function AddTask<T, U extends Task[]>(target: undefined, context: ClassFieldDecoratorContext<T, U>) {
  return function (args: U) {
    args.push({
      name: 'Wash laundry',
      completed: true
    })
    return args
  }
}

class TaskManager {
  @AddTask
  tasks: Task[] = []
}

const task = new TaskManager()
console.log(task)