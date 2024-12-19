(function ($) {
    'use strict';
    let windowWidth = $(window).width();

    const handleHeaderSticky = function(){
        $(window).scroll(function (e) {
            if ($(document).scrollTop() > $('.header').innerHeight()) {
                $('body').addClass('is-scroll');
            } else {
                $('body').removeClass('is-scroll');
            }
        });
    }

   /* const handleNavigationMobile = () => {
        if (windowWidth < 1200) {
            if ($("#header .header-navigation .header-navigation_list .header-navigation_mega").length) {
                $("#header .header-navigation").attr('id', 'header-navigation');
                $("#header .header-navigation .header-navigation_list .header-navigation_mega").each(function (index) {
                    $(this).prev().attr({
                        "href": "#header-navigation_mega_" + index,
                        "data-bs-toggle": "collapse",
                        'aria-expanded': false,
                        'class': 'header-navigation_mega--item'
                    });
                    $(this).attr({
                        "id": "header-navigation_mega_" + index,
                        "class": "collapse header-navigation_mega",
                        "data-bs-parent": "#header-navigation"
                    });

                    if ($(this).find('.mega-list').length > 0) {
                        $(this).find('.mega-list').each(function (index_sub) {
                            $(this).prev().attr({
                                "href": "#header-navigation_mega_sub_" + index + "_" + index_sub,
                                "data-bs-toggle": "collapse"
                            });
                            $(this).attr({
                                "id": "header-navigation_mega_sub_" + index + "_" + index_sub,
                                "class": "collapse mega-list",
                                "data-bs-parent": "#header-navigation_mega_" + index
                            });
                        })
                    }
                });

                $('.header-navigation_mega--item').click(function () {
                    $("#header-navigation .mega-list").collapse('hide');
                });
            }

            $('#call-navigation').click(function () {
                if (!$('body').hasClass('is-navigation')) {
                    $('body').addClass('is-navigation');
                } else {
                    $("#header-navigation .header-navigation_mega, #header-navigation .mega-list").collapse('hide');
                    $('body').removeClass('is-navigation');
                }
            });

            $('#header-overlay').click(function () {
                $("#header-navigation .header-navigation_mega, #header-navigation .mega-list").collapse('hide');
                $('body').removeClass('is-navigation');
            });
        }
    }*/

    const handleSliderHero = function () {
        if ($('#slider-hero').length) {
            new Swiper('#slider-hero .swiper', {
                speed: 1500,
                slidesPerView: 1,
                preloadImages: false,
                effect: 'slide',
                loop: true,
                autoplay: {
                    delay: 8000,
                    disableOnInteraction: false,
                },

                pagination: {
                    el: "#slider-hero .swiper-pagination",
                    clickable: true,
                    renderBullet: function (index, className) {
                        return '<span class="' + className + '">' + (index + 1) + "</span>";
                    },
                }
            });
        }
    }

    const handleSliderProduct = function () {
        if ($('.slider-product').length) {
            new Swiper('.slider-product .swiper', {
                slidesPerView: 1.5,
                spaceBetween: 15,
                speeds: 750,
                loop: true,
                autoplay: {
                    delay: 6000,
                },
                navigation: {
                    nextEl: '.slider-product .button-next',
                    prevEl: '.slider-product .button-prev',
                },
                breakpoints: {
                    375: {
                        slidesPerView: 2.5
                    },
                    992: {
                        slidesPerView: 3.5
                    },
                    1200: {
                        slidesPerView: 5
                    }
                }
            });
        }
    }

    const handleSliderRelated = function () {
        if ($('#related-product').length) {
            new Swiper('#related-product .swiper', {
                slidesPerView: 1.5,
                spaceBetween: 15,
                speeds: 750,
                loop: true,
                autoplay: {
                    delay: 6000,
                },
                navigation: {
                    nextEl: '#related-product .button-next',
                    prevEl: '#related-product .button-prev',
                },
                breakpoints: {
                    375: {
                        slidesPerView: 2.5
                    },
                    992: {
                        slidesPerView: 3.5
                    },
                    1200: {
                        slidesPerView: 5
                    }
                }
            });
        }
    }

    const handleSliderVideo = function () {
        if ($('#slider-video').length) {
            new Swiper('#slider-video .swiper', {
                slidesPerView: 1.5,
                speeds: 750,
                loop: true,
                autoplay: {
                    delay: 6000,
                },
                navigation: {
                    nextEl: '#slider-video .button-next',
                    prevEl: '#slider-video .button-prev',
                },
                breakpoints: {
                    375: {
                        spaceBetween: 10,
                        slidesPerView: 1.5
                    },
                    992: {
                        spaceBetween: 30,
                        slidesPerView: 3.5
                    },
                    1200: {
                        spaceBetween: 30,
                        slidesPerView: 3
                    }
                }
            });
        }
    }

    const handleSliderFeedback = function () {
        if ($('#slider-feedback').length) {
            new Swiper('#slider-feedback .swiper', {
                slidesPerView: 1.5,
                speeds: 750,
                loop: true,
                autoplay: {
                    delay: 6000,
                },
                navigation: {
                    nextEl: '#slider-feedback .button-next',
                    prevEl: '#slider-feedback .button-prev',
                },
                breakpoints: {
                    375: {
                        spaceBetween: 15,
                        slidesPerView: 1.5
                    },
                    992: {
                        spaceBetween: 30,
                        slidesPerView: 3.5
                    },
                    1200: {
                        spaceBetween: 30,
                        slidesPerView: 4
                    }
                }
            });
        }
    }

    const handleSliderBlogs = function () {
        if ($('#slider-blogs').length) {
            new Swiper('#slider-blogs .swiper', {
                slidesPerView: 1.5,
                speeds: 750,
                loop: true,
                autoplay: {
                    delay: 6000,
                },
                navigation: {
                    nextEl: '#slider-blogs .button-next',
                    prevEl: '#slider-blogs .button-prev',
                },
                breakpoints: {
                    375: {
                        spaceBetween: 10,
                        slidesPerView: 1.5
                    },
                    992: {
                        spaceBetween: 30,
                        slidesPerView: 3.5
                    },
                    1200: {
                        spaceBetween: 30,
                        slidesPerView: 4
                    }
                }
            });
        }
    }

    let [avatarThumb, avatarPhoto] = [];
    let handleSlideImageProduct = function () {
        if ($('#detail-thumb_photo').length > 0) {
            avatarThumb = new Swiper('#detail-thumb_photo .swiper', {
                loopAdditionalSlides: 0,
                spaceBetween: 10,
                slidesPerView: 4,
                breakpoints: {
                    320: {
                        slidesPerView: 3.5,
                    },
                    991: {
                        slidesPerView: 4.5,
                    },
                },
            });

            avatarPhoto = new Swiper('#detail-avatar_photo .swiper', {
                thumbs: {
                    swiper: avatarThumb,
                },
                slidesPerView: 1,
            });

            avatarPhoto.on('slideChangeTransitionStart', function () {
                avatarThumb.slideTo(avatarPhoto.activeIndex);
            });
        } else {
            avatarPhoto = new Swiper('#detail-avatar_photo .swiper', {
                slidesPerView: 1,
            });
        }
        handleZoomImageProduct($('#detail-avatar_photo [data-fancybox=product-avatar]'), avatarPhoto, avatarThumb);
    }

    const handleZoomImageProduct = function (elm, avatarPhoto, avatarThumb) {
        let i = 0;
        elm.click(function () {
            i = 0;
        });

        elm.fancybox({
            touch: true,
            beforeShow: function (instance, current) {
                let index = $(`[data-fancybox='product-avatar'][href='${current.src}']`).attr('data-index');
                avatarPhoto.slideTo(index - 1);
                if ($('#detail-thumb_photo').length > 0) {
                    avatarThumb.slideTo(index - 1);
                }
            },
        });
    }

    const setHeightNewsList = function () {
        if($('#slider-hero .swiper').length && $('#slider-hero .news-list').length) {
            $('#slider-hero .news-list').css('height', $('#slider-hero .swiper').height());
        };
    }
    const handleSliderPartner = function () {
        if ($('#swiperPartner').length) {
            new Swiper('#swiperPartner .swiper', {
                slidesPerView: 2.1,
                spaceBetween: 15,
                speeds: 750,
                loop: true,
                autoplay: {
                    delay: 6000,
                },
                navigation: {
                    nextEl: '#swiperPartner .button-next',
                    prevEl: '#swiperPartner .button-prev',
                },
                breakpoints: {
                    375: {
                        slidesPerView: 2.5
                    },
                    768: {
                        slidesPerView: 3.5
                    },
                    1024: {
                        slidesPerView: 4.5
                    },
                    1200: {
                        slidesPerView: 5.5
                    },
                    1600: {
                        slidesPerView: 6
                    }
                }
            });
        }
    }

    $(function () {
        handleHeaderSticky();
        /*handleNavigationMobile();*/
        handleSliderHero();
        handleSliderProduct();
        handleSliderVideo();
        handleSliderFeedback();
        handleSliderBlogs();
        handleSlideImageProduct();
        setHeightNewsList();
        handleSliderRelated();
        handleSliderPartner();

        $(window).resize(() => {
            windowWidth = $(window).width();
           /* handleNavigationMobile();*/
            setHeightNewsList();
        });
        if ($('#slider-introduction').length && $('#slider-introduction_content').length) {
            let sliderIntroductionContent = new Swiper('#slider-introduction_content .swiper', {
                speed: 500,
                slidesPerView: 1,
                loop: false,
                autoplay: {
                    delay: 5000,
                    disableOnInteraction: true,
                },
                watchSlidesProgress: true,
                effect: 'fade',
                fadeEffect: {
                    crossFade: true
                },
                grabCursor: true,
            });

            let sliderIntroduction = new Swiper('#slider-introduction .slider-introduction .swiper', {
                speed: 500,
                slidesPerView: 1,
                loop: false,
                autoplay: {
                    delay: 5000,
                    disableOnInteraction: true,
                },
                watchSlidesProgress: true,
                effect: "cards",
                grabCursor: true,
                navigation: {
                    nextEl: "#slider-introduction .slider-navigation .slider-navigation_next",
                    prevEl: "#slider-introduction .slider-navigation .slider-navigation_prev",
                }, pagination: {
                    el: "#slider-introduction .slider-pagination",
                    clickable: true,
                    renderBullet: function (index, className) {
                        return `<span class="${className}">0${index + 1}</span>`;
                    },
                }, thumbs: {
                    swiper: sliderIntroductionContent,
                },
            });

            sliderIntroductionContent.on('slideChange', function (elm) {
                sliderIntroduction.slideTo(elm.realIndex)
                $('.changeSlider').removeClass('active');
                $('.changeSlider[data-index=' + elm.realIndex + ']').addClass('active');
            });

            if ($('.changeSlider').length > 0) {
                $('.changeSlider').click(function () {
                    $('.changeSlider').removeClass('active');
                    $(this).addClass('active');

                    sliderIntroduction.slideTo($(this).attr('data-index'));
                    sliderIntroductionContent.slideTo($(this).attr('data-index'));
                });
            }
        }
    });
})(jQuery);
