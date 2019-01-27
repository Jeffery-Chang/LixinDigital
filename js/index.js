(function () {
    const indexCtrl = new Vue({
        el: '#vue',
        data: {
            isScroll: false,
            isOpen: false,
            isLoaded: false,
            sendData: {
                name: '',
                company: '',
                email: '',
                phone: '',
                msg: '',
            }
        },
        computed: {},
        created() {
            window.addEventListener('scroll', this.ctrlScroll);
        },
        mounted() {
            window.onload = () => {
                this.isLoaded = true;
                this.$nextTick(() => {
                    this.kvEffect();
                    this.howEffect();
                    this.marketEffect();
                    this.mediaEffect();
                    this.wordEffect();
                    this.rwdEffect();
                    this.caseEffect();
                    this.clientEffect();
                    this.formEffect();
                    this.mapEffect();
                    new WOW({
                        offset: (window.innerWidth <= 1025) ? 100 : 0
                    }).init();
                });
            }
        },
        methods: {
            ctrlScroll() {
                var scrollY = window.scrollY || document.documentElement.scrollTop;
                this.isScroll = (scrollY > 0) ? true : false;

                // MARKETING USE
                var headerHeight = document.querySelector(".header-index").offsetHeight;
                var marketTop = document.querySelector('.marketing').offsetTop;
                var lineCount = document.querySelectorAll('.marketing .bg-line .ani_start');
                if ((scrollY > marketTop - headerHeight) && lineCount.length > 0) {
                    $.each($('.marketing .bg-line .ani_start'), function (key, obj) {
                        setTimeout(() => {
                            $(this).removeClass('ani_start');
                        }, 150 * key);
                    })
                }
            },
            ctrlMove(target, isMenu) {
                if (isMenu) this.isOpen = false;
                this.$scrollTo(target, 500, {
                    offset: document.querySelector(".header-index").offsetHeight * -1,
                    onDone: function (element) {

                    }
                });
            },
            kvEffect() {
                var imgWidth = document.querySelector('.kv .slogan').offsetWidth;
                TweenMax.set('.kv .slogan img', {
                    width: imgWidth,
                    maxWidth: imgWidth,
                    minWidth: imgWidth,
                });
                TweenMax.set('.kv .slogan', {
                    width: 0,
                });

                TweenMax.to('.kv .slogan', .75, {
                    width: imgWidth,
                    delay: .75,
                    onComplete: () => {
                        TweenMax.set(['.kv .slogan', '.kv .slogan img'], {
                            clearProps: "all"
                        });
                    }
                });
                var timer,
                    mouseX = 0,
                    mouseY = 0,
                    xp = 0,
                    yp = 0,
                    circle = $("#circle");

                window.addEventListener('mousemove', (e) => {
                    circle.addClass('moving');

                    mouseX = e.clientX - 110;
                    mouseY = e.clientY - 110;
                    clearTimeout(timer);
                    timer = setTimeout(() => {
                        circle.removeClass('moving');
                    }, 3000);
                })

                var loop = setInterval(() => {
                    xp += ((mouseX - xp) / 6);
                    yp += ((mouseY - yp) / 6);
                    circle.css({
                        left: xp + 'px',
                        top: yp + 'px'
                    });
                }, 30);
            },
            howEffect() {
                if (isMobile.phone || $(window).width() < 768) $('.how .howBox li').removeAttr('data-wow-delay');
            },
            marketEffect() {
                //Background image
                $('div').each(function () {
                    var url = $(this).attr('data-image');
                    if (url) {
                        $(this).css('background-image', 'url(' + url + ')');
                    }
                });

                $('section').each(function () {
                    var url = $(this).attr('data-image');
                    if (url) {
                        $(this).css('background-image', 'url(' + url + ')');
                    }
                });

                function autoHeightCircle() {
                    var circle = $('.circle--rotate'),
                        circleInner = $('.animate-wrapper'),
                        circleH = circle.width(),
                        circleInnerH = circleInner.width();
                    circle.height(circleH);
                    circleInner.height(circleInnerH);
                }

                $("#circle--rotate").circle({
                    autoPlay: false,
                    delay: 3500
                });
                autoHeightCircle();
                window.addEventListener('resize', (e) => {
                    autoHeightCircle();
                });
            },
            mediaEffect() {
                var canvas = document.querySelector('canvas');
                canvas.width = window.innerWidth;
                canvas.height = (isMobile.phone) ? window.innerHeight : 625;
                var c = canvas.getContext('2d');
                var mouse = {
                    x: undefined,
                    y: undefined
                }
                var maxRadius = 25;
                var imgMaxRadius = 150;
                // var minRadius = 2;

                var colorArray = [
                    'rgba(99, 84, 75, 0.61)',
                    'rgba(196, 126, 33, 0.6)',
                    'rgba(194, 138, 48, 0.5)',
                    'rgba(79, 69, 63, 0.65)'
                ];

                window.addEventListener('mousemove', function (event) {
                    mouse.x = event.pageX;
                    mouse.y = event.pageY - document.querySelector('.mediaPartner').offsetTop;
                });

                // object: Objects use capital letter function names 
                function Circle(x, y, dx, dy, radius, isImg, img_src) {
                    this.x = x;
                    this.y = y;
                    this.dx = dx;
                    this.dy = dy;
                    this.radius = radius;
                    this.minRadius = radius;
                    this.color = colorArray[Math.floor(Math.random() * colorArray.length)];

                    this.isImg = isImg || false;
                    this.img_src = img_src || null;

                    this.draw = function () {
                        if (this.isImg) {
                            c.drawImage(
                                this.img_src,
                                this.x,
                                this.y,
                                this.radius,
                                this.radius
                            );
                        } else {
                            c.beginPath();
                            c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
                            c.fillStyle = this.color;
                            c.fill();
                        }
                    }
                    this.update = function () {
                        if (this.x + this.radius > canvas.width || this.x - this.radius < 0) {
                            this.dx = -this.dx;
                        }

                        if (this.y + this.radius > canvas.height || this.y - this.radius < 0) {
                            this.dy = -this.dy;
                        }
                        this.y += this.dy;
                        this.x += this.dx;

                        var max = (this.isImg) ? imgMaxRadius : maxRadius;

                        // interactivity
                        if (mouse.x - this.x - (this.radius / 2) < 100 && mouse.x - this.x - (this.radius / 2) > -100 && mouse.y - this.y - (this.radius / 2) < 100 && mouse.y - this.y - (this.radius / 2) > -100) {
                            if (this.radius < max) {
                                this.radius += 1;
                            }
                        } else if (this.radius > this.minRadius) {
                            this.radius -= 1;
                        }

                        this.draw();
                    }
                }

                var circleArray = [];

                for (var i = 0; i < 300; i++) {
                    var radius = Math.random() * 4 + 1;
                    var x = Math.random() * (canvas.width - radius * 2) + radius;
                    var dx = (Math.random() - 0.5);
                    var y = Math.random() * (canvas.height - radius * 2) + radius;
                    var dy = (Math.random() - 0.5);
                    circleArray.push(new Circle(x, y, dx, dy, radius));

                }

                var logoList = ['01', 'apple', 'cn', 'ebc', 'eco', 'et', 'fb', 'free', 'gg', 'gon', 'ig', 'line', 'mirror', 'now', 'one', 'ptt', 'setn', 'son', 'tvbs', 'udn', 'us', 'yahoo', 'yt'];

                logoList.forEach((obj, index) => {
                    var logoImg = new Image();
                    logoImg.src = 'img/media-' + obj + '.png';
                    var radius = (isMobile.phone) ? Math.random() + 60 : Math.random() + 60;
                    var x = Math.random() * (canvas.width - radius * 2) + radius;
                    var dx = (Math.random() - 0.5);
                    var y = Math.random() * (canvas.height - radius * 2) + radius;
                    var dy = (Math.random() - 0.5);
                    circleArray.push(new Circle(x, y, dx, dy, radius, true, logoImg));
                })

                function animate() {
                    requestAnimationFrame(animate);
                    c.clearRect(0, 0, canvas.width, canvas.height);

                    for (var i = 0; i < circleArray.length; i++) {
                        circleArray[i].update();
                    };
                }

                animate();
            },
            wordEffect() {
                $('.work-video .desBox a.btn').fancybox();
                $('.work-video .main .desBox').slick({
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: true,
                    prevArrow: $('.work-video .arrowBox .left'),
                    nextArrow: $('.work-video .arrowBox .right'),
                    appendDots: $('.work-video .slider'),
                    customPaging: function (slider, i) {
                        return '<div class="indicator"></div>';
                    },
                }).on('beforeChange', function (event, slick, currentSlide, nextSlide) {
                    $('.indicator').css('margin-left', nextSlide * (290 / 6) + 'px');
                    // var youtubeID = $('.work-video .desBox a.btn').attr('href').replace('https://www.youtube.com/watch?v=', '');
                    var youtubeID = $('.work-video .desBox').find('#btn' + (nextSlide + 1)).data('bg');
                    $('.work-video .embed-container').fadeOut('fast', function () {
                        $(this).empty().html(`<iframe src="https://www.youtube.com/embed/` + youtubeID + `?rel=0&controls=0&showinfo=0&autoplay=1&mute=1&loop=1" frameborder="0" allowfullscreen></iframe>`)
                    });
                }).on('afterChange', function (event, slick, currentSlide, nextSlide) {
                    $('.work-video .embed-container').fadeIn('fast');
                });
            },
            rwdEffect() {
                $('.rwd .phone .picBox').slick({
                    arrows: false,
                    dots: true,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    autoplay: true,
                    autoplaySpeed: 5000,
                });
                $('.rwd .mac .picBox').slick({
                    arrows: false,
                    dots: true,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    autoplay: true,
                    autoplaySpeed: 5000,
                });
            },
            caseEffect() {
                $('.showCaseBox .showSlick').slick({
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: false,
                    infinite: false,
                    arrows: true,
                    prevArrow: $('.showCaseBox .arrowCube .left'),
                    nextArrow: $('.showCaseBox .arrowCube .right'),
                    // autoplay: true,
                    // autoplaySpeed: 5000,
                });
            },
            clientEffect() {
                $('.client .arrowCube .left, .client .arrowCube .right').click((e) => {
                    e.preventDefault();
                })
                $('.client .slideBox').slick({
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: false,
                    infinite: false,
                    arrows: true,
                    prevArrow: $('.client .arrowCube .left'),
                    nextArrow: $('.client .arrowCube .right'),
                    // autoplay: true,
                    // autoplaySpeed: 5000,
                });
            },
            formEffect() {
                // INPUT EFFECT
                $(".mat-input").focus(function () {
                    $(this).parent().addClass("is-active is-completed");
                });

                $(".mat-input").focusout(function () {
                    if ($(this).val() === "")
                        $(this).parent().removeClass("is-completed");
                    $(this).parent().removeClass("is-active");
                });

                // AJAX
                $('.contact a.send').click((e) => {
                    e.preventDefault();
                    $.ajax({
                        method: "GET",
                        url: 'https://lixin.h35.tw/contact-form.php',
                        data: this.sendData,
                        success: function (result) {
                            console.log('success:', result);
                        },
                        error: function (result) {
                            alert('系統繁忙，請稍候再試，謝謝！');
                        }
                    });
                });
            },
            mapEffect() {
                //set your google maps parameters
                var $latitude = 25.055980,
                    $longitude = 121.537227,
                    $map_zoom = 16;

                //google map custom marker icon - .png fallback for IE11
                var is_internetExplorer11 = navigator.userAgent.toLowerCase().indexOf('trident') > -1;
                var $marker_url = (is_internetExplorer11) ? 'img/svg/cd-icon-location.png' : 'img/svg/cd-icon-location_1.svg';

                //define the basic color of your map, plus a value for saturation and brightness
                var $main_color = '#666',
                    $saturation = -100,
                    $brightness = 5;

                //we define here the style of the map
                var style = [{
                        //set saturation for the labels on the map
                        elementType: "labels",
                        stylers: [{
                            saturation: $saturation
                        }]
                    },
                    { //poi stands for point of interest - don't show these lables on the map 
                        featureType: "poi",
                        elementType: "labels",
                        stylers: [{
                            visibility: "off"
                        }]
                    },
                    {
                        //don't show highways lables on the map
                        featureType: 'road.highway',
                        elementType: 'labels',
                        stylers: [{
                            visibility: "off"
                        }]
                    },
                    {
                        //don't show local road lables on the map
                        featureType: "road.local",
                        elementType: "labels.icon",
                        stylers: [{
                            visibility: "off"
                        }]
                    },
                    {
                        //don't show arterial road lables on the map
                        featureType: "road.arterial",
                        elementType: "labels.icon",
                        stylers: [{
                            visibility: "off"
                        }]
                    },
                    {
                        //don't show road lables on the map
                        featureType: "road",
                        elementType: "geometry.stroke",
                        stylers: [{
                            visibility: "off"
                        }]
                    },
                    //style different elements on the map
                    {
                        featureType: "transit",
                        elementType: "geometry.fill",
                        stylers: [{
                                hue: $main_color
                            },
                            {
                                visibility: "on"
                            },
                            {
                                lightness: $brightness
                            },
                            {
                                saturation: $saturation
                            }
                        ]
                    },
                    {
                        featureType: "poi",
                        elementType: "geometry.fill",
                        stylers: [{
                                hue: $main_color
                            },
                            {
                                visibility: "on"
                            },
                            {
                                lightness: $brightness
                            },
                            {
                                saturation: $saturation
                            }
                        ]
                    },
                    {
                        featureType: "poi.government",
                        elementType: "geometry.fill",
                        stylers: [{
                                hue: $main_color
                            },
                            {
                                visibility: "on"
                            },
                            {
                                lightness: $brightness
                            },
                            {
                                saturation: $saturation
                            }
                        ]
                    },
                    {
                        featureType: "poi.sport_complex",
                        elementType: "geometry.fill",
                        stylers: [{
                                hue: $main_color
                            },
                            {
                                visibility: "on"
                            },
                            {
                                lightness: $brightness
                            },
                            {
                                saturation: $saturation
                            }
                        ]
                    },
                    {
                        featureType: "poi.attraction",
                        elementType: "geometry.fill",
                        stylers: [{
                                hue: $main_color
                            },
                            {
                                visibility: "on"
                            },
                            {
                                lightness: $brightness
                            },
                            {
                                saturation: $saturation
                            }
                        ]
                    },
                    {
                        featureType: "poi.business",
                        elementType: "geometry.fill",
                        stylers: [{
                                hue: $main_color
                            },
                            {
                                visibility: "on"
                            },
                            {
                                lightness: $brightness
                            },
                            {
                                saturation: $saturation
                            }
                        ]
                    },
                    {
                        featureType: "transit",
                        elementType: "geometry.fill",
                        stylers: [{
                                hue: $main_color
                            },
                            {
                                visibility: "on"
                            },
                            {
                                lightness: $brightness
                            },
                            {
                                saturation: $saturation
                            }
                        ]
                    },
                    {
                        featureType: "transit.station",
                        elementType: "geometry.fill",
                        stylers: [{
                                hue: $main_color
                            },
                            {
                                visibility: "on"
                            },
                            {
                                lightness: $brightness
                            },
                            {
                                saturation: $saturation
                            }
                        ]
                    },
                    {
                        featureType: "landscape",
                        stylers: [{
                                hue: $main_color
                            },
                            {
                                visibility: "on"
                            },
                            {
                                lightness: $brightness
                            },
                            {
                                saturation: $saturation
                            }
                        ]

                    },
                    {
                        featureType: "road",
                        elementType: "geometry.fill",
                        stylers: [{
                                hue: $main_color
                            },
                            {
                                visibility: "on"
                            },
                            {
                                lightness: $brightness
                            },
                            {
                                saturation: $saturation
                            }
                        ]
                    },
                    {
                        featureType: "road.highway",
                        elementType: "geometry.fill",
                        stylers: [{
                                hue: $main_color
                            },
                            {
                                visibility: "on"
                            },
                            {
                                lightness: $brightness
                            },
                            {
                                saturation: $saturation
                            }
                        ]
                    },
                    {
                        featureType: "water",
                        elementType: "geometry",
                        stylers: [{
                                hue: $main_color
                            },
                            {
                                visibility: "on"
                            },
                            {
                                lightness: $brightness
                            },
                            {
                                saturation: $saturation
                            }
                        ]
                    }
                ];

                //set google map options
                var map_options = {
                    center: new google.maps.LatLng($latitude, $longitude),
                    zoom: $map_zoom,
                    panControl: false,
                    zoomControl: false,
                    mapTypeControl: false,
                    streetViewControl: false,
                    mapTypeId: google.maps.MapTypeId.ROADMAP,
                    scrollwheel: false,
                    styles: style,
                }
                //inizialize the map
                var map = new google.maps.Map(document.getElementById('google-container'), map_options);
                //add a custom marker to the map				
                var marker = new google.maps.Marker({
                    position: new google.maps.LatLng($latitude, $longitude),
                    map: map,
                    visible: true,
                    icon: $marker_url,
                });

                //add custom buttons for the zoom-in/zoom-out on the map
                function CustomZoomControl(controlDiv, map) {
                    //grap the zoom elements from the DOM and insert them in the map 
                    var controlUIzoomIn = document.getElementById('cd-zoom-in'),
                        controlUIzoomOut = document.getElementById('cd-zoom-out');
                    controlDiv.appendChild(controlUIzoomIn);
                    controlDiv.appendChild(controlUIzoomOut);

                    // Setup the click event listeners and zoom-in or out according to the clicked element
                    google.maps.event.addDomListener(controlUIzoomIn, 'click', function () {
                        map.setZoom(map.getZoom() + 1)
                    });
                    google.maps.event.addDomListener(controlUIzoomOut, 'click', function () {
                        map.setZoom(map.getZoom() - 1)
                    });
                }

                var zoomControlDiv = document.createElement('div');
                var zoomControl = new CustomZoomControl(zoomControlDiv, map);

                //insert the zoom div on the top left of the map
                map.controls[google.maps.ControlPosition.LEFT_TOP].push(zoomControlDiv);
            },
        },
        destroyed() {
            window.removeEventListener('scroll', this.ctrlScroll);
        },
    })
})()