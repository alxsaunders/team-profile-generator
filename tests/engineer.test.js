const { hasUncaughtExceptionCaptureCallback } = require('process');
const { engineer, Engineer } = require('../lib/Engineer')

test('Creates new Engineer', () => 
{
    const employee = new Engineer('Alex Saunders', 1234, "alex@saunders.com", 'alex-saunders');

    expect(employee.name).toBe("Alex Saunders")
    expect(employee.id).toEqual(1234)
    expect(employee.email).toBe("alex@saunders.com")
    expect(employee.github).toBe("alex-saunders")
    expect(employee.getRole()).toBe('Engineer');
})