var chai = require('chai');
var chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);
var expect = chai.expect;

describe("site functionality", function(){
  beforeEach(function(){
    browser.ignoreSynchronisation = true;
    browser.get("http://localhost:3000");
  })

})
