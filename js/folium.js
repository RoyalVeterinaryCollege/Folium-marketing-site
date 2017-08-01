(function($) {
    "use strict"; // Start of use strict

    // Smooth scrolling using jQuery easing
    $('a[href*="#"]:not([href="#"])').click(function() {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html, body').animate({
                    scrollTop: (target.offset().top - 48)
                }, 1000, "easeInOutExpo");
                return false;
            }
        }
    });

    // Scroll reveal calls
    window.sr = ScrollReveal();
    sr.reveal('.sr-image', {
        duration: 1200,
        scale: 0.3,
        distance: '50px'
    }, 200);
    sr.reveal('#skills-screen', {
        duration: 600,
        scale: 0.3,
        origin:'left',
        distance: '500px',
    
    }, 200);
    sr.reveal('#entries-screen', {
        duration: 600,
        scale: 0.3,
        origin:'right',
        distance: '500px'
    }, 200);
    sr.reveal('#placements-screen', {
        duration: 600,
        scale: 0.3,
        origin:'left',
        distance: '500px'
    }, 200);
    sr.reveal('.sr-button', {
        duration: 600,
        delay: 200
    });
    sr.reveal('.sr-contact', {
        duration: 600,
        scale: 0.3,
        distance: '0px'
    }, 300);

})(jQuery); // End of use strict
