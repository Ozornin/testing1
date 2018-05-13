const basketPage = Object.create(require('../pages/basketPage.js'));

module.exports = require('../common/Element.js').extend({
  deleteProductStep() {
    basketPage.getCountShortCurts().then((count) => {
        if(count == 3) {
          basketPage.waitRemoveBtn();
          basketPage.getOrderItemTitle().then((title) => {
            basketPage.clickRemoveBtn();
            basketPage.checkOrder(title);
            basketPage.waitRemoveBtn();
            basketPage.getOrderItemTitle().then((title) => {
              basketPage.clickRemoveBtn();
              basketPage.checkOrder(title);
              basketPage.waitRemoveBtn();
              basketPage.clickRemoveBtn();
              basketPage.checkBackBtn();
            });
          });
        } else if(count == 2) {
          basketPage.waitRemoveBtn();
          basketPage.getOrderItemTitle().then((title) => {
            basketPage.clickRemoveBtn();
            basketPage.checkOrder(title);
            basketPage.waitRemoveBtn();
            basketPage.clickRemoveBtn();
            basketPage.checkBackBtn();
          });
        } else if(count == 1){
          basketPage.clickRemoveBtn();
          basketPage.checkBackBtn();
        }
      });
    }
});