$(function(){
   console.log("This is a test message on successfully conneting the js file.");


   var model ={

   	        currentCat: null,

		   	init: function(){
		   	    console.log("begin initializing model ...")


		   		if (!localStorage.cats){
		   			localStorage.cats = JSON.stringify([]);//serized array
		   			//http://stackoverflow.com/questions/11312046/serializing-and-unserializing-an-array-in-javascript

				   	for (var i =1;i <=5;i++){
				   			console.log(i);
					   		   model.add({
					   		   	cat: "CAT"+i,
					   		   	url: "cat"+i+'.jpg',
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

		          },

		    updateClicks: function(obj){


		    }
         
        };


   var octopus = { 

		   	addClicks: function(clicks){
		   		 console.log("h");
		   	
		   		   },

		   	getCats: function(){
		   		return model.getAllCats() ;
		        	} ,

		    getCurrentCat: function(){ 

		    	return model.currentCat

		              },

		    setCurrentCat: function(cat){
		    	model.currentCat = cat;

		    },
		    incrementCounter: function(){
		    	model.currentCat.clicks++;
		    	view.render();

		    },

		   	init: function(){

		   		console.log("initializing octopus ...");
		   		model.currentCat = model.getAllCats[0];

		   		model.init();
		   		view.init();

		   	}

   };


   var view = {

		   	init: function(){

		   		this.catList = $(".container");
		   		view.render();

		   	},

		   	render:function(){

		   		var htmlStr =" ";
		   		var catcontainer  ;
				var catCaption ;
		   		var catImg = document.createElement("img")
		   		octopus.getCats().forEach(function(cat){

		   			    catCaption = cat.cat +'clicks:' + cat.clicks;
		   			    catImg.src = cat.url;

		   			    catcontainer = '<div class="catcontainer">'+ catCaption+'<img  '+' id="'+cat.cat+'"'+'src="' +cat.url+ '"' + 'alt="'+cat.cat+'">'+  ' </div>';
		   			    //catcontainer = '<div class="catcontainer"> '+ catCaption+ catImg + 'alt="'+cat.cat+'">'+  ' </div>';

		   			    htmlStr=htmlStr+ catcontainer;
		   			    console.log("Cat Name: "+cat.cat);
		   			    var el = document.getElementById(String(cat.cat));
		   			    console.log(el);
		   			    // el.addEventListener('click',function(){
		   			    // 	console.log("hi");
		   			    // });
		   		});

		   		this.catList.html(htmlStr);
		   		//console.log(htmlStr);
		   	}

   };
   console.log("initialze octopus...");

   octopus.init();


});
