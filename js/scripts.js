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



<!-- ************** WOW LIBRARY *****************-->
    var wow = new WOW(
        {
            mobile: false
        }
    );
    wow.init();
<!-- *** -->



////////////////Like counter////////////////
var clicks = 2564;

document.getElementById("clicks").innerHTML = clicks;

$('.like-counter').click(function() {
    clicks += 1;
    document.getElementById("clicks").innerHTML = clicks;
    $('.like-counter').addClass("liked");
});
////////////////////////////////////////////


