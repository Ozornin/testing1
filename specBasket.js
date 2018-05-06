const EC = protractor.ExpectedConditions;
describe('angularjs homepage todo list', function() {
  it('Auth', function() {
    browser.waitForAngularEnabled(false);
    browser.get('http://localhost/litecart/');
    let product = $$('li.product');
    let addBtn = $('button[name="add_cart_product"]');
    let cart = $('#cart .quantity');
    let checkOut = $('#cart .link');
    let buyNow = $$('.buy_now tr');
    let shortCuts = $$('.shortcuts li');
    let size = $('[name="options[Size]"]');
    let removeBtn = $$('button[name="remove_cart_item"]');
    let payment = $('.footer td:last-child strong');
    let backBtn = $('#checkout-cart-wrapper a[href="http://localhost/litecart/en/"]');
    let orderItem = $$('#box-checkout-summary td.item');

    product.get(0).click();
    buyNow.count().then((count) => {
      if(count > 1) {
        size.$('[value="Large"]').click();
      }
    });
    addBtn.click();
    browser.wait(EC.textToBePresentInElement($('#cart .quantity'),'1'), 2000);
    browser.sleep(2000);
    browser.get('http://localhost/litecart/');
    product.get(0).click();
    buyNow.count().then((count) => {
      if(count > 1) {
        size.$('[value="Large"]').click();
      }
    });
    addBtn.click();
    browser.wait(EC.textToBePresentInElement($('#cart .quantity'),'2'), 2000);
    browser.sleep(2000);
    browser.get('http://localhost/litecart/');
    product.get(0).click();
    buyNow.count().then((count) => {
      if(count > 1) {
        size.$('[value="Large"]').click();
      }
    });
    addBtn.click();
    browser.wait(EC.textToBePresentInElement($('#cart .quantity'),'3'), 2000);
    checkOut.click();
    shortCuts.count().then((count) => {
      if(count == 3) {
        browser.wait(EC.visibilityOf(removeBtn.get(0)), 3000);
        orderItem.get(0).getText().then((title) => {
          removeBtn.get(0).click();
          browser.wait(EC.not(EC.textToBePresentInElement(orderItem.get(0), title)), 2000);
        });
        browser.wait(EC.visibilityOf(removeBtn.get(0)), 3000);
        orderItem.get(0).getText().then((title) => {
          removeBtn.get(0).click();
          browser.wait(EC.not(EC.textToBePresentInElement(orderItem.get(0), title)), 2000);
        });
        browser.wait(EC.visibilityOf(removeBtn.get(0)), 3000);
        removeBtn.get(0).click();
        browser.wait(EC.visibilityOf(backBtn), 2000).then(() => {
          expect(backBtn.isPresent()).toBe(true);
        });
      } else if(count == 2) {
        browser.wait(EC.visibilityOf(removeBtn.get(0)), 3000);
        orderItem.get(0).getText().then((title) => {
          removeBtn.get(0).click();
          browser.wait(EC.not(EC.textToBePresentInElement(orderItem.get(0), title)), 2000);
        });
        browser.wait(EC.visibilityOf(removeBtn.get(0)), 3000);
        removeBtn.get(0).click();
        browser.wait(EC.visibilityOf(backBtn), 2000).then(() => {
          expect(backBtn.isPresent()).toBe(true);
        });
      } else {
        removeBtn.get(0).click();
        browser.wait(EC.visibilityOf(backBtn), 2000).then(() => {
          expect(backBtn.isPresent()).toBe(true);
        });
      }
    });
  });
});