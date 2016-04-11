exports.config = {
  framework: 'jasmine2',
  seleniumAddress: 'http://localhost:4444/wd/hub',
  specs: ['specs/**/*.spec.js'],
  multiCapabilities: [
    // {'browserName': 'phantomjs'}
    {'browserName': 'chrome'}
  ],
  onPrepare: function() {
      browser.driver.get('http://signin.i-value.com.br/?provider=valuegaia');

      browser.driver.findElement(by.id('email')).sendKeys('jesse.pinheiro@i-value.com.br');
      browser.driver.findElement(by.id('password')).sendKeys('jesse1983');
      browser.driver.findElement(by.id('submitButton')).click();


      return browser.driver.wait(function() {
          return browser.driver.getCurrentUrl().then(function(url) {
              return /default/.test(url);
          });
      }, 3000);
  }
};
