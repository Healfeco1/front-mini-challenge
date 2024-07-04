$(document).ready(function() {
  $('.content__button').click(function (e) {
    e.preventDefault();
    console.log('click');
    $(this).toggleClass('active');
  });
});