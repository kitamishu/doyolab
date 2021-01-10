$(function(){
 $('.imgs img').click(function(){
  var $thisImg = $(this).attr('src');
  var $thisAlt = $(this).attr('alt');
  $('.mainimg img').attr({src:$thisImg,alt:$thisAlt});
 });
});