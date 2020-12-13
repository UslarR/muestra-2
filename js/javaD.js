$(document).ready (function(){
    /* Efecto del menu */
    $('.menu a').each(function(index, elemento){
        $(this).css({
            'top': '-200px'
        });

        $(this).animate({
            'top': 0
        }, 2000 + (index * 500));
    });

    /* Efecto header */
    if( $(window).width() > 800 ){
        $('.main .foto').css({
            opacity: 0,
            marginTop: 0
        });

        $('.main .foto').animate({
            opacity: 1,
            marginTop: '-100px'
        }, 1500);

        $('header .texto').css({
            opacity: 0,
            marginTop: 0
        });

        $('header .texto').animate({
            opacity: 1,
            marginTop: '50px'
        }, 1500);
    }

    /* Scroll */
    var acercaDE = $('#acerca-de').offset().top,
        trabajo = $('#trabajo').offset().top,
		equipos = $('#equipos').offset().top,
		contacto = $('#contacto').offset().top;

    $('#btn-acerca-de').on('click', function(e){
        e.preventDefault();
        $('html, body').animate({
            scrollTop: acercaDE -100
        }, 500);
    });

    $('#btn-trabajo').on('click', function(e){
        e.preventDefault();
        $('html, body').animate({
            scrollTop: trabajo
        }, 500);
    });
    
    $('#btn-equipos').on('click', function(e){
        e.preventDefault();
        $('html, body').animate({
            scrollTop: equipos -110
        }, 500);
    });
    
    $('#btn-contacto').on('click', function(e){
        e.preventDefault();
        $('html, body').animate({
            scrollTop: contacto
        }, 500);
    });

});