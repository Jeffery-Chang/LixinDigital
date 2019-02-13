// https://tympanus.net/Development/LetterEffects/

! function(e) { "undefined" == typeof module ? this.charming = e : module.exports = e }(function(e, n) { "use strict";
    n = n || {}; var t = n.tagName || "span",
        o = null != n.classPrefix ? n.classPrefix : "char",
        r = 1,
        a = function(e) { for (var n = e.parentNode, a = e.nodeValue, c = a.length, l = -1; ++l < c;) { var d = document.createElement(t);
                o && (d.className = o + r, r++), d.appendChild(document.createTextNode(a[l])), n.insertBefore(d, e) }
            n.removeChild(e) }; return function c(e) { for (var n = [].slice.call(e.childNodes), t = n.length, o = -1; ++o < t;) c(n[o]);
        e.nodeType === Node.TEXT_NODE && a(e) }(e), e });

/**
 * TextFx.js
 * http://www.codrops.com
 *
 * Licensed under the MIT license.
 * http://www.opensource.org/licenses/mit-license.php
 * 
 * Copyright 2016, Codrops
 * http://www.codrops.com
 */
;
(function(window) {

    'use strict';

    /**
     * Equation of a line.
     */
    function lineEq(y2, y1, x2, x1, currentVal) {
        // y = mx + b
        var m = (y2 - y1) / (x2 - x1),
            b = y1 - m * x1;

        return m * currentVal + b;
    }

    function TextFx(el) {
        this.el = el;
        this._init();
    }

    TextFx.prototype.effects = {
        'fx1': { in: {
                duration: 1000,
                delay: function(el, index) { return 75 + index * 40; },
                easing: 'easeOutElastic',
                elasticity: 650,
                opacity: {
                    value: 1,
                    easing: 'easeOutExpo',
                },
                translateY: ['50%', '0%']
            },
            out: {
                duration: 400,
                delay: function(el, index) { return index * 40; },
                easing: 'easeOutExpo',
                opacity: 0,
                translateY: '-100%'
            }
        },
        'fx2': { in: {
                duration: 700,
                delay: function(el, index) { return index * 50; },
                easing: 'easeOutCirc',
                opacity: 1,
                translateX: function(el, index) {
                    return [(50 + index * 10), 0]
                }
            },
            out: {
                duration: 0,
                opacity: 0
            }
        },
        'fx3': { in: {
                duration: 800,
                delay: function(el, index) { return index * 50; },
                easing: 'easeOutElastic',
                opacity: 1,
                translateY: function(el, index) {
                    return index % 2 === 0 ? ['-80%', '0%'] : ['80%', '0%'];
                }
            },
            out: {
                duration: 800,
                delay: function(el, index) { return index * 50; },
                easing: 'easeOutExpo',
                opacity: 0,
                translateY: function(el, index) {
                    return index % 2 === 0 ? '80%' : '-80%';
                }
            }
        },
        'fx4': { in: {
                duration: 700,
                delay: function(el, index) { return (el.parentNode.children.length - index - 1) * 80; },
                easing: 'easeOutElastic',
                opacity: 1,
                translateY: function(el, index) {
                    return index % 2 === 0 ? ['-80%', '0%'] : ['80%', '0%'];
                },
                rotateZ: [90, 0]
            },
            out: {
                duration: 500,
                delay: function(el, index) { return (el.parentNode.children.length - index - 1) * 80; },
                easing: 'easeOutExpo',
                opacity: 0,
                translateY: function(el, index) {
                    return index % 2 === 0 ? '80%' : '-80%';
                },
                rotateZ: function(el, index) {
                    return index % 2 === 0 ? -25 : 25;
                }
            }
        },
        'fx5': {
            perspective: 1000,
            in: {
                duration: 700,
                delay: function(el, index) { return 550 + index * 50; },
                easing: 'easeOutQuint',
                opacity: {
                    value: 1,
                    easing: 'linear',
                },
                translateY: ['-150%', '0%'],
                rotateY: [180, 0]
            },
            out: {
                duration: 700,
                delay: function(el, index) { return index * 60; },
                easing: 'easeInQuint',
                opacity: {
                    value: 0,
                    easing: 'linear',
                },
                translateY: '150%',
                rotateY: -180
            }
        },
        'fx6': { in: {
                duration: 600,
                easing: 'easeOutQuart',
                opacity: 1,
                translateY: function(el, index) {
                    return index % 2 === 0 ? ['-40%', '0%'] : ['40%', '0%'];
                },
                rotateZ: [10, 0]
            },
            out: {
                duration: 0,
                opacity: 0
            }
        },
        'fx7': { in: {
                duration: 250,
                delay: function(el, index) { return 200 + index * 25; },
                easing: 'easeOutCubic',
                opacity: 1,
                translateY: ['-50%', '0%']
            },
            out: {
                duration: 250,
                delay: function(el, index) { return index * 25; },
                easing: 'easeOutCubic',
                opacity: 0,
                translateY: '50%'
            }
        },
        'fx8': { in: {
                duration: 400,
                delay: function(el, index) { return 150 + (el.parentNode.children.length - index - 1) * 20; },
                easing: 'easeOutQuad',
                opacity: 1,
                translateY: ['100%', '0%']
            },
            out: {
                duration: 400,
                delay: function(el, index) { return (el.parentNode.children.length - index - 1) * 20; },
                easing: 'easeInOutQuad',
                opacity: 0,
                translateY: '-100%'
            }
        },
        'fx9': {
            perspective: 1000,
            origin: '50% 100%',
            in: {
                duration: 400,
                delay: function(el, index) { return index * 50; },
                easing: 'easeOutSine',
                opacity: 1,
                rotateY: [-90, 0]
            },
            out: {
                duration: 200,
                delay: function(el, index) { return index * 50; },
                easing: 'easeOutSine',
                opacity: 0,
                rotateY: 45
            }
        },
        'fx10': { in: {
                duration: 1000,
                delay: function(el, index) { return 100 + index * 30; },
                easing: 'easeOutElastic',
                elasticity: anime.random(400, 700),
                opacity: 1,
                rotateZ: function(el, index) {
                    return [anime.random(20, 40), 0];
                }
            },
            out: {
                duration: 0,
                opacity: 0
            }
        },
        'fx11': {
            perspective: 1000,
            origin: '50% 100%',
            in: {
                duration: 400,
                delay: function(el, index) { return 200 + index * 20; },
                easing: 'easeOutExpo',
                opacity: 1,
                rotateY: [-90, 0]
            },
            out: {
                duration: 400,
                delay: function(el, index) { return index * 20; },
                easing: 'easeOutExpo',
                opacity: 0,
                rotateY: 90
            }
        },
        'fx12': {
            perspective: 1000,
            origin: '50% 100%',
            in: {
                duration: 400,
                delay: function(el, index) { return 200 + index * 30; },
                easing: 'easeOutExpo',
                opacity: 1,
                rotateX: [90, 0]
            },
            out: {
                duration: 400,
                delay: function(el, index) { return index * 30; },
                easing: 'easeOutExpo',
                opacity: 0,
                rotateX: -90
            }
        },
        'fx13': { in: {
                duration: 800,
                easing: 'easeOutExpo',
                opacity: 1,
                translateY: function(el, index) {
                    var p = el.parentNode,
                        lastElOffW = p.lastElementChild.offsetWidth,
                        firstElOffL = p.firstElementChild.offsetLeft,
                        w = p.offsetWidth - lastElOffW - firstElOffL - (p.offsetWidth - lastElOffW - p.lastElementChild.offsetLeft),
                        tyVal = lineEq(0, 200, firstElOffL + w / 2, firstElOffL, el.offsetLeft);

                    return [Math.abs(tyVal) + 50 + '%', '0%'];
                },
                rotateZ: function(el, index) {
                    var p = el.parentNode,
                        lastElOffW = p.lastElementChild.offsetWidth,
                        firstElOffL = p.firstElementChild.offsetLeft,
                        w = p.offsetWidth - lastElOffW - p.firstElementChild.offsetLeft - (p.offsetWidth - lastElOffW - p.lastElementChild.offsetLeft),
                        rz = lineEq(90, -90, firstElOffL + w, firstElOffL, el.offsetLeft);

                    return [rz, 0];
                }
            },
            out: {
                duration: 500,
                easing: 'easeOutExpo',
                opacity: 0,
                translateY: '-150%'
            }
        },
        'fx14': { in: {
                duration: 500,
                easing: 'easeOutExpo',
                delay: function(el, index) { return 200 + index * 30; },
                opacity: 1,
                rotateZ: [20, 0],
                translateY: function(el, index) {
                    var p = el.parentNode,
                        lastElOffW = p.lastElementChild.offsetWidth,
                        firstElOffL = p.firstElementChild.offsetLeft,
                        w = p.offsetWidth - lastElOffW - firstElOffL - (p.offsetWidth - lastElOffW - p.lastElementChild.offsetLeft),
                        tyVal = lineEq(-130, -60, firstElOffL + w, firstElOffL, el.offsetLeft);

                    return [Math.abs(tyVal) + '%', '0%'];
                }
            },
            out: {
                duration: 400,
                easing: 'easeOutExpo',
                delay: function(el, index) { return (el.parentNode.children.length - index - 1) * 30; },
                opacity: 0,
                rotateZ: 20,
                translateY: function(el, index) {
                    var p = el.parentNode,
                        lastElOffW = p.lastElementChild.offsetWidth,
                        firstElOffL = p.firstElementChild.offsetLeft,
                        w = p.offsetWidth - lastElOffW - firstElOffL - (p.offsetWidth - lastElOffW - p.lastElementChild.offsetLeft),
                        tyVal = lineEq(-60, -130, firstElOffL + w, firstElOffL, el.offsetLeft);

                    return tyVal + '%';
                }
            }
        },
        'fx15': {
            perspective: 1000,
            in: {
                duration: 400,
                delay: function(el, index) { return 100 + index * 50; },
                easing: 'easeOutExpo',
                opacity: 1,
                rotateX: [110, 0]
            },
            out: {
                duration: 400,
                delay: function(el, index) { return index * 50; },
                easing: 'easeOutExpo',
                opacity: 0,
                rotateX: -110
            }
        },
        'fx16': { in: {
                duration: function(el, index) { return anime.random(800, 1000) },
                delay: function(el, index) { return anime.random(0, 75) },
                easing: 'easeInOutExpo',
                opacity: 1,
                translateY: ['-300%', '0%'],
                rotateZ: function(el, index) { return [anime.random(-50, 50), 0]; }
            },
            out: {
                duration: function(el, index) { return anime.random(800, 1000) },
                delay: function(el, index) { return anime.random(0, 80) },
                easing: 'easeInOutExpo',
                opacity: 0,
                translateY: '300%',
                rotateZ: function(el, index) { return anime.random(-50, 50); }
            }
        },
        'fx17': { in: {
                duration: 650,
                easing: 'easeOutQuint',
                delay: function(el, index) { return 450 + (el.parentNode.children.length - index - 1) * 30; },
                opacity: 1,
                translateX: function(el, index) {
                    return [-1 * el.offsetLeft, 0];
                }
            },
            out: {
                duration: 1,
                delay: 400,
                opacity: 0
            }
        },
        'fx18': { in: {
                duration: 800,
                delay: function(el, index) { return 600 + index * 150; },
                easing: 'easeInOutQuint',
                opacity: 1,
                scaleY: [8, 1],
                scaleX: [0.5, 1],
                translateY: ['-100%', '0%']
            },
            out: {
                duration: 800,
                delay: function(el, index) { return index * 150; },
                easing: 'easeInQuint',
                opacity: 0,
                scaleY: {
                    value: 8,
                    delay: function(el, index) { return 100 + index * 150; },
                },
                scaleX: 0.5,
                translateY: '100%'
            }
        }
    };

    TextFx.prototype._init = function() {
        this.el.classList.add('letter-effect');
        // Split word(s) into letters/spans.
        charming(this.el, { classPrefix: 'letter' });
        this.letters = [].slice.call(this.el.querySelectorAll('span'));
        this.lettersTotal = this.letters.length;
    };

    TextFx.prototype._stop = function() {
        anime.remove(this.letters);
        this.letters.forEach(function(letter) { letter.style.WebkitTransform = letter.style.transform = ''; });
    };

    TextFx.prototype.show = function(effect, callback) {
        this._stop();
        arguments.length ? this._animate('in', effect, callback) : this.letters.forEach(function(letter) { letter.style.opacity = 1; });
    };

    TextFx.prototype.hide = function(effect, callback) {
        this._stop();
        arguments.length ? this._animate('out', effect, callback) : this.letters.forEach(function(letter) { letter.style.opacity = 0; });
    };

    TextFx.prototype._animate = function(direction, effect, callback) {
        var effecSettings = typeof effect === 'string' ? this.effects[effect] : effect;

        if (effecSettings.perspective != undefined) {
            this.el.style.WebkitPerspective = this.el.style.perspective = effecSettings.perspective + 'px';
        }
        if (effecSettings.origin != undefined) {
            this.letters.forEach(function(letter) {
                letter.style.WebkitTransformOrigin = letter.style.transformOrigin = effecSettings.origin;
            });
        }

        // Custom effect
        var iscustom = this._checkCustomFx(direction, effect, callback);

        var animOpts = effecSettings[direction],
            target = this.letters;

        target.forEach(function(t, p) {
            if (t.innerHTML === ' ') {
                target.splice(p, 1);
            }
        });

        animOpts.targets = target;

        if (!iscustom) {
            animOpts.complete = callback;
        }

        anime(animOpts);
    };

    /**
     * Extra stuff for an effect.. this is just an example for effect 17.
     * TODO! (for now, just some quick way to implement something different only for fx17)
     */
    TextFx.prototype._checkCustomFx = function(direction, effect, callback) {
        var custom = typeof effect === 'string' && effect === 'fx17' && direction === 'out';

        if (custom) {
            var tmp = document.createElement('div');
            tmp.style.width = tmp.style.height = '100%';
            tmp.style.top = tmp.style.left = 0;
            tmp.style.background = '#e24b1e';
            tmp.style.position = 'absolute';
            tmp.style.WebkitTransform = tmp.style.transform = 'scale3d(0,1,1)';
            tmp.style.WebkitTransformOrigin = tmp.style.transformOrigin = '0% 50%';
            this.el.appendChild(tmp);
            var self = this;
            anime({
                targets: tmp,
                duration: 400,
                easing: 'easeInOutCubic',
                scaleX: [0, 1],
                complete: function() {
                    tmp.style.WebkitTransformOrigin = tmp.style.transformOrigin = '100% 50%';
                    anime({
                        targets: tmp,
                        duration: 400,
                        easing: 'easeInOutCubic',
                        scaleX: [1, 0],
                        complete: function() {
                            self.el.removeChild(tmp);
                            if (typeof callback === 'function') {
                                callback();
                            }
                        }
                    });
                }
            });
        }

        return custom;
    };

    window.TextFx = TextFx;

})(window);

