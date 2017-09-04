var Dollar = require("../src/script");

describe("Dollar", function() {
  var result;

  function testMultiplication(){
    var five = new Dollar(5);
    var product = null;
    it("amount value is 10", function() {
      product = five.times(2);
      expect(product.amount).toEqual(10);
    });
    it("amount value is 15", function() {
      product = five.times(3);
      expect(product.amount).toEqual(15);
    });
  }

  testMultiplication();

});
