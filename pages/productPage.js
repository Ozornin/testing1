const EC = protractor.ExpectedConditions;
module.exports = require('../common/Element.js').extend({
  buyNow: $$('.buy_now tr'),
  size: $('[name="options[Size]"]'),
  addBtn: $('button[name="add_cart_product"]'),
  quantity: $('#cart .quantity'),
  checkOutBtn: $('#cart .link'),

  selectSize() {
    return this.buyNow.count().then((count) => {
      if(count > 1) {
        return this.size.$('[value="Large"]').click();
      }
    });
  },
  clickAddBtn() {
    this.addBtn.click();
  },
  clickCheckOutBtn() {
    this.checkOutBtn.click();
  },
  getQuantity() {
    return this.quantity.getText();
  },
  checkQuantity() {
    this.getQuantity().then((quantity) => {
      quantity = parseInt(quantity) + 1;
      return browser.wait(EC.textToBePresentInElement(this.quantity, quantity), 2000);
    });
  }
});