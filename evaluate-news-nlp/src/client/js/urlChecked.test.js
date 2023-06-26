const urlChecker = require('./urlChecker');
test('Test URL is invalid', () => {
    expect(urlChecker.checkUrl('invalidurl')).toBe(false);
})

test('Test URL is valid', () => {
    expect(urlChecker.checkUrl('https://www.google.com/')).toBe(true);
})