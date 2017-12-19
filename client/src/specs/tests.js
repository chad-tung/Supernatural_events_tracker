var chai = require('chai');
var chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);
var expect = chai.expect;

describe("site functionality", function(){
  beforeEach(function(){
    this.timeout(5000);
    browser.ignoreSynchronisation = true;
    browser.get("http://localhost:3000");
  })

  it("should take you to submit on click of submit button", function(){
    element(by.css("#formButton")).click();
    formDescription = element(by.css("#form-description"));
    expect(formDescription.getAttribute(innerText)).to.eventually.equal("Please describe what you witnessed");
  });

  it("should take you to a map view on click of map button");
  it("should take you to a listView on click of records button");

})
