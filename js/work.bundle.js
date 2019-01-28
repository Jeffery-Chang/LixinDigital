"use strict";

void new Vue({
    el: "#vue",
    data: {
        isScroll: !1,
        isOpen: !1,
        isLoaded: !1,
        isAnimate: !1,
        isDone1: !1,
        isDone2: !1,
        tab: "video",
        videoList: [ {
            href: "https://www.youtube.com/watch?v=Lzl_eC0ITOk",
            title: "房地產｜海沃創意行銷｜超級城市",
            des: "家人換屋"
        }, {
            href: "https://www.youtube.com/watch?v=1ccNdkpdFuI",
            title: "房地產｜海沃創意行銷｜超級城市",
            des: "親子家庭"
        }, {
            href: "https://www.youtube.com/watch?v=h_7AFSWrPjU",
            title: "房地產｜萬騰機構｜布拉諾花園",
            des: "生活機能"
        }, {
            href: "https://www.youtube.com/watch?v=h_7AFSWrPjU",
            title: "房地產｜萬騰機構｜布拉諾花園",
            des: "世外生活"
        }, {
            href: "https://www.youtube.com/watch?v=NrmLPaJE88o",
            title: "房地產｜萬騰機構｜布拉諾花園",
            des: "遊吟詩人"
        }, {
            href: "https://www.youtube.com/watch?v=gh63Umm3F9w",
            title: "房地產｜太平洋代銷｜隱苑",
            des: "生活機能"
        }, {
            href: "https://www.youtube.com/watch?v=Q92jLT0IAzE",
            title: "房地產｜太平洋代銷｜隱苑",
            des: "紀錄證言"
        }, {
            href: "https://www.youtube.com/watch?v=it0B2YMRxeU",
            title: "房地產｜海沃創意行銷｜超級城市",
            des: "生活機能"
        }, {
            href: "https://www.youtube.com/watch?v=wyC1ZjTppSo",
            title: "房地產｜海沃創意行銷｜超級城市",
            des: "直播抽獎"
        }, {
            href: "https://www.youtube.com/watch?v=rHPUvOB1NtU",
            title: "房地產｜海沃創意行銷｜超級城市",
            des: "租不如買"
        }, {
            href: "https://www.youtube.com/watch?v=sT4x6xII7gI",
            title: "房地產｜海沃創意行銷｜超級城市",
            des: "城市空拍"
        }, {
            href: "https://www.youtube.com/watch?v=f4qGvNOpX7Y",
            title: "房地產｜海悅廣告｜漢寶之星",
            des: "動畫廣告"
        }, {
            href: "https://www.youtube.com/watch?v=uMDcyCV3qgQ",
            title: "房地產｜海沃創意行銷｜新板巨星",
            des: "競選造勢"
        }, {
            href: "https://www.youtube.com/watch?v=qWE6nlKQ-4Q",
            title: "房地產｜海沃創意行銷｜新板巨星",
            des: "小資購屋"
        }, {
            href: "https://www.youtube.com/watch?v=FXFaryfVMLM",
            title: "房地產｜新潤建設｜幸福莊園",
            des: "寄人籬下"
        }, {
            href: "https://www.youtube.com/watch?v=qWE6nlKQ-4Q",
            title: "房地產｜新和廣告｜晴空SKY1",
            des: "城市空拍"
        }, {
            href: "https://www.youtube.com/watch?v=TbixUARTDT0",
            title: "房地產｜新和廣告｜晴空SKY1",
            des: "更懂珍惜"
        }, {
            href: "https://www.youtube.com/watch?v=xLKhnIMJWfI",
            title: "房地產｜新和廣告｜晴空SKY1",
            des: "藝術人生"
        }, {
            href: "https://www.youtube.com/watch?v=oTrJUdk-asc",
            title: "房地產｜新和廣告｜超級花園",
            des: "生活轉變"
        }, {
            href: "https://www.youtube.com/watch?v=dWIik0v7_aA",
            title: "房地產｜新和廣告｜超級花園",
            des: "娘娘駕到"
        }, {
            href: "https://www.youtube.com/watch?v=PrNC5YAX6hc",
            title: "房地產｜海沃創意行銷｜德友極",
            des: "通勤時間"
        }, {
            href: "https://www.youtube.com/watch?v=iykY3YxXRmU",
            title: "房地產｜海沃創意行銷｜景上川",
            des: "萬華訪談"
        }, {
            href: "https://www.youtube.com/watch?v=DS35xFF9ybs",
            title: "房地產｜裸心建設｜裸心納景",
            des: "寬景人生"
        }, {
            href: "https://www.youtube.com/watch?v=xSZOeqp9JnA",
            title: "房地產｜海沃創意行銷｜新板巨星",
            des: "都市農耕"
        }, {
            href: "https://www.youtube.com/watch?v=KmQK2cPRHPw",
            title: "房地產｜海沃創意行銷｜新板巨星",
            des: "汪星人"
        }, {
            href: "https://www.youtube.com/watch?v=xLdvfhpks0c",
            title: "房地產｜海沃創意行銷｜新板巨星",
            des: "愛要及時"
        }, {
            href: "https://www.youtube.com/watch?v=RanzJCKiiu8",
            title: "房地產｜海沃創意行銷｜新板巨星",
            des: "不再搬家"
        }, {
            href: "https://www.youtube.com/watch?v=-YpLkKAhUsI",
            title: "房地產｜海沃創意行銷｜新板巨星",
            des: "名牌生活"
        } ],
        webList: [ {
            href: "#",
            pic: "img/work-video-1.png",
            title: "案例分享｜林版巨星"
        }, {
            href: "#",
            pic: "img/work-video-1.png",
            title: "案例分享｜林版巨星"
        }, {
            href: "#",
            pic: "img/work-video-1.png",
            title: "案例分享｜林版巨星"
        }, {
            href: "#",
            pic: "img/work-video-1.png",
            title: "案例分享｜林版巨星"
        }, {
            href: "#",
            pic: "img/work-video-1.png",
            title: "案例分享｜林版巨星"
        }, {
            href: "#",
            pic: "img/work-video-1.png",
            title: "案例分享｜林版巨星"
        } ]
    },
    computed: {},
    created: function() {
        window.addEventListener("scroll", this.ctrlScroll);
    },
    mounted: function() {
        var _this = this;
        window.onload = function() {
            _this.isLoaded = !0, _this.$nextTick(function() {
                $(".main-video li a").fancybox(), _this.changeTab(_this.tab);
            });
        };
    },
    methods: {
        ctrlScroll: function() {
            var scrollY = window.scrollY || document.documentElement.scrollTop;
            this.isScroll = 0 < scrollY ? !0 : !1;
        },
        ctrlMove: function(target, isMenu, cb) {
            if (void 0 === cb) cb = null;
            if (isMenu) this.isOpen = !1;
            this.$scrollTo(target, 500, {
                offset: -1 * document.querySelector("header").offsetHeight,
                onDone: function() {
                    if (cb) cb();
                }
            });
        },
        changeTab: function(type) {
            var _this2 = this;
            this.ctrlMove("body", !1, function() {
                if (_this2.tab = type, !_this2.isDone1 || !_this2.isDone2) _this2.$nextTick(function() {
                    if (_this2.isAnimate = !0, "video" == _this2.tab) TweenMax.staggerTo(".main-video li", .3, {
                        scale: 1,
                        ease: Power0.easeOut
                    }, .3, function() {
                        _this2.isAnimate = !1, _this2.isDone1 = !0;
                    }); else if ("web" == _this2.tab) TweenMax.staggerTo(".main-web li", .3, {
                        scale: 1,
                        ease: Power0.easeOut
                    }, .3, function() {
                        _this2.isAnimate = !1, _this2.isDone2 = !0;
                    });
                });
            });
        }
    },
    destroyed: function() {
        window.removeEventListener("scroll", this.ctrlScroll);
    }
});