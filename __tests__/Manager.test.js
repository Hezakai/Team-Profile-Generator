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

test('get constructor ID value', () => {
    const id = "123"
    const emp = new Manager("michale", id)
    expect(emp.id).toBe(id)
})

test('get constructor email value', () => {
    const email = "123"
    const emp = new Manager("michale",123, email)
    expect(emp.email).toBe(email)
})

test("Is this an object", () => {
    const emp = new Manager()
    expect(typeof(emp)).toBe('object')
})

test('get constructor name value', () => {
    const name = "Michael Scott"
    const emp = new Manager(name)
    expect(emp.name).toBe(name)
})

test('get constructor ID value', () => {
    const id = "123"
    const emp = new Manager("michale", id)
    expect(emp.id).toBe(id)
})

test('get constructor email value', () => {
    const email = "123"
    const emp = new Manager("michale",123, email)
    expect(emp.email).toBe(email)
})

test('get name value form method', () => {
    const name = "Michael Scott"
    const emp = new Manager(name)
    expect(emp.getName()).toBe(name)
})

test('get constructor officeNumber value', () => {
    const officeNumber = "123"
    const emp = new Manager("michale",123, "test@MediaList.com", officeNumber)
    expect(emp.officeNumber).toBe(officeNumber)
})

test('get name value form method', () => {
    const name = "Michael Scott"
    const emp = new Manager(name)
    expect(emp.getName()).toBe(name)
})

test('get constructor role value', () => {
    const role = "👨‍💼 Manager"
    const emp = new Manager("qawefsa")
    expect(emp.getRole()).toBe(role)
})