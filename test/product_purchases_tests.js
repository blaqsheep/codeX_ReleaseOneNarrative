var assert = require("assert");
var ProductsBought = require("../productsBought");
describe("Give total purchase amounts", function(){

    it('should return grouped products purchases', function(){
        var products = new ProductsBought('./NelisaPurchases.csv');
        //  assert.deepEqual(154, Productsbought.length);

        var productsBought = products.productPurchasesMap();

        //what is productsBought - it's a map
        assert.equal(18, Object.keys(productsBought).length);

        for(var product in productsBought){
        	//console.log(product + product[5])
        }


        assert.equal(productsBought["Chakalaka Can"], 676);
        assert.equal(productsBought["Imasi"], 2238);
        assert.equal(productsBought["Bread"], 1270);
        assert.equal(productsBought["Valentine Cards"], 40);

    });

});