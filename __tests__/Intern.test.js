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

test('get constructor ID value', () => {
    const id = "123"
    const emp = new Intern("michale", id)
    expect(emp.id).toBe(id)
})

test('get constructor email value', () => {
    const email = "123"
    const emp = new Intern("michale",123, email)
    expect(emp.email).toBe(email)
})

test("Is this an object", () => {
    const emp = new Intern()
    expect(typeof(emp)).toBe('object')
})

test('get constructor name value', () => {
    const name = "Michael Scott"
    const emp = new Intern(name)
    expect(emp.name).toBe(name)
})

test('get constructor ID value', () => {
    const id = "123"
    const emp = new Intern("michale", id)
    expect(emp.id).toBe(id)
})

test('get constructor email value', () => {
    const email = "123"
    const emp = new Intern("michale",123, email)
    expect(emp.email).toBe(email)
})

test('get name value form method', () => {
    const name = "Michael Scott"
    const emp = new Intern(name)
    expect(emp.getName()).toBe(name)
})

test('get constructor school value', () => {
    const school = "123"
    const emp = new Intern("michale",123, "test@MediaList.com", school)
    expect(emp.school).toBe(school)
})

test('get name value form method', () => {
    const name = "Michael Scott"
    const emp = new Intern(name)
    expect(emp.getName()).toBe(name)
})

test('get constructor role value', () => {
    const role = "👨‍🎓 Intern"
    const emp = new Intern("qawefsa")
    expect(emp.getRole()).toBe(role)
})