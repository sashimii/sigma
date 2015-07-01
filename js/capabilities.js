(function(){
  var pictures = [
  	{
      name:'materials',
      content: 'We work with a variety of materials. These include but are not limited to:',
      items: [
        'Steel',
        'Stainless Steel',
        'Aluminium',
        'Magnesium',
        'Titanium',
        'Plastics',
        'Delrin',
        'Inconel',
        'Brass',
        'Copper',
        'etc'
      ],
      tab: 'active'
    },
    {
      name: 'machinery',
      content: 'We house a variety of machinery, ranging from CNC milling and lathe, manual milling and lathe, to machines that help us control the quality of our products, such as CMM.',
      items: [],
      tab: ''
    },
  	{
      name:'industry',
      content: 'Equipped with state of the art machinery, SIGMA METALS’ can supply, but is not limited to: ',
      items: [
        'telecommunications',
        'medical',
        'industrial',
        'automation',
        'transportation',
        'security',
        'aerospace',
        'lighting',
        'heavy',
        'machinery'
      ],
      tab: ''
    }
  	];
  var app = angular.module('sigmaApp', []);
  app.controller('SigmaController', function(){
   	// First/Default Picture ID
   	this.pictureIndex = 0;
   	// List of Picture Classes
   	this.picture = pictures;

   	// Function to run on click
   	this.switcheroo = function(pictureID) {
       pictures[this.pictureIndex].tab = '';
       this.pictureIndex = pictureID;
       pictures[this.pictureIndex].tab = 'active';
   	}



  });
})();
