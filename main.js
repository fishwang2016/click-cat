

$(function(){
   console.log("This is a test message on successfully conneting the js file.");


   var model ={

		   	init: function(){
		   	    console.log("begin initializing model ...")


		   		if (!localStorage.cats){
		   			localStorage.cats = JSON.stringify([]);//serized array
		   			//http://stackoverflow.com/questions/11312046/serializing-and-unserializing-an-array-in-javascript

				   	for (var i =1;i <=5;i++){
				   			console.log(i);
					   		   model.add({
					   		   	cat: "CAT"+i,
					   		   	url: "cat"+i+'jpg',
					   		   	clicks: 0
				    		     });
			             	}
		             }   
		    },

		    add: function(obj){

		    	var data =JSON.parse(localStorage.getItem('cats'))//http://stackoverflow.com/questions/16083919/push-json-objects-to-array-in-localstorage

		    	data.push(obj);
            	localStorage.cats = JSON.stringify(data);

		    },

		    getAllCats: function(){
		    	return JSON.parse(localStorage.cats);

		          }
         
        };


   var octopus = { 

		   	addClicks: function(clicks){
		   		 console.log("h");
		   	
		   		   },

		   	getCats: function(){
		   		return model.getAllCats() ;
		        	} ,

		   	init: function(){

		   		console.log("initializing octopus ...")

		   		model.init();
		   		view.init();

		   	}

   };


   var view = {

		   	init: function(){

		   		this.catList = $("#catcontainer");
		   		view.render();

		   	},

		   	render:function(){

		   		var htmlStr =" ";
		   		octopus.getCats().forEach(function(cat){
		   			htmlStr = htmlStr + cat.url;

		   		});

		   		this.catList.html(htmlStr);
		   		//console.log(htmlStr);

		   	}


   };
   console.log("initialze octopus...");

   octopus.init();


});
