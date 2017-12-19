var chai = require('chai');
var chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);
var expect = chai.expect;

describe("site functionality", function(){
  beforeEach(function(){
    browser.ignoreSynchronisation = true;
    browser.get("http://localhost:3000");
  })

  it("should take you to submit on click of submit button", function(){
    formDescription = element(by.css("#form-description"));
    element(by.css("#formButton")).click();
    expect(formDescription.getAttribute(innerText)).to.eventually.equal("Please describe what you witnessed");
  });

  it("should take you to a map view on click of map button");
  it("should take you to a listView on click of records button");

})
