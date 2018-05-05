const path = require('path'),
    remote = require('selenium-webdriver/remote');

describe('angularjs homepage todo list', function() {
  it('Auth', function() {
    browser.waitForAngularEnabled(false);
    browser.setFileDetector(new remote.FileDetector());
    browser.get('http://localhost/litecart/admin/');
    element(by.css('input[name="username"]')).sendKeys('admin');
    element(by.css('input[name="password"]')).sendKeys('admin');
    element(by.css('button[name="login"]')).click();

    let catalog = element(by.cssContainingText('span.name', 'Catalog'));
    let addProduct = element(by.cssContainingText('a.button', 'Add New Product'));
    let status = $('input[name="status"][value="1"]');
    let name = $('input[name="name[en]"]');
    let code = $('input[name="code"]');
    let gender = $('input[value="1-1"]');
    let quantity = $('input[name="quantity"]');
    let soldOutStatusOption = $('select[name="sold_out_status_id"]').$('[value="2"]');
    let file = $('input[name="new_images[]"]');
    let absolutePath = path.resolve(__dirname, "image/1.jpeg");
    let dateFrom = $('input[name="date_valid_from"]');
    let dateTo = $('input[name="date_valid_to"]');
    let information = element(by.cssContainingText('a', 'Information'));
    let manufacturer = $('select[name="manufacturer_id"]').$('[value="1"]');
    let keywords = $('input[name="keywords"]');
    let shortDescription = $('input[name="short_description[en]"]');
    let editor = $('.trumbowyg-editor');
    let headTitle = $('input[name="head_title[en]"]');
    let metaDescription = $('input[name="meta_description[en]"]');
    let pricesTab = element(by.cssContainingText('a', 'Prices'));
    let purchasePrice = $('input[name="purchase_price"]');
    let purchasePriceCurrencyCode = $('select[name="purchase_price_currency_code"]').$('[value="EUR"]');
    let priceUSD = $('input[name="prices[USD]"]');
    let priceEUR = $('input[name="prices[EUR]"]');
    let buttonSave = $('button[name="save"]');
    let product = element(by.cssContainingText('div.name', 'TestProduct'));

    catalog.click();
    addProduct.click();
    status.click();
    name.sendKeys('TestProduct');
    code.sendKeys('12345678');
    gender.click();
    quantity.sendKeys(protractor.Key.ARROW_UP);
    soldOutStatusOption.click();
    file.sendKeys(absolutePath);
    dateFrom.sendKeys('04/28/2018');
    dateTo.sendKeys('12/31/2018');
    information.click();
    browser.sleep(1000);
    manufacturer.click();
    keywords.sendKeys('test');
    shortDescription.sendKeys('test');
    editor.sendKeys('TestTestTestTestTestTestTestTest TestTestTestTestTestTest TestTestTestTestTestTest');
    headTitle.sendKeys('TEST');
    metaDescription.sendKeys('TEst');
    pricesTab.click();
    browser.sleep(1000);
    purchasePrice.sendKeys(protractor.Key.ARROW_UP,protractor.Key.ARROW_UP,protractor.Key.ARROW_UP,protractor.Key.ARROW_UP);
    purchasePriceCurrencyCode.click();
    priceUSD.sendKeys(345);
    priceEUR.sendKeys(345);
    buttonSave.click();
    browser.get('http://localhost/litecart/');
    expect(product.isPresent()).toBe(true);
  });
});