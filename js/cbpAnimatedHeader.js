/**
 * cbpAnimatedHeader.js v1.0.0
 * http://www.codrops.com
 *
 * Licensed under the MIT license.
 * http://www.opensource.org/licenses/mit-license.php
 * 
 * Copyright 2013, Codrops
 * http://www.codrops.com
 */
var cbpAnimatedHeader = (function() {

	var docElem = document.documentElement,
		header = document.querySelector( '.navbar-fixed-top' ),
		didScroll = false,
		changeHeaderOn = 550,
		changeHeader = 100;

	function init() {
		window.addEventListener( 'scroll', function( event ) {
			if( !didScroll ) {
				didScroll = true;
				setTimeout( scrollPage, 250 );
				//setTimeout( scrollPage2, 250 );
			}
		}, false );
	}

   /* 
	function scrollPage2() {
		var sy = scrollY();
		if ( sy >= changeHeader ) {
          //  alert("hello");
			//classie.add( header, 'navbar-shrink' );
          //  $("#welcome").slideUp();
          // $("#nav_header").css("background-color"," #1d426d");

		}
		else {
            
          //  alert("helloooooo");
			classie.remove( header, 'navbar-shrink' );
            $("#welcome").slideDown();
                        $("#nav_header").css("background-color","#1c2126");
		}
		didScroll = false;
	}

*/
    
	function scrollPage() {
		var sy = scrollY();
		if ( sy >= changeHeaderOn ) {
			classie.add( header, 'navbar-shrink' );
           // $("#welcome").slideUp();
            $("#welcome").text("HOME");
           $("#nav_header").css("background-color"," #1d426d");

		}
		else {
			classie.remove( header, 'navbar-shrink' );
            $("#welcome").slideDown();
            $("#welcome").text("WELCOME");
                        $("#nav_header").css("background-color","#1c2126");
		}
		didScroll = false;
	}
    
	function scrollY() {
		return window.pageYOffset || docElem.scrollTop;
	}

	init();

})();