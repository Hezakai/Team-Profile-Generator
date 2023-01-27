const Intern = require('../lib/Intern')

test("Is this an object", () => {
    const emp = new Intern()
    expect(typeof(emp)).toBe('object')
})

test('get constructor name value', () => {
    const name = "Michael Scott"
    const emp = new Intern(name)
    expect(emp.name).toBe(name)
})

test('get name value form method', () => {
    const name = "Michael Scott"
    const emp = new Intern(name)
    expect(emp.getName()).toBe(name)
})