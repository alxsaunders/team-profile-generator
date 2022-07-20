const { Intern } = require('../lib/Intern');

test('Creates new Intern', () => {
    const employee = new Intern('Alex Saunders', 1234, "alex@saunders.com", 'UCF');

    expect(employee.name).toBe("Alex Saunders");
    expect(employee.id).toEqual(1234);
    expect(employee.email).toBe("alex@saunders.com");
    expect(employee.school).toEqual(expect.any(String));
})
