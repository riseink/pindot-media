//= require vendor/jquery
//= require vendor/modernizr-2.8.3.min

var app = {

    initialize: function(){
        this.initFunction();
		this.initFixedNav();
        
    },
    


    initFunction: function () {

		//do something
    },
	
    initFixedNav: function () {
		
		$(window).scroll(function() {    
		    var scroll = $(window).scrollTop();

		    if (scroll >= 35) {
		        $(".navigation-container").addClass("fixed");
		        $("body").addClass("fixed");
				
		    } else {
		        $(".navigation-container").removeClass("fixed");
		        $("body").removeClass("fixed");
				
		    }
		});

    },


    
};

$(document).ready(function(){
    app.initialize();

    $(window).on("resize", function(){
		// RESIZE
      
    });
	
	$(window).load(function() {
		// Race Conditions
	});

});

