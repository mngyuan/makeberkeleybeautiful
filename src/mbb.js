/* thanks for peeking at the source!
 * you can find it in likely nicer form at
 * github.com/phorust/makeberkeleybeautiful
 */

// function changeImage(index) {
//   $('#explanation-bg').css({
//     'background-image': 'url("i/image_' + index + '.jpg")',
//     'background-size': 'cover',
//     'background-position': 'center center'
//   });
// }

// function imageTicker(index) {
//   index = index % 3;

//   changeImage(index);

//   setTimeout(function() {
//     imageTicker(index + 1);
//   }, 5000);
// }

function scrollAnimate(container) {
    $('html, body').animate({
      scrollTop: $(container).offset().top
    }, 'slow');
  };

$(document).ready(_ => {
  $('#arrow-wrapper').click(function() {
    scrollAnimate('#tier-container');
  });

  // imageTicker(0);
});

module.exports('kml_new', { });
