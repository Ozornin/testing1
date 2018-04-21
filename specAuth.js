describe('angularjs homepage todo list', function() {
    it('Auth', function() {
      browser.waitForAngularEnabled(false);
      browser.get('http://localhost/litecart/admin/');
      element(by.css('input[name="username"]')).sendKeys('admin');
      element(by.css('input[name="password"]')).sendKeys('admin');
      element(by.css('button[name="login"]')).click();

      var menu = $$('#box-apps-menu > li');
      var undermenuList = $('ul.docs');
      var undermenu = $$('ul.docs li');
      var h1 = $('td#content > h1');
      menu.each(function(object, index) {
        menu.get(index).click().then(function() {
          expect(h1.isPresent()).toBe(true);
          undermenuList.isPresent().then(function(test) {
            undermenu.each(function(object, index) {
              undermenu.get(index).click();
              expect(h1.isPresent()).toBe(true);
            });
          })
        });

      });
    });
});