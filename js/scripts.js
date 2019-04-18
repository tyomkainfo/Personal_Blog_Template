$(document).ready(function () {
    $('.second-button').on('click', function () {
        $('.animated-icon').toggleClass('open');
    });


    <!-- ************** GALINA *****************-->

    $('.btn_resize-cards').on('click', function (e) {

        e.preventDefault();

        $('.card-columns').toggleClass('resize-cards');

    });
    <!-- *** -->

    <!-- **************  STAR RATING *****************-->

    $('.stars li').click(function () {

            $('.stars li').removeClass('is-active');

            $(this).prevAll().addClass('is-active');
            $(this).addClass('is-active')
        }
    );


    <!-- *** -->
});

$(document).ready(function () {

    $('.owl-carousel').owlCarousel({
        loop: true,
        margin: 0,
        nav: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
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


<!-- **************  STAR RATING *****************-->


// const rate = context => {
//     let addStars = context;
//     let removeStars = context;
//
//     addStars.classList.add('is-active');
//     while (addStars.previousElementSibling) {
//         let prevNode = addStars.previousElementSibling;
//         prevNode.classList.add('is-active');
//         addStars = prevNode;
//     }
//
//     while (removeStars.nextElementSibling) {
//         let nextNode = removeStars.nextElementSibling;
//         nextNode.classList.remove('is-active');
//         removeStars = nextNode;
//     }
// };
<!-- *** -->

////////////////Like counter////////////////
var clicks = 2564;

document.getElementById("clicks").innerHTML = clicks;

$('.like-counter').click(function () {
    clicks += 1;
    document.getElementById("clicks").innerHTML = clicks;
    $('.like-counter').addClass("liked");
});
////////////////////////////////////////////


