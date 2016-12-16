'use strict';

var smPhotoZoom = function(thumbImg){
  var splitImgPath = thumbImg.split('_sm_');
  var begPath = splitImgPath[0];
  var endPath = splitImgPath[1];
  var newImgPath = begPath + "_xl_" + endPath;
  $('#zoom01').find('.modal-photo').attr('src', newImgPath);
};

var mdPhotoZoom = function(thumbImg){

  var splitImgPath = thumbImg.split('_md_');
  var begPath = splitImgPath[0];
  var endPath = splitImgPath[1];
  var newImgPath = begPath + "_xl_" + endPath;
  $('#zoom01').find('.modal-photo').attr('src', newImgPath);
};

var lgPhotoZoom = function(thumbImg){
  var splitImgPath = thumbImg.split('_lg_');
  var begPath = splitImgPath[0];
  var endPath = splitImgPath[1];
  var newImgPath = begPath + "_xl_" + endPath;
  $('#zoom01').find('.modal-photo').attr('src', newImgPath);
};


$(document).ready(function() {

  $('.zoom-but-sm').click(function(){
    var thumbImg = $(this).closest('img').attr('src');
    smPhotoZoom(thumbImg);
  });

  $('.zoom-but-md').click(function(){
    var thumbImg = $(this).closest('img').attr('src');
    mdPhotoZoom(thumbImg);
  });

  $('.zoom-but-lg').click(function(){
    var thumbImg = $(this).closest('img').attr('src');
    lgPhotoZoom(thumbImg);
  });

});



