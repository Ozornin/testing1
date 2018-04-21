describe('angularjs homepage todo list', function() {
  it('Stickers', function () {
    browser.waitForAngularEnabled(false);
    browser.get('http://localhost/litecart');
    var object = $$('li.product.column');
    var sticker;
    object.each(function(object) {
      sticker = object.$$('div.sticker');
      expect(sticker.count()).toBe(1);
    });
  });
});