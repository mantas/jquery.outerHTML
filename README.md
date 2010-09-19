jQuery outerHTML plugin
=============

Usage
------------
  
  $('<div>').text("example").outerHTML() # <div>example</div>

Native function support
------------
Uses native .outerHTML() function whenever possible. Looks like it's supported in Webkit (Chrome, Safari) and IE. In other browsers, JS implementation is used  

