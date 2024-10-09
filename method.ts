function DeductBudget(amt: number) {
  return function <T extends { budget: number }>(
    target: Function,
    context: ClassMethodDecoratorContext<T>
  ) {
    // console.log(target, context, amt)
    return function (...args: any) {
      const instance: T = this

      if (instance.budget >= amt) {
        instance.budget = instance.budget - amt
        target.apply(instance, args)
        console.log(`-${amt}`)
      } else {
        console.error(`You don't have enough budget. Required for ${context.name.toString()}: ${amt}, you only have ${instance.budget} :(`)
      }
    }
  }
}

class Budget {
  budget: number = 800

  @DeductBudget(350)
  payRent() {
    console.log('Paying my rent...')
  }

  @DeductBudget(150)
  payGroceries() {
    console.log('Buying groceries...')
  }
}

const newBudget = new Budget()
newBudget.payRent() // budget: 450
newBudget.payGroceries() // budget: 300
newBudget.payGroceries() // budget: 150
console.log(`Budget: ${newBudget.budget}`) // 150
newBudget.payRent() // budget: -200
console.log(`Budget: ${newBudget.budget}`) // 150



class Company {
  budget: number = 5000

  @DeductBudget(1000)
  createMockup() {
    console.log("Hiring designer for mockup...")
  }

  @DeductBudget(250)
  createLogo() {
    console.log("Hiring artist to make logo...")
  }

  @DeductBudget(800)
  buildWebsite() {
    console.log("Hiring dev for development...")
  }
}

const newCompany = new Company()
console.log(`Initial budget: ${newCompany.budget}`)
newCompany.createLogo() // 4750
newCompany.createMockup() // 3750
newCompany.createMockup() // 2750
newCompany.buildWebsite() // 1950 - for one dev
newCompany.buildWebsite() // 1150 - for second dev
newCompany.buildWebsite() // 350 - for third dev
newCompany.buildWebsite() // -450 - for fourth dev (will not be hired)
console.log(`Remaining budget: ${newCompany.budget}`)