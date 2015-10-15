(function($) {
  $(function () {
    var scroll_duration = 600;

    var $scroll_up = $(".scroll-up"),
	$scroll_mid = $(".scroll-mid"),
	$scroll_down = $(".scroll-down")
    ;

    $scroll_up.click(function() {
      $("body,html").animate({scrollTop: 0}, scroll_duration);
      return false;
    });

    $scroll_down.click(function() {
      $("body,html").animate({scrollTop: $(document).height()}, scroll_duration);
      return false;
    });

    $scroll_mid.click(function() {
      return false;
    });
    
    var scroll_event_handler = (function() {
      var button_off = "button-off";

      return function () {
	var pageHeight = $(document).height() - $(window).height(),
	    scrollTop = $(window).scrollTop()
	;
	if (scrollTop >= pageHeight) {
	  $scroll_up.removeClass(button_off);
	  $scroll_down.addClass(button_off);
        } else if (scrollTop <= 1) {
          $scroll_up.addClass(button_off);
	  $scroll_down.removeClass(button_off);
        } else {
  	  $.each([$scroll_up, $scroll_down] ,function(i, elm) {
	    elm.removeClass(button_off);
	  });
	}
      };
    })();

    scroll_event_handler();
    $(window).on("scroll resize", scroll_event_handler);
  });
})(jQuery);
