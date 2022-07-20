const Employee = require('../lib/Employee');

test('Creates new employee', () => {
    const employee = new Employee('Alex Saunders', 1234, 'alex@saunders.com');

    expect(employee.name).toBe("Alex Saunders");
    expect(employee.id).toEqual(1234);
    expect(employee.email).toBe('alex@saunders.com');
    expect(employee.getName()).toBe(employee.name);
    expect(employee.getId()).toBe(employee.id);
    expect(employee.getEmail()).toBe(employee.email);
    expect(employee.getRole()).toBe('Employee');
})
