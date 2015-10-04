
define(['underscore', './searchUsers/module', './applicationController'],function () {
  var componets = Array.prototype.slice.call(arguments);
  var _ = componets[0]();
  componets.splice(0,1)
  function init(){
	  componets.forEach(function(componet){
	  	componet.init();
	  });
  }
  return {
  	init: init
  }
});