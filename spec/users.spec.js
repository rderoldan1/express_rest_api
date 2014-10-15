
//var helper = require('./spec_helper');
var request = require('request');
var interceptor = require('./user_interceptor');

describe('Test users api', function(){

  it("should respond with a list of users", function(done) {
     request("http://localhost:3000/api/users", function(error, response, body){
        var data = JSON.parse(body);
        expect(data).toEqual(jasmine.any(Object));
        done();
      }); 
  }, 250);

  it("should respond with a users by id", function(done) {
    request("http://localhost:3000/api/users/123ABC", function(error, response, body){
      var data = JSON.parse(body);
      expect(data._id).toBe("123ABC");
      done();
    });
  }, 250);

  it("should create users", function(done) {
     request.post({url: "http://localhost:3000/api/users", form:{key:'value'}}, function(error, response, body){
        var data = JSON.parse(body);
        expect(data.message).toBe("User Added");
        done();
      }); 
  }, 250);
  
  it("should update a user by id", function(done) {
     request.put({url:"http://localhost:3000/api/users/123ABC", form:{key:'value'}}, function(error, response, body){

        var data = JSON.parse(body);
        expect(data.message).toBe("User updated");
        done();
      }); 
  }, 250);

});
	