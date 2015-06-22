(function(){
  var pictures = [
  	{name:'materials'},
    {name: 'machinery'},
  	{name:'item'}
  	];
  var app = angular.module('sigmaApp', []);
  app.controller('SigmaController', function(){
   	// First/Default Picture ID
   	this.pictureIndex = 0;
   	// List of Picture Classes
   	this.picture = pictures;

   	// Function to run on click
   	this.switcheroo = function(pictureID) {
   		this.pictureIndex = pictureID;
   	}

  });  
})();