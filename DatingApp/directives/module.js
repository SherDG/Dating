
define(['underscore', './SearchInput/module'],function () {
  var directives = Array.prototype.slice.call(arguments);
  var _ = directives[0]();
  directives.splice(0,1)
  function init(){
	  directives.forEach(function(directive){
	  	directive.init();
	  });
  }
  return {
  	init: init
  }
});