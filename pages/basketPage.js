const EC = protractor.ExpectedConditions;
module.exports = require('../common/Element.js').extend({
  shortCuts: $$('.shortcuts li'),
  removeBtn: $$('button[name="remove_cart_item"]'),
  payment: $('.footer td:last-child strong'),
  backBtn: $('#checkout-cart-wrapper a[href="http://localhost/litecart/en/"]'),
  orderItem: $$('#box-checkout-summary td.item'),

  getCountShortCurts() {
    return this.shortCuts.count();
  },
  waitRemoveBtn() {
    return browser.wait(EC.visibilityOf(this.removeBtn.get(0)), 3000);
  },
  getOrderItemTitle() {
    return this.orderItem.get(0).getText();
  },
  clickRemoveBtn() {
    this.removeBtn.get(0).click();
  },
  checkOrder(title) {
    return browser.wait(EC.not(EC.textToBePresentInElement(this.orderItem.get(0), title)), 2000);
  },
  checkBackBtn() {
    return browser.wait(EC.visibilityOf(this.backBtn), 2000).then(() => {
      expect(this.backBtn.isPresent()).toBe(true);
    });
  }
});