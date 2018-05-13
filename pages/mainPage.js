module.exports = require('../common/Element.js').extend({
  product: $$('li.product'),

  openMain() {
    return browser.get('http://localhost/litecart/');
  },
  openProductPage() {
    this.product.get(0).click();
  }
});