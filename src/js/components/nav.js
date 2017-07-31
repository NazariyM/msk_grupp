import { BODY, WINDOW } from '../dev/helpers';

(function () {
  const $nav = $('.js-nav');
  const $navBtn = $('.js-nav-toggle');

  $navBtn.on('click', function (e) {
    const $this = $(this);
    $this.toggleClass('active');
    BODY.toggleClass('is-locked');
    $nav.slideToggle().css('display', 'flex');
  });

  WINDOW.on('resize', () => {
    $navBtn.removeClass('active');
    BODY.removeClass('is-locked');
    $nav.removeAttr('style');
  });
}());