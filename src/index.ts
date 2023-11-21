import dns from 'dns';
import { promisify } from 'util';

const lookupMx = promisify(dns.resolveMx);

async function validateEmail(email: string): Promise<boolean> {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        return false;
    }

    const domain = email.split('@')[1];

    try {
        const mxRecords = await lookupMx(domain);
        return mxRecords && mxRecords.length > 0;
    } catch (error) {
        return false;
    }
}

export { validateEmail };
