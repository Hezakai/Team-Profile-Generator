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

test('get name value form method', () => {
    const name = "Michael Scott"
    const emp = new Employee(name)
    expect(emp.getName()).toBe(name)
})