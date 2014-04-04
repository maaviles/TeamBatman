$('#mobile-menu-trigger').on('click', function() {
  $('#mobile-menu').addClass("visible").addClass("animated").toggleClass("slideInDown").toggleClass("slideOutUp");
});

$('#hero-form').submit(function() {
  window.location = 'expeditions.html';
  event.preventDefault();
})
