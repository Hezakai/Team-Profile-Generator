const Engineer = require('../lib/Engineer')

test("Is this an object", () => {
    const emp = new Engineer()
    expect(typeof(emp)).toBe('object')
})

test('get constructor name value', () => {
    const name = "Michael Scott"
    const emp = new Engineer(name)
    expect(emp.name).toBe(name)
})

test('get name value form method', () => {
    const name = "Michael Scott"
    const emp = new Engineer(name)
    expect(emp.getName()).toBe(name)
})