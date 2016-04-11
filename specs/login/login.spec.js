describe('angularjs homepage todo list', function() {
  it('should add a todo', function() {
    user = element.all(by.css(".nav-li-user li.dropdown-header"))
    expect(user.count()).toEqual(1);
  });
});
