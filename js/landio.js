(function ($) {
    "use strict";

    const onScrollAnimations = function () {
        $('.wp-1').waypoint(function () {
            $('.wp-1').addClass('animated fadeInUp');
        }, {
            offset: '75%'
        });
        $('.wp-2').waypoint(function () {
            $('.wp-2').addClass('animated fadeInUp');
        }, {
            offset: '75%'
        });
        $('.wp-3').waypoint(function () {
            $('.wp-3').addClass('animated fadeInUp');
        }, {
            offset: '75%'
        });
        $('.wp-4').waypoint(function () {
            $('.wp-4').addClass('animated fadeIn');
        }, {
            offset: '75%'
        });
        $('.wp-5').waypoint(function () {
            $('.wp-5').addClass('animated fadeInRight');
        }, {
            offset: '50%'
        });
        $('.wp-6').waypoint(function () {
            $('.wp-6').addClass('animated fadeInLeft');
        }, {
            offset: '50%'
        });
        $('.wp-7').waypoint(function () {
            $('.wp-7').addClass('animated fadeInUp');
        }, {
            offset: '60%'
        });
        $('.wp-8').waypoint(function () {
            $('.wp-8').addClass('animated fadeInUp');
        }, {
            offset: '60%'
        });
    };

    const inputPlaceholders = function () {
        $('input, textarea').placeholder();
    };

    const navMobileCollapse = function () {
        // avoid having both mobile navs opened at the same time
        $('#collapsingMobileUser').on('show.bs.collapse', function () {
            $('#collapsingNavbar').removeClass('in');
            $('[data-target="#collapsingNavbar"]').attr('aria-expanded', 'false');
        });

        $('#collapsingNavbar').on('show.bs.collapse', function () {
            $('#collapsingMobileUser').removeClass('in');
            $('[data-target="#collapsingMobileUser"]').attr('aria-expanded', 'false');
        });

        // dark navbar
        $('#collapsingMobileUserInverse').on('show.bs.collapse', function () {
            $('#collapsingNavbarInverse').removeClass('in');
            $('[data-target="#collapsingNavbarInverse"]').attr('aria-expanded', 'false');
        });

        $('#collapsingNavbarInverse').on('show.bs.collapse', function () {
            $('#collapsingMobileUserInverse').removeClass('in');
            $('[data-target="#collapsingMobileUserInverse"]').attr('aria-expanded', 'false');
        });
    };

    const navSearch = function () {

        $('.nav-dropdown-search')
            .on('show.bs.dropdown', function () { // hide first nav items when search is opened
                $(this).siblings().not('.navbar-nav .dropdown').addClass('sr-only');
            })
            .on('shown.bs.dropdown', function () { // cursor focus
                $('.navbar-search-input').focus();
            })
            .on('hide.bs.dropdown', function () { // show all nav items when search is closed
                $(this).siblings().removeClass('sr-only');
            });
    };

    const scrollToTop = function () {
        $('.scroll-top').on('click', function () {
            $('html, body').animate({
                scrollTop: 0
            }, 1000);
            return false;
        });
    };

    const donutChart = function () {
        const doughnutData = [
            {
                value: 324,
                color: "#5e98e3",
                highlight: "#424753",
                label: "Completed"
            },
            {
                value: 34,
                color: "#59d0bd",
                highlight: "#424753",
                label: "In backlog"
            },
            {
                value: 20,
                color: "#e8e9ec",
                highlight: "#424753",
                label: "Without ticket"
            }
        ];

        const c = document.getElementById("chart-area");

        if (c != null) {
            const ctx = c.getContext("2d");
            window.myDoughnut = new Chart(ctx).Doughnut(doughnutData, {
                responsive: true,
                percentageInnerCutout: 80
            });
        } else {
            return false
        }
    };

    const initVideoModal = function () {

        // VIMEO

        $('#videoModal')
            .on('shown.bs.modal', function () {
                $("#vimeo-play").vimeo("play");
            })
            .on('hidden.bs.modal', function () {
                $("#vimeo-play").vimeo("pause");
            });

        // YOUTUBE

        $('#youtube-trigger').click(function () {

            const videoSRC = $(this).attr("data-video")
            const videoSRCauto = videoSRC + "?autoplay=1&html5=1&rel=0&showinfo=0";

            $('#youtubeModal')
                .on('shown.bs.modal', function () {
                    $('#youtube-play').attr('src', videoSRCauto);
                })
                .on('hidden.bs.modal', function () {
                    $('#youtube-play').attr('src', videoSRC);
                });

        });

    };

    const initVideo = function () {
        const $section = $(".section-video");

        $section.find("video").each(function () {
            const $this = $(this);

            videojs($this.attr("id"), {
                controlBar: {
                    timeDivider: false,
                    fullscreenToggle: false,
                    playToggle: false,
                    remainingTimeDisplay: false
                },
                "height": "auto",
                "width": "auto"
            }).ready(function () {
                const aspectRatio = 5 / 12; // aspect ratio 12:5 (video frame 960x400)
                function resizeVideoJS() {
                    const $parent = $this.parent();
                    const width = $section.width();

                    $parent.width(width);
                    $parent.height(width * aspectRatio);
                }

                resizeVideoJS();
                window.onresize = resizeVideoJS;
            });
        })
    };

    $(document).ready(function () {
        onScrollAnimations();
        inputPlaceholders();
        navMobileCollapse();
        navSearch();
        initVideo();
        initVideoModal();
        scrollToTop();
        // donutChart();
    });
})(jQuery);
