! function(e) {
    "use strict";

    function a() {
        e(window).width();
        var a = e(window).height();
        e(".error-page, .menu-full-overlay, .preloader .centrize").css({
            height: a
        })
    }
    e(window).on("load", function() {
        e("body").imagesLoaded({}, function() {
            var a = e(".preloader");
            a.addClass("loaded"), a.find(".centrize").fadeOut(),
                function() {
                    var a = window.innerWidth / 2,
                        s = window.innerHeight / 2,
                        i = {
                            el: e(".cursor"),
                            x: window.innerWidth / 2,
                            y: window.innerHeight / 2,
                            w: 30,
                            h: 30,
                            update: function() {
                                var e = this.x - this.w / 2,
                                    a = this.y - this.h / 2;
                                this.el.css({
                                    transform: "translate3d(" + e + "px," + a + "px, 0)"
                                })
                            }
                        };

                    function l(e, a, s) {
                        return (1 - s) * e + s * a
                    }
                    e(window).mousemove(function(e) {
                        a = e.clientX, s = e.clientY
                    }), e("a, .swiper-pagination, .swiper-button-prev, .swiper-button-next, button, .button, .btn, .lnk").hover(function() {
                        e(".cursor").addClass("cursor-zoom")
                    }, function() {
                        e(".cursor").removeClass("cursor-zoom")
                    }), setInterval(function() {
                        i.x = l(i.x, a, .1), i.y = l(i.y, s, .1), i.update()
                    }, 1e3 / 60), e(".contacts-form").length && e("#cform").validate({
                        rules: {
                            name: {
                                required: !0
                            },
                            message: {
                                required: !0
                            },
                            email: {
                                required: !0,
                                email: !0
                            }
                        },
                        success: "valid",
                        submitHandler: function() {
                            e.ajax({
                                url: "mailer/feedback.php",
                                type: "post",
                                dataType: "json",
                                data: "name=" + e("#cform").find('input[name="name"]').val() + "&email=" + e("#cform").find('input[name="email"]').val() + "&message=" + e("#cform").find('textarea[name="message"]').val(),
                                beforeSend: function() {},
                                complete: function() {},
                                success: function(a) {
                                    e("#cform").fadeOut(), e(".alert-success").delay(1e3).fadeIn()
                                }
                            })
                        }
                    })
                }(), e(".scroll-animate").scrolla({
                    once: !0,
                    mobile: !0
                })
        })
    }), e(function() {
        if (a(), e(window).resize(function() {
                a()
            }), e(".js-parallax").jarallax({
                speed: .65,
                type: "scroll"
            }), e(".section-parallax-1").length && (e(".section-parallax-1").prepend('<div class="pbefore"></div><div class="pafter"></div>'), e(".section-parallax-1 .pbefore").jarallax({
                speed: .85
            }), e(".section-parallax-1 .pafter").jarallax({
                speed: .85
            })), e(".section-parallax-2").length && (e(".section-parallax-2").prepend('<div class="pbefore"></div><div class="pafter"></div>'), e(".section-parallax-2 .pbefore").jarallax({
                speed: .85
            }), e(".section-parallax-2 .pafter").jarallax({
                speed: .85
            })), e(".section-parallax-3").length && (e(".section-parallax-3").prepend('<div class="pbefore"></div><div class="pafter"></div>'), e(".section-parallax-3 .pbefore").jarallax({
                speed: .85
            }), e(".section-parallax-3 .pafter").jarallax({
                speed: .85
            })), e(".section-parallax-4").length && (e(".section-parallax-4").prepend('<div class="pbefore"></div><div class="pafter"></div>'), e(".section-parallax-4 .pbefore").jarallax({
                speed: .85
            }), e(".section-parallax-4 .pafter").jarallax({
                speed: .85
            })), e(".section-parallax-5").length && (e(".section-parallax-5").prepend('<div class="pafter"></div>'), e(".section-parallax-5 .pbefore").jarallax({
                speed: .85
            }), e(".section-parallax-5 .pafter").jarallax({
                speed: .85
            })), Splitting(), e(window).width() > 1200) skrollr.init();
        e(".header").length && e(window).on("scroll", function(a) {
            e(window).scrollTop() > 100 ? (e(".header").addClass("sticky"), this.oldScroll < this.scrollY ? e(".header").addClass("animate-in") : e(window).scrollTop() < 200 && e(".header").addClass("animate-out")) : (e(".header").removeClass("sticky"), e(".header").removeClass("animate-in"), e(".header").removeClass("animate-out")), this.oldScroll = this.scrollY
        });
        var s = e.cookie("skin");
        "dark" === s && e("body").removeClass("light-skin"), "light" === s && e("body").addClass("light-skin"), e("body").hasClass("light-skin") && e(".header .switcher-btn").addClass("active"), e(".header").on("click", ".switcher-btn", function() {
            return e(this).hasClass("active") ? (e(this).removeClass("active"), e("body").removeClass("light-skin"), e.cookie("skin", "dark", {
                expires: 7,
                path: "/"
            })) : (e(this).addClass("active"), e("body").addClass("light-skin"), e.cookie("skin", "light", {
                expires: 7,
                path: "/"
            })), !1
        }), e(".header").on("click", ".menu-btn", function() {
            if (e(this).hasClass("active")) e(this).removeClass("active"), e(this).addClass("no-touch"), e("body").removeClass("no-scroll"), e(".menu-full-overlay").removeClass("is-open"), e(".menu-full-overlay").removeClass("has-scroll"), e(".menu-full-overlay").removeClass("animate-active"), setTimeout(function() {
                e(".menu-full-overlay").removeClass("visible"), e(".menu-btn").removeClass("no-touch")
            }, 1e3);
            else {
                e(this).addClass("active no-touch");
                var a = e(window).height();
                e(".menu-full-overlay").css({
                    height: a
                }), e("body").addClass("no-scroll"), e(".menu-full-overlay").addClass("is-open visible"), setTimeout(function() {
                    e(".menu-full-overlay").addClass("has-scroll animate-active"), e(".menu-btn").removeClass("no-touch")
                }, 1e3)
            }
            return !1
        }), e(".menu-full").on("click", "a", function() {
            e(this).parent().hasClass("has-children") || e(".header .menu-btn.active").trigger("click")
        }), e(".menu-full .has-children > a").append('<i class="fas fa-chevron-down"></i>'), e(".menu-full").on("click", ".has-children > a", function() {
            return e(this).closest("li").hasClass("opened") ? (e(this).closest("li").removeClass("opened"), e(this).closest("li").addClass("closed"), e(this).closest("li").find("> ul").slideUp()) : (e(this).closest("ul").find("> li").removeClass("closed").removeClass("opened"), e(this).closest("ul").find("> li").find("> ul").slideUp(), e(this).closest("li").addClass("opened"), e(this).closest("li").find("> ul").slideDown()), !1
        });
        new Swiper(".js-testimonials", {
            slidesPerView: 1,
            spaceBetween: 50,
            loop: !1,
            speed: 1e3,
            pagination: !1,
            navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev"
            }
        });
        var i = e(".works-items");
        i.imagesLoaded(function() {
            i.isotope({
                itemSelector: ".works-col",
                percentPosition: !0
            })
        });
        var l = e(".m-gallery");
        l.imagesLoaded(function() {
            l.isotope({
                itemSelector: ".col-lg-6",
                percentPosition: !0
            })
        }), e(".filter-links").on("click", "a", function() {
            var a = e(this).attr("data-href");
            return i.isotope({
                filter: a
            }), e(".filter-links a").removeClass("active"), e(this).addClass("active"), e(a).find(".scroll-animate").hasClass("animate__active") || e(a).find(".scroll-animate").addClass("animate__active"), !1
        }), e(".has-popup-image").magnificPopup({
            type: "image",
            closeOnContentClick: !0,
            mainClass: "mfp-fade",
            image: {
                verticalFit: !0
            }
        }), e(".has-popup-video").magnificPopup({
            disableOn: 700,
            type: "iframe",
            iframe: {
                patterns: {
                    youtube_short: {
                        index: "youtu.be/",
                        id: "youtu.be/",
                        src: "https://www.youtube.com/embed/%id%?autoplay=1"
                    }
                }
            },
            removalDelay: 160,
            preloader: !1,
            fixedContentPos: !1,
            mainClass: "mfp-fade",
            callbacks: {
                markupParse: function(e, a, s) {
                    e.find("iframe").attr("allow", "autoplay")
                }
            }
        }), e(".has-popup-audio").magnificPopup({
            disableOn: 700,
            type: "iframe",
            removalDelay: 160,
            preloader: !1,
            fixedContentPos: !1,
            mainClass: "mfp-fade"
        }), e(".tab-menu").on("click", ".tab-btn", function() {
            var a = e(this).attr("href");
            return e(this).closest(".tab-menu").find("li").removeClass("active"), e(this).closest("li").addClass("active"), e(this).closest(".tabs").find("> .tab-item").hide(), e(a).fadeIn(), !1
        }), e(".collapse-item").on("click", ".collapse-btn", function() {
            e(this).closest(".collapse-item").hasClass("active") ? (e(this).closest(".collapse-item").find(".collapse-content").slideUp(), e(this).closest(".collapse-item").removeClass("active"), e(this).removeClass("active")) : (e(this).closest(".collapse-item").find(".collapse-content").slideDown(), e(this).closest(".collapse-item").addClass("active"), e(this).addClass("active"))
        }), e(".m-video-large .video").on("click", ".play, .img", function() {
            return e(this).closest(".video").addClass("active"),
                function(e) {
                    var a = e.data("src");
                    e.attr("src", a)
                }(e(this).closest(".video").find(".js-video-iframe")), !1
        })
    })
}(jQuery);

(function($) {
    'use strict';

    var Tawk_API = Tawk_API || {},
        Tawk_LoadStart = new Date();
    (function() {
        var s1 = document.createElement("script"),
            s0 = document.getElementsByTagName("script")[0];
        s1.async = true;
        s1.src = 'https://embed.tawk.to/62961d197b967b1179922b9c/1g4d7oaso';
        s1.charset = 'UTF-8';
        s1.setAttribute('crossorigin', '*');
        s0.parentNode.insertBefore(s1, s0);
    })();

})(jQuery);