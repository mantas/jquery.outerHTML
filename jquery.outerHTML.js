/*
 jQuery plugin to get full html of element, including top level element, while .html() returns inner html only.

 Uses native outerHTML function if available (Chrome, Safari and IE), falls back to pure-JS implementation in other
       
 Mantas Masalskis, mantas@idev.lt
 
 http://github.com/mantas/jquery.outerHTML
*/

(function($){
  $.fn.outerHTML = function(){
    return this[0].outerHTML || $('<div>').append(this.first().clone() ).html();
  } 
})(jQuery)

