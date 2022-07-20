const { Manager } = require('../lib/Manager');

test('Creates new Manager', () => {
    const employee = new Manager('Alex Saunders', 1234, "alex@saunders.com", 12123123);

    expect(employee.name).toBe("Alex Saunders");
    expect(employee.id).toEqual(1234);
    expect(employee.email).toBe("alex@saunders.com");
    expect(employee.officeNumber).toEqual(expect.any(Number));
})