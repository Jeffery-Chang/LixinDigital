"use strict";

void new Vue({
    el: "#vue",
    data: {
        isScroll: !1,
        isOpen: !1,
        isLoaded: !1,
        tab: "web"
    },
    created: function() {
        window.addEventListener("scroll", this.ctrlScroll);
    },
    methods: {
        ctrlScroll: function() {
            var scrollY = window.scrollY || document.documentElement.scrollTop;
            this.isScroll = 0 < scrollY ? !0 : !1;
        },
        ctrlMove: function(target, isMenu) {
            if (isMenu) this.isOpen = !1;
            this.$scrollTo(target, 500, {
                offset: -1 * document.querySelector("header").offsetHeight,
                onDone: function() {}
            });
        }
    },
    destroyed: function() {
        window.removeEventListener("scroll", this.ctrlScroll);
    }
});