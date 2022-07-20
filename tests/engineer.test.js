const { hasUncaughtExceptionCaptureCallback } = require('process');
const { engineer, Engineer } = require('../lib/Engineer')

test('Creates new Engineer', () => 
{
    const employee = new Engineer('John Smith', 1234, "john@smith.com", 'john-smith');

    expect(employee.name).toBe("John Smith")
    expect(employee.id).toEqual(1234)
    expect(employee.email).toBe("john@smith.com")
    expect(employee.github).toBe("john-smith")
    expect(employee.getRole()).toBe('Engineer');
})