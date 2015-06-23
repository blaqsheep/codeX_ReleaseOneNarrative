var fs = require('fs');

module.exports = function(purchacesFile) {
	

	//get a map of total purchases per product
	this.productPurchasesMap = function(){

		//read the file		
		var dataInFile = fs.readFileSync(purchacesFile, 'utf8');
		
		//var products = new Products('../NelisaPurchases.csv');
		//console.log(products);

		// split it into purchase rows
		var profitLines = dataInFile.split('\n');

		//console.log("profitLines : " + profitLines.length);

		//var productProfitList = [];

		// ?? this variable name might need to change?
		var totalCostPerProduct = {};

		//split it into columns - getting the purchase details
		profitLines.forEach(function(profitline, index){

			var columns = profitline.split(';');             
			
			//console.log( "--> " + columns);

			//???????????
			if(columns[2] != "Item"){

				var itemName = columns[2];


				// is this total costs?
				var numberPurch = columns[5].substr(1).replace(",", ".");

				if(totalCostPerProduct[itemName] === undefined){
					totalCostPerProduct[itemName] = 0;
				}

				//?????
				totalCostPerProduct[itemName] += Number(numberPurch);
			}
		});

		/*
		for(var key in totalCostPerProduct){
			var obj = {
				itemName : key,
				numberPurch: totalCostPerProduct[key]
			};
			productProfitList.push(obj);
		}
		*/
		console.log(totalCostPerProduct);
	return totalCostPerProduct;
	}



}