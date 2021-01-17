$('[name="phone"]').mask('+7(999) 999-99-99');

$('.btn-burger').on("click", function () {
    $('.mobile-menu').fadeToggle();
});

$('.mobile-menu .btn-close').on('click', function () {
   $('.mobile-menu').fadeOut();
});

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

$('.btn-filter').on("click", function (e) {
    e.preventDefault();
   $('.sidebar').fadeToggle();
});

$('.sidebar .btn-close').on("click", function () {
    $('.sidebar').fadeOut();
});


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