(function() {
    /*
    		How to use the plugin:

    		// Initialize
    		var txt = new TextFx(this.el.querySelector('.title'));

    		// Show letters: 
    		// txt.show([effect] [,callback]);
    		// If nothing is passed, then no animation.
    		// ´effect´ can either be one of the predefined effects: ['fx1',...,'fx17'] or a object literal representing both in and out animations (anime.js based):
    		// example:
    		effect = {
    			in: {
    				duration: 500,
    				delay: function(el, index) { 
    					return 250+index*40; 
    				},
    				easing: 'easeOutExpo',
    				opacity: 1,
    				translateY: ['50%','0%']
    			},
    			out: {
    				duration: 500,
    				delay: function(el, index) { 
    					return index*40; 
    				},
    				easing: 'easeOutExpo',
    				opacity: 0,
    				translateY: '-50%'
    			}
    		}
    		// ´callback´ is the callback function, after all the letters finish the animation.

    		// Hide letters: 
    		// txt.hide([effect] [,callback]); (same logic of show)
    		 */

    // For demo purposes only:
    // Let´s build a simple slideshow to exemplify the TextFx plugin:

    // Slide obj: each Slideshow´s slide will contain the HTML element and the instance of TextFx.
    var Slide = function(el) {
            this.el = el;
            this.txt = new TextFx(this.el.querySelector('.title'));
        },
        // The Slideshow obj.
        Slideshow = function(el) {
            this.el = el;
            this.current = 0;
            this.slides = [];
            var self = this;
            [].slice.call(this.el.querySelectorAll('.slide')).forEach(function(slide) {
                self.slides.push(new Slide(slide));
            });
            this.slidesTotal = this.slides.length;
            this.effect = this.el.getAttribute('data-effect');
        };

    Slideshow.prototype._navigate = function(direction) {
        if (this.isAnimating) {
            return false;
        }
        this.isAnimating = true;

        var self = this,
            currentSlide = this.slides[this.current];

        this.current = direction === 'next' ? (this.current < this.slidesTotal - 1 ? this.current + 1 : 0) : (this.current =
            this.current > 0 ? this.current - 1 : this.slidesTotal - 1);
        var nextSlide = this.slides[this.current];

        var checkEndCnt = 0,
            checkEnd = function() {
                ++checkEndCnt;
                if (checkEndCnt === 2) {
                    currentSlide.el.classList.remove('slide--current');
                    nextSlide.el.classList.add('slide--current');
                    self.isAnimating = false;
                }
            };

        // Call the TextFx hide method and pass the effect string defined in the data-effect attribute of the Slideshow element.
        currentSlide.txt.hide(this.effect, function() {
            currentSlide.el.style.opacity = 0;
            checkEnd();
        });
        // First hide the next slide´s TextFx text.
        nextSlide.txt.hide();
        nextSlide.el.style.opacity = 1;
        // And now call the TextFx show method.
        nextSlide.txt.show(this.effect, function() {
            checkEnd();
        });
    };

    Slideshow.prototype.next = function() {
        this._navigate('next');
    };

    Slideshow.prototype.prev = function() {
        this._navigate('prev');
    };

    [].slice.call(document.querySelectorAll('.content')).forEach(function(el, pos) {
        var slideshow = new Slideshow(el.querySelector('.slideshow'));
        el.querySelector('.actions').firstElementChild.addEventListener('click', function() {
            slideshow.prev();
        });
        el.querySelector('.actions').lastElementChild.addEventListener('click', function() {
            slideshow.next();
        });
    });
})();