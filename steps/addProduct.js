const mainPAge = Object.create(require('../pages/mainPage.js'));
const productPAge = Object.create(require('../pages/productPage.js'));

module.exports = require('../common/Element.js').extend({
    addProductStep() {
      mainPAge.openMain();
      mainPAge.openProductPage();
      productPAge.selectSize();
      productPAge.clickAddBtn();
      productPAge.getQuantity();
      productPAge.checkQuantity();
      mainPAge.openMain();
      mainPAge.openProductPage();
      productPAge.selectSize();
      productPAge.clickAddBtn();
      productPAge.getQuantity();
      productPAge.checkQuantity();
      mainPAge.openMain();
      mainPAge.openProductPage();
      productPAge.selectSize();
      productPAge.clickAddBtn();
      productPAge.getQuantity();
      productPAge.checkQuantity();
      productPAge.clickCheckOutBtn();
    }
});