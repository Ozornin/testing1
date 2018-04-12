describe('angularjs homepage todo list', function() {
    it('Firts Test', function() {
        browser.waitForAngularEnabled(false);
        browser.get('http://localhost/litecart/admin/');
        element(by.css('input[name="username"]')).sendKeys('admin');
        element(by.css('input[name="password"]')).sendKeys('admin');
        element(by.css('button[name="login"]')).click();
        element(by.css('.fa-sign-out')).click();
    });
});