$(Load);
function Load() {
    /* For the sticky navigation */
    $(".js--section-education").waypoint(
        function (direction) {
            if (direction == "down") {
                $("nav").addClass("sticky");
            } else {
                $("nav").removeClass("sticky");
            }
        },
        {
            offset: "80px;"
        }
    );


    /* Scroll on buttons */
    $(".js--scroll-to-interest").click(function () {
        $("html, body").animate(
            { scrollTop: $(".js--section-interest").offset().top },
            800
        );
    });

    $(".js--scroll-to-education").click(function () {
        $("html, body").animate(
            { scrollTop: $(".js--section-education").offset().top },
            500
        );
    });

    $(".js--scroll-to-home").click(function () {
        $("html, body").animate(
            { scrollTop: $("header").offset().top },
            800
        );
    });

    $(".js--scroll-to-skills").click(function () {
        $("html, body").animate(
            { scrollTop: $(".js--section-skills").offset().top },
            800
        );
    });

    /*Navigation Scroll */
    $('a[href*="#"]')
        // Remove links that don't actually link to anything
        .not('[href="#"]')
        .not('[href="#0"]')
        .click(function (event) {
            // On-page links
            if (
                location.pathname.replace(/^\//, "") ==
                this.pathname.replace(/^\//, "") &&
                location.hostname == this.hostname
            ) {
                // Figure out element to scroll to
                var target = $(this.hash);
                target = target.length
                    ? target
                    : $("[name=" + this.hash.slice(1) + "]");
                // Does a scroll target exist?
                if (target.length) {
                    // Only prevent default if animation is actually gonna happen
                    event.preventDefault();
                    $("html, body").animate(
                        {
                            scrollTop: target.offset().top
                        },
                        1000,
                        function () {
                            // Callback after animation
                            // Must change focus!
                            var $target = $(target);
                            $target.focus();
                            if ($target.is(":focus")) {
                                // Checking if the target was focused
                                return false;
                            } else {
                                $target.attr("tabindex", "-1"); // Adding tabindex for elements not focusable
                                $target.focus(); // Set focus again
                            }
                        }
                    );
                }
            }
        });

    /* Animations on scroll */
    $(".js--wp-1").waypoint(
        function (direction) {
            if (direction == "down") {
                $(".js--wp-1").removeClass("fadeOut").addClass("animated fadeIn");
            }
        },
        {
            offset: "70%;"
        }
    );

    $(".js--wp-1").waypoint(
        function (direction) {
            if (direction == "up") {
                $(".js--wp-1").addClass("fadeOut").removeClass("animated fadeIn");
            }
        },
        {
            offset: "90%;"
        }
    );


    $(".js--wp-2-left").waypoint(
        function (direction) {
            if (direction == "down") {
                $(".js--wp-2-left").removeClass("zoomOut").addClass("animated fadeInLeft");
            }
        },
        {
            offset: "80%;"
        }
    );

    $(".js--wp-2-left").waypoint(
        function (direction) {
            if (direction == "up") {
                $(".js--wp-2-left").removeClass("animated fadeInLeft").addClass("zoomOut");
            }
        },
        {
            offset: "100%;"
        }
    );

    $(".js--wp-2-right").waypoint(
        function (direction) {
            if (direction == "down") {
                $(".js--wp-2-right").removeClass("zoomOut").addClass("animated fadeInRight");
            }
        },
        {
            offset: "60%;"
        }
    );

    $(".js--wp-2-right").waypoint(
        function (direction) {
            if (direction == "up") {
                $(".js--wp-2-right").removeClass("animated fadeInRight").addClass("zoomOut");
            }
        },
        {
            offset: "140%;"
        }
    );

    $(".js--wp-3").waypoint(
        function (direction) {
            if (direction == "down") {
                $('.skillbar').each(function () {
                    $(this).find('.skillbar-bar').animate({
                        width: $(this).attr('data-percent')
                    }, 1500);
                });
            }
        },
        {
            offset: "90%;"
        }
    );


    $(".js--wp-3").waypoint(
        function (direction) {
            if (direction == "up") {
                $('.skillbar').each(function () {
                    $(this).find('.skillbar-bar').css("width", "0");
                });
            }
        },
        {
            offset: "90%;"
        }
    );

    /* Mobile nav icon */
    $(".js--nav-icon").click(function () {
        var nav = $('.js--main-nav');
        var icon = $('.js--nav-icon i');

        nav.slideToggle(400);
        if (icon.hasClass('ion-md-menu')) {
            icon.removeClass('ion-md-menu').addClass('ion-md-close');
        }
        else {
            icon.removeClass('ion-md-close').addClass('ion-md-menu');
        }
        // close

    });

}
