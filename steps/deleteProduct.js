const basketPage = Object.create(require('../pages/basketPage.js'));

module.exports = require('../common/Element.js').extend({
  deleteProductStep() {
    basketPage.removeProducts();
  }
});