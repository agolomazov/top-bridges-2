/*eslint-disable*/
var imgsLeftTopPart = $('.advanced-popup .left-part-top-part .slider-photo img');
var heightsLeftTopPars = [];
var widthLeftTopPars = [];
$.each(imgsLeftTopPart, function (i, el) {
    heightsLeftTopPars.push(el.height);
    widthLeftTopPars.push(el.width);
});
var maxHeightImgLeftTopPart = Math.max(...heightsLeftTopPars);
var maxWidthImgLeftTopPart = Math.max(...widthLeftTopPars);
$('.left-part-top-part .slider-photo').height(maxHeightImgLeftTopPart).width(maxWidthImgLeftTopPart);
$('.right-part-top-part .slider-photo').height(maxHeightImgLeftTopPart).width(maxWidthImgLeftTopPart);

// Слайдер
var bigSlider = $('.advanced-popup .top-part .left-part-top-part .slider-photo li');
var countSlides = bigSlider.length;
var currentSlideid = bigSlider.eq(0).data('slide-id');
bigSlider.eq(0).show().css('z-index', '10').addClass('active');

// Второй боковой слайдер
var $selector = '.slider-photo.slide-thumbs li.slide-item[data-slide-id="'+ currentSlideid +'"]';
$($selector).addClass('active');

var $thirdslider = '.advanced-popup .bottom-part .slider-photo li.slide-item[data-slide-id="'+ currentSlideid +'"]';
$($thirdslider).addClass('active');

$('.advanced-popup .left-part-top-part .slider-controls .slider-control').on('click', function(){
    var flag = $(this).hasClass('prev-item'); // если false - следующий слайд, true - предыдуший
    var countSlides = bigSlider.length;
    if(!flag){
        // получаю активный слайд на большом слайдере
        var activeBigSlide = $('.advanced-popup .top-part .left-part-top-part .slider-photo li.active');
        var currentSlideId = activeBigSlide.data('slide-id');
        activeBigSlide.hide(300).css('z-index', '1').removeClass('active');
        if((currentSlideId + 1) > countSlides){
            currentSlideId = 1;
        } else {
            currentSlideId++;
        }

        bigSlider.eq(currentSlideId - 1).show().css('z-index', '10').addClass('active');
        $('.advanced-popup .right-part-top-part .slide-thumbs li.active').removeClass('active');

    } else {
        // получаю активный слайд на большом слайдере
        var activeBigSlide = $('.advanced-popup .top-part .left-part-top-part .slider-photo li.active');
        var currentSlideId = activeBigSlide.data('slide-id');
        activeBigSlide.hide(300).css('z-index', '1').removeClass('active');
        if((currentSlideId - 1) < 1){
            currentSlideId = countSlides;
        } else {
            currentSlideId--;
        }

        bigSlider.eq(currentSlideId - 1).show().css('z-index', '10').addClass('active');
        $('.advanced-popup .right-part-top-part .slide-thumbs li.active').removeClass('active');

    }

    var $secondSlider = '.advanced-popup .right-part-top-part .slide-thumbs li[data-slide-id="'+ currentSlideId +'"]';
    $($secondSlider).addClass('active');

    var $thirdslider = '.advanced-popup .bottom-part .slider-photo li';
    $($thirdslider).removeClass('active');
    $thirdslider = '.advanced-popup .bottom-part .slider-photo li[data-slide-id="'+ currentSlideId +'"]';
    $($thirdslider).addClass('active');
});
/*eslint-enable*/
