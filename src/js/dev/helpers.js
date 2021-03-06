const BODY = $('body');
const WINDOW = $(window);

const echo = (arg) => {
  console.log(arg);
};

// detect device width
const detectDevice = (w) => {
  if (!window.matchMedia) return false;
  return window.matchMedia(`(max-width: ${w}px)`).matches;
};
// let detectMob = detectDevice(767);

// detect touch device
const isTouchDevice = () => 'ontouchstart' in window;
if (!isTouchDevice()) {
  BODY.addClass('no-touch');
}

export { BODY, WINDOW, echo, detectDevice, isTouchDevice };

// clear placeholder
(function() {
  const el = $('input, textarea');
  el.focus(function() {
    $(this).data('placeholder', $(this).attr('placeholder'));
    $(this).attr('placeholder', '');
  });
  el.blur(function() {
    $(this).attr('placeholder', $(this).data('placeholder'));
  });
}());