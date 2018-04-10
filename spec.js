describe('angularjs homepage todo list', function() {
    it('Firts Test', function() {
        browser.waitForAngularEnabled(false);
        browser.get('https://www.etagi.com/');
        expect(browser.getCurrentUrl()).toBe('https://www.etagi.com/');
    });
});