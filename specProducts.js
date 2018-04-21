describe('angularjs homepage todo list', function() {
  it('Products', function () {
    browser.waitForAngularEnabled(false);
    browser.get('http://localhost/litecart');
    var objectCampaigns = $('#box-campaigns li.product.column');
    var name = $('#box-campaigns .name');
    var regularPrice = $('#box-campaigns .regular-price');
    var campaignPrice = $('#box-campaigns .campaign-price');
    var nameInObject = $('#box-product h1');
    var regPriseInObject = $('.regular-price');
    var campaignPriceInObject = $('.campaign-price');

    name.getText().then(function(name) {
      regularPrice.getText().then(function(regPrice) {
        regularPrice.getCssValue('text-decoration-line').then(function(textDecorationReg) {
          expect(textDecorationReg).toBe('line-through');
          regularPrice.getCssValue('color').then(function(colorReg) {
            colorReg = colorReg.split(', ', 3);
            var R = colorReg[0].split('(', 2)[1];
            var G = colorReg[1];
            var B = colorReg[2];
            if (R === G && G === B){
              colorReg = true;
            } else {
              colorReg =false;
            }
            expect(colorReg).toBe(true);
            campaignPrice.getCssValue('font-weight').then(function(fontWeight) {
              expect(fontWeight).toBe('700');
              campaignPrice.getCssValue('color').then(function(colorCamp) {
                colorCamp = colorCamp.split(', ', 3);
                var G = colorCamp[1];
                var B = colorCamp[2];
                if (G == 0 && B == 0){
                  colorCamp = true;
                } else {
                  colorCamp = false;
                }
                expect(colorCamp).toBe(true);
                regularPrice.getSize().then(function(regSize) {
                  campaignPrice.getText().then(function(campPrice) {
                    campaignPrice.getSize().then(function(campSize) {
                      var size;
                      if (campSize.height > regSize.height && campSize.width > regSize.width) {
                        size = true;
                      } else {
                        size = false;
                      }
                      expect(size).toBe(true);
                      objectCampaigns.click().then(function() {
                        expect(nameInObject.getText()).toBe(name);
                        expect(regPriseInObject.getText()).toBe(regPrice);
                        expect(campaignPriceInObject.getText()).toBe(campPrice);
                        regPriseInObject.getCssValue('text-decoration-line').then(function(decorRegInObject) {
                          expect(decorRegInObject).toBe('line-through');
                          regPriseInObject.getCssValue('color').then(function(colorRegInObject) {
                            colorRegInObject = colorRegInObject.split(', ', 3);
                            var R = colorRegInObject[0].split('(', 2)[1];
                            var G = colorRegInObject[1];
                            var B = colorRegInObject[2];
                            if (R === G && G === B){
                              colorRegInObject = true;
                            } else {
                              colorRegInObject =false;
                            }
                            expect(colorRegInObject).toBe(true);
                            campaignPriceInObject.getCssValue('font-weight').then(function(fontWeightInObject) {
                              expect(fontWeightInObject).toBe('700');
                              campaignPriceInObject.getCssValue('color').then(function(colorCampInObject) {
                                colorCampInObject = colorCampInObject.split(', ', 3);
                                var G = colorCampInObject[1];
                                var B = colorCampInObject[2];
                                if (G == 0 && B == 0){
                                  colorCampInObject = true;
                                } else {
                                  colorCampInObject = false;
                                }
                                expect(colorCampInObject).toBe(true);
                              });
                            });
                          });
                        });
                      });
                    });
                  });
                });
              });
            });
          });
        });
      });
    });
  });
});