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

var itemsCommentText = $('.advanced-popup .left-part-advanced-popup .bottom-part .slider-photo li');
var heightItemsCommentText = [];
$.each(itemsCommentText, function (i, el) {
    console.log(el.height);
});
// var maxHeightItemsCommentText = Math.max(...heightItemsCommentText);
// console.log(maxHeightItemsCommentText);
// $('.advanced-popup .left-part-advanced-popup .bottom-part').height(maxHeightItemsCommentText);
/*eslint-enable*/
