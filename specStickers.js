describe('angularjs homepage todo list', function() {
  it('Auth', function () {
    browser.waitForAngularEnabled(false);
    browser.get('http://localhost/litecart');
    var popular = $$('#box-most-popular li');
    var campaigns = $$('box-campaigns');
    var latest = $$('box-latest-products');
    var sticker;
    popular.each(function(object) {
      sticker = object.$$('div.sticker');
      expect(sticker.count()).toBe(1);
    });
    campaigns.each(function(object) {
      sticker = object.$$('div.sticker');
      expect(sticker.count()).toBe(1);
    });
    latest.each(function(object) {
      sticker = object.$$('div.sticker');
      expect(sticker.count()).toBe(1);
    });
  });
});