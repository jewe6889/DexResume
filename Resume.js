$('document').ready(function(){
  $('#accordion1, #accordion2, #accordion3, #accordion4, #accordion5').accordion({heightStyle: "content"}, {collapsible: true}, {active: 1});
  $('#accordion1').accordion({active: 0});
  
  $('#image_holder').fadeIn(2500);
  $('#title').slideDown(1000);  
});