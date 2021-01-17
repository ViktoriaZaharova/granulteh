// mask phone
$('[name="phone"]').mask('+7(999) 999-99-99');

// mobile menu
$('.btn-burger').on("click", function () {
    $('.mobile-menu').fadeToggle();
});

$('.mobile-menu .btn-close').on('click', function () {
   $('.mobile-menu').fadeOut();
});

// slider range price
$('.slider-range').slider({
    range: true,
    min: 0,
    max: 40000,
    values: [0, 20000],
    classes: {
        "ui-slider-handle": "ui-corner-all"
    },
    slide: function (event, ui) {
        //Поле минимального значения
        $(".dec1").val(ui.values[0] + ' ' + 'руб');
        //Поле максимального значения
        $(".dec2").val(ui.values[1] + ' ' + 'руб');
    }
});

$(".dec1").val($(".slider-range").slider("values", 0) + ' ' + 'руб');
$(".dec2").val($(".slider-range").slider("values", 1) + ' ' + 'руб');

// filter
$('.btn-filter').on("click", function (e) {
    e.preventDefault();
   $('.sidebar').fadeToggle();
});

$('.sidebar .btn-close').on("click", function () {
    $('.sidebar').fadeOut();
});


// загрузка скрытых блоков
$('.catalog-content > .row').each(function () {
    if ($(this).find('.card-product-col').length > 6) {
        $(this).find('.card-product-col').slice(6).hide();
    }

});

$('.btn-load').on('click', function (e) {
    e.preventDefault();
    $('.card-product-col:hidden').slice(0, 3).slideDown();

    var onBlock = $('.card-product-col:hidden').length;
    if(onBlock <= 0) {
        $('.btn-load').hide();
    }
});

// gallery photo product
$(function () {
    let penImg = $('.products-gallery__max img');
    let linksImg = $('.products-gallery__max');

    $('.products-gallery-min').on('click', function () {
        $('.products-gallery-min').removeClass('click-item');
        $(this).addClass('click-item');
        let imgPath;

        imgPath = $(this).attr('data-img-path');

        penImg.attr('src', imgPath);
        linksImg.attr('href', imgPath);

    });
});

// =/- цена
$('.down').click(function () {
    var $input = $(this).parent().find('input');
    var count = parseInt($input.val()) - 1;
    count = count < 1 ? 1 : count;
    $input.val(count);
    $input.change();
    return false;
});
$('.up').click(function () {
    var $input = $(this).parent().find('input');
    $input.val(parseInt($input.val()) + 1);
    $input.change();
    return false;
});

// tabs
$('ul.tabs__caption').on('click', 'li:not(.active)', function () {
    $(this)
        .addClass('active').siblings().removeClass('active')
        .closest('div.tabs').find('div.tabs__content').removeClass('active').eq($(this).index()).addClass('active');
});