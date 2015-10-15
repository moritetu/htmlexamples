(function($) {
  $(function() {
    var $topbar = $("#top-bar"),
	$extbar = $("#ext-bar"),
	$toolbutton = $("#tool-more a")
    ;

    $("#tool-more").click(function() {
      if ($extbar.hasClass("tool-off")) {
	$extbar.removeClass("tool-off").addClass("tool-on");
	$topbar.addClass("tool-off");
	$toolbutton.addClass("button-on");
      } else {
	$extbar.removeClass("tool-on").addClass("tool-off");
	$topbar.removeClass("tool-off");
	$toolbutton.removeClass("button-on");
      }
    });
  });
})(jQuery);
