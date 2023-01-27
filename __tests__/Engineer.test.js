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

test('get constructor ID value', () => {
    const id = "123"
    const emp = new Engineer("michale", id)
    expect(emp.id).toBe(id)
})

test('get constructor email value', () => {
    const email = "123"
    const emp = new Engineer("michale",123, email)
    expect(emp.email).toBe(email)
})

test("Is this an object", () => {
    const emp = new Engineer()
    expect(typeof(emp)).toBe('object')
})

test('get constructor name value', () => {
    const name = "Michael Scott"
    const emp = new Engineer(name)
    expect(emp.name).toBe(name)
})

test('get constructor ID value', () => {
    const id = "123"
    const emp = new Engineer("michale", id)
    expect(emp.id).toBe(id)
})

test('get constructor email value', () => {
    const email = "123"
    const emp = new Engineer("michale",123, email)
    expect(emp.email).toBe(email)
})

test('get name value form method', () => {
    const name = "Michael Scott"
    const emp = new Engineer(name)
    expect(emp.getName()).toBe(name)
})

test('get constructor github value', () => {
    const github = "123"
    const emp = new Engineer("michale",123, "test@MediaList.com", github)
    expect(emp.github).toBe(github)
})

test('get name value form method', () => {
    const name = "Michael Scott"
    const emp = new Engineer(name)
    expect(emp.getName()).toBe(name)
})

test('get constructor role value', () => {
    const role = "👨‍🔧 Engineer"
    const emp = new Engineer("qawefsa")
    expect(emp.getRole()).toBe(role)
})