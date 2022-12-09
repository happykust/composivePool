$('.examples-tab').click(function (e) {
    e.preventDefault();
    let tab = $(this).data('photo');
    $('.examples-photo__item').hide();
    $('.examples-photo__item[data-photo = ' + tab + ']').fadeIn();
    console.log($('.examples-photo__item[data-photo = ' + tab + ']'));
});


var numSlick = 0;

$('.gallery-slider').each(function () {
    numSlick++;

    var arrowNext;
    var arrowPrev;

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
        var i = (currentSlide ? currentSlide : 0) + 1;
        $('.swimming_actives').html(i);
        $('.swimming_all').html(slick.slideCount);
    });

    $('.swimming-frame').slick({
        infinite: true,
        slidesToShow: 1,
        prevArrow: '.swimming-prev',
        nextArrow: '.swimming-next',
        adaptiveHeight: true,
    });
}


var swimmingColor = 1;
var swimmingSize = 1;


$('.swimming-check').click(function () {
    console.log('red');

    if ($(this).data('color')) {
        swimmingColor = $(this).data('color');
    }

    if ($(this).data('size')) {
        swimmingSize = $(this).data('size');
    }

    $(this).siblings('.swimming-check').removeClass('swimming-check_active');
    $(this).addClass('swimming-check_active');

    $('.swimming-photo_item').removeClass('swimming-photo_active');

    $('.swimming-photo_item[data-color="' + swimmingColor + '"][data-size="' + swimmingSize + '"]').addClass('swimming-photo_active');
    let clicks = $('.swimming-tab_active')[0].textContent.replace("Серия ", "").trim();
    setClassBorder($(this));

});

function setClassBorder(p) {
    console.log(p[0]);
    if (p[0].hasAttribute("data-border_nameses") == true) {
        let type = p[0].getAttribute("data-border_nameses").split("_");
        setTypeBorder(type);
    }
    if (p[0].hasAttribute("color-border") == true) {
        let type = p[0].getAttribute("color-border").split("_");
        setColorBorder(type);
    }
    // console.log(type);
    /*let qstr = document.getElementsByClassName('swimming-size__item swimming-check');
        for (let i = 0; i < qstr.length; i++) {
            console.log(qstr[i]);
        }
        let qs = p[0].childNodes;
        let qr = '';
        for (let i = 0; i < qs.length; i++) {

            console.log(qs[i].tagName);
        }
        //   qs = qs[qs.length - 1];
        console.log(qs);*/
}

function setTypeBorder(types) {
    switch (types[0]) {
        case "luxor":
            let check = document.getElementsByClassName("luxor-border")[0].childNodes[3];
            check.setAttribute("class", types[0] + types[1]);
            //console.log(check);
            break;
        case "red":
            break;
    }
}

function setNewColor(chk, nmb) {
    let gets = chk.getAttribute("src");
    let s = gets.split("/");
    let rd = s[s.length - 1].split(".")[0].slice(0, -1);
    s[s.length - 1] = rd + nmb + ".png";
    chk.setAttribute("src", s.join("/"));
}

function setColorBorder(number) {
    let check = '';
    switch (number[0]) {
        case "luxor-color":
            check = document.getElementsByClassName("luxor-border")[0].childNodes[3];
            setNewColor(check, number[1]);
            break;
        case "classic-color":
            check = document.getElementsByClassName("classic-border")[0].childNodes[3];
            setNewColor(check, number[1]);
            break;
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


$('.swimming-frame').on('afterChange', function (event, slick, currentSlide, nextSlide) {
    let swimming = $('.swimming-wrap');

    swimmingColor = 1;
    swimmingSize = 1;

    console.log('redfed');
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
