//var colors = require('colors');
var env = require('../config/environments.js');
module.exports = {
  loginAs: function(user){
      browser.driver.get(env[browser.params.env]);
      if(browser.params.env == "production"){
        browser.driver.findElement(by.id('email')).sendKeys(user.username);
        browser.driver.findElement(by.id('password')).sendKeys(user.password);
        browser.driver.findElement(by.id('submitButton')).click();
      }else{
        browser.driver.findElement(by.id('txLogin')).sendKeys(user.username);
        browser.driver.findElement(by.id('txSenha')).sendKeys(user.password);
        browser.driver.findElement(by.id('submit')).click();
      }

      return browser.driver.wait(function() {
          return browser.driver.getCurrentUrl().then(function(url) {
              console.log('Logged as '+ user.fullname);
              return /default/.test(url)
          });
      }, 9000);
  }
}
