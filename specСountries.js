describe('angularjs homepage todo list', function() {
  it('Countries', function () {
    browser.waitForAngularEnabled(false);
    browser.get('http://localhost/litecart/admin/?app=countries&doc=countries');
    element(by.css('input[name="username"]')).sendKeys('admin');
    element(by.css('input[name="password"]')).sendKeys('admin');
    element(by.css('button[name="login"]')).click();

    var countries = $$('.row td:nth-child(5) a');
    var zones = $$('.row td:nth-child(6)');
    var edit = $$('.row td:nth-child(7) a');
    var nameZones = $$('[type="hidden"][name$="[name]"]');
    var countriesNames = [];
    countries.each(function (country) {
      country.getText().then(function (nameCountry) {
        countriesNames.push(nameCountry);
      });
    }).then(function () {
      expect(countriesNames.sort()).toBe(countriesNames);
    }).then(function () {
      zones.each(function (zone, index) {
        zone.getText().then(function (textZone) {
          if (textZone !== '0') {
            let url = edit.get(index).getAttribute('href');
            return browser.executeScript("return window.open(arguments[0], '_blank')", url).then(function () {
              browser.getAllWindowHandles().then(function (handles) {
                browser.switchTo().window(handles[1]).then(function () {
                  nameZones.getAttribute('value').then(function (value) {
                    expect(value.sort()).toBe(value);
                  });
                  browser.driver.close();
                  browser.getAllWindowHandles().then(function (handles) {
                    browser.switchTo().window(handles[0]);
                  });
                });
              });
            });
          }
        });

      });
    })
  });

  it('Zones', function () {
    browser.waitForAngularEnabled(false);
    browser.get('http://localhost/litecart/admin/?app=geo_zones&doc=geo_zones');

    var zonesEdit = $$('[title^=Edit]');
    var nameZones = $$('[name*=zone_code] option[selected]');
    zonesEdit.each(function (zone, index) {
      let url = zone.getAttribute('href');
      return browser.executeScript("return window.open(arguments[0], '_blank')", url).then(function () {
        browser.getAllWindowHandles().then(function (handles) {
          browser.switchTo().window(handles[1]).then(function () {
            nameZones.getText().then(function (value) {
              expect(value.sort()).toBe(value);
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