var Cat = function(){

    this.clickCount = ko.observable(0);
    this.name = ko.observable('Tabby');
    this.imgSrc = ko.observable('cat1.jpg');
    this.imgAttribution = ko.observable('attribution');

    

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
	this.currentCat = ko.observable(new Cat());
	this.incrementCounter = function(){
    	this.currentCat().clickCount(this.currentCat().clickCount()+1);
    };    

}

ko.applyBindings(new ViewModel());