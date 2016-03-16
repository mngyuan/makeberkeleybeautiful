/* thanks for peeking at the source!
 * you can find it in likely nicer form at
 * github.com/phorust/makeberkeleybeautiful
 */

function changeImage(index) {
  $('#explanation-bg').css({
    'background-image': 'url("i/image_' + index + '.jpg")',
    'background-size': 'cover',
    'background-position': 'center center'
  });
}

function imageTicker(index) {
  index = index % 3;

  changeImage(index);

  setTimeout(function() {
    imageTicker(index + 1);
  }, 5000);
}

$(document).ready(_ => {
  $('.icon.plus').click(function(e) {
    $(this).parents('.alum').toggleClass('active');
    if ($(this).parents('.alum').hasClass('active')) {
      $(this).text('-')
      $('html, body').animate({
        scrollTop: $(this).parents('.alum').offset().top
      }, 1200);
    } else {
      $(this).text('+');
    }
  });

  $('.icon.next').click(function(e) {
    $(this).parents('.alum')
      .css('background-image', "url('i/cory2.jpg')");
  });

  imageTicker(0);
});

module.exports('kml_new', { });
