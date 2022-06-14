import presistFactory from './presistFactory';

const Authkey = '__tk__';

const testToken = 'abcde12345';

const defaultValue = process.env.TARGET === 'dev' ? testToken : '';

export default presistFactory(defaultValue, Authkey);
