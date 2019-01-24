(function () {
    const indexCtrl = new Vue({
        el: '#vue',
        data: {
            isScroll: false,
            isOpen: false,
        },
        computed: {},
        created() {
            window.addEventListener('scroll', this.ctrlScroll);
        },
        mounted() {
            window.onload = () => {
                this.kvEffect();
                this.marketEffect();
                this.mediaEffect();
                new WOW({
                    offset: (window.innerWidth <= 1025) ? 100 : 0
                }).init();
            }
        },
        methods: {
            ctrlScroll() {
                var scrollY = window.scrollY || document.documentElement.scrollTop;
                this.isScroll = (scrollY > 0) ? true : false;
            },
            ctrlMenu(target) {
                this.isOpen = false;
                this.$scrollTo(target, 500, {
                    offset: document.querySelector(".header-index").offsetHeight * -1,
                    onDone: function (element) {

                    }
                });
            },
            kvEffect() {
                var timer,
                    mouseX = 0,
                    mouseY = 0,
                    xp = 0,
                    yp = 0,
                    circle = $("#circle");

                window.addEventListener('mousemove', (e) => {
                    circle.addClass('moving');

                    mouseX = e.pageX - 110;
                    mouseY = e.pageY - 110;

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
                    autoPlay: true,
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
                    'rgba(65, 58, 55, 0.6)',
                    'rgba(57, 51, 48, 0.6)',
                    'rgba(79, 69, 63, 0.65)'
                ];

                window.addEventListener('mousemove', function (event) {
                    mouse.x = event.x;
                    mouse.y = event.y;
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
                    var radius = (isMobile.phone) ? Math.random() + 60 : Math.random() + 100;
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
            }
        },
        destroyed() {
            window.removeEventListener('scroll', this.ctrlScroll);
        },
    })
})()