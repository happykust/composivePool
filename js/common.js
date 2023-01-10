$('.examples-tab').click(function (e) {
    e.preventDefault();
    let tab = $(this).data('photo');
    $('.examples-photo__item').hide();
    $('.examples-photo__item[data-photo = ' + tab + ']').fadeIn();
    console.log($('.examples-photo__item[data-photo = ' + tab + ']'));
});

const platform = window.innerWidth <= 1200 ? "mobile" : "pc";

if (window.navigator.userAgent.includes("iPhone")) {
    $('#apple-fix').append(
        ".swimming-photo_item {width: 28.8%!important}"
    )
    $('.swimborder').width($('.swimborder').width()-1.5)
    $('.swimborder').height($('.swimborder').height()+3)
}

let numSlick = 0;


$('.gallery-slider').each(function () {
    numSlick++;

    let arrowNext;
    let arrowPrev;

    if ($(window).width() > 700) {
        arrowNext = $(this).siblings('.title-flex').find('.page-arrow_next').addClass('slider-next-' + numSlick);
        arrowPrev = $(this).siblings('.title-flex').find('.page-arrow_prev').addClass('slider-prev-' + numSlick);
    } else {
        arrowNext = $(this).siblings('.page-arrow').find('.page-arrow_next').addClass('slider-next-' + numSlick);
        arrowPrev = $(this).siblings('.page-arrow').find('.page-arrow_prev').addClass('slider-prev-' + numSlick);
    }

    $(this).addClass('slider-' + numSlick).slick({
        infinite: false,
        slidesToShow: 1,
        nextArrow: arrowNext,
        prevArrow: arrowPrev,
    });
});


if ($(window).width() < 1200) {
    $('.swimming-frame').on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
        const i = (currentSlide ? currentSlide : 0) + 1;
        $('.swimming_actives').html(i);
        $('.swimming_all').html(slick.slideCount);
    });

    $('.swimming-frame').slick({
        slidesToShow: 1,
        prevArrow: '.swimming-prev',
        nextArrow: '.swimming-next',
        adaptiveHeight: true,
        cloned: false
    });
}

let swimmingNum = 1;
let swimmingColor = 1;
let swimmingSize = 1;
let borderColor = 1;

const swimmingImageUriStart = "images/swimming/";
const borderImageUriStart = "images/frames/";


$('.swimming-check').click(function () {
    if ($(this).data('color')) swimmingColor = $(this).data('color');
    if ($(this).data('size')) swimmingSize = $(this).data('size');

    $(this).siblings('.swimming-check').removeClass('swimming-check_active');
    $(this).addClass('swimming-check_active');

    $("#" + swimmingNum + "-photo_item_" + platform).attr("src", swimmingImageUriStart + swimmingNum + "/" + swimmingSize + "/" +
        swimmingColor + ".png");

    setClassBorder($(this));
});

function setClassBorder(p) {
    if (p[0].hasAttribute("data-border_nameses")) {
        $("#" + swimmingNum + "-border_item_" + platform).attr("src", borderImageUriStart + swimmingNum + "/" + swimmingSize + "/" +
            borderColor + ".png");
    }
    if (p[0].hasAttribute("color-border")) {
        const type = p[0].getAttribute("color-border").split("_");
        borderColor = type[1];
        $("#" + swimmingNum + "-border_item_" + platform).attr("src", borderImageUriStart + swimmingNum + "/" + swimmingSize + "/" +
            type[1] + ".png");
    }
}

$('.swimming-tab').click(function (e) {
    e.preventDefault();
    let swimmingItem = $(this).data('swimming');

    $('.swimming-tab').removeClass('swimming-tab_active');

    $(this).addClass('swimming-tab_active');

    let swimming = $('.swimming-wrap[data-swimming="' + swimmingItem + '"]');

    swimmingColor = 1;
    swimmingSize = 1;

    $('.swimming-check').removeClass('swimming-check_active');

    swimming.find('.swimming-color__item:eq(0)').addClass('swimming-check_active');
    swimming.find('.swimming-border__item:eq(0)').addClass('swimming-check_active');
    swimming.find('.swimming-size__item:eq(0)').addClass('swimming-check_active');

    $('.swimming-photo_item').removeClass('swimming-photo_active');
    $('.swimming-photo_item[data-color="' + swimmingColor + '"][data-size="' + swimmingSize + '"]').addClass('swimming-photo_active');

    $('.swimming-wrap').hide();
    $('.swimming-wrap[data-swimming = ' + swimmingItem + ']').fadeIn();
});


$('.swimming-frame').on('afterChange', function () {
    let swimming = $('.swimming-wrap');

    swimmingColor = 1;
    swimmingSize = 1;

    $('.swimming-check').removeClass('swimming-check_active');

    swimming.find('.swimming-color__item:eq(0)').addClass('swimming-check_active');
    swimming.find('.swimming-border__item:eq(0)').addClass('swimming-check_active');
    swimming.find('.swimming-size__item:eq(0)').addClass('swimming-check_active');

    $('.swimming-photo_item').removeClass('swimming-photo_active');
    $('.swimming-photo_item[data-color="' + swimmingColor + '"][data-size="' + swimmingSize + '"]').addClass('swimming-photo_active');
});


$('.page-form__check').click(function () {
    $(this).toggleClass('check_active');
});

$('.offices-city').change(function () {
    let tab = $(this).val();

    $('.offices-list').hide();

    $('.offices-list[data-city = ' + tab + ']').css("display", "grid").hide().fadeIn();
    $('.offices-city__label').removeClass('offices-city__label_active');
});

$('.offices-city').focus(function () {
    $('.offices-city__label').addClass('offices-city__label_active');
});


$('.offices-city').focusout(function () {
    $('.offices-city__label').removeClass('offices-city__label_active');
});


$('.burger').click(function () {
    $('.mob-frame').fadeIn();
    $('.mob-menu').addClass('mob-menu_active');
});


$('.menu-close').click(function () {
    $('.mob-frame').fadeOut();
    $('.mob-menu').removeClass('mob-menu_active');
});