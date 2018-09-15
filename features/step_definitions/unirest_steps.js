var {defineSupportCode} = require('cucumber');
var unirest = require('unirest');
var userPayload;
var lastResponse;

defineSupportCode(function ({Given, When, Then}) {

    Given('I have the payload {payload}', function (payload) {
        userPayload = payload;
    });

    Given('I make "{method}" rest call to "{uri}"', function (method, uri, callback) {
        if (method === 'POST') {
            var request = unirest.post(uri)
                .headers({'Accept': 'application/json', 'Content-Type': 'application/json'})
                .send(userPayload);

        } else if (method === 'GET'){
            var request = unirest.get(uri)
                .headers({'Accept': 'application/json', 'Content-Type': 'application/json'});

        }else{
            callback('The method "'+method+'" is not implemented');
        }
        request.end(function (response) {
            lastResponse=response;
            callback()
        })
    });

    Then('I can see that response contains "{term}"', function (term, callback) {
        // Write code here that turns the phrase above into concrete actions
        if (lastResponse.raw_body.indexOf(term)!== -1){
            callback();
        }else{
            callback('Cannot find the term in response');
        }
    });

    Then('view last response', function (callback) {
        console.log(lastResponse.raw_body);
        callback();
    });


});
