$(document).ready(function(){
    $(window).scroll(function(){
        // sticky navbar on scroll script
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
        
        // scroll-up button show/hide script
        if(this.scrollY > 500){
            $('.scroll-up-btn').addClass("show");
        }else{
            $('.scroll-up-btn').removeClass("show");
        }
    });

    // slide-up script
    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop: 0});
        // removing smooth scroll on slide-up button click
        $('html').css("scrollBehavior", "auto");
    });

    $('.navbar .menu li a').click(function(){
        // applying again smooth scroll on menu items click
        $('html').css("scrollBehavior", "smooth");
    });

    // toggle menu/navbar script
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

    // typing text animation script
    var typed = new Typed(".typing", {
        strings: ["Cybersecurity & AI", "Intelligent Systems", "Big Data Analytics"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    var typed = new Typed(".typing-2", {
        strings: ["Cybersecurity & AI", "Offensive Security", "Data-Driven Defense"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    // Disable right-click and developer tools
    $(document).on("contextmenu", function(e){
        e.preventDefault();
    });
    
    $(document).keydown(function(e){
        if(e.key === "F12" || 
           (e.ctrlKey && e.shiftKey && (e.key === "I" || e.key === "J")) || 
           (e.ctrlKey && e.key === "U")) {
            e.preventDefault();
        }
    });

    // --- NEW PROFESSIONAL FORM HANDLING ---
    $('#contact-form').on('submit', function(e) {
        e.preventDefault(); // Stop the default redirect

        var $form = $(this);
        var $button = $form.find('button[type="submit"]');
        var $status = $('#form-status');

        // Show a loading state on the button
        $button.text('Sending...').prop('disabled', true);
        $status.html(''); // Clear previous status

        // Send the form data using AJAX
        $.ajax({
            url: $form.attr('action'),
            method: $form.attr('method'),
            data: $form.serialize(),
            dataType: 'json',
            success: function() {
                // This is the success message
                $form.hide(); // Hide the form
                $status.html('<div class="success-message"><i class="fas fa-check-circle"></i> Thank you! Your message has been sent.</div>');
            },
            error: function() {
                // This is the error message
                $status.html('<div class="error-message">Oops! Something went wrong. Please try again.</div>');
                $button.text('Send message').prop('disabled', false); // Re-enable the button
            }
        });
    });
    // --- END OF NEW FORM HANDLING ---

});

