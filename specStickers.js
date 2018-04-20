describe('angularjs homepage todo list', function() {
  it('Auth', function () {
    browser.waitForAngularEnabled(false);
    browser.get('http://localhost/litecart');
    expect($$('#box-most-popular li:first-child div.sticker').count()).toBe(1);
    expect($$('#box-most-popular li:nth-child(2) div.sticker').count()).toBe(1);
    expect($$('#box-most-popular li:nth-child(3) div.sticker').count()).toBe(1);
    expect($$('#box-most-popular li:nth-child(4) div.sticker').count()).toBe(1);
    expect($$('#box-most-popular li:nth-child(5) div.sticker').count()).toBe(1);
    expect($$('#box-campaigns li:first-child div.sticker').count()).toBe(1);
    expect($$('#box-latest-products li:first-child div.sticker').count()).toBe(1);
    expect($$('#box-latest-products li:nth-child(2) div.sticker').count()).toBe(1);
    expect($$('#box-latest-products li:nth-child(3) div.sticker').count()).toBe(1);
    expect($$('#box-latest-products li:nth-child(4) div.sticker').count()).toBe(1);
    expect($$('#box-latest-products li:nth-child(5) div.sticker').count()).toBe(1);
  });
});