const addStep = Object.create(require('../steps/addProduct.js'));
const deleteStep = Object.create(require('../steps/deleteProduct.js'));

describe('angularjs homepage todo list', function() {
  it('Auth', function() {
    browser.waitForAngularEnabled(false);
    addStep.addProductStep();
    deleteStep.deleteProductStep();
  });
});