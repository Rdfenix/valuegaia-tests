describe('Test to close modals', function(){
  //checks if the modal is clickable
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
