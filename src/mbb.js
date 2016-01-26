/* thanks for peeking at the source!
 * you can find it in likely nicer form at
 * github.com/phorust/makeberkeleybeautiful
 */

$(document).ready(_ => {
  $('.icon.plus').click(function(e) {
    $(this).parents('.alum').toggleClass('active');
    $(this).parents('.alum').hasClass('active')
      ? $(this).text('-')
      : $(this).text('+');
  });

  $('.icon.next').click(function(e) {
    $(this).parents('.alum')
      .css('background-image', "url('/i/cory2.jpg')");
  });
});

module.exports('kml_new', { });
