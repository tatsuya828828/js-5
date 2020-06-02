$(function(){
  $('.box1').slideDown(5000, function(){
    $('.box1').css({
        'background-color': '#00f',
        'height': '100px'
    }).slideUp(5000)
  });
});