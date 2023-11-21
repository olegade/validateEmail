import { validateEmail } from '../src';

describe('Email Validation Tests', () => {
    test('Valid email', async () => {
        expect(await validateEmail('example@example.com')).toBe(true);
    });

    test('Invalid email format', async () => {
        expect(await validateEmail('example.com')).toBe(false);
    });

    test('Invalid domain', async () => {
        expect(await validateEmail('example@nonexistentdomain.com')).toBe(false);
    });
});
