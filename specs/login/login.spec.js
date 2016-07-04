// Import agencies and users
var env = require("../../config/scenarios.js");
// Import authorization helpers
var auth = require("../../helpers/login/login.js");
// import URL's of the acess dashboard
//var URL = require('../../config/URL.js');

describe('check login', function() {
  // Login as a director
  beforeAll(function(){
    auth.loginAs(env.agency1.users.director);
  });
  // Test if exists a element
  it('should user name menu be fullname', function() {
    var user = element.all(by.css(".nav-li-user li.dropdown-header"));
    expect(user.count()).toEqual(1);
    //expect(browser.getLocationAbsUrl()).toEqual(URL.url2);
  });
  it("Check url after login", function(){
        expect(browser.getLocationAbsUrl()).toMatch(/dashboard/);
  });

//verifica se um modal é clicavel.
  function clickWhenClickable(val){
      return browser.wait(function(){
        return val.click().then(function() {
            return true;
        }, function(){
          console.log("element not clickable");
          return false;
        });
      }, 9000);
  }

  it("Close Modal", function(){
    var modal = element(by.id('fancybox-close'));
    expect(clickWhenClickable(modal)).toBeTruthy();
  });

});
