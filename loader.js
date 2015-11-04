/*! SVG Icon Sprite Polyfill for IE9+
 * Licensed under MIT
 * https://github.com/timwright12/Easy-Script-Loader
 * 
 *  EXAMPLE USAGE:
 *  
 *  Load.js('[path-to-JS]', function () {
 *  
 *    // add a callback if you want, if not, that's cool too.
 *  
 *  }); 
*/

;(function (w, doc) {

  // Enable strict mode
  "use strict";

  // Local object for method references
  var Load = {};

  // Namespace
  Load.ns = "Easy Script Loader";

  // Start defining methods here
  Load.on = function( el, eventName, eventHandler ) {

    if (el.addEventListener){
    
      // normal event listener
      el.addEventListener(eventName, eventHandler, false); 
    
    } else if (el.attachEvent){
    
      // fallback support for IE8 and below
      el.attachEvent('on' + eventName, eventHandler);
    
    }

  };
  
  // Start defining methods here
  Load.js = function( path, callback ) {

    var script = doc.createElement('script');
    
    Load.on(script, 'load', function(){
        
        if (typeof(callback) === 'function') {
            callback.call(this);
        }
        
    });

    script.src = path;
    doc.getElementsByTagName('head')[0].appendChild(script);

  };
  
  // TO DO: add style loader
  
  Load.css = function( path, callback ) {
    
  });

} )( this, this.document );