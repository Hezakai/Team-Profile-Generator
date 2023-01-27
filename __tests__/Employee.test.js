const Employee = require('../lib/Employee')

test("Is this an object", () => {
    const emp = new Employee()
    expect(typeof(emp)).toBe('object')
})

test('get constructor name value', () => {
    const name = "Michael Scott"
    const emp = new Employee(name)
    expect(emp.name).toBe(name)
})

test('get constructor name value', () => {
    const id = "Michael Scott"
    const emp = new Employee("waqefdqwaedf",id)
    expect(emp.id).toBe(id)
})

test('get constructor name value', () => {
    const email = "test@email.com"
    const emp = new Employee("waqefdqwaedf", 123,email)
    expect(emp.email).toBe(email)
})

test('get name value form method', () => {
    const name = "Michael Scott"
    const emp = new Employee(name)
    expect(emp.getName()).toBe(name)
})