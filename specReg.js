describe('angularjs homepage todo list', function() {
  it('Stickers', function () {
    browser.waitForAngularEnabled(false);
    browser.get('http://localhost/litecart');
    var newCustomer = $('[name="login_form"] a');
    var firstName = $('[name="firstname"]');
    var lastname = $('[name="lastname"]');
    var address1 = $('[name="address1"]');
    var postcode = $('[name="postcode"]');
    var city = $('[name="city"]');
    var email = $('[name="email"]');
    var phone = $('[name="phone"]');
    var password = $('[name="password"]');
    var confirmed_password = $('[name="confirmed_password"]');
    var create_account = $('[name="create_account"]');
    var logout = $('.content a[href*=logout]');
    var emailIn = $('[name="email"]');
    var login = $('button[name=login]');
    var randomText = () => {
      var text = "";
      var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
      for (var i = 0; i < 5; i++){
        text += possible.charAt(Math.floor(Math.random() * possible.length));
      }

      return text += '@gmail.com'
    }
    newCustomer.click();
    firstName.sendKeys('test');
    lastname.sendKeys('test');
    address1.sendKeys('test');
    postcode.sendKeys('000000');
    city.sendKeys('test');
    email.sendKeys(randomText());
    email.getAttribute('value').then((email) => {
      phone.sendKeys('77777777777');
      password.sendKeys('77777777777');
      confirmed_password.sendKeys('77777777777');
      create_account.click();
      logout.click();
      emailIn.sendKeys(email);
      password.sendKeys('77777777777');
      login.click();
      logout.click();
      browser.sleep(1000);
    });

  });
});