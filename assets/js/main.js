(function ($) {
    "use strict";

    // Sticky Navbar
    $(window).scroll(function () {
        if ($('.nav-section').offset().top > 100) {
            $('.nav-section').addClass('navigation-bg');
        } else {
            $('.nav-section').removeClass('navigation-bg');
        }
    });




    // jQuery(document).ready(function($){


    // });



    // jQuery(window).load(function(){


    // });

}(jQuery));	
