const stickyHeader = _ => {
  const win = $(window);
  const postHeader = $('.post-header');

  if (win.scrollTop() <= $('.post-content').offset().top - postHeader.outerHeight(true)) {
    postHeader.removeClass('sticky');
  } else if (win.scrollTop() >= postHeader.offset().top) {
    postHeader.addClass('sticky');
  }
};

$(document).ready(_ => {
  $(window).scroll(stickyHeader);
  stickyHeader();

  $('.video-wrapper').fitVids();
});
