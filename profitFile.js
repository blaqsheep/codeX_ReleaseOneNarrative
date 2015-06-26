var fs = require('fs');

var Sales = require("./productsSold");
var Purchases = require("./productsBought");

module.exports = function(purchacesFile, salesFile) {
	
	var sales = new Sales(salesFile);
	var purchases = new Purchases(purchacesFile);

	this.profitPerProduct = function(){
		
		var profitMap = {};
		var profit = 0;
		var profitList = [];
		var totalSalesPerProduct = sales.earningPerPrdct();
		var totalPurchasesPerProduct = purchases.productPurchasesMap();
     	
		for(productName in totalPurchasesPerProduct){
			profit = totalSalesPerProduct[productName] - totalPurchasesPerProduct[productName];
			profitMap[productName] = profit;
		}

		return profitMap;

	}

	this.mostProfitableProduct = function(profitMap){
		var profitList = [];

		//create a list so that we can sort it
		for(var key in profitMap){
			var obj = {
				itemName : key,
				numberSold : profitMap[key]
			};
			profitList.push(obj);
		};

		//sort the list
		profitList.sort(function(a,b){
			return b.numberSold - a.numberSold
		});

		//return the most popular
		console.log("=======<>");
		console.log(profitList[0]);
		return profitList[0];
	}

}

	