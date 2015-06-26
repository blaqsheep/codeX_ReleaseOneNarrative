var assert = require("assert");
var ProductsBought = require("../profitFile");
describe("Find data in file", function(){

    it('should return grouped products purchases', function(){
        
        var products = new ProductsBought('./NelisaPurchases.csv', './Nelisa Sales History.csv');

        var productsBought = products.profitPerProduct();
        console.log("==========>>")
        //console.log("These are the profits for each product")

        //console.log(productsBought);

        console.log("what is productsBought - it's a map")
        assert.equal(18, Object.keys(productsBought).length);

        for(var product in productsBought){
        	//console.log(product + product[5])
        }
       /*assert.equal(productsBought["Chakalaka Can"], 676);
        assert.equal(productsBought["Imasi"], 2238);
        assert.equal(productsBought["Bread"], 1270);
        assert.equal(productsBought["Valentine Cards"], 40);*/
    });


it("should return the most profitable product", function(){
    var products = new ProductsBought('./NelisaPurchases.csv', './Nelisa Sales History.csv');
    var profitPerProduct = products.profitPerProduct();


    //console.log(profitPerProduct);
    console.log("--------------------------------");

    var mostProfitableProduct = products.mostProfitableProduct(profitPerProduct);

    var result = {itemName: 'Imasi', numberSold: 887};
    assert.deepEqual(mostProfitableProduct, result)
});
   
});