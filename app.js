var initialCats =[

			{ 
				clickCount:0,
				name :'Tabby',
				imgSrc:'cat1.jpg',
				imgAttribution:'how are you',
			    nicknames:['Ta']
			},
			{ 
				clickCount:0,
				name :'Tebby',
				imgSrc:'cat2.jpg',
				imgAttribution:'how are you',
			    nicknames:['Te']
			},
			{ 
				clickCount:0,
				name :'T ',
				imgSrc:'cat3.jpg',
				imgAttribution:'how are you',
			    nicknames:['Tb']
			},
			{ 
				clickCount:0,
				name :'TStone',
				imgSrc:'cat4.jpg',
				imgAttribution:'how are you',
			    nicknames:['Tc']
			},
			{ 
				clickCount:0,
				name :'Tome',
				imgSrc:'cat5.jpg',
				imgAttribution:'how are you',
			    nicknames:['Td']
			}]



var Cat =function(data){

    this.clickCount = ko.observable(data.clickCount);
    this.name = ko.observable(data.name);
    this.imgSrc = ko.observable(data.imgSrc);
    this.imgAttribution = ko.observable(data.imgAttribution);
    this.nicknames = ko.observableArray(data.nicknames)

    this.title = ko.computed(function(){
    	var title;
    	var clicks = this.clickCount();

	    if(clicks<10){
	    		title = 'Newbone';
	    	} else if (clicks <50){

	    		title ='Infant';

	    	}else if (clicks<100){

	    		title ='Child';

	    	} else{

	    		title ='Adult';
	    	}	
	    	return title;
    },this);// without passing in this ,throw err .
}



var ViewModel = function(){
	var self = this;
	this.catList = ko.observableArray([]);
	
	initialCats.forEach(function(catItem){
		self.catList.push(new Cat(catItem));
		
	});
	
		
	this.currentCat = ko.observable(this.catList()[0]);
	this.incrementCounter = function(){
    	this.clickCount(this.clickCount()+1);
    };

}

ko.applyBindings(new ViewModel());