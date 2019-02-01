"use strict";

jQuery.getUrlParam = function(b) {
    var c = new RegExp("(^|&)" + b + "=([^&]*)(&|$)"), d = window.location.search.substr(1).match(c);
    return null == d ? null : unescape(d[2]);
}, void new Vue({
    el: "#vue",
    data: {
        ieFG: !1,
        isScroll: !1,
        isOpen: !1,
        isLoaded: !1,
        sendData: {
            name: "",
            company: "",
            email: "",
            phone: "",
            msg: ""
        }
    },
    created: function() {
        window.addEventListener("scroll", this.ctrlScroll), window.addEventListener("orientationchange", this.avoidAnriod);
    },
    mounted: function() {
        var _this = this;
        if (this.chkIE() <= 10) return this.ieFG = !0, void (location.href = "index_ie.html");
        if (this.getMobileOperatingSystem()) document.querySelector("body").classList.add("android");
        this.kvEffect(), this.howEffect(), this.marketEffect(), this.mediaEffect(), this.workEffect(), 
        this.rwdEffect(), this.caseEffect(), this.clientEffect(), this.formEffect(), this.mapEffect(), 
        this.isLoaded = !0, this.$nextTick(function() {
            if ("contact" == $.getUrlParam("tab")) setTimeout(function() {
                _this.ctrlMove(".contact", !1);
            }, 1e3);
            new WOW({
                offset: window.innerWidth <= 1025 ? 100 : 200
            }).init();
        });
    },
    methods: {
        ctrlScroll: function() {
            var scrollY = window.scrollY || document.documentElement.scrollTop;
            this.isScroll = 0 < scrollY ? !0 : !1;
            var headerHeight = document.querySelector(".header-index").offsetHeight, marketTop = document.querySelector(".marketing").offsetTop, lineCount = document.querySelectorAll(".marketing .bg-line .ani_start");
            if (marketTop - headerHeight < scrollY && 0 < lineCount.length) $.each($(".marketing .bg-line .ani_start"), function(key) {
                var _this2 = this;
                setTimeout(function() {
                    $(_this2).removeClass("ani_start");
                }, 150 * key);
            });
        },
        ctrlMove: function(target, isMenu) {
            if (isMenu) this.isOpen = !1;
            var offset = -1 * document.querySelector(".header-index").offsetHeight;
            if (".contact" == target) if (isMobile.phone) offset *= 2; else offset *= 2.9;
            this.$scrollTo(target, 500, {
                offset: offset,
                onDone: function() {}
            });
        },
        kvEffect: function() {
            var imgWidth = document.querySelector(".kv .slogan").offsetWidth;
            TweenMax.set(".kv .slogan img", {
                width: imgWidth,
                maxWidth: imgWidth,
                minWidth: imgWidth
            }), TweenMax.set(".kv .slogan", {
                width: 0
            }), TweenMax.to(".kv .slogan", .75, {
                width: imgWidth,
                delay: .75,
                onComplete: function() {
                    TweenMax.set([ ".kv .slogan", ".kv .slogan img" ]);
                }
            });
            var timer, mouseX = 0, mouseY = 0, xp = 0, yp = 0, circle = $("#circle");
            window.addEventListener("mousemove", function(e) {
                circle.addClass("moving"), mouseX = e.clientX - 110, mouseY = e.clientY - 110, clearTimeout(timer), 
                timer = setTimeout(function() {
                    circle.removeClass("moving");
                }, 3e3);
            }), setInterval(function() {
                xp += (mouseX - xp) / 6, yp += (mouseY - yp) / 6, circle.css({
                    left: xp + "px",
                    top: yp + "px"
                });
            }, 30);
        },
        howEffect: function() {
            if (isMobile.phone || $(window).width() < 768) $(".how .howBox li").removeAttr("data-wow-delay");
        },
        marketEffect: function() {
            function autoHeightCircle() {
                var circle = $(".circle--rotate"), circleInner = $(".animate-wrapper"), circleH = circle.width(), circleInnerH = circleInner.width();
                circle.height(circleH), circleInner.height(circleInnerH);
            }
            $("div").each(function() {
                var url = $(this).attr("data-image");
                if (url) $(this).css("background-image", "url(" + url + ")");
            }), $("section").each(function() {
                var url = $(this).attr("data-image");
                if (url) $(this).css("background-image", "url(" + url + ")");
            }), $("#circle--rotate").circle({
                autoPlay: !0,
                delay: 3500
            }), autoHeightCircle(), window.addEventListener("resize", function() {
                autoHeightCircle();
            });
        },
        mediaEffect: function() {
            var canvas = document.querySelector("canvas"), c = canvas.getContext("2d"), quality = c.backingStorePixelRatio || c.webkitBackingStorePixelRatio || c.mozBackingStorePixelRatio || c.msBackingStorePixelRatio || c.oBackingStorePixelRatio || c.backingStorePixelRatio || 1, ratio = (window.devicePixelRatio || 1) / quality;
            console.log(ratio), canvas.width = window.innerWidth * ratio, canvas.height = (isMobile.phone ? window.innerHeight : 625) * ratio, 
            canvas.style.width = window.innerWidth + "px", canvas.style.height = isMobile.phone ? window.innerHeight : "625px", 
            this.$nextTick(function() {
                function Circle(x, y, dx, dy, radius, isImg, img_src) {
                    this.x = x, this.y = y, this.dx = dx, this.dy = dy, this.radius = radius, this.minRadius = radius, 
                    this.color = colorArray[Math.floor(Math.random() * colorArray.length)], this.isImg = isImg || !1, 
                    this.img_src = img_src || null, this.draw = function() {
                        if (this.isImg) c.drawImage(this.img_src, this.x, this.y, this.radius, this.radius); else c.beginPath(), 
                        c.arc(this.x, this.y, this.radius, 0, 2 * Math.PI, !1), c.fillStyle = this.color, 
                        c.fill();
                    }, this.update = function() {
                        if (this.x + this.radius > canvas.width || this.x - this.radius < 0) this.dx = -this.dx;
                        if (this.y + this.radius > canvas.height || this.y - this.radius < 0) this.dy = -this.dy;
                        this.y += this.dy, this.x += this.dx;
                        var max = this.isImg ? imgMaxRadius : maxRadius;
                        if (mouse.x - this.x - this.radius / 2 < 100 && -100 < mouse.x - this.x - this.radius / 2 && mouse.y - this.y - this.radius / 2 < 100 && -100 < mouse.y - this.y - this.radius / 2) {
                            if (this.radius < max) this.radius += 1;
                        } else if (this.radius > this.minRadius) this.radius -= 1;
                        this.draw();
                    };
                }
                c.setTransform(ratio, 0, 0, ratio, 0, 0);
                var mouse = {
                    x: void 0,
                    y: void 0
                }, maxRadius = 25, imgMaxRadius = 150, colorArray = [ "rgba(99, 84, 75, 0.61)", "rgba(196, 126, 33, 0.6)", "rgba(194, 138, 48, 0.5)", "rgba(79, 69, 63, 0.65)" ];
                window.addEventListener("mousemove", function(event) {
                    mouse.x = event.pageX, mouse.y = event.pageY - document.querySelector(".mediaPartner").offsetTop;
                }), window.addEventListener("resize", function() {
                    canvas.width = window.innerWidth * ratio, canvas.height = (isMobile.phone ? window.innerHeight : 625) * ratio, 
                    canvas.style.width = window.innerWidth + "px", canvas.style.height = isMobile.phone ? window.innerHeight : "625px", 
                    c.setTransform(ratio, 0, 0, ratio, 0, 0);
                });
                for (var circleArray = [], i = 0; i < 300; i++) {
                    var radius = 4 * Math.random() + 1, x = (Math.random() * (canvas.width - 2 * radius) + radius) / ratio, dx = Math.random() - .5, y = (Math.random() * (canvas.height - 2 * radius) + radius) / ratio, dy = Math.random() - .5;
                    circleArray.push(new Circle(x, y, dx, dy, radius));
                }
                [ "01", "apple", "cn", "ebc", "eco", "et", "fb", "free", "gg", "gon", "ig", "line", "mirror", "now", "one", "ptt", "setn", "son", "tvbs", "udn", "us", "yahoo", "yt" ].forEach(function(obj) {
                    var logoImg = new Image();
                    logoImg.src = "img/media-" + obj + ".png";
                    var radius = isMobile.phone ? Math.random() + 60 : Math.random() + 60, x = (Math.random() * (canvas.width - 2 * radius) + radius) / ratio, dx = Math.random() - .5, y = (Math.random() * (canvas.height - 2 * radius) + radius) / ratio, dy = Math.random() - .5;
                    circleArray.push(new Circle(x, y, dx, dy, radius, !0, logoImg));
                }), function animate() {
                    requestAnimationFrame(animate), c.clearRect(0, 0, canvas.width, canvas.height);
                    for (var i = 0; i < circleArray.length; i++) circleArray[i].update();
                }();
            });
        },
        workEffect: function() {
            $(".work-video .desBox a.btn").fancybox(), $(".work-video .main .desBox").slick({
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: !0,
                prevArrow: $(".work-video .arrowBox .left"),
                nextArrow: $(".work-video .arrowBox .right"),
                appendDots: $(".work-video .slider"),
                customPaging: function() {
                    return '<div class="indicator"></div>';
                }
            }).on("beforeChange", function(event, slick, currentSlide, nextSlide) {
                $(".indicator").css("margin-left", nextSlide * (290 / 6) + "px");
                var source = isMobile.phone ? "mbg" : "bg", youtubeID = $(".work-video .desBox").find("#btn" + (nextSlide + 1)).data(source);
                $(".work-video .embed-container").fadeOut("fast", function() {
                    $(this).empty().html('<iframe src="https://www.youtube.com/embed/' + youtubeID + "?rel=0&controls=0&showinfo=0&autoplay=1&mute=1&loop=1&playlist=" + youtubeID + '" frameborder="0" allowfullscreen></iframe>');
                });
            }).on("afterChange", function() {
                $(".work-video .embed-container").fadeIn("fast");
            });
        },
        rwdEffect: function() {
            $(".rwd .phone .picBox").slick({
                arrows: !1,
                dots: !0,
                slidesToShow: 1,
                slidesToScroll: 1,
                autoplay: !0,
                autoplaySpeed: 5e3
            }), $(".rwd .mac .picBox").slick({
                arrows: !1,
                dots: !0,
                slidesToShow: 1,
                slidesToScroll: 1,
                autoplay: !0,
                autoplaySpeed: 5e3
            });
        },
        caseEffect: function() {
            $(".showCaseBox .left a").fancybox(), $(".showCaseBox .showSlick").slick({
                slidesToShow: 1,
                slidesToScroll: 1,
                dots: !1,
                infinite: !1,
                arrows: !0,
                prevArrow: $(".showCaseBox .arrowCube .left"),
                nextArrow: $(".showCaseBox .arrowCube .right")
            });
        },
        clientEffect: function() {
            $(".client .arrowCube .left, .client .arrowCube .right").click(function(e) {
                e.preventDefault();
            }), $(".client .slideBox").slick({
                slidesToShow: 1,
                slidesToScroll: 1,
                dots: !1,
                infinite: !1,
                arrows: !0,
                prevArrow: $(".client .arrowCube .left"),
                nextArrow: $(".client .arrowCube .right")
            });
        },
        formEffect: function() {
            var _this3 = this;
            $(".mat-input").focus(function() {
                $(this).parent().addClass("is-active is-completed");
            }), $(".mat-input").focusout(function() {
                if ("" === $(this).val()) $(this).parent().removeClass("is-completed");
                $(this).parent().removeClass("is-active");
            }), $(".contact a.send").click(function(e) {
                e.preventDefault(), $.ajax({
                    method: "GET",
                    url: "https://lixin.h35.tw/contact-form.php",
                    data: _this3.sendData,
                    success: function(result) {
                        console.log("success:", result);
                    },
                    error: function() {
                        alert("系統繁忙，請稍候再試，謝謝！");
                    }
                });
            });
        },
        mapEffect: function() {
            var $marker_url = -1 < navigator.userAgent.toLowerCase().indexOf("trident") ? "img/svg/cd-icon-location.png" : "img/svg/cd-icon-location_1.svg", style = [ {
                elementType: "labels",
                stylers: [ {
                    saturation: -100
                } ]
            }, {
                featureType: "poi",
                elementType: "labels",
                stylers: [ {
                    visibility: "off"
                } ]
            }, {
                featureType: "road.highway",
                elementType: "labels",
                stylers: [ {
                    visibility: "off"
                } ]
            }, {
                featureType: "road.local",
                elementType: "labels.icon",
                stylers: [ {
                    visibility: "off"
                } ]
            }, {
                featureType: "road.arterial",
                elementType: "labels.icon",
                stylers: [ {
                    visibility: "off"
                } ]
            }, {
                featureType: "road",
                elementType: "geometry.stroke",
                stylers: [ {
                    visibility: "off"
                } ]
            }, {
                featureType: "transit",
                elementType: "geometry.fill",
                stylers: [ {
                    hue: "#666"
                }, {
                    visibility: "on"
                }, {
                    lightness: 5
                }, {
                    saturation: -100
                } ]
            }, {
                featureType: "poi",
                elementType: "geometry.fill",
                stylers: [ {
                    hue: "#666"
                }, {
                    visibility: "on"
                }, {
                    lightness: 5
                }, {
                    saturation: -100
                } ]
            }, {
                featureType: "poi.government",
                elementType: "geometry.fill",
                stylers: [ {
                    hue: "#666"
                }, {
                    visibility: "on"
                }, {
                    lightness: 5
                }, {
                    saturation: -100
                } ]
            }, {
                featureType: "poi.sports_complex",
                elementType: "geometry.fill",
                stylers: [ {
                    hue: "#666"
                }, {
                    visibility: "on"
                }, {
                    lightness: 5
                }, {
                    saturation: -100
                } ]
            }, {
                featureType: "poi.attraction",
                elementType: "geometry.fill",
                stylers: [ {
                    hue: "#666"
                }, {
                    visibility: "on"
                }, {
                    lightness: 5
                }, {
                    saturation: -100
                } ]
            }, {
                featureType: "poi.business",
                elementType: "geometry.fill",
                stylers: [ {
                    hue: "#666"
                }, {
                    visibility: "on"
                }, {
                    lightness: 5
                }, {
                    saturation: -100
                } ]
            }, {
                featureType: "transit",
                elementType: "geometry.fill",
                stylers: [ {
                    hue: "#666"
                }, {
                    visibility: "on"
                }, {
                    lightness: 5
                }, {
                    saturation: -100
                } ]
            }, {
                featureType: "transit.station",
                elementType: "geometry.fill",
                stylers: [ {
                    hue: "#666"
                }, {
                    visibility: "on"
                }, {
                    lightness: 5
                }, {
                    saturation: -100
                } ]
            }, {
                featureType: "landscape",
                stylers: [ {
                    hue: "#666"
                }, {
                    visibility: "on"
                }, {
                    lightness: 5
                }, {
                    saturation: -100
                } ]
            }, {
                featureType: "road",
                elementType: "geometry.fill",
                stylers: [ {
                    hue: "#666"
                }, {
                    visibility: "on"
                }, {
                    lightness: 5
                }, {
                    saturation: -100
                } ]
            }, {
                featureType: "road.highway",
                elementType: "geometry.fill",
                stylers: [ {
                    hue: "#666"
                }, {
                    visibility: "on"
                }, {
                    lightness: 5
                }, {
                    saturation: -100
                } ]
            }, {
                featureType: "water",
                elementType: "geometry",
                stylers: [ {
                    hue: "#666"
                }, {
                    visibility: "on"
                }, {
                    lightness: 5
                }, {
                    saturation: -100
                } ]
            } ], map_options = {
                center: new google.maps.LatLng(25.05598, 121.537227),
                zoom: 16,
                panControl: !1,
                zoomControl: !1,
                mapTypeControl: !1,
                streetViewControl: !1,
                mapTypeId: google.maps.MapTypeId.ROADMAP,
                scrollwheel: !1,
                styles: style
            }, map = new google.maps.Map(document.getElementById("google-container"), map_options), zoomControlDiv = (new google.maps.Marker({
                position: new google.maps.LatLng(25.05598, 121.537227),
                map: map,
                visible: !0,
                icon: $marker_url
            }), document.createElement("div"));
            new function(controlDiv, map) {
                var controlUIzoomIn = document.getElementById("cd-zoom-in"), controlUIzoomOut = document.getElementById("cd-zoom-out");
                controlDiv.appendChild(controlUIzoomIn), controlDiv.appendChild(controlUIzoomOut), 
                google.maps.event.addDomListener(controlUIzoomIn, "click", function() {
                    map.setZoom(map.getZoom() + 1);
                }), google.maps.event.addDomListener(controlUIzoomOut, "click", function() {
                    map.setZoom(map.getZoom() - 1);
                });
            }(zoomControlDiv, map), map.controls[google.maps.ControlPosition.LEFT_TOP].push(zoomControlDiv);
        },
        getMobileOperatingSystem: function() {
            var userAgent = navigator.userAgent || navigator.vendor || window.opera;
            if (/android/i.test(userAgent)) return !0; else return !1;
        },
        avoidAnriod: function() {
            if (this.getMobileOperatingSystem()) document.querySelector(".trans_bg").classList.add("input_focus"), 
            screen.orientation.onchange = function() {
                if ("landscape" == screen.orientation.type.match(/\w+/)[0]) document.querySelector(".trans_bg").classList.remove("input_focus");
            };
        },
        chkIE: function() {
            var userAgent = navigator.userAgent, fIEVersion = parseFloat(RegExp.$1);
            if (-1 != userAgent.indexOf("MSIE 6.0")) return 6; else if (7 == fIEVersion) return 7; else if (8 == fIEVersion) return 8; else if (9 == fIEVersion) return 9; else if (10 == fIEVersion) return 10; else if (userAgent.toLowerCase().match(/rv:([\d.]+)\) like gecko/)) return 11; else return 999;
        }
    },
    destroyed: function() {
        window.removeEventListener("scroll", this.ctrlScroll), window.removeEventListener("orientationchange", this.avoidAnriod);
    }
});