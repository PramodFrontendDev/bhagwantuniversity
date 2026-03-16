console.log("Univet Clone Running");

$(document).ready(function () {
    $('.banner_slider').slick({
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: true,
        dots: false,
        fade: true,
        speed: 1000
    });
});

$(document).ready(function () {
    $(".tab-menu li").click(function () {
        var tab_id = $(this).data("tab");
        $(".tab-menu li").removeClass("active");
        $(this).addClass("active");
        $(".tab").removeClass("active");
        $("#" + tab_id).addClass("active");
    });
});

$('.count').each(function () {
    var $this = $(this),
        countTo = $this.attr('data-count');
    $({ countNum: 0 }).animate(
        { countNum: countTo },
        {
            duration: 2000,
            easing: 'linear',
            step: function () {
                $this.text(Math.floor(this.countNum));
            },
            complete: function () {
                $this.text(this.countNum);
            }
        }
    );
});


$('.banner-slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true
});

$('.thumb').click(function () {
    var slideIndex = $(this).data('slide');
    $('.banner-slider').slick('slickGoTo', slideIndex);
    $('.thumb').removeClass('active');
    $(this).addClass('active');
});

$('.placement_slider1').slick({
    infinite: true,
    speed: 6000,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0,
    arrows: false,
    cssEase: 'linear',
    pauseOnFocus: false,
    pauseOnHover: false,
});

$('.placement_slider2').slick({
    autoplay: true,
    autoplaySpeed: 0,
    speed: 6000,
    arrows: false,
    swipe: false,
    slidesToShow: 6,
    cssEase: 'linear',
    pauseOnFocus: false,
    pauseOnHover: false,
    rtl: true,
});

$('.professors_slider').slick({
    slidesToShow: 3,
    autoplaySpeed: 2000,
    speed: 2000,
    arrows: false,
    dots:true,    
});