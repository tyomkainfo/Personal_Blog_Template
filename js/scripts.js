$(document).ready(function () {
    $('.second-button').on('click', function () {
        $('.animated-icon').toggleClass('open');
    });


    <!-- ************** Galina *****************-->

    $('.btn_resize-cards').on('click', function (e) {

        e.preventDefault();

        $('.card-columns').toggleClass('resize-cards');

    });
    <!-- *** -->

});

$(document).ready(function(){

    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:0,
        nav:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:1
            }
        }
    });
});



