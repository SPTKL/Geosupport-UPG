$( document ).ready(function() {

    // Shift nav in mobile when clicking the menu.
    $(document).on('click', "[data-toggle='wy-nav-top']", function() {
      $("[data-toggle='wy-nav-shift']").toggleClass("shift");
      $("[data-toggle='rst-versions']").toggleClass("shift");
    });

    // Close menu when you click a link.
    $(document).on('click', ".wy-menu-vertical .current ul li a", function() {
      $("[data-toggle='wy-nav-shift']").removeClass("shift");
      $("[data-toggle='rst-versions']").toggleClass("shift");
    });

    $(document).on('click', "[data-toggle='rst-current-version']", function() {
      $("[data-toggle='rst-versions']").toggleClass("shift-up");
    });

    // Make tables responsive
    $("table.docutils:not(.field-list)").wrap("<div class='wy-table-responsive'></div>");

    hljs.initHighlightingOnLoad();

    $('table').addClass('docutils');


    // 
    // var buttons = $(".caption-text")
    //
    // for (var i=0;i<buttons.length;i++) {
    //   buttons[i].onclick = function(e) {
    //     e.preventDefault;
    //     debugger;
    //   }
    // }


});

window.SphinxRtdTheme = (function (jquery) {
    var stickyNav = (function () {
        var navBar,
            win,
            stickyNavCssClass = 'stickynav',
            applyStickNav = function () {
                if (navBar.height() <= win.height()) {
                    navBar.addClass(stickyNavCssClass);
                } else {
                    navBar.removeClass(stickyNavCssClass);
                }
            },
            enable = function () {
                applyStickNav();
                win.on('resize', applyStickNav);
            },
            init = function () {
                navBar = jquery('nav.wy-nav-side:first');
                win    = jquery(window);
            };
        jquery(init);
        return {
            enable : enable
        };
    }());
    return {
        StickyNav : stickyNav
    };
}($));

// The code below is a copy of @seanmadsen code posted Jan 10, 2017 on issue 803.
// https://github.com/mkdocs/mkdocs/issues/803
// This just incorporates the auto scroll into the theme itself without
// the need for additional custom.js file.
//
$(function() {
  $.fn.isFullyWithinViewport = function(){
      var viewport = {};
      viewport.top = $(window).scrollTop();
      viewport.bottom = viewport.top + $(window).height();
      var bounds = {};
      bounds.top = this.offset().top;
      bounds.bottom = bounds.top + this.outerHeight();
      return ( ! (
        (bounds.top <= viewport.top) ||
        (bounds.bottom >= viewport.bottom)
      ) );
  };
  if( $('li.toctree-l1.current').length && !$('li.toctree-l1.current').isFullyWithinViewport() ) {
    $('.wy-nav-side')
      .scrollTop(
        $('li.toctree-l1.current').offset().top -
        $('.wy-nav-side').offset().top -
        60
      );
  }
});
