function LogChange<T, U>(
  accessor: { get(): U; set(value: U): void },
  context: ClassAccessorDecoratorContext<T, U>
) {
  console.log(accessor)
  console.log(context)
  return {
    get() {
      console.log(`Getting the current value of ${context.name.toString()}...`)
      return accessor.get.call(this)
    },
    set(value: U) {
      console.log(`Setting the value of ${context.name.toString()} to ${value}...`)
      return accessor.set.call(this, value)
    }
  }
}

class Admin {
  @LogChange
  accessor permissions: string = 'Read Only'
}

const admin = new Admin()
admin.permissions = "Full Access"
console.log(admin.permissions)



class Security {
  @LogChange
  accessor accessLevel: string = "Unauthorized"
}

const security = new Security()
security.accessLevel = "Employees Only"
console.log(security.accessLevel)


function transformCase<T, U>(
  accessor: { get(): U; set(val: U): void },
  context: ClassAccessorDecoratorContext<T, U>
) {
  console.log(accessor)
  console.log(context)
  return {
    get() {
      const val = accessor.get.call(this)
      const upperCased = val.toUpperCase()
      console.log(`Converting ${val} to ${upperCased}...`)
      return upperCased
    },
    set(value: U) {
      const lowerCased = (value as string).toLowerCase()
      console.log(`Updating product ${value} to ${lowerCased}...`)
      return accessor.set.call(this, lowerCased)
    }
  }
}


class Product {
  @transformCase
  accessor name: string = "Default"
}

const product = new Product()
console.log(product.name) // DEFAULT
product.name = "aPplE"
console.log(product.name) // APPLE