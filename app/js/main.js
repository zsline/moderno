$(function () {
    $('.products-slider__inner').slick({
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 4,
        dots: true,
        arrows: false,
    });

    var mixer = mixitup('.product__inner-box');

    $(".rate-star").rateYo({
        rating: 5,
        starWidth: "12px",
        readOnly: true
    });
});