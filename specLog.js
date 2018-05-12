describe('angularjs homepage todo list', function() {
  it('Links', function () {
    browser.waitForAngularEnabled(false);
    browser.get('http://localhost/litecart/admin/?app=catalog&doc=catalog&category_id=1');
    element(by.css('input[name="username"]')).sendKeys('admin');
    element(by.css('input[name="password"]')).sendKeys('admin');
    element(by.css('button[name="login"]')).click();

    let items = $$('.row img + a');
    let url;

    items.each((item) => {
      url = item.getAttribute('href');
      browser.executeScript("return window.open(arguments[0], '_blank')", url).then(function () {
        browser.getAllWindowHandles().then(function (handles) {
          browser.switchTo().window(handles[1]).then(function () {
            browser.manage().logs().get('browser').then((logsEntries) => {
              expect(logsEntries.length).toBe(0);
            });
            browser.driver.close();
            browser.getAllWindowHandles().then(function (handles) {
              browser.switchTo().window(handles[0]);
            });
          });
        });
      });
    });
  });
});