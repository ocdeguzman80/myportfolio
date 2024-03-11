
// --- PARALLAX EFFECT ----//
$(function() {
	
	// Cache the window object
	var $window = $(window);
	
	// Parallax background effect
	$('section[data-type="background"]').each(function() {
		
		var $bgobj = $(this); // assigning the object
		
		$(window).scroll(function() {
			
			// Scroll the background at var speed
			// the yPosition is a negative value because we're scrolling it UP
			
			var yPos = -($window.scrollTop() / $bgobj.data('speed'));
			
			// Put together our final background position
			var coords = '50% '+ yPos + 'px';
			
			// Moving the background
			$bgobj.css({ backgroundPosition: coords  });
			
		}); // END WINDOW SCROLL
	});
});

$(document).ready(function(){
	$('#optin-subscribe-btn').click(function(){
		// alert("You Clicked Subscribe!");
	});

//---- CAROUSEL -------//
	var myIndex = 0;
	carousel();

	function carousel() {
    var i;
    var x = document.getElementsByClassName("mySlides");
    for (i = 0; i < x.length; i++) {
       x[i].style.display = "none";  
    }
    myIndex++;
    if (myIndex > x.length) {myIndex = 1}    
    x[myIndex-1].style.display = "block";  
    setTimeout(carousel, 9000);    
}
	
	
	
});