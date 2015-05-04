	var fs = require('fs');

	module.exports = function(folderName){
		this.productNames = function(callback) {
			var linesInFile = fs.readFileSync(folderName, "utf8"); 
			var lines = linesInFile.split('\r');
			var productList =[];

			lines.forEach(function(fileLines){

				var product = fileLines.split(';');
				
				var currentItem = product[2];
				var productTotal = product[3];

				var productMap = {
					itemName : currentItem,
					soldItems : Number(productTotal)
				};
				productList.push(productMap);
			  });

			callback(null, productList);
		};

		this.groupedItems = function(){
			var linesInFile = 	fs.readFileSync(folderName, "utf8");
			var productLines = linesInFile.split('\r');
			var productCountMap = {};
			productLines.forEach(function(productLine){

				var splitLines = productLine.split(';');

				var currentItem = splitLines[2];
				var numberSold =  splitLines[3];

				if(productCountMap[currentItem] === undefined)
	            {
	                    productCountMap[currentItem] = 0;
	            }
	                productCountMap[currentItem] += Number(numberSold);
			});



			return productCountMap;
		};

	var createProductList = function(csvFile){

		// start
		var linesInFile = fs.readFileSync(csvFile, 'utf8');
		var	productsList = linesInFile.split('\r');

		//remove the csv header...
		productsList = productsList.splice(1, productsList.length)
		
		var productList = [];
		var mostPopularMap = {};

		productsList.forEach(function(productLine){

				var hold = productLine.split(';');

				var currentItem = hold[2];
				var numberSold =  hold[3];

				if(mostPopularMap[currentItem] === undefined){
					mostPopularMap[currentItem] = 0;
				}	
					mostPopularMap[currentItem] += Number(numberSold);
				});
		//return mostPopularMap;
		for(var key in mostPopularMap){
			var obj = {
				currentItem : key,
				numberSold: mostPopularMap[key]
			};
			productList.push(obj);

		}
		// end
		return productList;
	}


	this.mostPopular = function(){

		var productList = createProductList(folderName);		

		productList.sort(function(a,b){
			return b.numberSold-a.numberSold;
		});

		//console.log(productList)
		// console.log(productList.length);
		console.log(productList[0])
		return productList[0];
	};

	this.leastPopular = function(){

		var productList = createProductList(folderName);		

		productList.sort(function(a,b){
			return b.numberSold-a.numberSold;
		});

		//console.log(productList)
		// console.log(productList[productList.length-1]);
		// console.log(productList[2])
		return productList[productList.length-1];
	};


	this.category = function(){

		var Dairy = [];
		var Beverages = [];
		var Fruit = [];
		var	CannedFood = [];
		var Starchfood = [];
		var Toileteries = [];
		var Bakery = [];
		var Sweets = [];
		var Extras = [];

		var Categories =[];
		var productList = createProductList(folderName);

		if(productList.currentItem ='Milk' & 'Imasi')
			Dairy.push(currentItem += Number(productList.numberSold));
		else if(productList.currentItem = 'Coke 500ml'&'Fanta 500ml'&'Cream Soda 500ml')
			Beverages.push(productList.currentItem += Number(productList.numberSold));
		else if(productList.currentItem = 'Bread')
			Bakery.push(productList.currentItem += Number(productList.numberSold));
		else if(productList.currentItem = 'Apples - loose' & 'Bananas - loose')
			Fruit.push(productList.currentItem += Number(productList.numberSold));
		else if(productList.currentItem = 'Mixed Sweets 5s'& 'Heart Chocolates')
			Sweets.push(productList.currentItem += Number(productList.numberSold));
		else if(productList.currentItem = 'Chakalaka Can'& 'Gold Dish Vegetable Curry Can')
			CannedFood.push(productList.currentItem += Number(productList.numberSold));
		else if(productList.currentItem = 'Soap Bar' & 'Shampoo 1 litre')
			Toileteries.push(productList.currentItem += Number(productList.numberSold));
		else if(productList.currentItem = 'Iwisa Pap 5kg')
			Starchfood.push(productList.currentItem += Number(productList.numberSold));
		else if(productList.currentItem = 'Top Class Soy Mince' & 'Rose (plastic)' & 'Valentine Cards')
			Extras.push(productList.currentItem += Number(productList.numberSold));

		console.log(Dairy);
		console.log(Beverages);
		console.log(Bakery);
		console.log(Fruit);
		console.log(Sweets);
		console.log(CannedFood);
		console.log(Toileteries);
		console.log(Starchfood);
		console.log(Extras);
		return Dairy;

		
	}

};