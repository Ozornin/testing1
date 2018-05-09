describe('angularjs homepage todo list', function() {
  it('Links', function () {
    browser.waitForAngularEnabled(false);
    browser.get('http://localhost/litecart/admin/?app=countries&doc=countries');
    element(by.css('input[name="username"]')).sendKeys('admin');
    element(by.css('input[name="password"]')).sendKeys('admin');
    element(by.css('button[name="login"]')).click();

    let editsBtn = $$('.fa-pencil');
    let links = $$('.fa-external-link');

    editsBtn.get(0).click();
    links.each((link) => {
      link.click().then(() =>{
        browser.getAllWindowHandles().then((handles) => {
          expect(handles.length).toBe(2);
          browser.switchTo().window(handles[1]).then(() => {
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