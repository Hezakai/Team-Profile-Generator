const Manager = require('../lib/Manager')

test("Is this an object", () => {
    const emp = new Manager()
    expect(typeof(emp)).toBe('object')
})

test('get constructor name value', () => {
    const name = "Michael Scott"
    const emp = new Manager(name)
    expect(emp.name).toBe(name)
})

test('get name value form method', () => {
    const name = "Michael Scott"
    const emp = new Manager(name)
    expect(emp.getName()).toBe(name)
})