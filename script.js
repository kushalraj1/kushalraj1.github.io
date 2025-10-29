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

    // Disable right-click context menu
    $(document).on("contextmenu", function(e){
        e.preventDefault();
    });
    
    // Disable F12, Ctrl+Shift+I, Ctrl+Shift+J, Ctrl+U
    $(document).keydown(function(e){
        if(e.key === "F12" || 
           (e.ctrlKey && e.shiftKey && (e.key === "I" || e.key === "J")) || 
           (e.ctrlKey && e.key === "U")) {
            e.preventDefault();
        }
    });
});

