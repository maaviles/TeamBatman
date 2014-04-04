$('#mobile-menu-trigger').on('click', function() {
  $('#mobile-menu').addClass("visible").addClass("animated").toggleClass("slideInDown").toggleClass("slideOutUp");
});

$('#hero-form').submit(function() {
  window.location = 'expeditions.html';
  event.preventDefault();
});

(function(){
    var words = [
        'secret bike tour',
        'craft brewery tour',
        'hidden landmark tour',
        'crazy macaron tour'
        ], i = 0;
    setInterval(function(){
        $('#word-rotate').fadeOut(function(){
            $(this).html(words[i=(i+1)%words.length]).fadeIn();
        });
    }, 3500);

})();
