var assert = require("assert");
var Products = require("../productsSold");
describe("Find data in file", function(){

    it('should return all products as they are in the csv file', function(done){
        
        var products = new Products('./Nelisa Sales History.csv');
        products.productNames(function(err, product){
        assert.equal(449, product.length);
        //assert.equal("Imasi", product[2].itemName);
        done();
        });
         
    });

    it('should return grouped items', function(){
        //var Products = require("../productsSold");
        var products = new Products('./Nelisa Sales History.csv');
        var groupedProducts = products.groupedItems();
        //console.log(groupedProducts);
        assert.equal(125, groupedProducts["Imasi"]);
       
    });
    
it('should return most popular items', function(){
        //var Products = require("../productsSold");
        var products = new Products('./Nelisa Sales History.csv');
        var popularProduct = products.mostPopular();
        var result = {currentItem : 'Mixed Sweets 5s', numberSold:172};
        // did the right thing happen...?!
        assert.deepEqual(popularProduct, result)
        console.log(popularProduct);
    });

it('should return the least popular item', function(){
    //var Products = require("../productsSold");
    var products = new Products('./Nelisa Sales History.csv');
    var leastPopular = products.leastPopular();
    var result = {currentItem: 'Valentine Cards', numberSold:14};
    assert.deepEqual(leastPopular, result)
    console.log(leastPopular);
    });

it('should return category list', function(){

    var products = new Products('./Nelisa Sales History.csv');
    var categoryList = products.numberOfEachCategorySold();

      var expectedResults = [ { currentItem: 'Dairy', numberSold: 267 },
                              { currentItem: 'Bakery', numberSold: 130 },
                              { currentItem: 'Canned Food', numberSold: 180 },
                              { currentItem: 'Cold Beverages', numberSold: 328 },
                              { currentItem: 'Bulk', numberSold: 47 },
                              { currentItem: 'Soup', numberSold: 98 },
                              { currentItem: 'Cosmetics', numberSold: 76 },
                              { currentItem: 'Fruit', numberSold: 228 },
                              { currentItem: 'Confectionery', numberSold: 192 },
                              { currentItem: 'Valentine Goodies', numberSold: 28 } ];

      assert.deepEqual(categoryList, expectedResults);
      console.log(categoryList);

});

it('should return the most popular category and the least popular category', function(){
    //var Products = require("../productsSold");
    var products = new Products('./Nelisa Sales History.csv');

    var  productMap = {
          'Milk 1l': 142,
          'Imasi': 125,
          'Bread': 130,
          'Chakalaka Can': 94,
          'Gold Dish Vegetable Curry Can': 86,
          'Fanta 500ml': 94,
          'Coke 500ml': 159,
          'Cream Soda 500ml': 75,
          'Iwisa Pap 5kg': 47,
          'Top Class Soy Mince': 98,
          'Shampoo 1 litre': 26,
          'Soap Bar': 50,
          'Bananas - loose': 114,
          'Apples - loose': 114,
          'Mixed Sweets 5s': 172,
          'Heart Chocolates': 20,
          'Rose (plastic)': 14,
          'Valentine Cards': 14 };

          var catMap = {
            'Dairy Products': 267,
            'Bakery': 130,
            'Bulk': 47,
            'Confectionery': 192,
            'Cosmectics': 76,
            'Fruits': 128,
            'Cold Beverages': 328,
            'Canned Food': 180,
            'Valentines Goodies': 28,
            'Soup': 98 
          }

          var result = {currentItem: 'Cold Beverages', numberSold: 328};
          var categoryData = products.findMostAndLeastPopularCategories(productMap);
          //console.log(categoryData);
          assert.deepEqual(result, categoryData.mostPopularCat);
          console.log(categoryData.mostPopularCat);
          console.log(categoryData.leastPopularCat);

})



it('should return earnings per product', function(){
  //var Products = require("../productsSold");
  var products = new Products('./Nelisa Sales History.csv');
  var earningPerProduct = products.earningPerPrdct();


    var result = {

      'Milk 1l': 1420,
      'Imasi': 3125,
      'Bread': 1560,
      'Chakalaka Can': 940,
      'Gold Dish Vegetable Curry Can': 774,
      'Fanta 500ml': 611,
      'Coke 500ml': 1033.5,
      'Cream Soda 500ml': 562.5,
      'Iwisa Pap 5kg': 1410,
      'Top Class Soy Mince': 1176,
      'Shampoo 1 litre': 780,
      'Soap Bar': 300,
      'Bananas - loose': 228,
      'Apples - loose': 228,
      'Mixed Sweets 5s': 455,
      'Heart Chocolates': 700,
      'Rose (plastic)': 210,
      'Valentine Cards': 56 };
  assert.deepEqual(result, earningPerProduct);
  console.log(earningPerProduct);
 })

it('should return earnings per category', function(){
  //var Products = require("../productsSold");
  var products = new Products('./Nelisa Sales History.csv');
  var totalPrices = products.earningPerPrdct();
  var earningPerCategory = products.earningPerCat(totalPrices);

  var result = {
  'Dairy': 4545,
  'Bakery': 1560,
  'Canned Food': 1714,
  'Cold Beverages': 2207,
  'Bulk': 1410,
  'Soup': 1176,
  'Cosmetics': 1080,
  'Fruit': 456,
  'Confectionery': 1155,
  'Valentine Goodies': 266, 

  }
  assert.deepEqual(result, earningPerCategory);
  console.log(earningPerCategory);
    })

});