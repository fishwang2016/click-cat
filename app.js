var ViewModel = function(){
    this.clickCount = ko.observable(0);
    this.name = ko.observable('Tabby');
    this.imgSrc = ko.observable('cat1.jpg');
    this.imgAttribution = ko.observable('attribution');

    this.incrementCounter = function(){
    	this.clickCount(this.clickCount()+1);
    };

}

ko.applyBindings(new ViewModel());