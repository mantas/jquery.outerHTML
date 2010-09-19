jQuery outerHTML plugin
=============

Usage
------------
  
  $('&lt;div&gt;').text("example").outerHTML() # &lt;div&gt;example&lt;/div&gt;

Native function support
------------
Uses native .outerHTML() function whenever possible. Looks like it's supported in Webkit (Chrome, Safari) and IE. In other browsers, JS implementation is used  

