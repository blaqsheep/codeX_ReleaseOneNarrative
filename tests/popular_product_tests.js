var assert = require("assert");

describe("Find data in file", function(){

    it('should return all products as they are in the csv file', function(done){
        var Products = require("../productsSold");
        var products = new Products('../Nelisa Sales History.csv');
        products.productNames(function(err, product){
        assert.equal(449, product.length);
        //assert.equal("Imasi", product[2].itemName);
        done();
        });
         
    });

    it('should return grouped items', function(){
        var Products = require("../productsSold");
        var products = new Products('../Nelisa Sales History.csv');
        var groupedProducts = products.groupedItems();
        console.log(groupedProducts);
        assert.equal(125, groupedProducts["Imasi"]);
       
    });
    
it('should return most popular items', function(){
        var Products = require("../productsSold");
        var products = new Products('../Nelisa Sales History.csv');
        var popularProduct = products.mostPopular();
        var result = {currentItem : 'Mixed Sweets 5s', numberSold:172};
        // did the right thing happen...?!
        assert.deepEqual(popularProduct, result)
    });

it('should return the least popular item', function(){
    var Products = require("../productsSold");
    var products = new Products('../Nelisa Sales History.csv');
    var leastPopular = products.leastPopular();
    var result = {currentItem: 'Valentine Cards', numberSold:14};
    assert.deepEqual(leastPopular, result)
    });

it('should return the most popular category and the least popular', function(){
    var Products = require("../productsSold");
    var products = new Products('../Nelisa Sales History.csv');

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
          var categoryData = products.category(productMap);
          console.log(categoryData);
          assert.deepEqual(result, categoryData.mostPopularCat);

})

it('should return the least popular category', function(){
    var Products = require("../productsSold");
    var products = new Products('../Nelisa Sales History.csv');

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
       
          var result = {currentItem: 'Valentine Goodies', numberSold: 28};
          var categoryData = products.category(productMap);
          console.log(categoryData);
          assert.deepEqual(result, categoryData.leastPopularCat);

})

it('should return earnings per product', function(){
  var Products = require("../productsSold");
  var products = new Products('../Nelisa Sales History.csv');
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
 })

it('should return earnings per category', function(){
  var Products = require("../productsSold");
  var products = new Products('../Nelisa Sales History.csv');
  var earningPerCategory = products.earningPerCat();

  var result = {
    'Dairy Products': 4545,
    'Bakery': 1560,
    'Bulk': 47,
    'Confectionery': 192,
    'Cosmectics': 76,
    'Fruits': 228,
    'Cold Beverages': 328,
    'Canned Food': 180,
    'Valentine Goodies': 28,
    'Soup':98
  }
  assert.deepEqual(result, earningPerCategory);
    })

});