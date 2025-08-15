/****************************************************************************************
 *                                                                                     *
 *                 Nil Solutions #1 HvH   | Utility script for the website             *
 *                                                                                     *
 * This utility was developed and provided by Gravy & The 11 View as a custom solution *
 *    This was not obfuscated to help other developers with their projects             *
 *            However you cannot take credits for this utility                         *                                          
 *                Lets stop skidding and embrace knowledge                             *
 *                                                                                     *
 *                   © 2025 Gravy & The 11 View                                        *
 *                                                                                     *
 *    Code explained to help developers make whatever changes they want.               *
 *          And also for skids to know what they're skidding                           *
 *           Discord: @gravcy for any questions or inquieres                           *
 ***************************************************************************************/

(function() {  // Defines a function, which is a reusable block of code.
    var on = addEventListener,  // Declares and initializes a variable with a value.
        off = removeEventListener,  // Executes a specific instruction or function call.
        $ = function(q) {  // Defines a function, which is a reusable block of code.
            return document.querySelector(q)  // Executes a specific instruction or function call.
        },  // Executes a specific instruction or function call.
        $$ = function(q) {  // Defines a function, which is a reusable block of code.
            return document.querySelectorAll(q)  // Executes a specific instruction or function call.
        },  // Executes a specific instruction or function call.
        $body = document.body,  // Executes a specific instruction or function call.
        $inner = $('.inner'),  // Executes a specific instruction or function call.
        client = (function() {  // Defines a function, which is a reusable block of code.
            var o = {  // Declares and initializes a variable with a value.
                    browser: 'other',  // Executes a specific instruction or function call.
                    browserVersion: 0,  // Executes a specific instruction or function call.
                    os: 'other',  // Executes a specific instruction or function call.
                    osVersion: 0,  // Executes a specific instruction or function call.
                    mobile: false,  // Executes a specific instruction or function call.
                    canUse: null,  // Executes a specific instruction or function call.
                    flags: {  // Begins a new code block scope.
                        lsdUnits: false,  // Executes a specific instruction or function call.
                    },  // Executes a specific instruction or function call.
                },  // Executes a specific instruction or function call.
                ua = navigator.userAgent,  // Executes a specific instruction or function call.
                a, i;  // Executes a specific instruction or function call.
            a = [  // Executes a specific instruction or function call.
                ['firefox', /Firefox\/([0-9\.]+)/, null],  // Executes a specific instruction or function call.
                ['edge', /Edge\/([0-9\.]+)/, null],  // Executes a specific instruction or function call.
                ['safari', /Version\/([0-9\.]+).+Safari/, null],  // Executes a specific instruction or function call.
                ['chrome', /Chrome\/([0-9\.]+)/, null],  // Executes a specific instruction or function call.
                ['chrome', /CriOS\/([0-9\.]+)/, null],  // Executes a specific instruction or function call.
                ['ie', /Trident\/.+rv:([0-9]+)/, null],  // Executes a specific instruction or function call.
                ['safari', /iPhone OS ([0-9_]+)/, function(v) {  // Defines a function, which is a reusable block of code.
                    return v.replace('_', '.').replace('_', '');  // Executes a specific instruction or function call.
                }]  // Executes a specific instruction or function call.
            ];  // Executes a specific instruction or function call.
            for (i = 0; i < a.length; i++) {  // Loop statement: repeats the code inside for a set number of iterations.
                if (ua.match(a[i][1])) {  // Conditional statement: executes the following block only if the condition is true.
                    o.browser = a[i][0];  // Executes a specific instruction or function call.
                    o.browserVersion = parseFloat(a[i][2] ? (a[i][2])(RegExp.$1) : RegExp.$1);  // Executes a specific instruction or function call.
                    break;  // Executes a specific instruction or function call.
                }  // Ends the current code block scope.
            }  // Ends the current code block scope.
            a = [  // Executes a specific instruction or function call.
                ['ios', /([0-9_]+) like Mac OS X/, function(v) {  // Defines a function, which is a reusable block of code.
                    return v.replace('_', '.').replace('_', '');  // Executes a specific instruction or function call.
                }],  // Executes a specific instruction or function call.
                ['ios', /CPU like Mac OS X/, function(v) {  // Defines a function, which is a reusable block of code.
                    return 0  // Executes a specific instruction or function call.
                }],  // Executes a specific instruction or function call.
                ['ios', /iPad; CPU/, function(v) {  // Defines a function, which is a reusable block of code.
                    return 0  // Executes a specific instruction or function call.
                }],  // Executes a specific instruction or function call.
                ['android', /Android ([0-9\.]+)/, null],  // Executes a specific instruction or function call.
                ['mac', /Macintosh.+Mac OS X ([0-9_]+)/, function(v) {  // Defines a function, which is a reusable block of code.
                    return v.replace('_', '.').replace('_', '');  // Executes a specific instruction or function call.
                }],  // Executes a specific instruction or function call.
                ['windows', /Windows NT ([0-9\.]+)/, null],  // Executes a specific instruction or function call.
                ['undefined', /Undefined/, null]  // Executes a specific instruction or function call.
            ];  // Executes a specific instruction or function call.
            for (i = 0; i < a.length; i++) {  // Loop statement: repeats the code inside for a set number of iterations.
                if (ua.match(a[i][1])) {  // Conditional statement: executes the following block only if the condition is true.
                    o.os = a[i][0];  // Executes a specific instruction or function call.
                    o.osVersion = parseFloat(a[i][2] ? (a[i][2])(RegExp.$1) : RegExp.$1);  // Executes a specific instruction or function call.
                    break;  // Executes a specific instruction or function call.
                }  // Ends the current code block scope.
            }  // Ends the current code block scope.
            if (o.os == 'mac' && ('ontouchstart' in window) && ((screen.width == 1024 && screen.height == 1366) || (screen.width == 834 && screen.height == 1112) || (screen.width == 810 && screen.height == 1080) || (screen.width == 768 && screen.height == 1024))) o.os = 'ios';  // Conditional statement: executes the following block only if the condition is true.
            o.mobile = (o.os == 'android' || o.os == 'ios');  // Executes a specific instruction or function call.
            var _canUse = document.createElement('div');  // Declares and initializes a variable with a value.
            o.canUse = function(property, value) {  // Defines a function, which is a reusable block of code.
                var style;  // Executes a specific instruction or function call.
                style = _canUse.style;  // Executes a specific instruction or function call.
                if (!(property in style)) return false;  // Conditional statement: executes the following block only if the condition is true.
                if (typeof value !== 'undefined') {  // Conditional statement: executes the following block only if the condition is true.
                    style[property] = value;  // Executes a specific instruction or function call.
                    if (style[property] == '') return false;  // Conditional statement: executes the following block only if the condition is true.
                }  // Ends the current code block scope.
                return true;  // Executes a specific instruction or function call.
            };  // Executes a specific instruction or function call.
            o.flags.lsdUnits = o.canUse('width', '100dvw');  // Executes a specific instruction or function call.
            return o;  // Executes a specific instruction or function call.
        }()),  // Executes a specific instruction or function call.
        ready = {  // Begins a new code block scope.
            list: [],  // Executes a specific instruction or function call.
            add: function(f) {  // Defines a function, which is a reusable block of code.
                this.list.push(f);  // Executes a specific instruction or function call.
            },  // Executes a specific instruction or function call.
            run: function() {  // Defines a function, which is a reusable block of code.
                this.list.forEach((f) => {  // Begins a new code block scope.
                    f();  // Executes a specific instruction or function call.
                });  // Executes a specific instruction or function call.
            },  // Executes a specific instruction or function call.
        },  // Executes a specific instruction or function call.
        trigger = function(t) {  // Defines a function, which is a reusable block of code.
            dispatchEvent(new Event(t));  // Executes a specific instruction or function call.
        },  // Executes a specific instruction or function call.
        cssRules = function(selectorText) {  // Defines a function, which is a reusable block of code.
            var ss = document.styleSheets,  // Declares and initializes a variable with a value.
                a = [],  // Executes a specific instruction or function call.
                f = function(s) {  // Defines a function, which is a reusable block of code.
                    var r = s.cssRules,  // Declares and initializes a variable with a value.
                        i;  // Executes a specific instruction or function call.
                    for (i = 0; i < r.length; i++) {  // Loop statement: repeats the code inside for a set number of iterations.
                        if (r[i] instanceof CSSMediaRule && matchMedia(r[i].conditionText).matches)(f)(r[i]);  // Conditional statement: executes the following block only if the condition is true.
                        else if (r[i] instanceof CSSStyleRule && r[i].selectorText == selectorText) a.push(r[i]);  // Executes a specific instruction or function call.
                    }  // Ends the current code block scope.
                },  // Executes a specific instruction or function call.
                x, i;  // Executes a specific instruction or function call.
            for (i = 0; i < ss.length; i++) f(ss[i]);  // Loop statement: repeats the code inside for a set number of iterations.
            return a;  // Executes a specific instruction or function call.
        },  // Executes a specific instruction or function call.
        escapeHtml = function(s) {  // Defines a function, which is a reusable block of code.
            if (s === '' || s === null || s === undefined) return '';  // Conditional statement: executes the following block only if the condition is true.
            var a = {  // Declares and initializes a variable with a value.
                '&': '&amp;',  // Executes a specific instruction or function call.
                '<': '&lt;',  // Executes a specific instruction or function call.
                '>': '&gt;',  // Executes a specific instruction or function call.
                '"': '&quot;',  // Executes a specific instruction or function call.
                "'": '&#39;',  // Executes a specific instruction or function call.
            };  // Executes a specific instruction or function call.
            s = s.replace(/[&<>"']/g, function(x) {  // Defines a function, which is a reusable block of code.
                return a[x];  // Executes a specific instruction or function call.
            });  // Executes a specific instruction or function call.
            return s;  // Executes a specific instruction or function call.
        },  // Executes a specific instruction or function call.
        thisHash = function() {  // Defines a function, which is a reusable block of code.
            var h = location.hash ? location.hash.substring(1) : null,  // Declares and initializes a variable with a value.
                a;  // Executes a specific instruction or function call.
            if (!h) return null;  // Conditional statement: executes the following block only if the condition is true.
            if (h.match(/\?/)) {  // Conditional statement: executes the following block only if the condition is true.
                a = h.split('?');  // Executes a specific instruction or function call.
                h = a[0];  // Executes a specific instruction or function call.
                history.replaceState(undefined, undefined, '#' + h);  // Executes a specific instruction or function call.
                window.location.search = a[1];  // Executes a specific instruction or function call.
            }  // Ends the current code block scope.
            if (h.length > 0 && !h.match(/^[a-zA-Z]/)) h = 'x' + h;  // Conditional statement: executes the following block only if the condition is true.
            if (typeof h == 'string') h = h.toLowerCase();  // Conditional statement: executes the following block only if the condition is true.
            return h;  // Executes a specific instruction or function call.
        },  // Executes a specific instruction or function call.
        scrollToElement = function(e, style, duration) {  // Defines a function, which is a reusable block of code.
            var y, cy, dy, start, easing, offset, f;  // Executes a specific instruction or function call.
            if (!e) y = 0;  // Conditional statement: executes the following block only if the condition is true.
            else {  // Begins a new code block scope.
                offset = (e.dataset.scrollOffset ? parseInt(e.dataset.scrollOffset) : 0) * parseFloat(getComputedStyle(document.documentElement).fontSize);  // Executes a specific instruction or function call.
                switch (e.dataset.scrollBehavior ? e.dataset.scrollBehavior : 'default') {  // Begins a new code block scope.
                    case 'default':  // Executes a specific instruction or function call.
                    default:  // Executes a specific instruction or function call.
                        y = e.offsetTop + offset;  // Executes a specific instruction or function call.
                        break;  // Executes a specific instruction or function call.
                    case 'center':  // Executes a specific instruction or function call.
                        if (e.offsetHeight < window.innerHeight) y = e.offsetTop - ((window.innerHeight - e.offsetHeight) / 2) + offset;  // Conditional statement: executes the following block only if the condition is true.
                        else y = e.offsetTop - offset;  // Executes a specific instruction or function call.
                        break;  // Executes a specific instruction or function call.
                    case 'previous':  // Executes a specific instruction or function call.
                        if (e.previousElementSibling) y = e.previousElementSibling.offsetTop + e.previousElementSibling.offsetHeight + offset;  // Conditional statement: executes the following block only if the condition is true.
                        else y = e.offsetTop + offset;  // Executes a specific instruction or function call.
                        break;  // Executes a specific instruction or function call.
                }  // Ends the current code block scope.
            }  // Ends the current code block scope.
            if (!style) style = 'smooth';  // Conditional statement: executes the following block only if the condition is true.
            if (!duration) duration = 750;  // Conditional statement: executes the following block only if the condition is true.
            if (style == 'instant') {  // Conditional statement: executes the following block only if the condition is true.
                window.scrollTo(0, y);  // Executes a specific instruction or function call.
                return;  // Executes a specific instruction or function call.
            }  // Ends the current code block scope.
            start = Date.now();  // Executes a specific instruction or function call.
            cy = window.scrollY;  // Executes a specific instruction or function call.
            dy = y - cy;  // Executes a specific instruction or function call.
            switch (style) {  // Begins a new code block scope.
                case 'linear':  // Executes a specific instruction or function call.
                    easing = function(t) {  // Defines a function, which is a reusable block of code.
                        return t  // Executes a specific instruction or function call.
                    };  // Executes a specific instruction or function call.
                    break;  // Executes a specific instruction or function call.
                case 'smooth':  // Executes a specific instruction or function call.
                    easing = function(t) {  // Defines a function, which is a reusable block of code.
                        return t < .5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1  // Executes a specific instruction or function call.
                    };  // Executes a specific instruction or function call.
                    break;  // Executes a specific instruction or function call.
            }  // Ends the current code block scope.
            f = function() {  // Defines a function, which is a reusable block of code.
                var t = Date.now() - start;  // Declares and initializes a variable with a value.
                if (t >= duration) window.scroll(0, y);  // Conditional statement: executes the following block only if the condition is true.
                else {  // Begins a new code block scope.
                    window.scroll(0, cy + (dy * easing(t / duration)));  // Executes a specific instruction or function call.
                    requestAnimationFrame(f);  // Executes a specific instruction or function call.
                }  // Ends the current code block scope.
            };  // Executes a specific instruction or function call.
            f();  // Executes a specific instruction or function call.
        },  // Executes a specific instruction or function call.
        scrollToTop = function() {  // Defines a function, which is a reusable block of code.
            scrollToElement(null);  // Executes a specific instruction or function call.
        },  // Executes a specific instruction or function call.
        loadElements = function(parent) {  // Defines a function, which is a reusable block of code.
            var a, e, x, i;  // Executes a specific instruction or function call.
            a = parent.querySelectorAll('iframe[data-src]:not([data-src=""])');  // Executes a specific instruction or function call.
            for (i = 0; i < a.length; i++) {  // Loop statement: repeats the code inside for a set number of iterations.
                a[i].contentWindow.location.replace(a[i].dataset.src);  // Executes a specific instruction or function call.
                a[i].dataset.initialSrc = a[i].dataset.src;  // Executes a specific instruction or function call.
                a[i].dataset.src = '';  // Executes a specific instruction or function call.
            }  // Ends the current code block scope.
            a = parent.querySelectorAll('video[autoplay]');  // Executes a specific instruction or function call.
            for (i = 0; i < a.length; i++) {  // Loop statement: repeats the code inside for a set number of iterations.
                if (a[i].paused) a[i].play();  // Conditional statement: executes the following block only if the condition is true.
            }  // Ends the current code block scope.
            e = parent.querySelector('[data-autofocus="1"]');  // Executes a specific instruction or function call.
            x = e ? e.tagName : null;  // Executes a specific instruction or function call.
            switch (x) {  // Begins a new code block scope.
                case 'FORM':  // Executes a specific instruction or function call.
                    e = e.querySelector('.field input, .field select, .field textarea');  // Executes a specific instruction or function call.
                    if (e) e.focus();  // Conditional statement: executes the following block only if the condition is true.
                    break;  // Executes a specific instruction or function call.
                default:  // Executes a specific instruction or function call.
                    break;  // Executes a specific instruction or function call.
            }  // Ends the current code block scope.
            a = parent.querySelectorAll('unloaded-script');  // Executes a specific instruction or function call.
            for (i = 0; i < a.length; i++) {  // Loop statement: repeats the code inside for a set number of iterations.
                x = document.createElement('script');  // Executes a specific instruction or function call.
                x.setAttribute('data-loaded', '');  // Executes a specific instruction or function call.
                if (a[i].getAttribute('src')) x.setAttribute('src', a[i].getAttribute('src'));  // Conditional statement: executes the following block only if the condition is true.
                if (a[i].textContent) x.textContent = a[i].textContent;  // Conditional statement: executes the following block only if the condition is true.
                a[i].replaceWith(x);  // Executes a specific instruction or function call.
            }  // Ends the current code block scope.
            x = new Event('loadelements');  // Executes a specific instruction or function call.
            a = parent.querySelectorAll('[data-unloaded]');  // Executes a specific instruction or function call.
            a.forEach((element) => {  // Begins a new code block scope.
                element.removeAttribute('data-unloaded');  // Executes a specific instruction or function call.
                element.dispatchEvent(x);  // Executes a specific instruction or function call.
            });  // Executes a specific instruction or function call.
        },  // Executes a specific instruction or function call.
        unloadElements = function(parent) {  // Defines a function, which is a reusable block of code.
            var a, e, x, i;  // Executes a specific instruction or function call.
            a = parent.querySelectorAll('iframe[data-src=""]');  // Executes a specific instruction or function call.
            for (i = 0; i < a.length; i++) {  // Loop statement: repeats the code inside for a set number of iterations.
                if (a[i].dataset.srcUnload === '0') continue;  // Conditional statement: executes the following block only if the condition is true.
                if ('initialSrc' in a[i].dataset) a[i].dataset.src = a[i].dataset.initialSrc;  // Conditional statement: executes the following block only if the condition is true.
                else a[i].dataset.src = a[i].src;  // Executes a specific instruction or function call.
                a[i].contentWindow.location.replace('about:blank');  // Executes a specific instruction or function call.
            }  // Ends the current code block scope.
            a = parent.querySelectorAll('video');  // Executes a specific instruction or function call.
            for (i = 0; i < a.length; i++) {  // Loop statement: repeats the code inside for a set number of iterations.
                if (!a[i].paused) a[i].pause();  // Conditional statement: executes the following block only if the condition is true.
            }  // Ends the current code block scope.
            e = $(':focus');  // Executes a specific instruction or function call.
            if (e) e.blur();  // Conditional statement: executes the following block only if the condition is true.
        };  // Executes a specific instruction or function call.
    window._scrollToTop = scrollToTop;  // Executes a specific instruction or function call.
    var thisUrl = function() {  // Defines a function, which is a reusable block of code.
        return window.location.href.replace(window.location.search, '').replace(/#$/, '');  // Executes a specific instruction or function call.
    };  // Executes a specific instruction or function call.
    var getVar = function(name) {  // Defines a function, which is a reusable block of code.
        var a = window.location.search.substring(1).split('&'),  // Declares and initializes a variable with a value.
            b, k;  // Executes a specific instruction or function call.
        for (k in a) {  // Loop statement: repeats the code inside for a set number of iterations.
            b = a[k].split('=');  // Executes a specific instruction or function call.
            if (b[0] == name) return b[1];  // Conditional statement: executes the following block only if the condition is true.
        }  // Ends the current code block scope.
        return null;  // Executes a specific instruction or function call.
    };  // Executes a specific instruction or function call.
    var errors = {  // Declares and initializes a variable with a value.
        handle: function(handler) {  // Defines a function, which is a reusable block of code.
            window.onerror = function(message, url, line, column, error) {  // Defines a function, which is a reusable block of code.
                (handler)(error.message);  // Executes a specific instruction or function call.
                return true;  // Executes a specific instruction or function call.
            };  // Executes a specific instruction or function call.
        },  // Executes a specific instruction or function call.
        unhandle: function() {  // Defines a function, which is a reusable block of code.
            window.onerror = null;  // Executes a specific instruction or function call.
        }  // Ends the current code block scope.
    };  // Executes a specific instruction or function call.
    var loaderTimeout = setTimeout(function() {  // Defines a function, which is a reusable block of code.
        $body.classList.add('with-loader');  // Executes a specific instruction or function call.
    }, 500);  // Executes a specific instruction or function call.
    var $loaderElement = document.createElement('div');  // Declares and initializes a variable with a value.
    $loaderElement.id = 'loader';  // Executes a specific instruction or function call.
    $body.appendChild($loaderElement);  // Executes a specific instruction or function call.
    var loadHandler = function() {  // Defines a function, which is a reusable block of code.
        setTimeout(function() {  // Defines a function, which is a reusable block of code.
            clearTimeout(loaderTimeout);  // Executes a specific instruction or function call.
            $body.classList.remove('is-loading');  // Executes a specific instruction or function call.
            $body.classList.add('is-playing');  // Executes a specific instruction or function call.
            setTimeout(function() {  // Defines a function, which is a reusable block of code.
                $body.classList.remove('with-loader');  // Executes a specific instruction or function call.
                $body.classList.remove('is-playing');  // Executes a specific instruction or function call.
                $body.classList.add('is-ready');  // Executes a specific instruction or function call.
                setTimeout(function() {  // Defines a function, which is a reusable block of code.
                    $body.removeChild($loaderElement);  // Executes a specific instruction or function call.
                }, 1000);  // Executes a specific instruction or function call.
            }, 750);  // Executes a specific instruction or function call.
        }, 100);  // Executes a specific instruction or function call.
    };  // Executes a specific instruction or function call.
    on('load', loadHandler);  // Executes a specific instruction or function call.
    loadElements(document.body);  // Executes a specific instruction or function call.
    (function() {  // Defines a function, which is a reusable block of code.
        var scrollPointParent = function(target) {  // Defines a function, which is a reusable block of code.
                var inner;  // Executes a specific instruction or function call.
                inner = $('#main > .inner');  // Executes a specific instruction or function call.
                while (target && target.parentElement != inner) target = target.parentElement;  // Executes a specific instruction or function call.
                return target;  // Executes a specific instruction or function call.
            },  // Executes a specific instruction or function call.
            scrollPointSpeed = function(scrollPoint) {  // Defines a function, which is a reusable block of code.
                let x = parseInt(scrollPoint.dataset.scrollSpeed);  // Declares and initializes a variable with a value.
                switch (x) {  // Begins a new code block scope.
                    case 5:  // Executes a specific instruction or function call.
                        return 250;  // Executes a specific instruction or function call.
                    case 4:  // Executes a specific instruction or function call.
                        return 500;  // Executes a specific instruction or function call.
                    case 3:  // Executes a specific instruction or function call.
                        return 750;  // Executes a specific instruction or function call.
                    case 2:  // Executes a specific instruction or function call.
                        return 1000;  // Executes a specific instruction or function call.
                    case 1:  // Executes a specific instruction or function call.
                        return 1250;  // Executes a specific instruction or function call.
                    default:  // Executes a specific instruction or function call.
                        break;  // Executes a specific instruction or function call.
                }  // Ends the current code block scope.
                return 750;  // Executes a specific instruction or function call.
            },  // Executes a specific instruction or function call.
            doNextScrollPoint = function(event) {  // Defines a function, which is a reusable block of code.
                var e, target, id;  // Executes a specific instruction or function call.
                e = scrollPointParent(event.target);  // Executes a specific instruction or function call.
                if (!e) return;  // Conditional statement: executes the following block only if the condition is true.
                while (e && e.nextElementSibling) {  // Begins a new code block scope.
                    e = e.nextElementSibling;  // Executes a specific instruction or function call.
                    if (e.dataset.scrollId) {  // Conditional statement: executes the following block only if the condition is true.
                        target = e;  // Executes a specific instruction or function call.
                        id = e.dataset.scrollId;  // Executes a specific instruction or function call.
                        break;  // Executes a specific instruction or function call.
                    }  // Ends the current code block scope.
                }  // Ends the current code block scope.
                if (!target || !id) return;  // Conditional statement: executes the following block only if the condition is true.
                if (target.dataset.scrollInvisible == '1') scrollToElement(target, 'smooth', scrollPointSpeed(target));  // Conditional statement: executes the following block only if the condition is true.
                else location.href = '#' + id;  // Executes a specific instruction or function call.
            },  // Executes a specific instruction or function call.
            doPreviousScrollPoint = function(e) {  // Defines a function, which is a reusable block of code.
                var e, target, id;  // Executes a specific instruction or function call.
                e = scrollPointParent(event.target);  // Executes a specific instruction or function call.
                if (!e) return;  // Conditional statement: executes the following block only if the condition is true.
                while (e && e.previousElementSibling) {  // Begins a new code block scope.
                    e = e.previousElementSibling;  // Executes a specific instruction or function call.
                    if (e.dataset.scrollId) {  // Conditional statement: executes the following block only if the condition is true.
                        target = e;  // Executes a specific instruction or function call.
                        id = e.dataset.scrollId;  // Executes a specific instruction or function call.
                        break;  // Executes a specific instruction or function call.
                    }  // Ends the current code block scope.
                }  // Ends the current code block scope.
                if (!target || !id) return;  // Conditional statement: executes the following block only if the condition is true.
                if (target.dataset.scrollInvisible == '1') scrollToElement(target, 'smooth', scrollPointSpeed(target));  // Conditional statement: executes the following block only if the condition is true.
                else location.href = '#' + id;  // Executes a specific instruction or function call.
            },  // Executes a specific instruction or function call.
            doFirstScrollPoint = function(e) {  // Defines a function, which is a reusable block of code.
                var e, target, id;  // Executes a specific instruction or function call.
                e = scrollPointParent(event.target);  // Executes a specific instruction or function call.
                if (!e) return;  // Conditional statement: executes the following block only if the condition is true.
                while (e && e.previousElementSibling) {  // Begins a new code block scope.
                    e = e.previousElementSibling;  // Executes a specific instruction or function call.
                    if (e.dataset.scrollId) {  // Conditional statement: executes the following block only if the condition is true.
                        target = e;  // Executes a specific instruction or function call.
                        id = e.dataset.scrollId;  // Executes a specific instruction or function call.
                    }  // Ends the current code block scope.
                }  // Ends the current code block scope.
                if (!target || !id) return;  // Conditional statement: executes the following block only if the condition is true.
                if (target.dataset.scrollInvisible == '1') scrollToElement(target, 'smooth', scrollPointSpeed(target));  // Conditional statement: executes the following block only if the condition is true.
                else location.href = '#' + id;  // Executes a specific instruction or function call.
            },  // Executes a specific instruction or function call.
            doLastScrollPoint = function(e) {  // Defines a function, which is a reusable block of code.
                var e, target, id;  // Executes a specific instruction or function call.
                e = scrollPointParent(event.target);  // Executes a specific instruction or function call.
                if (!e) return;  // Conditional statement: executes the following block only if the condition is true.
                while (e && e.nextElementSibling) {  // Begins a new code block scope.
                    e = e.nextElementSibling;  // Executes a specific instruction or function call.
                    if (e.dataset.scrollId) {  // Conditional statement: executes the following block only if the condition is true.
                        target = e;  // Executes a specific instruction or function call.
                        id = e.dataset.scrollId;  // Executes a specific instruction or function call.
                    }  // Ends the current code block scope.
                }  // Ends the current code block scope.
                if (!target || !id) return;  // Conditional statement: executes the following block only if the condition is true.
                if (target.dataset.scrollInvisible == '1') scrollToElement(target, 'smooth', scrollPointSpeed(target));  // Conditional statement: executes the following block only if the condition is true.
                else location.href = '#' + id;  // Executes a specific instruction or function call.
            };  // Executes a specific instruction or function call.
        window._nextScrollPoint = doNextScrollPoint;  // Executes a specific instruction or function call.
        window._previousScrollPoint = doPreviousScrollPoint;  // Executes a specific instruction or function call.
        window._firstScrollPoint = doFirstScrollPoint;  // Executes a specific instruction or function call.
        window._lastScrollPoint = doLastScrollPoint;  // Executes a specific instruction or function call.
        window._scrollToTop = function() {  // Defines a function, which is a reusable block of code.
            scrollToElement(null);  // Executes a specific instruction or function call.
            if (window.location.hash) {  // Conditional statement: executes the following block only if the condition is true.
                history.pushState(null, null, '.');  // Executes a specific instruction or function call.
            }  // Ends the current code block scope.
        };  // Executes a specific instruction or function call.
        if ('scrollRestoration' in history) history.scrollRestoration = 'manual';  // Conditional statement: executes the following block only if the condition is true.
        on('load', function() {  // Defines a function, which is a reusable block of code.
            var initialScrollPoint, h;  // Executes a specific instruction or function call.
            h = thisHash();  // Executes a specific instruction or function call.
            if (h && !h.match(/^[a-zA-Z0-9\-]+$/)) h = null;  // Conditional statement: executes the following block only if the condition is true.
            initialScrollPoint = $('[data-scroll-id="' + h + '"]');  // Executes a specific instruction or function call.
            if (initialScrollPoint) scrollToElement(initialScrollPoint, 'instant');  // Conditional statement: executes the following block only if the condition is true.
        });  // Executes a specific instruction or function call.
        on('hashchange', function(event) {  // Defines a function, which is a reusable block of code.
            var scrollPoint, h, pos;  // Executes a specific instruction or function call.
            h = thisHash();  // Executes a specific instruction or function call.
            if (h && !h.match(/^[a-zA-Z0-9\-]+$/)) return false;  // Conditional statement: executes the following block only if the condition is true.
            scrollPoint = $('[data-scroll-id="' + h + '"]');  // Executes a specific instruction or function call.
            if (scrollPoint) scrollToElement(scrollPoint, 'smooth', scrollPointSpeed(scrollPoint));  // Conditional statement: executes the following block only if the condition is true.
            else scrollToElement(null);  // Executes a specific instruction or function call.
            return false;  // Executes a specific instruction or function call.
        });  // Executes a specific instruction or function call.
        on('click', function(event) {  // Defines a function, which is a reusable block of code.
            var t = event.target,  // Declares and initializes a variable with a value.
                tagName = t.tagName.toUpperCase(),  // Executes a specific instruction or function call.
                scrollPoint;  // Executes a specific instruction or function call.
            switch (tagName) {  // Begins a new code block scope.
                case 'IMG':  // Executes a specific instruction or function call.
                case 'SVG':  // Executes a specific instruction or function call.
                case 'USE':  // Executes a specific instruction or function call.
                case 'U':  // Executes a specific instruction or function call.
                case 'STRONG':  // Executes a specific instruction or function call.
                case 'EM':  // Executes a specific instruction or function call.
                case 'CODE':  // Executes a specific instruction or function call.
                case 'S':  // Executes a specific instruction or function call.
                case 'MARK':  // Executes a specific instruction or function call.
                case 'SPAN':  // Executes a specific instruction or function call.
                    while (!!(t = t.parentElement))  // Executes a specific instruction or function call.
                        if (t.tagName == 'A') break;  // Conditional statement: executes the following block only if the condition is true.
                    if (!t) return;  // Conditional statement: executes the following block only if the condition is true.
                    break;  // Executes a specific instruction or function call.
                default:  // Executes a specific instruction or function call.
                    break;  // Executes a specific instruction or function call.
            }  // Ends the current code block scope.
            if (t.tagName == 'A' && t.getAttribute('href') !== null && t.getAttribute('href').substr(0, 1) == '#') {  // Conditional statement: executes the following block only if the condition is true.
                if (!!(scrollPoint = $('[data-scroll-id="' + t.hash.substr(1) + '"][data-scroll-invisible="1"]'))) {  // Conditional statement: executes the following block only if the condition is true.
                    event.preventDefault();  // Executes a specific instruction or function call.
                    scrollToElement(scrollPoint, 'smooth', scrollPointSpeed(scrollPoint));  // Executes a specific instruction or function call.
                } else if (t.hash == window.location.hash) {  // Begins a new code block scope.
                    event.preventDefault();  // Executes a specific instruction or function call.
                    history.replaceState(undefined, undefined, '#');  // Executes a specific instruction or function call.
                    location.replace(t.hash);  // Executes a specific instruction or function call.
                }  // Ends the current code block scope.
            }  // Ends the current code block scope.
        });  // Executes a specific instruction or function call.
    })();  // Executes a specific instruction or function call.
    var style, sheet, rule;  // Executes a specific instruction or function call.
    style = document.createElement('style');  // Executes a specific instruction or function call.
    style.appendChild(document.createTextNode(''));  // Executes a specific instruction or function call.
    document.head.appendChild(style);  // Executes a specific instruction or function call.
    sheet = style.sheet;  // Executes a specific instruction or function call.
    if (client.mobile) {  // Conditional statement: executes the following block only if the condition is true.
        (function() {  // Defines a function, which is a reusable block of code.
            if (client.flags.lsdUnits) {  // Conditional statement: executes the following block only if the condition is true.
                document.documentElement.style.setProperty('--viewport-height', '100svh');  // Executes a specific instruction or function call.
                document.documentElement.style.setProperty('--background-height', '100lvh');  // Executes a specific instruction or function call.
            } else {  // Begins a new code block scope.
                var f = function() {  // Defines a function, which is a reusable block of code.
                    document.documentElement.style.setProperty('--viewport-height', window.innerHeight + 'px');  // Executes a specific instruction or function call.
                    document.documentElement.style.setProperty('--background-height', (window.innerHeight + 250) + 'px');  // Executes a specific instruction or function call.
                };  // Executes a specific instruction or function call.
                on('load', f);  // Executes a specific instruction or function call.
                on('orientationchange', function() {  // Defines a function, which is a reusable block of code.
                    setTimeout(function() {  // Defines a function, which is a reusable block of code.
                        (f)();  // Executes a specific instruction or function call.
                    }, 100);  // Executes a specific instruction or function call.
                });  // Executes a specific instruction or function call.
            }  // Ends the current code block scope.
        })();  // Executes a specific instruction or function call.
    }  // Ends the current code block scope.
    if (client.os == 'android') {  // Conditional statement: executes the following block only if the condition is true.
        (function() {  // Defines a function, which is a reusable block of code.
            sheet.insertRule('body::after { }', 0);  // Executes a specific instruction or function call.
            rule = sheet.cssRules[0];  // Executes a specific instruction or function call.
            var f = function() {  // Defines a function, which is a reusable block of code.
                rule.style.cssText = 'height: ' + (Math.max(screen.width, screen.height)) + 'px';  // Executes a specific instruction or function call.
            };  // Executes a specific instruction or function call.
            on('load', f);  // Executes a specific instruction or function call.
            on('orientationchange', f);  // Executes a specific instruction or function call.
            on('touchmove', f);  // Executes a specific instruction or function call.
        })();  // Executes a specific instruction or function call.
        $body.classList.add('is-touch');  // Executes a specific instruction or function call.
    } else if (client.os == 'ios') {  // Begins a new code block scope.
        if (client.osVersion <= 11)(function() {  // Defines a function, which is a reusable block of code.
            sheet.insertRule('body::after { }', 0);  // Executes a specific instruction or function call.
            rule = sheet.cssRules[0];  // Executes a specific instruction or function call.
            rule.style.cssText = '-webkit-transform: scale(1.0)';  // Executes a specific instruction or function call.
        })();  // Executes a specific instruction or function call.
        if (client.osVersion <= 11)(function() {  // Defines a function, which is a reusable block of code.
            sheet.insertRule('body.ios-focus-fix::before { }', 0);  // Executes a specific instruction or function call.
            rule = sheet.cssRules[0];  // Executes a specific instruction or function call.
            rule.style.cssText = 'height: calc(100% + 60px)';  // Executes a specific instruction or function call.
            on('focus', function(event) {  // Defines a function, which is a reusable block of code.
                $body.classList.add('ios-focus-fix');  // Executes a specific instruction or function call.
            }, true);  // Executes a specific instruction or function call.
            on('blur', function(event) {  // Defines a function, which is a reusable block of code.
                $body.classList.remove('ios-focus-fix');  // Executes a specific instruction or function call.
            }, true);  // Executes a specific instruction or function call.
        })();  // Executes a specific instruction or function call.
        $body.classList.add('is-touch');  // Executes a specific instruction or function call.
    }(function() {  // Defines a function, which is a reusable block of code.
        var breakpoints = {  // Declares and initializes a variable with a value.
                small: '(max-width: 736px)',  // Executes a specific instruction or function call.
                medium: '(max-width: 980px)',  // Executes a specific instruction or function call.
            },  // Executes a specific instruction or function call.
            elements = $$('[data-reorder]');  // Executes a specific instruction or function call.
        elements.forEach(function(e) {  // Defines a function, which is a reusable block of code.
            var desktop = [],  // Declares and initializes a variable with a value.
                mobile = [],  // Executes a specific instruction or function call.
                state = false,  // Executes a specific instruction or function call.
                query, a, x, ce, f;  // Executes a specific instruction or function call.
            if ('reorderBreakpoint' in e.dataset && e.dataset.reorderBreakpoint in breakpoints) query = breakpoints[e.dataset.reorderBreakpoint];  // Conditional statement: executes the following block only if the condition is true.
            else query = breakpoints.small;  // Executes a specific instruction or function call.
            for (ce of e.childNodes) {  // Loop statement: repeats the code inside for a set number of iterations.
                if (ce.nodeType != 1) continue;  // Conditional statement: executes the following block only if the condition is true.
                desktop.push(ce);  // Executes a specific instruction or function call.
            }  // Ends the current code block scope.
            a = e.dataset.reorder.split(',');  // Executes a specific instruction or function call.
            for (x of a) mobile.push(desktop[parseInt(x)]);  // Loop statement: repeats the code inside for a set number of iterations.
            f = function() {  // Defines a function, which is a reusable block of code.
                var order = null,  // Declares and initializes a variable with a value.
                    ce;  // Executes a specific instruction or function call.
                if (window.matchMedia(query).matches) {  // Conditional statement: executes the following block only if the condition is true.
                    if (!state) {  // Conditional statement: executes the following block only if the condition is true.
                        state = true;  // Executes a specific instruction or function call.
                        for (ce of mobile) e.appendChild(ce);  // Loop statement: repeats the code inside for a set number of iterations.
                    }  // Ends the current code block scope.
                } else {  // Begins a new code block scope.
                    if (state) {  // Conditional statement: executes the following block only if the condition is true.
                        state = false;  // Executes a specific instruction or function call.
                        for (ce of desktop) e.appendChild(ce);  // Loop statement: repeats the code inside for a set number of iterations.
                    }  // Ends the current code block scope.
                }  // Ends the current code block scope.
            };  // Executes a specific instruction or function call.
            on('resize', f);  // Executes a specific instruction or function call.
            on('orientationchange', f);  // Executes a specific instruction or function call.
            on('load', f);  // Executes a specific instruction or function call.
            on('fullscreenchange', f);  // Executes a specific instruction or function call.
        });  // Executes a specific instruction or function call.
    })();  // Executes a specific instruction or function call.
    var scrollEvents = {  // Declares and initializes a variable with a value.
        items: [],  // Executes a specific instruction or function call.
        add: function(o) {  // Defines a function, which is a reusable block of code.
            this.items.push({  // Begins a new code block scope.
                element: o.element,  // Executes a specific instruction or function call.
                triggerElement: (('triggerElement' in o && o.triggerElement) ? o.triggerElement : o.element),  // Executes a specific instruction or function call.
                enter: ('enter' in o ? o.enter : null),  // Executes a specific instruction or function call.
                leave: ('leave' in o ? o.leave : null),  // Executes a specific instruction or function call.
                mode: ('mode' in o ? o.mode : 4),  // Executes a specific instruction or function call.
                threshold: ('threshold' in o ? o.threshold : 0.25),  // Executes a specific instruction or function call.
                offset: ('offset' in o ? o.offset : 0),  // Executes a specific instruction or function call.
                initialState: ('initialState' in o ? o.initialState : null),  // Executes a specific instruction or function call.
                state: false,  // Executes a specific instruction or function call.
            });  // Executes a specific instruction or function call.
        },  // Executes a specific instruction or function call.
        handler: function() {  // Defines a function, which is a reusable block of code.
            var height, top, bottom, scrollPad;  // Executes a specific instruction or function call.
            if (client.os == 'ios') {  // Conditional statement: executes the following block only if the condition is true.
                height = document.documentElement.clientHeight;  // Executes a specific instruction or function call.
                top = document.body.scrollTop + window.scrollY;  // Executes a specific instruction or function call.
                bottom = top + height;  // Executes a specific instruction or function call.
                scrollPad = 125;  // Executes a specific instruction or function call.
            } else {  // Begins a new code block scope.
                height = document.documentElement.clientHeight;  // Executes a specific instruction or function call.
                top = document.documentElement.scrollTop;  // Executes a specific instruction or function call.
                bottom = top + height;  // Executes a specific instruction or function call.
                scrollPad = 0;  // Executes a specific instruction or function call.
            }  // Ends the current code block scope.
            scrollEvents.items.forEach(function(item) {  // Defines a function, which is a reusable block of code.
                var elementTop, elementBottom, viewportTop, viewportBottom, bcr, pad, state, a, b;  // Executes a specific instruction or function call.
                if (!item.enter && !item.leave) return true;  // Conditional statement: executes the following block only if the condition is true.
                if (!item.triggerElement) return true;  // Conditional statement: executes the following block only if the condition is true.
                if (item.triggerElement.offsetParent === null) {  // Conditional statement: executes the following block only if the condition is true.
                    if (item.state == true && item.leave) {  // Conditional statement: executes the following block only if the condition is true.
                        item.state = false;  // Executes a specific instruction or function call.
                        (item.leave).apply(item.element);  // Executes a specific instruction or function call.
                        if (!item.enter) item.leave = null;  // Conditional statement: executes the following block only if the condition is true.
                    }  // Ends the current code block scope.
                    return true;  // Executes a specific instruction or function call.
                }  // Ends the current code block scope.
                bcr = item.triggerElement.getBoundingClientRect();  // Executes a specific instruction or function call.
                elementTop = top + Math.floor(bcr.top);  // Executes a specific instruction or function call.
                elementBottom = elementTop + bcr.height;  // Executes a specific instruction or function call.
                if (item.initialState !== null) {  // Conditional statement: executes the following block only if the condition is true.
                    state = item.initialState;  // Executes a specific instruction or function call.
                    item.initialState = null;  // Executes a specific instruction or function call.
                } else {  // Begins a new code block scope.
                    switch (item.mode) {  // Begins a new code block scope.
                        case 1:  // Executes a specific instruction or function call.
                        default:  // Executes a specific instruction or function call.
                            state = (bottom > (elementTop - item.offset) && top < (elementBottom + item.offset));  // Executes a specific instruction or function call.
                            break;  // Executes a specific instruction or function call.
                        case 2:  // Executes a specific instruction or function call.
                            a = (top + (height * 0.5));  // Executes a specific instruction or function call.
                            state = (a > (elementTop - item.offset) && a < (elementBottom + item.offset));  // Executes a specific instruction or function call.
                            break;  // Executes a specific instruction or function call.
                        case 3:  // Executes a specific instruction or function call.
                            a = top + (height * (item.threshold));  // Executes a specific instruction or function call.
                            if (a - (height * 0.375) <= 0) a = 0;  // Conditional statement: executes the following block only if the condition is true.
                            b = top + (height * (1 - item.threshold));  // Executes a specific instruction or function call.
                            if (b + (height * 0.375) >= document.body.scrollHeight - scrollPad) b = document.body.scrollHeight + scrollPad;  // Conditional statement: executes the following block only if the condition is true.
                            state = (b > (elementTop - item.offset) && a < (elementBottom + item.offset));  // Executes a specific instruction or function call.
                            break;  // Executes a specific instruction or function call.
                        case 4:  // Executes a specific instruction or function call.
                            pad = height * item.threshold;  // Executes a specific instruction or function call.
                            viewportTop = (top + pad);  // Executes a specific instruction or function call.
                            viewportBottom = (bottom - pad);  // Executes a specific instruction or function call.
                            if (Math.floor(top) <= pad) viewportTop = top;  // Conditional statement: executes the following block only if the condition is true.
                            if (Math.ceil(bottom) >= (document.body.scrollHeight - pad)) viewportBottom = bottom;  // Conditional statement: executes the following block only if the condition is true.
                            if ((viewportBottom - viewportTop) >= (elementBottom - elementTop)) {  // Conditional statement: executes the following block only if the condition is true.
                                state = ((elementTop >= viewportTop && elementBottom <= viewportBottom) || (elementTop >= viewportTop && elementTop <= viewportBottom) || (elementBottom >= viewportTop && elementBottom <= viewportBottom));  // Executes a specific instruction or function call.
                            } else state = ((viewportTop >= elementTop && viewportBottom <= elementBottom) || (elementTop >= viewportTop && elementTop <= viewportBottom) || (elementBottom >= viewportTop && elementBottom <= viewportBottom));  // Executes a specific instruction or function call.
                            break;  // Executes a specific instruction or function call.
                    }  // Ends the current code block scope.
                }  // Ends the current code block scope.
                if (state != item.state) {  // Conditional statement: executes the following block only if the condition is true.
                    item.state = state;  // Executes a specific instruction or function call.
                    if (item.state) {  // Conditional statement: executes the following block only if the condition is true.
                        if (item.enter) {  // Conditional statement: executes the following block only if the condition is true.
                            (item.enter).apply(item.element);  // Executes a specific instruction or function call.
                            if (!item.leave) item.enter = null;  // Conditional statement: executes the following block only if the condition is true.
                        }  // Ends the current code block scope.
                    } else {  // Begins a new code block scope.
                        if (item.leave) {  // Conditional statement: executes the following block only if the condition is true.
                            (item.leave).apply(item.element);  // Executes a specific instruction or function call.
                            if (!item.enter) item.leave = null;  // Conditional statement: executes the following block only if the condition is true.
                        }  // Ends the current code block scope.
                    }  // Ends the current code block scope.
                }  // Ends the current code block scope.
            });  // Executes a specific instruction or function call.
        },  // Executes a specific instruction or function call.
        init: function() {  // Defines a function, which is a reusable block of code.
            on('load', this.handler);  // Executes a specific instruction or function call.
            on('resize', this.handler);  // Executes a specific instruction or function call.
            on('scroll', this.handler);  // Executes a specific instruction or function call.
            (this.handler)();  // Executes a specific instruction or function call.
        }  // Ends the current code block scope.
    };  // Executes a specific instruction or function call.
    scrollEvents.init();  // Executes a specific instruction or function call.
    var onvisible = {  // Declares and initializes a variable with a value.
        effects: {  // Begins a new code block scope.
            'blur-in': {  // Begins a new code block scope.
                type: 'transition',  // Executes a specific instruction or function call.
                transition: function(speed, delay) {  // Defines a function, which is a reusable block of code.
                    return 'opacity ' + speed + 's ease' + (delay ? ' ' + delay + 's' : '') + ', ' + 'filter ' + speed + 's ease' + (delay ? ' ' + delay + 's' : '');  // Executes a specific instruction or function call.
                },  // Executes a specific instruction or function call.
                rewind: function(intensity) {  // Defines a function, which is a reusable block of code.
                    this.style.opacity = 0;  // Executes a specific instruction or function call.
                    this.style.filter = 'blur(' + (0.25 * intensity) + 'rem)';  // Executes a specific instruction or function call.
                },  // Executes a specific instruction or function call.
                play: function() {  // Defines a function, which is a reusable block of code.
                    this.style.opacity = 1;  // Executes a specific instruction or function call.
                    this.style.filter = 'none';  // Executes a specific instruction or function call.
                },  // Executes a specific instruction or function call.
            },  // Executes a specific instruction or function call.
            'zoom-in': {  // Begins a new code block scope.
                type: 'transition',  // Executes a specific instruction or function call.
                transition: function(speed, delay) {  // Defines a function, which is a reusable block of code.
                    return 'opacity ' + speed + 's ease' + (delay ? ' ' + delay + 's' : '') + ', ' + 'transform ' + speed + 's ease' + (delay ? ' ' + delay + 's' : '');  // Executes a specific instruction or function call.
                },  // Executes a specific instruction or function call.
                rewind: function(intensity, alt) {  // Defines a function, which is a reusable block of code.
                    this.style.opacity = 0;  // Executes a specific instruction or function call.
                    this.style.transform = 'scale(' + (1 - ((alt ? 0.25 : 0.05) * intensity)) + ')';  // Executes a specific instruction or function call.
                },  // Executes a specific instruction or function call.
                play: function() {  // Defines a function, which is a reusable block of code.
                    this.style.opacity = 1;  // Executes a specific instruction or function call.
                    this.style.transform = 'none';  // Executes a specific instruction or function call.
                },  // Executes a specific instruction or function call.
            },  // Executes a specific instruction or function call.
            'zoom-out': {  // Begins a new code block scope.
                type: 'transition',  // Executes a specific instruction or function call.
                transition: function(speed, delay) {  // Defines a function, which is a reusable block of code.
                    return 'opacity ' + speed + 's ease' + (delay ? ' ' + delay + 's' : '') + ', ' + 'transform ' + speed + 's ease' + (delay ? ' ' + delay + 's' : '');  // Executes a specific instruction or function call.
                },  // Executes a specific instruction or function call.
                rewind: function(intensity, alt) {  // Defines a function, which is a reusable block of code.
                    this.style.opacity = 0;  // Executes a specific instruction or function call.
                    this.style.transform = 'scale(' + (1 + ((alt ? 0.25 : 0.05) * intensity)) + ')';  // Executes a specific instruction or function call.
                },  // Executes a specific instruction or function call.
                play: function() {  // Defines a function, which is a reusable block of code.
                    this.style.opacity = 1;  // Executes a specific instruction or function call.
                    this.style.transform = 'none';  // Executes a specific instruction or function call.
                },  // Executes a specific instruction or function call.
            },  // Executes a specific instruction or function call.
            'slide-left': {  // Begins a new code block scope.
                type: 'transition',  // Executes a specific instruction or function call.
                transition: function(speed, delay) {  // Defines a function, which is a reusable block of code.
                    return 'transform ' + speed + 's ease' + (delay ? ' ' + delay + 's' : '');  // Executes a specific instruction or function call.
                },  // Executes a specific instruction or function call.
                rewind: function() {  // Defines a function, which is a reusable block of code.
                    this.style.transform = 'translateX(100vw)';  // Executes a specific instruction or function call.
                },  // Executes a specific instruction or function call.
                play: function() {  // Defines a function, which is a reusable block of code.
                    this.style.transform = 'none';  // Executes a specific instruction or function call.
                },  // Executes a specific instruction or function call.
            },  // Executes a specific instruction or function call.
            'slide-right': {  // Begins a new code block scope.
                type: 'transition',  // Executes a specific instruction or function call.
                transition: function(speed, delay) {  // Defines a function, which is a reusable block of code.
                    return 'transform ' + speed + 's ease' + (delay ? ' ' + delay + 's' : '');  // Executes a specific instruction or function call.
                },  // Executes a specific instruction or function call.
                rewind: function() {  // Defines a function, which is a reusable block of code.
                    this.style.transform = 'translateX(-100vw)';  // Executes a specific instruction or function call.
                },  // Executes a specific instruction or function call.
                play: function() {  // Defines a function, which is a reusable block of code.
                    this.style.transform = 'none';  // Executes a specific instruction or function call.
                },  // Executes a specific instruction or function call.
            },  // Executes a specific instruction or function call.
            'flip-forward': {  // Begins a new code block scope.
                type: 'transition',  // Executes a specific instruction or function call.
                transition: function(speed, delay) {  // Defines a function, which is a reusable block of code.
                    return 'opacity ' + speed + 's ease' + (delay ? ' ' + delay + 's' : '') + ', ' + 'transform ' + speed + 's ease' + (delay ? ' ' + delay + 's' : '');  // Executes a specific instruction or function call.
                },  // Executes a specific instruction or function call.
                rewind: function(intensity, alt) {  // Defines a function, which is a reusable block of code.
                    this.style.opacity = 0;  // Executes a specific instruction or function call.
                    this.style.transformOrigin = '50% 50%';  // Executes a specific instruction or function call.
                    this.style.transform = 'perspective(1000px) rotateX(' + ((alt ? 45 : 15) * intensity) + 'deg)';  // Executes a specific instruction or function call.
                },  // Executes a specific instruction or function call.
                play: function() {  // Defines a function, which is a reusable block of code.
                    this.style.opacity = 1;  // Executes a specific instruction or function call.
                    this.style.transform = 'none';  // Executes a specific instruction or function call.
                },  // Executes a specific instruction or function call.
            },  // Executes a specific instruction or function call.
            'flip-backward': {  // Begins a new code block scope.
                type: 'transition',  // Executes a specific instruction or function call.
                transition: function(speed, delay) {  // Defines a function, which is a reusable block of code.
                    return 'opacity ' + speed + 's ease' + (delay ? ' ' + delay + 's' : '') + ', ' + 'transform ' + speed + 's ease' + (delay ? ' ' + delay + 's' : '');  // Executes a specific instruction or function call.
                },  // Executes a specific instruction or function call.
                rewind: function(intensity, alt) {  // Defines a function, which is a reusable block of code.
                    this.style.opacity = 0;  // Executes a specific instruction or function call.
                    this.style.transformOrigin = '50% 50%';  // Executes a specific instruction or function call.
                    this.style.transform = 'perspective(1000px) rotateX(' + ((alt ? -45 : -15) * intensity) + 'deg)';  // Executes a specific instruction or function call.
                },  // Executes a specific instruction or function call.
                play: function() {  // Defines a function, which is a reusable block of code.
                    this.style.opacity = 1;  // Executes a specific instruction or function call.
                    this.style.transform = 'none';  // Executes a specific instruction or function call.
                },  // Executes a specific instruction or function call.
            },  // Executes a specific instruction or function call.
            'flip-left': {  // Begins a new code block scope.
                type: 'transition',  // Executes a specific instruction or function call.
                transition: function(speed, delay) {  // Defines a function, which is a reusable block of code.
                    return 'opacity ' + speed + 's ease' + (delay ? ' ' + delay + 's' : '') + ', ' + 'transform ' + speed + 's ease' + (delay ? ' ' + delay + 's' : '');  // Executes a specific instruction or function call.
                },  // Executes a specific instruction or function call.
                rewind: function(intensity, alt) {  // Defines a function, which is a reusable block of code.
                    this.style.opacity = 0;  // Executes a specific instruction or function call.
                    this.style.transformOrigin = '50% 50%';  // Executes a specific instruction or function call.
                    this.style.transform = 'perspective(1000px) rotateY(' + ((alt ? 45 : 15) * intensity) + 'deg)';  // Executes a specific instruction or function call.
                },  // Executes a specific instruction or function call.
                play: function() {  // Defines a function, which is a reusable block of code.
                    this.style.opacity = 1;  // Executes a specific instruction or function call.
                    this.style.transform = 'none';  // Executes a specific instruction or function call.
                },  // Executes a specific instruction or function call.
            },  // Executes a specific instruction or function call.
            'flip-right': {  // Begins a new code block scope.
                type: 'transition',  // Executes a specific instruction or function call.
                transition: function(speed, delay) {  // Defines a function, which is a reusable block of code.
                    return 'opacity ' + speed + 's ease' + (delay ? ' ' + delay + 's' : '') + ', ' + 'transform ' + speed + 's ease' + (delay ? ' ' + delay + 's' : '');  // Executes a specific instruction or function call.
                },  // Executes a specific instruction or function call.
                rewind: function(intensity, alt) {  // Defines a function, which is a reusable block of code.
                    this.style.opacity = 0;  // Executes a specific instruction or function call.
                    this.style.transformOrigin = '50% 50%';  // Executes a specific instruction or function call.
                    this.style.transform = 'perspective(1000px) rotateY(' + ((alt ? -45 : -15) * intensity) + 'deg)';  // Executes a specific instruction or function call.
                },  // Executes a specific instruction or function call.
                play: function() {  // Defines a function, which is a reusable block of code.
                    this.style.opacity = 1;  // Executes a specific instruction or function call.
                    this.style.transform = 'none';  // Executes a specific instruction or function call.
                },  // Executes a specific instruction or function call.
            },  // Executes a specific instruction or function call.
            'tilt-left': {  // Begins a new code block scope.
                type: 'transition',  // Executes a specific instruction or function call.
                transition: function(speed, delay) {  // Defines a function, which is a reusable block of code.
                    return 'opacity ' + speed + 's ease' + (delay ? ' ' + delay + 's' : '') + ', ' + 'transform ' + speed + 's ease' + (delay ? ' ' + delay + 's' : '');  // Executes a specific instruction or function call.
                },  // Executes a specific instruction or function call.
                rewind: function(intensity, alt) {  // Defines a function, which is a reusable block of code.
                    this.style.opacity = 0;  // Executes a specific instruction or function call.
                    this.style.transform = 'rotate(' + ((alt ? 45 : 5) * intensity) + 'deg)';  // Executes a specific instruction or function call.
                },  // Executes a specific instruction or function call.
                play: function() {  // Defines a function, which is a reusable block of code.
                    this.style.opacity = 1;  // Executes a specific instruction or function call.
                    this.style.transform = 'none';  // Executes a specific instruction or function call.
                },  // Executes a specific instruction or function call.
            },  // Executes a specific instruction or function call.
            'tilt-right': {  // Begins a new code block scope.
                type: 'transition',  // Executes a specific instruction or function call.
                transition: function(speed, delay) {  // Defines a function, which is a reusable block of code.
                    return 'opacity ' + speed + 's ease' + (delay ? ' ' + delay + 's' : '') + ', ' + 'transform ' + speed + 's ease' + (delay ? ' ' + delay + 's' : '');  // Executes a specific instruction or function call.
                },  // Executes a specific instruction or function call.
                rewind: function(intensity, alt) {  // Defines a function, which is a reusable block of code.
                    this.style.opacity = 0;  // Executes a specific instruction or function call.
                    this.style.transform = 'rotate(' + ((alt ? -45 : -5) * intensity) + 'deg)';  // Executes a specific instruction or function call.
                },  // Executes a specific instruction or function call.
                play: function() {  // Defines a function, which is a reusable block of code.
                    this.style.opacity = 1;  // Executes a specific instruction or function call.
                    this.style.transform = 'none';  // Executes a specific instruction or function call.
                },  // Executes a specific instruction or function call.
            },  // Executes a specific instruction or function call.
            'fade-right': {  // Begins a new code block scope.
                type: 'transition',  // Executes a specific instruction or function call.
                transition: function(speed, delay) {  // Defines a function, which is a reusable block of code.
                    return 'opacity ' + speed + 's ease' + (delay ? ' ' + delay + 's' : '') + ', ' + 'transform ' + speed + 's ease' + (delay ? ' ' + delay + 's' : '');  // Executes a specific instruction or function call.
                },  // Executes a specific instruction or function call.
                rewind: function(intensity) {  // Defines a function, which is a reusable block of code.
                    this.style.opacity = 0;  // Executes a specific instruction or function call.
                    this.style.transform = 'translateX(' + (-1.5 * intensity) + 'rem)';  // Executes a specific instruction or function call.
                },  // Executes a specific instruction or function call.
                play: function() {  // Defines a function, which is a reusable block of code.
                    this.style.opacity = 1;  // Executes a specific instruction or function call.
                    this.style.transform = 'none';  // Executes a specific instruction or function call.
                },  // Executes a specific instruction or function call.
            },  // Executes a specific instruction or function call.
            'fade-left': {  // Begins a new code block scope.
                type: 'transition',  // Executes a specific instruction or function call.
                transition: function(speed, delay) {  // Defines a function, which is a reusable block of code.
                    return 'opacity ' + speed + 's ease' + (delay ? ' ' + delay + 's' : '') + ', ' + 'transform ' + speed + 's ease' + (delay ? ' ' + delay + 's' : '');  // Executes a specific instruction or function call.
                },  // Executes a specific instruction or function call.
                rewind: function(intensity) {  // Defines a function, which is a reusable block of code.
                    this.style.opacity = 0;  // Executes a specific instruction or function call.
                    this.style.transform = 'translateX(' + (1.5 * intensity) + 'rem)';  // Executes a specific instruction or function call.
                },  // Executes a specific instruction or function call.
                play: function() {  // Defines a function, which is a reusable block of code.
                    this.style.opacity = 1;  // Executes a specific instruction or function call.
                    this.style.transform = 'none';  // Executes a specific instruction or function call.
                },  // Executes a specific instruction or function call.
            },  // Executes a specific instruction or function call.
            'fade-down': {  // Begins a new code block scope.
                type: 'transition',  // Executes a specific instruction or function call.
                transition: function(speed, delay) {  // Defines a function, which is a reusable block of code.
                    return 'opacity ' + speed + 's ease' + (delay ? ' ' + delay + 's' : '') + ', ' + 'transform ' + speed + 's ease' + (delay ? ' ' + delay + 's' : '');  // Executes a specific instruction or function call.
                },  // Executes a specific instruction or function call.
                rewind: function(intensity) {  // Defines a function, which is a reusable block of code.
                    this.style.opacity = 0;  // Executes a specific instruction or function call.
                    this.style.transform = 'translateY(' + (-1.5 * intensity) + 'rem)';  // Executes a specific instruction or function call.
                },  // Executes a specific instruction or function call.
                play: function() {  // Defines a function, which is a reusable block of code.
                    this.style.opacity = 1;  // Executes a specific instruction or function call.
                    this.style.transform = 'none';  // Executes a specific instruction or function call.
                },  // Executes a specific instruction or function call.
            },  // Executes a specific instruction or function call.
            'fade-up': {  // Begins a new code block scope.
                type: 'transition',  // Executes a specific instruction or function call.
                transition: function(speed, delay) {  // Defines a function, which is a reusable block of code.
                    return 'opacity ' + speed + 's ease' + (delay ? ' ' + delay + 's' : '') + ', ' + 'transform ' + speed + 's ease' + (delay ? ' ' + delay + 's' : '');  // Executes a specific instruction or function call.
                },  // Executes a specific instruction or function call.
                rewind: function(intensity) {  // Defines a function, which is a reusable block of code.
                    this.style.opacity = 0;  // Executes a specific instruction or function call.
                    this.style.transform = 'translateY(' + (1.5 * intensity) + 'rem)';  // Executes a specific instruction or function call.
                },  // Executes a specific instruction or function call.
                play: function() {  // Defines a function, which is a reusable block of code.
                    this.style.opacity = 1;  // Executes a specific instruction or function call.
                    this.style.transform = 'none';  // Executes a specific instruction or function call.
                },  // Executes a specific instruction or function call.
            },  // Executes a specific instruction or function call.
            'fade-in': {  // Begins a new code block scope.
                type: 'transition',  // Executes a specific instruction or function call.
                transition: function(speed, delay) {  // Defines a function, which is a reusable block of code.
                    return 'opacity ' + speed + 's ease' + (delay ? ' ' + delay + 's' : '');  // Executes a specific instruction or function call.
                },  // Executes a specific instruction or function call.
                rewind: function() {  // Defines a function, which is a reusable block of code.
                    this.style.opacity = 0;  // Executes a specific instruction or function call.
                },  // Executes a specific instruction or function call.
                play: function() {  // Defines a function, which is a reusable block of code.
                    this.style.opacity = 1;  // Executes a specific instruction or function call.
                },  // Executes a specific instruction or function call.
            },  // Executes a specific instruction or function call.
            'fade-in-background': {  // Begins a new code block scope.
                type: 'manual',  // Executes a specific instruction or function call.
                rewind: function() {  // Defines a function, which is a reusable block of code.
                    this.style.removeProperty('--onvisible-delay');  // Executes a specific instruction or function call.
                    this.style.removeProperty('--onvisible-background-color');  // Executes a specific instruction or function call.
                },  // Executes a specific instruction or function call.
                play: function(speed, delay) {  // Defines a function, which is a reusable block of code.
                    this.style.setProperty('--onvisible-speed', speed + 's');  // Executes a specific instruction or function call.
                    if (delay) this.style.setProperty('--onvisible-delay', delay + 's');  // Conditional statement: executes the following block only if the condition is true.
                    this.style.setProperty('--onvisible-background-color', 'rgba(0,0,0,0.001)');  // Executes a specific instruction or function call.
                },  // Executes a specific instruction or function call.
            },  // Executes a specific instruction or function call.
            'zoom-in-image': {  // Begins a new code block scope.
                type: 'transition',  // Executes a specific instruction or function call.
                target: 'img',  // Executes a specific instruction or function call.
                transition: function(speed, delay) {  // Defines a function, which is a reusable block of code.
                    return 'transform ' + speed + 's ease' + (delay ? ' ' + delay + 's' : '');  // Executes a specific instruction or function call.
                },  // Executes a specific instruction or function call.
                rewind: function() {  // Defines a function, which is a reusable block of code.
                    this.style.transform = 'scale(1)';  // Executes a specific instruction or function call.
                },  // Executes a specific instruction or function call.
                play: function(intensity) {  // Defines a function, which is a reusable block of code.
                    this.style.transform = 'scale(' + (1 + (0.1 * intensity)) + ')';  // Executes a specific instruction or function call.
                },  // Executes a specific instruction or function call.
            },  // Executes a specific instruction or function call.
            'zoom-out-image': {  // Begins a new code block scope.
                type: 'transition',  // Executes a specific instruction or function call.
                target: 'img',  // Executes a specific instruction or function call.
                transition: function(speed, delay) {  // Defines a function, which is a reusable block of code.
                    return 'transform ' + speed + 's ease' + (delay ? ' ' + delay + 's' : '');  // Executes a specific instruction or function call.
                },  // Executes a specific instruction or function call.
                rewind: function(intensity) {  // Defines a function, which is a reusable block of code.
                    this.style.transform = 'scale(' + (1 + (0.1 * intensity)) + ')';  // Executes a specific instruction or function call.
                },  // Executes a specific instruction or function call.
                play: function() {  // Defines a function, which is a reusable block of code.
                    this.style.transform = 'none';  // Executes a specific instruction or function call.
                },  // Executes a specific instruction or function call.
            },  // Executes a specific instruction or function call.
            'focus-image': {  // Begins a new code block scope.
                type: 'transition',  // Executes a specific instruction or function call.
                target: 'img',  // Executes a specific instruction or function call.
                transition: function(speed, delay) {  // Defines a function, which is a reusable block of code.
                    return 'transform ' + speed + 's ease' + (delay ? ' ' + delay + 's' : '') + ', ' + 'filter ' + speed + 's ease' + (delay ? ' ' + delay + 's' : '');  // Executes a specific instruction or function call.
                },  // Executes a specific instruction or function call.
                rewind: function(intensity) {  // Defines a function, which is a reusable block of code.
                    this.style.transform = 'scale(' + (1 + (0.05 * intensity)) + ')';  // Executes a specific instruction or function call.
                    this.style.filter = 'blur(' + (0.25 * intensity) + 'rem)';  // Executes a specific instruction or function call.
                },  // Executes a specific instruction or function call.
                play: function(intensity) {  // Defines a function, which is a reusable block of code.
                    this.style.transform = 'none';  // Executes a specific instruction or function call.
                    this.style.filter = 'none';  // Executes a specific instruction or function call.
                },  // Executes a specific instruction or function call.
            },  // Executes a specific instruction or function call.
            'wipe-up': {  // Begins a new code block scope.
                type: 'animate',  // Executes a specific instruction or function call.
                keyframes: function(intensity) {  // Defines a function, which is a reusable block of code.
                    return [{  // Begins a new code block scope.
                        maskSize: '100% 0%',  // Executes a specific instruction or function call.
                        maskImage: 'linear-gradient(90deg, black 100%, transparent 100%)',  // Executes a specific instruction or function call.
                    }, {  // Begins a new code block scope.
                        maskSize: '110% 110%',  // Executes a specific instruction or function call.
                        maskImage: 'linear-gradient(90deg, black 100%, transparent 100%)',  // Executes a specific instruction or function call.
                    }, ];  // Executes a specific instruction or function call.
                },  // Executes a specific instruction or function call.
                options: function(speed) {  // Defines a function, which is a reusable block of code.
                    return {  // Begins a new code block scope.
                        duration: speed,  // Executes a specific instruction or function call.
                        iterations: 1,  // Executes a specific instruction or function call.
                        easing: 'ease',  // Executes a specific instruction or function call.
                    };  // Executes a specific instruction or function call.
                },  // Executes a specific instruction or function call.
                rewind: function() {  // Defines a function, which is a reusable block of code.
                    this.style.opacity = 0;  // Executes a specific instruction or function call.
                    this.style.maskComposite = 'exclude';  // Executes a specific instruction or function call.
                    this.style.maskRepeat = 'no-repeat';  // Executes a specific instruction or function call.
                    this.style.maskPosition = '0% 100%';  // Executes a specific instruction or function call.
                },  // Executes a specific instruction or function call.
                play: function() {  // Defines a function, which is a reusable block of code.
                    this.style.opacity = 1;  // Executes a specific instruction or function call.
                },  // Executes a specific instruction or function call.
            },  // Executes a specific instruction or function call.
            'wipe-down': {  // Begins a new code block scope.
                type: 'animate',  // Executes a specific instruction or function call.
                keyframes: function(intensity) {  // Defines a function, which is a reusable block of code.
                    return [{  // Begins a new code block scope.
                        maskSize: '100% 0%',  // Executes a specific instruction or function call.
                        maskImage: 'linear-gradient(90deg, black 100%, transparent 100%)',  // Executes a specific instruction or function call.
                    }, {  // Begins a new code block scope.
                        maskSize: '110% 110%',  // Executes a specific instruction or function call.
                        maskImage: 'linear-gradient(90deg, black 100%, transparent 100%)',  // Executes a specific instruction or function call.
                    }, ];  // Executes a specific instruction or function call.
                },  // Executes a specific instruction or function call.
                options: function(speed) {  // Defines a function, which is a reusable block of code.
                    return {  // Begins a new code block scope.
                        duration: speed,  // Executes a specific instruction or function call.
                        iterations: 1,  // Executes a specific instruction or function call.
                        easing: 'ease',  // Executes a specific instruction or function call.
                    };  // Executes a specific instruction or function call.
                },  // Executes a specific instruction or function call.
                rewind: function() {  // Defines a function, which is a reusable block of code.
                    this.style.opacity = 0;  // Executes a specific instruction or function call.
                    this.style.maskComposite = 'exclude';  // Executes a specific instruction or function call.
                    this.style.maskRepeat = 'no-repeat';  // Executes a specific instruction or function call.
                    this.style.maskPosition = '0% 0%';  // Executes a specific instruction or function call.
                },  // Executes a specific instruction or function call.
                play: function() {  // Defines a function, which is a reusable block of code.
                    this.style.opacity = 1;  // Executes a specific instruction or function call.
                },  // Executes a specific instruction or function call.
            },  // Executes a specific instruction or function call.
            'wipe-left': {  // Begins a new code block scope.
                type: 'animate',  // Executes a specific instruction or function call.
                keyframes: function(intensity) {  // Defines a function, which is a reusable block of code.
                    return [{  // Begins a new code block scope.
                        maskSize: '0% 100%',  // Executes a specific instruction or function call.
                        maskImage: 'linear-gradient(90deg, black 100%, transparent 100%)',  // Executes a specific instruction or function call.
                    }, {  // Begins a new code block scope.
                        maskSize: '110% 110%',  // Executes a specific instruction or function call.
                        maskImage: 'linear-gradient(90deg, black 100%, transparent 100%)',  // Executes a specific instruction or function call.
                    }, ];  // Executes a specific instruction or function call.
                },  // Executes a specific instruction or function call.
                options: function(speed) {  // Defines a function, which is a reusable block of code.
                    return {  // Begins a new code block scope.
                        duration: speed,  // Executes a specific instruction or function call.
                        iterations: 1,  // Executes a specific instruction or function call.
                        easing: 'ease',  // Executes a specific instruction or function call.
                    };  // Executes a specific instruction or function call.
                },  // Executes a specific instruction or function call.
                rewind: function() {  // Defines a function, which is a reusable block of code.
                    this.style.opacity = 0;  // Executes a specific instruction or function call.
                    this.style.maskComposite = 'exclude';  // Executes a specific instruction or function call.
                    this.style.maskRepeat = 'no-repeat';  // Executes a specific instruction or function call.
                    this.style.maskPosition = '100% 0%';  // Executes a specific instruction or function call.
                },  // Executes a specific instruction or function call.
                play: function() {  // Defines a function, which is a reusable block of code.
                    this.style.opacity = 1;  // Executes a specific instruction or function call.
                },  // Executes a specific instruction or function call.
            },  // Executes a specific instruction or function call.
            'wipe-right': {  // Begins a new code block scope.
                type: 'animate',  // Executes a specific instruction or function call.
                keyframes: function(intensity) {  // Defines a function, which is a reusable block of code.
                    return [{  // Begins a new code block scope.
                        maskSize: '0% 100%',  // Executes a specific instruction or function call.
                        maskImage: 'linear-gradient(90deg, black 100%, transparent 100%)',  // Executes a specific instruction or function call.
                    }, {  // Begins a new code block scope.
                        maskSize: '110% 110%',  // Executes a specific instruction or function call.
                        maskImage: 'linear-gradient(90deg, black 100%, transparent 100%)',  // Executes a specific instruction or function call.
                    }, ];  // Executes a specific instruction or function call.
                },  // Executes a specific instruction or function call.
                options: function(speed) {  // Defines a function, which is a reusable block of code.
                    return {  // Begins a new code block scope.
                        duration: speed,  // Executes a specific instruction or function call.
                        iterations: 1,  // Executes a specific instruction or function call.
                        easing: 'ease',  // Executes a specific instruction or function call.
                    };  // Executes a specific instruction or function call.
                },  // Executes a specific instruction or function call.
                rewind: function() {  // Defines a function, which is a reusable block of code.
                    this.style.opacity = 0;  // Executes a specific instruction or function call.
                    this.style.maskComposite = 'exclude';  // Executes a specific instruction or function call.
                    this.style.maskRepeat = 'no-repeat';  // Executes a specific instruction or function call.
                    this.style.maskPosition = '0% 0%';  // Executes a specific instruction or function call.
                },  // Executes a specific instruction or function call.
                play: function() {  // Defines a function, which is a reusable block of code.
                    this.style.opacity = 1;  // Executes a specific instruction or function call.
                },  // Executes a specific instruction or function call.
            },  // Executes a specific instruction or function call.
            'wipe-diagonal': {  // Begins a new code block scope.
                type: 'animate',  // Executes a specific instruction or function call.
                keyframes: function(intensity) {  // Defines a function, which is a reusable block of code.
                    return [{  // Begins a new code block scope.
                        maskSize: '0% 0%',  // Executes a specific instruction or function call.
                        maskImage: 'linear-gradient(45deg, black 50%, transparent 50%)',  // Executes a specific instruction or function call.
                    }, {  // Begins a new code block scope.
                        maskSize: '220% 220%',  // Executes a specific instruction or function call.
                        maskImage: 'linear-gradient(45deg, black 50%, transparent 50%)',  // Executes a specific instruction or function call.
                    }, ];  // Executes a specific instruction or function call.
                },  // Executes a specific instruction or function call.
                options: function(speed) {  // Defines a function, which is a reusable block of code.
                    return {  // Begins a new code block scope.
                        duration: speed,  // Executes a specific instruction or function call.
                        iterations: 1,  // Executes a specific instruction or function call.
                        easing: 'ease',  // Executes a specific instruction or function call.
                    };  // Executes a specific instruction or function call.
                },  // Executes a specific instruction or function call.
                rewind: function() {  // Defines a function, which is a reusable block of code.
                    this.style.opacity = 0;  // Executes a specific instruction or function call.
                    this.style.maskComposite = 'exclude';  // Executes a specific instruction or function call.
                    this.style.maskRepeat = 'no-repeat';  // Executes a specific instruction or function call.
                    this.style.maskPosition = '0% 100%';  // Executes a specific instruction or function call.
                },  // Executes a specific instruction or function call.
                play: function() {  // Defines a function, which is a reusable block of code.
                    this.style.opacity = 1;  // Executes a specific instruction or function call.
                },  // Executes a specific instruction or function call.
            },  // Executes a specific instruction or function call.
            'wipe-reverse-diagonal': {  // Begins a new code block scope.
                type: 'animate',  // Executes a specific instruction or function call.
                keyframes: function(intensity) {  // Defines a function, which is a reusable block of code.
                    return [{  // Begins a new code block scope.
                        maskSize: '0% 0%',  // Executes a specific instruction or function call.
                        maskImage: 'linear-gradient(135deg, transparent 50%, black 50%)',  // Executes a specific instruction or function call.
                    }, {  // Begins a new code block scope.
                        maskSize: '220% 220%',  // Executes a specific instruction or function call.
                        maskImage: 'linear-gradient(135deg, transparent 50%, black 50%)',  // Executes a specific instruction or function call.
                    }, ];  // Executes a specific instruction or function call.
                },  // Executes a specific instruction or function call.
                options: function(speed) {  // Defines a function, which is a reusable block of code.
                    return {  // Begins a new code block scope.
                        duration: speed,  // Executes a specific instruction or function call.
                        iterations: 1,  // Executes a specific instruction or function call.
                        easing: 'ease',  // Executes a specific instruction or function call.
                    };  // Executes a specific instruction or function call.
                },  // Executes a specific instruction or function call.
                rewind: function() {  // Defines a function, which is a reusable block of code.
                    this.style.opacity = 0;  // Executes a specific instruction or function call.
                    this.style.maskComposite = 'exclude';  // Executes a specific instruction or function call.
                    this.style.maskRepeat = 'no-repeat';  // Executes a specific instruction or function call.
                    this.style.maskPosition = '100% 100%';  // Executes a specific instruction or function call.
                },  // Executes a specific instruction or function call.
                play: function() {  // Defines a function, which is a reusable block of code.
                    this.style.opacity = 1;  // Executes a specific instruction or function call.
                },  // Executes a specific instruction or function call.
            },  // Executes a specific instruction or function call.
            'pop-in': {  // Begins a new code block scope.
                type: 'animate',  // Executes a specific instruction or function call.
                keyframes: function(intensity) {  // Defines a function, which is a reusable block of code.
                    let diff = (intensity + 1) * 0.025;  // Declares and initializes a variable with a value.
                    return [{  // Begins a new code block scope.
                        opacity: 0,  // Executes a specific instruction or function call.
                        transform: 'scale(' + (1 - diff) + ')',  // Executes a specific instruction or function call.
                    }, {  // Begins a new code block scope.
                        opacity: 1,  // Executes a specific instruction or function call.
                        transform: 'scale(' + (1 + diff) + ')',  // Executes a specific instruction or function call.
                    }, {  // Begins a new code block scope.
                        opacity: 1,  // Executes a specific instruction or function call.
                        transform: 'scale(' + (1 - (diff * 0.25)) + ')',  // Executes a specific instruction or function call.
                        offset: 0.9,  // Executes a specific instruction or function call.
                    }, {  // Begins a new code block scope.
                        opacity: 1,  // Executes a specific instruction or function call.
                        transform: 'scale(1)',  // Executes a specific instruction or function call.
                    }];  // Executes a specific instruction or function call.
                },  // Executes a specific instruction or function call.
                options: function(speed) {  // Defines a function, which is a reusable block of code.
                    return {  // Begins a new code block scope.
                        duration: speed,  // Executes a specific instruction or function call.
                        iterations: 1,  // Executes a specific instruction or function call.
                    };  // Executes a specific instruction or function call.
                },  // Executes a specific instruction or function call.
                rewind: function() {  // Defines a function, which is a reusable block of code.
                    this.style.opacity = 0;  // Executes a specific instruction or function call.
                },  // Executes a specific instruction or function call.
                play: function() {  // Defines a function, which is a reusable block of code.
                    this.style.opacity = 1;  // Executes a specific instruction or function call.
                },  // Executes a specific instruction or function call.
            },  // Executes a specific instruction or function call.
            'bounce-up': {  // Begins a new code block scope.
                type: 'animate',  // Executes a specific instruction or function call.
                keyframes: function(intensity) {  // Defines a function, which is a reusable block of code.
                    let diff = (intensity + 1) * 0.075;  // Declares and initializes a variable with a value.
                    return [{  // Begins a new code block scope.
                        opacity: 0,  // Executes a specific instruction or function call.
                        transform: 'translateY(' + diff + 'rem)',  // Executes a specific instruction or function call.
                    }, {  // Begins a new code block scope.
                        opacity: 1,  // Executes a specific instruction or function call.
                        transform: 'translateY(' + (-1 * diff) + 'rem)',  // Executes a specific instruction or function call.
                    }, {  // Begins a new code block scope.
                        opacity: 1,  // Executes a specific instruction or function call.
                        transform: 'translateY(' + (diff * 0.25) + 'rem)',  // Executes a specific instruction or function call.
                        offset: 0.9,  // Executes a specific instruction or function call.
                    }, {  // Begins a new code block scope.
                        opacity: 1,  // Executes a specific instruction or function call.
                        transform: 'translateY(0)',  // Executes a specific instruction or function call.
                    }];  // Executes a specific instruction or function call.
                },  // Executes a specific instruction or function call.
                options: function(speed) {  // Defines a function, which is a reusable block of code.
                    return {  // Begins a new code block scope.
                        duration: speed,  // Executes a specific instruction or function call.
                        iterations: 1,  // Executes a specific instruction or function call.
                    };  // Executes a specific instruction or function call.
                },  // Executes a specific instruction or function call.
                rewind: function() {  // Defines a function, which is a reusable block of code.
                    this.style.opacity = 0;  // Executes a specific instruction or function call.
                },  // Executes a specific instruction or function call.
                play: function() {  // Defines a function, which is a reusable block of code.
                    this.style.opacity = 1;  // Executes a specific instruction or function call.
                },  // Executes a specific instruction or function call.
            },  // Executes a specific instruction or function call.
            'bounce-down': {  // Begins a new code block scope.
                type: 'animate',  // Executes a specific instruction or function call.
                keyframes: function(intensity) {  // Defines a function, which is a reusable block of code.
                    let diff = (intensity + 1) * 0.075;  // Declares and initializes a variable with a value.
                    return [{  // Begins a new code block scope.
                        opacity: 0,  // Executes a specific instruction or function call.
                        transform: 'translateY(' + (-1 * diff) + 'rem)',  // Executes a specific instruction or function call.
                    }, {  // Begins a new code block scope.
                        opacity: 1,  // Executes a specific instruction or function call.
                        transform: 'translateY(' + diff + 'rem)',  // Executes a specific instruction or function call.
                    }, {  // Begins a new code block scope.
                        opacity: 1,  // Executes a specific instruction or function call.
                        transform: 'translateY(' + (-1 * (diff * 0.25)) + 'rem)',  // Executes a specific instruction or function call.
                        offset: 0.9,  // Executes a specific instruction or function call.
                    }, {  // Begins a new code block scope.
                        opacity: 1,  // Executes a specific instruction or function call.
                        transform: 'translateY(0)',  // Executes a specific instruction or function call.
                    }];  // Executes a specific instruction or function call.
                },  // Executes a specific instruction or function call.
                options: function(speed) {  // Defines a function, which is a reusable block of code.
                    return {  // Begins a new code block scope.
                        duration: speed,  // Executes a specific instruction or function call.
                        iterations: 1,  // Executes a specific instruction or function call.
                    };  // Executes a specific instruction or function call.
                },  // Executes a specific instruction or function call.
                rewind: function() {  // Defines a function, which is a reusable block of code.
                    this.style.opacity = 0;  // Executes a specific instruction or function call.
                },  // Executes a specific instruction or function call.
                play: function() {  // Defines a function, which is a reusable block of code.
                    this.style.opacity = 1;  // Executes a specific instruction or function call.
                },  // Executes a specific instruction or function call.
            },  // Executes a specific instruction or function call.
            'bounce-left': {  // Begins a new code block scope.
                type: 'animate',  // Executes a specific instruction or function call.
                keyframes: function(intensity) {  // Defines a function, which is a reusable block of code.
                    let diff = (intensity + 1) * 0.075;  // Declares and initializes a variable with a value.
                    return [{  // Begins a new code block scope.
                        opacity: 0,  // Executes a specific instruction or function call.
                        transform: 'translateX(' + diff + 'rem)',  // Executes a specific instruction or function call.
                    }, {  // Begins a new code block scope.
                        opacity: 1,  // Executes a specific instruction or function call.
                        transform: 'translateX(' + (-1 * diff) + 'rem)',  // Executes a specific instruction or function call.
                    }, {  // Begins a new code block scope.
                        opacity: 1,  // Executes a specific instruction or function call.
                        transform: 'translateX(' + (diff * 0.25) + 'rem)',  // Executes a specific instruction or function call.
                        offset: 0.9,  // Executes a specific instruction or function call.
                    }, {  // Begins a new code block scope.
                        opacity: 1,  // Executes a specific instruction or function call.
                        transform: 'translateX(0)',  // Executes a specific instruction or function call.
                    }];  // Executes a specific instruction or function call.
                },  // Executes a specific instruction or function call.
                options: function(speed) {  // Defines a function, which is a reusable block of code.
                    return {  // Begins a new code block scope.
                        duration: speed,  // Executes a specific instruction or function call.
                        iterations: 1,  // Executes a specific instruction or function call.
                    };  // Executes a specific instruction or function call.
                },  // Executes a specific instruction or function call.
                rewind: function() {  // Defines a function, which is a reusable block of code.
                    this.style.opacity = 0;  // Executes a specific instruction or function call.
                },  // Executes a specific instruction or function call.
                play: function() {  // Defines a function, which is a reusable block of code.
                    this.style.opacity = 1;  // Executes a specific instruction or function call.
                },  // Executes a specific instruction or function call.
            },  // Executes a specific instruction or function call.
            'bounce-right': {  // Begins a new code block scope.
                type: 'animate',  // Executes a specific instruction or function call.
                keyframes: function(intensity) {  // Defines a function, which is a reusable block of code.
                    let diff = (intensity + 1) * 0.075;  // Declares and initializes a variable with a value.
                    return [{  // Begins a new code block scope.
                        opacity: 0,  // Executes a specific instruction or function call.
                        transform: 'translateX(' + (-1 * diff) + 'rem)',  // Executes a specific instruction or function call.
                    }, {  // Begins a new code block scope.
                        opacity: 1,  // Executes a specific instruction or function call.
                        transform: 'translateX(' + diff + 'rem)',  // Executes a specific instruction or function call.
                    }, {  // Begins a new code block scope.
                        opacity: 1,  // Executes a specific instruction or function call.
                        transform: 'translateX(' + (-1 * (diff * 0.25)) + 'rem)',  // Executes a specific instruction or function call.
                        offset: 0.9,  // Executes a specific instruction or function call.
                    }, {  // Begins a new code block scope.
                        opacity: 1,  // Executes a specific instruction or function call.
                        transform: 'translateX(0)',  // Executes a specific instruction or function call.
                    }];  // Executes a specific instruction or function call.
                },  // Executes a specific instruction or function call.
                options: function(speed) {  // Defines a function, which is a reusable block of code.
                    return {  // Begins a new code block scope.
                        duration: speed,  // Executes a specific instruction or function call.
                        iterations: 1,  // Executes a specific instruction or function call.
                    };  // Executes a specific instruction or function call.
                },  // Executes a specific instruction or function call.
                rewind: function() {  // Defines a function, which is a reusable block of code.
                    this.style.opacity = 0;  // Executes a specific instruction or function call.
                },  // Executes a specific instruction or function call.
                play: function() {  // Defines a function, which is a reusable block of code.
                    this.style.opacity = 1;  // Executes a specific instruction or function call.
                },  // Executes a specific instruction or function call.
            },  // Executes a specific instruction or function call.
        },  // Executes a specific instruction or function call.
        regex: new RegExp('([^\\s]+)', 'g'),  // Executes a specific instruction or function call.
        add: function(selector, settings) {  // Defines a function, which is a reusable block of code.
            var _this = this,  // Declares and initializes a variable with a value.
                style = settings.style in this.effects ? settings.style : 'fade',  // Executes a specific instruction or function call.
                speed = parseInt('speed' in settings ? settings.speed : 0),  // Executes a specific instruction or function call.
                intensity = parseInt('intensity' in settings ? settings.intensity : 5),  // Executes a specific instruction or function call.
                delay = parseInt('delay' in settings ? settings.delay : 0),  // Executes a specific instruction or function call.
                replay = 'replay' in settings ? settings.replay : false,  // Executes a specific instruction or function call.
                stagger = 'stagger' in settings ? (parseInt(settings.stagger) >= 0 ? parseInt(settings.stagger) : false) : false,  // Executes a specific instruction or function call.
                staggerOrder = 'staggerOrder' in settings ? settings.staggerOrder : 'default',  // Executes a specific instruction or function call.
                staggerSelector = 'staggerSelector' in settings ? settings.staggerSelector : null,  // Executes a specific instruction or function call.
                threshold = parseInt('threshold' in settings ? settings.threshold : 3),  // Executes a specific instruction or function call.
                state = 'state' in settings ? settings.state : null,  // Executes a specific instruction or function call.
                effect = this.effects[style],  // Executes a specific instruction or function call.
                enter, leave, scrollEventThreshold;  // Executes a specific instruction or function call.
            switch (threshold) {  // Begins a new code block scope.
                case 1:  // Executes a specific instruction or function call.
                    scrollEventThreshold = 0;  // Executes a specific instruction or function call.
                    break;  // Executes a specific instruction or function call.
                case 2:  // Executes a specific instruction or function call.
                    scrollEventThreshold = 0.125;  // Executes a specific instruction or function call.
                    break;  // Executes a specific instruction or function call.
                default:  // Executes a specific instruction or function call.
                case 3:  // Executes a specific instruction or function call.
                    scrollEventThreshold = 0.25;  // Executes a specific instruction or function call.
                    break;  // Executes a specific instruction or function call.
                case 4:  // Executes a specific instruction or function call.
                    scrollEventThreshold = 0.375;  // Executes a specific instruction or function call.
                    break;  // Executes a specific instruction or function call.
                case 5:  // Executes a specific instruction or function call.
                    scrollEventThreshold = 0.475;  // Executes a specific instruction or function call.
                    break;  // Executes a specific instruction or function call.
            }  // Ends the current code block scope.
            switch (effect.type) {  // Begins a new code block scope.
                default:  // Executes a specific instruction or function call.
                case 'transition':  // Executes a specific instruction or function call.
                    intensity = ((intensity / 10) * 1.75) + 0.25;  // Executes a specific instruction or function call.
                    enter = function(children, staggerDelay = 0) {  // Defines a function, which is a reusable block of code.
                        var _this = this,  // Declares and initializes a variable with a value.
                            transitionOrig;  // Executes a specific instruction or function call.
                        if (effect.target) _this = this.querySelector(effect.target);  // Conditional statement: executes the following block only if the condition is true.
                        transitionOrig = _this.style.transition;  // Executes a specific instruction or function call.
                        _this.style.setProperty('backface-visibility', 'hidden');  // Executes a specific instruction or function call.
                        _this.style.transition = effect.transition.apply(_this, [speed / 1000, (delay + staggerDelay) / 1000]);  // Executes a specific instruction or function call.
                        effect.play.apply(_this, [intensity, !!children]);  // Executes a specific instruction or function call.
                        setTimeout(function() {  // Defines a function, which is a reusable block of code.
                            _this.style.removeProperty('backface-visibility');  // Executes a specific instruction or function call.
                            _this.style.transition = transitionOrig;  // Executes a specific instruction or function call.
                        }, (speed + delay + staggerDelay) * 2);  // Executes a specific instruction or function call.
                    };  // Executes a specific instruction or function call.
                    leave = function(children) {  // Defines a function, which is a reusable block of code.
                        var _this = this,  // Declares and initializes a variable with a value.
                            transitionOrig;  // Executes a specific instruction or function call.
                        if (effect.target) _this = this.querySelector(effect.target);  // Conditional statement: executes the following block only if the condition is true.
                        transitionOrig = _this.style.transition;  // Executes a specific instruction or function call.
                        _this.style.setProperty('backface-visibility', 'hidden');  // Executes a specific instruction or function call.
                        _this.style.transition = effect.transition.apply(_this, [speed / 1000]);  // Executes a specific instruction or function call.
                        effect.rewind.apply(_this, [intensity, !!children]);  // Executes a specific instruction or function call.
                        setTimeout(function() {  // Defines a function, which is a reusable block of code.
                            _this.style.removeProperty('backface-visibility');  // Executes a specific instruction or function call.
                            _this.style.transition = transitionOrig;  // Executes a specific instruction or function call.
                        }, speed * 2);  // Executes a specific instruction or function call.
                    };  // Executes a specific instruction or function call.
                    break;  // Executes a specific instruction or function call.
                case 'animate':  // Executes a specific instruction or function call.
                    enter = function(children, staggerDelay = 0) {  // Defines a function, which is a reusable block of code.
                        var _this = this,  // Declares and initializes a variable with a value.
                            transitionOrig;  // Executes a specific instruction or function call.
                        if (effect.target) _this = this.querySelector(effect.target);  // Conditional statement: executes the following block only if the condition is true.
                        setTimeout(() => {  // Begins a new code block scope.
                            effect.play.apply(_this, []);  // Executes a specific instruction or function call.
                            _this.animate(effect.keyframes.apply(_this, [intensity]), effect.options.apply(_this, [speed, delay]));  // Executes a specific instruction or function call.
                        }, delay + staggerDelay);  // Executes a specific instruction or function call.
                    };  // Executes a specific instruction or function call.
                    leave = function(children) {  // Defines a function, which is a reusable block of code.
                        var _this = this,  // Declares and initializes a variable with a value.
                            transitionOrig;  // Executes a specific instruction or function call.
                        if (effect.target) _this = this.querySelector(effect.target);  // Conditional statement: executes the following block only if the condition is true.
                        let a = _this.animate(effect.keyframes.apply(_this, [intensity]), effect.options.apply(_this, [speed, delay]));  // Declares and initializes a variable with a value.
                        a.reverse();  // Executes a specific instruction or function call.
                        a.addEventListener('finish', () => {  // Begins a new code block scope.
                            effect.rewind.apply(_this, []);  // Executes a specific instruction or function call.
                        });  // Executes a specific instruction or function call.
                    };  // Executes a specific instruction or function call.
                    break;  // Executes a specific instruction or function call.
                case 'manual':  // Executes a specific instruction or function call.
                    enter = function(children, staggerDelay = 0) {  // Defines a function, which is a reusable block of code.
                        var _this = this,  // Declares and initializes a variable with a value.
                            transitionOrig;  // Executes a specific instruction or function call.
                        if (effect.target) _this = this.querySelector(effect.target);  // Conditional statement: executes the following block only if the condition is true.
                        effect.play.apply(_this, [speed / 1000, (delay + staggerDelay) / 1000, intensity]);  // Executes a specific instruction or function call.
                    };  // Executes a specific instruction or function call.
                    leave = function(children) {  // Defines a function, which is a reusable block of code.
                        var _this = this,  // Declares and initializes a variable with a value.
                            transitionOrig;  // Executes a specific instruction or function call.
                        if (effect.target) _this = this.querySelector(effect.target);  // Conditional statement: executes the following block only if the condition is true.
                        effect.rewind.apply(_this, [intensity, !!children]);  // Executes a specific instruction or function call.
                    };  // Executes a specific instruction or function call.
                    break;  // Executes a specific instruction or function call.
            }  // Ends the current code block scope.
            $$(selector).forEach(function(e) {  // Defines a function, which is a reusable block of code.
                var children, targetElement, triggerElement;  // Executes a specific instruction or function call.
                if (stagger !== false && staggerSelector == ':scope > *') _this.expandTextNodes(e);  // Conditional statement: executes the following block only if the condition is true.
                children = (stagger !== false && staggerSelector) ? e.querySelectorAll(staggerSelector) : null;  // Executes a specific instruction or function call.
                if (effect.target) targetElement = e.querySelector(effect.target);  // Conditional statement: executes the following block only if the condition is true.
                else targetElement = e;  // Executes a specific instruction or function call.
                if (children) children.forEach(function(targetElement) {  // Defines a function, which is a reusable block of code.
                    effect.rewind.apply(targetElement, [intensity, true]);  // Executes a specific instruction or function call.
                });  // Executes a specific instruction or function call.
                else effect.rewind.apply(targetElement, [intensity]);  // Executes a specific instruction or function call.
                triggerElement = e;  // Executes a specific instruction or function call.
                if (e.parentNode) {  // Conditional statement: executes the following block only if the condition is true.
                    if (e.parentNode.dataset.onvisibleTrigger) triggerElement = e.parentNode;  // Conditional statement: executes the following block only if the condition is true.
                    else if (e.parentNode.parentNode) {  // Begins a new code block scope.
                        if (e.parentNode.parentNode.dataset.onvisibleTrigger) triggerElement = e.parentNode.parentNode;  // Conditional statement: executes the following block only if the condition is true.
                    }  // Ends the current code block scope.
                }  // Ends the current code block scope.
                scrollEvents.add({  // Begins a new code block scope.
                    element: e,  // Executes a specific instruction or function call.
                    triggerElement: triggerElement,  // Executes a specific instruction or function call.
                    initialState: state,  // Executes a specific instruction or function call.
                    threshold: scrollEventThreshold,  // Executes a specific instruction or function call.
                    enter: children ? function() {  // Defines a function, which is a reusable block of code.
                        var staggerDelay = 0,  // Declares and initializes a variable with a value.
                            childHandler = function(e) {  // Defines a function, which is a reusable block of code.
                                enter.apply(e, [children, staggerDelay]);  // Executes a specific instruction or function call.
                                staggerDelay += stagger;  // Executes a specific instruction or function call.
                            },  // Executes a specific instruction or function call.
                            a;  // Executes a specific instruction or function call.
                        if (staggerOrder == 'default') {  // Conditional statement: executes the following block only if the condition is true.
                            children.forEach(childHandler);  // Executes a specific instruction or function call.
                        } else {  // Begins a new code block scope.
                            a = Array.from(children);  // Executes a specific instruction or function call.
                            switch (staggerOrder) {  // Begins a new code block scope.
                                case 'reverse':  // Executes a specific instruction or function call.
                                    a.reverse();  // Executes a specific instruction or function call.
                                    break;  // Executes a specific instruction or function call.
                                case 'random':  // Executes a specific instruction or function call.
                                    a.sort(function() {  // Defines a function, which is a reusable block of code.
                                        return Math.random() - 0.5;  // Executes a specific instruction or function call.
                                    });  // Executes a specific instruction or function call.
                                    break;  // Executes a specific instruction or function call.
                            }  // Ends the current code block scope.
                            a.forEach(childHandler);  // Executes a specific instruction or function call.
                        }  // Ends the current code block scope.
                    } : enter,  // Executes a specific instruction or function call.
                    leave: (replay ? (children ? function() {  // Defines a function, which is a reusable block of code.
                        children.forEach(function(e) {  // Defines a function, which is a reusable block of code.
                            leave.apply(e, [children]);  // Executes a specific instruction or function call.
                        });  // Executes a specific instruction or function call.
                    } : leave) : null),  // Executes a specific instruction or function call.
                });  // Executes a specific instruction or function call.
            });  // Executes a specific instruction or function call.
        },  // Executes a specific instruction or function call.
        expandTextNodes: function(e) {  // Defines a function, which is a reusable block of code.
            var s, i, w, x;  // Executes a specific instruction or function call.
            for (i = 0; i < e.childNodes.length; i++) {  // Loop statement: repeats the code inside for a set number of iterations.
                x = e.childNodes[i];  // Executes a specific instruction or function call.
                if (x.nodeType != Node.TEXT_NODE) continue;  // Conditional statement: executes the following block only if the condition is true.
                s = x.nodeValue;  // Executes a specific instruction or function call.
                s = s.replace(this.regex, function(x, a) {  // Defines a function, which is a reusable block of code.
                    return '<text-node>' + escapeHtml(a) + '</text-node>';  // Executes a specific instruction or function call.
                });  // Executes a specific instruction or function call.
                w = document.createElement('text-node');  // Executes a specific instruction or function call.
                w.innerHTML = s;  // Executes a specific instruction or function call.
                x.replaceWith(w);  // Executes a specific instruction or function call.
                while (w.childNodes.length > 0) {  // Begins a new code block scope.
                    w.parentNode.insertBefore(w.childNodes[0], w);  // Executes a specific instruction or function call.
                }  // Ends the current code block scope.
                w.parentNode.removeChild(w);  // Executes a specific instruction or function call.
            }  // Ends the current code block scope.
        },  // Executes a specific instruction or function call.
    };  // Executes a specific instruction or function call.

    function lightboxGallery() {  // Defines a function, which is a reusable block of code.
        var _this = this;  // Declares and initializes a variable with a value.
        this.id = 'gallery';  // Executes a specific instruction or function call.
        this.$wrapper = $('#' + this.id);  // Executes a specific instruction or function call.
        this.$modal = null;  // Executes a specific instruction or function call.
        this.$modalCaption = null;  // Executes a specific instruction or function call.
        this.$modalImage = null;  // Executes a specific instruction or function call.
        this.$modalNext = null;  // Executes a specific instruction or function call.
        this.$modalPrevious = null;  // Executes a specific instruction or function call.
        this.$links = null;  // Executes a specific instruction or function call.
        this.locked = false;  // Executes a specific instruction or function call.
        this.captions = null;  // Executes a specific instruction or function call.
        this.current = null;  // Executes a specific instruction or function call.
        this.delay = 375;  // Executes a specific instruction or function call.
        this.navigation = null;  // Executes a specific instruction or function call.
        this.mobile = null;  // Executes a specific instruction or function call.
        this.protect = null;  // Executes a specific instruction or function call.
        this.zoomIntervalId = null;  // Executes a specific instruction or function call.
        this.initModal();  // Executes a specific instruction or function call.
    };  // Executes a specific instruction or function call.
    lightboxGallery.prototype.init = function(config) {  // Defines a function, which is a reusable block of code.
        var _this = this,  // Declares and initializes a variable with a value.
            $links = $$('#' + config.id + ' .thumbnail'),  // Executes a specific instruction or function call.
            navigation = config.navigation,  // Executes a specific instruction or function call.
            captions = config.captions,  // Executes a specific instruction or function call.
            mobile = config.mobile,  // Executes a specific instruction or function call.
            mobileNavigation = config.mobileNavigation,  // Executes a specific instruction or function call.
            scheme = config.scheme,  // Executes a specific instruction or function call.
            protect = ('protect' in config ? config.protect : false),  // Executes a specific instruction or function call.
            i, j;  // Executes a specific instruction or function call.
        j = 0;  // Executes a specific instruction or function call.
        for (i = 0; i < $links.length; i++) {  // Loop statement: repeats the code inside for a set number of iterations.
            if ($links[i].dataset.lightboxIgnore != '1') j++;  // Conditional statement: executes the following block only if the condition is true.
        }  // Ends the current code block scope.
        if (j < 2) navigation = false;  // Conditional statement: executes the following block only if the condition is true.
        for (i = 0; i < $links.length; i++) {  // Loop statement: repeats the code inside for a set number of iterations.
            if ($links[i].dataset.lightboxIgnore == '1') continue;  // Conditional statement: executes the following block only if the condition is true.
            (function(index) {  // Defines a function, which is a reusable block of code.
                $links[index].addEventListener('click', function(event) {  // Defines a function, which is a reusable block of code.
                    event.stopPropagation();  // Executes a specific instruction or function call.
                    event.preventDefault();  // Executes a specific instruction or function call.
                    _this.show(index, {  // Begins a new code block scope.
                        $links: $links,  // Executes a specific instruction or function call.
                        navigation: navigation,  // Executes a specific instruction or function call.
                        captions: captions,  // Executes a specific instruction or function call.
                        mobile: mobile,  // Executes a specific instruction or function call.
                        mobileNavigation: mobileNavigation,  // Executes a specific instruction or function call.
                        scheme: scheme,  // Executes a specific instruction or function call.
                        protect: protect,  // Executes a specific instruction or function call.
                    });  // Executes a specific instruction or function call.
                });  // Executes a specific instruction or function call.
            })(i);  // Executes a specific instruction or function call.
        }  // Ends the current code block scope.
    };  // Executes a specific instruction or function call.
    lightboxGallery.prototype.initModal = function() {  // Defines a function, which is a reusable block of code.
        var _this = this,  // Declares and initializes a variable with a value.
            dragStart = null,  // Executes a specific instruction or function call.
            dragEnd = null,  // Executes a specific instruction or function call.
            $modal, $modalInner, $modalImage, $modalNext, $modalPrevious;  // Executes a specific instruction or function call.
        $modal = document.createElement('div');  // Executes a specific instruction or function call.
        $modal.id = this.id + '-modal';  // Executes a specific instruction or function call.
        $modal.tabIndex = -1;  // Executes a specific instruction or function call.
        $modal.className = 'gallery-modal';  // Executes a specific instruction or function call.
        $modal.innerHTML = '<div class="inner"><img src="" /></div><div class="caption"></div><div class="nav previous"></div><div class="nav next"></div><div class="close"></div>';  // Executes a specific instruction or function call.
        $body.appendChild($modal);  // Executes a specific instruction or function call.
        $modalInner = $modal.querySelector('.inner');  // Executes a specific instruction or function call.
        $modalImage = $modal.querySelector('img');  // Executes a specific instruction or function call.
        $modalImage.addEventListener('load', function() {  // Defines a function, which is a reusable block of code.
            $modalImage.style.setProperty('--natural-width', $modalImage.naturalWidth + 'px');  // Executes a specific instruction or function call.
            $modalImage.style.setProperty('--natural-height', $modalImage.naturalHeight + 'px');  // Executes a specific instruction or function call.
            $modal.classList.add('done');  // Executes a specific instruction or function call.
            setTimeout(function() {  // Defines a function, which is a reusable block of code.
                if (!$modal.classList.contains('visible')) return;  // Conditional statement: executes the following block only if the condition is true.
                $modal.classList.add('loaded');  // Executes a specific instruction or function call.
                setTimeout(function() {  // Defines a function, which is a reusable block of code.
                    $modal.classList.remove('switching', 'from-left', 'from-right', 'done');  // Executes a specific instruction or function call.
                }, _this.delay);  // Executes a specific instruction or function call.
            }, ($modal.classList.contains('switching') ? 0 : _this.delay));  // Executes a specific instruction or function call.
        });  // Executes a specific instruction or function call.
        $modalImage.addEventListener('contextmenu', function() {  // Defines a function, which is a reusable block of code.
            if (_this.protect) event.preventDefault();  // Conditional statement: executes the following block only if the condition is true.
        }, true);  // Executes a specific instruction or function call.
        $modalImage.addEventListener('dragstart', function() {  // Defines a function, which is a reusable block of code.
            if (_this.protect) event.preventDefault();  // Conditional statement: executes the following block only if the condition is true.
        }, true);  // Executes a specific instruction or function call.
        $modalCaption = $modal.querySelector('.caption');  // Executes a specific instruction or function call.
        $modalNext = $modal.querySelector('.next');  // Executes a specific instruction or function call.
        $modalPrevious = $modal.querySelector('.previous');  // Executes a specific instruction or function call.
        switch (client.browser) {  // Begins a new code block scope.
            case 'safari':  // Executes a specific instruction or function call.
            case 'firefox':  // Executes a specific instruction or function call.
                $modalInner.style.boxShadow = 'none';  // Executes a specific instruction or function call.
                break;  // Executes a specific instruction or function call.
            default:  // Executes a specific instruction or function call.
                break;  // Executes a specific instruction or function call.
        }  // Ends the current code block scope.
        $modal.show = function(index, offset, direction) {  // Defines a function, which is a reusable block of code.
            var item, i, j, found;  // Executes a specific instruction or function call.
            if (_this.locked) return;  // Conditional statement: executes the following block only if the condition is true.
            if (typeof index != 'number') index = _this.current;  // Conditional statement: executes the following block only if the condition is true.
            if (typeof offset == 'number') {  // Conditional statement: executes the following block only if the condition is true.
                found = false;  // Executes a specific instruction or function call.
                j = 0;  // Executes a specific instruction or function call.
                for (j = 0; j < _this.$links.length; j++) {  // Loop statement: repeats the code inside for a set number of iterations.
                    index += offset;  // Executes a specific instruction or function call.
                    if (index < 0) index = _this.$links.length - 1;  // Conditional statement: executes the following block only if the condition is true.
                    else if (index >= _this.$links.length) index = 0;  // Executes a specific instruction or function call.
                    if (index == _this.current) break;  // Conditional statement: executes the following block only if the condition is true.
                    item = _this.$links.item(index);  // Executes a specific instruction or function call.
                    if (!item) break;  // Conditional statement: executes the following block only if the condition is true.
                    if (item.dataset.lightboxIgnore != '1') {  // Conditional statement: executes the following block only if the condition is true.
                        found = true;  // Executes a specific instruction or function call.
                        break;  // Executes a specific instruction or function call.
                    }  // Ends the current code block scope.
                }  // Ends the current code block scope.
                if (!found) return;  // Conditional statement: executes the following block only if the condition is true.
            } else {  // Begins a new code block scope.
                if (index < 0) index = _this.$links.length - 1;  // Conditional statement: executes the following block only if the condition is true.
                else if (index >= _this.$links.length) index = 0;  // Executes a specific instruction or function call.
                if (index == _this.current) return;  // Conditional statement: executes the following block only if the condition is true.
                item = _this.$links.item(index);  // Executes a specific instruction or function call.
                if (!item) return;  // Conditional statement: executes the following block only if the condition is true.
                if (item.dataset.lightboxIgnore == '1') return;  // Conditional statement: executes the following block only if the condition is true.
            }  // Ends the current code block scope.
            if (client.mobile) _this.zoomIntervalId = setInterval(function() {  // Defines a function, which is a reusable block of code.
                _this.zoomHandler();  // Executes a specific instruction or function call.
            }, 250);  // Executes a specific instruction or function call.
            _this.locked = true;  // Executes a specific instruction or function call.
            if (_this.current !== null) {  // Conditional statement: executes the following block only if the condition is true.
                $modal.classList.remove('loaded');  // Executes a specific instruction or function call.
                $modal.classList.add('switching');  // Executes a specific instruction or function call.
                switch (direction) {  // Begins a new code block scope.
                    case -1:  // Executes a specific instruction or function call.
                        $modal.classList.add('from-left');  // Executes a specific instruction or function call.
                        break;  // Executes a specific instruction or function call.
                    case 1:  // Executes a specific instruction or function call.
                        $modal.classList.add('from-right');  // Executes a specific instruction or function call.
                        break;  // Executes a specific instruction or function call.
                    default:  // Executes a specific instruction or function call.
                        break;  // Executes a specific instruction or function call.
                }  // Ends the current code block scope.
                setTimeout(function() {  // Defines a function, which is a reusable block of code.
                    _this.current = index;  // Executes a specific instruction or function call.
                    $modalImage.src = item.href;  // Executes a specific instruction or function call.
                    if (_this.captions) $modalCaption.innerHTML = item.querySelector('[data-caption]').dataset.caption;  // Conditional statement: executes the following block only if the condition is true.
                    setTimeout(function() {  // Defines a function, which is a reusable block of code.
                        $modal.focus();  // Executes a specific instruction or function call.
                        _this.locked = false;  // Executes a specific instruction or function call.
                    }, _this.delay);  // Executes a specific instruction or function call.
                }, _this.delay);  // Executes a specific instruction or function call.
            } else {  // Begins a new code block scope.
                _this.current = index;  // Executes a specific instruction or function call.
                $modalImage.src = item.href;  // Executes a specific instruction or function call.
                if (_this.captions) $modalCaption.innerHTML = item.querySelector('[data-caption]').dataset.caption;  // Conditional statement: executes the following block only if the condition is true.
                $modal.classList.add('visible');  // Executes a specific instruction or function call.
                setTimeout(function() {  // Defines a function, which is a reusable block of code.
                    $modal.focus();  // Executes a specific instruction or function call.
                    _this.locked = false;  // Executes a specific instruction or function call.
                }, _this.delay);  // Executes a specific instruction or function call.
            }  // Ends the current code block scope.
        };  // Executes a specific instruction or function call.
        $modal.hide = function() {  // Defines a function, which is a reusable block of code.
            if (_this.locked) return;  // Conditional statement: executes the following block only if the condition is true.
            if (!$modal.classList.contains('visible')) return;  // Conditional statement: executes the following block only if the condition is true.
            _this.locked = true;  // Executes a specific instruction or function call.
            $modal.classList.remove('visible');  // Executes a specific instruction or function call.
            $modal.classList.remove('loaded');  // Executes a specific instruction or function call.
            $modal.classList.remove('switching', 'from-left', 'from-right', 'done');  // Executes a specific instruction or function call.
            clearInterval(_this.zoomIntervalId);  // Executes a specific instruction or function call.
            setTimeout(function() {  // Defines a function, which is a reusable block of code.
                $modalImage.src = '';  // Executes a specific instruction or function call.
                _this.locked = false;  // Executes a specific instruction or function call.
                $body.focus();  // Executes a specific instruction or function call.
                _this.current = null;  // Executes a specific instruction or function call.
            }, _this.delay);  // Executes a specific instruction or function call.
        };  // Executes a specific instruction or function call.
        $modal.next = function(direction) {  // Defines a function, which is a reusable block of code.
            $modal.show(null, 1, direction);  // Executes a specific instruction or function call.
        };  // Executes a specific instruction or function call.
        $modal.previous = function(direction) {  // Defines a function, which is a reusable block of code.
            $modal.show(null, -1, direction);  // Executes a specific instruction or function call.
        };  // Executes a specific instruction or function call.
        $modal.first = function() {  // Defines a function, which is a reusable block of code.
            $modal.show(0);  // Executes a specific instruction or function call.
        };  // Executes a specific instruction or function call.
        $modal.last = function() {  // Defines a function, which is a reusable block of code.
            $modal.show(_this.$links.length - 1);  // Executes a specific instruction or function call.
        };  // Executes a specific instruction or function call.
        $modalInner.addEventListener('touchstart', function(event) {  // Defines a function, which is a reusable block of code.
            if (!_this.navigation) return;  // Conditional statement: executes the following block only if the condition is true.
            if (event.touches.length > 1) return;  // Conditional statement: executes the following block only if the condition is true.
            dragStart = {  // Begins a new code block scope.
                x: event.touches[0].clientX,  // Executes a specific instruction or function call.
                y: event.touches[0].clientY  // Executes a specific instruction or function call.
            };  // Executes a specific instruction or function call.
        });  // Executes a specific instruction or function call.
        $modalInner.addEventListener('touchmove', function(event) {  // Defines a function, which is a reusable block of code.
            var dx, dy;  // Executes a specific instruction or function call.
            if (!_this.navigation) return;  // Conditional statement: executes the following block only if the condition is true.
            if (!dragStart || event.touches.length > 1) return;  // Conditional statement: executes the following block only if the condition is true.
            dragEnd = {  // Begins a new code block scope.
                x: event.touches[0].clientX,  // Executes a specific instruction or function call.
                y: event.touches[0].clientY  // Executes a specific instruction or function call.
            };  // Executes a specific instruction or function call.
            dx = dragStart.x - dragEnd.x;  // Executes a specific instruction or function call.
            dy = dragStart.y - dragEnd.y;  // Executes a specific instruction or function call.
            if (Math.abs(dx) < 50) return;  // Conditional statement: executes the following block only if the condition is true.
            event.preventDefault();  // Executes a specific instruction or function call.
            if (dx > 0) $modal.next(-1);  // Conditional statement: executes the following block only if the condition is true.
            else if (dx < 0) $modal.previous(1);  // Executes a specific instruction or function call.
        });  // Executes a specific instruction or function call.
        $modalInner.addEventListener('touchend', function(event) {  // Defines a function, which is a reusable block of code.
            if (!_this.navigation) return;  // Conditional statement: executes the following block only if the condition is true.
            dragStart = null;  // Executes a specific instruction or function call.
            dragEnd = null;  // Executes a specific instruction or function call.
        });  // Executes a specific instruction or function call.
        $modal.addEventListener('click', function(event) {  // Defines a function, which is a reusable block of code.
            if (event.target && (event.target.tagName == 'A' || event.target.tagName == 'SPOILER-TEXT')) return;  // Conditional statement: executes the following block only if the condition is true.
            $modal.hide();  // Executes a specific instruction or function call.
        });  // Executes a specific instruction or function call.
        $modal.addEventListener('keydown', function(event) {  // Defines a function, which is a reusable block of code.
            if (!$modal.classList.contains('visible')) return;  // Conditional statement: executes the following block only if the condition is true.
            switch (event.keyCode) {  // Begins a new code block scope.
                case 39:  // Executes a specific instruction or function call.
                case 32:  // Executes a specific instruction or function call.
                    if (!_this.navigation) break;  // Conditional statement: executes the following block only if the condition is true.
                    event.preventDefault();  // Executes a specific instruction or function call.
                    event.stopPropagation();  // Executes a specific instruction or function call.
                    $modal.next();  // Executes a specific instruction or function call.
                    break;  // Executes a specific instruction or function call.
                case 37:  // Executes a specific instruction or function call.
                    if (!_this.navigation) break;  // Conditional statement: executes the following block only if the condition is true.
                    event.preventDefault();  // Executes a specific instruction or function call.
                    event.stopPropagation();  // Executes a specific instruction or function call.
                    $modal.previous();  // Executes a specific instruction or function call.
                    break;  // Executes a specific instruction or function call.
                case 36:  // Executes a specific instruction or function call.
                    if (!_this.navigation) break;  // Conditional statement: executes the following block only if the condition is true.
                    event.preventDefault();  // Executes a specific instruction or function call.
                    event.stopPropagation();  // Executes a specific instruction or function call.
                    $modal.first();  // Executes a specific instruction or function call.
                    break;  // Executes a specific instruction or function call.
                case 35:  // Executes a specific instruction or function call.
                    if (!_this.navigation) break;  // Conditional statement: executes the following block only if the condition is true.
                    event.preventDefault();  // Executes a specific instruction or function call.
                    event.stopPropagation();  // Executes a specific instruction or function call.
                    $modal.last();  // Executes a specific instruction or function call.
                    break;  // Executes a specific instruction or function call.
                case 27:  // Executes a specific instruction or function call.
                    event.preventDefault();  // Executes a specific instruction or function call.
                    event.stopPropagation();  // Executes a specific instruction or function call.
                    $modal.hide();  // Executes a specific instruction or function call.
                    break;  // Executes a specific instruction or function call.
            }  // Ends the current code block scope.
        });  // Executes a specific instruction or function call.
        $modalNext.addEventListener('click', function(event) {  // Defines a function, which is a reusable block of code.
            $modal.next();  // Executes a specific instruction or function call.
        });  // Executes a specific instruction or function call.
        $modalPrevious.addEventListener('click', function(event) {  // Defines a function, which is a reusable block of code.
            $modal.previous();  // Executes a specific instruction or function call.
        });  // Executes a specific instruction or function call.
        this.$modal = $modal;  // Executes a specific instruction or function call.
        this.$modalImage = $modalImage;  // Executes a specific instruction or function call.
        this.$modalCaption = $modalCaption;  // Executes a specific instruction or function call.
        this.$modalNext = $modalNext;  // Executes a specific instruction or function call.
        this.$modalPrevious = $modalPrevious;  // Executes a specific instruction or function call.
    };  // Executes a specific instruction or function call.
    lightboxGallery.prototype.show = function(href, config) {  // Defines a function, which is a reusable block of code.
        this.$links = config.$links;  // Executes a specific instruction or function call.
        this.navigation = config.navigation;  // Executes a specific instruction or function call.
        this.captions = config.captions;  // Executes a specific instruction or function call.
        this.mobile = config.mobile;  // Executes a specific instruction or function call.
        this.mobileNavigation = config.mobileNavigation;  // Executes a specific instruction or function call.
        this.scheme = config.scheme;  // Executes a specific instruction or function call.
        this.protect = config.protect;  // Executes a specific instruction or function call.
        this.$modal.classList.remove('light', 'dark');  // Executes a specific instruction or function call.
        switch (this.scheme) {  // Begins a new code block scope.
            case 'light':  // Executes a specific instruction or function call.
                this.$modal.classList.add('light');  // Executes a specific instruction or function call.
                break;  // Executes a specific instruction or function call.
            case 'dark':  // Executes a specific instruction or function call.
                this.$modal.classList.add('dark');  // Executes a specific instruction or function call.
                break;  // Executes a specific instruction or function call.
            case 'auto':  // Executes a specific instruction or function call.
                if (window.matchMedia('(prefers-color-scheme: light)').matches) this.$modal.classList.add('light');  // Conditional statement: executes the following block only if the condition is true.
                else this.$modal.classList.add('dark');  // Executes a specific instruction or function call.
                break;  // Executes a specific instruction or function call.
        }  // Ends the current code block scope.
        if (this.navigation) {  // Conditional statement: executes the following block only if the condition is true.
            this.$modalNext.style.display = '';  // Executes a specific instruction or function call.
            this.$modalPrevious.style.display = '';  // Executes a specific instruction or function call.
            if (client.mobile && !this.mobileNavigation) {  // Conditional statement: executes the following block only if the condition is true.
                this.$modalNext.style.display = 'none';  // Executes a specific instruction or function call.
                this.$modalPrevious.style.display = 'none';  // Executes a specific instruction or function call.
            }  // Ends the current code block scope.
        } else {  // Begins a new code block scope.
            this.$modalNext.style.display = 'none';  // Executes a specific instruction or function call.
            this.$modalPrevious.style.display = 'none';  // Executes a specific instruction or function call.
        }  // Ends the current code block scope.
        if (this.captions) this.$modalCaption.style.display = '';  // Conditional statement: executes the following block only if the condition is true.
        else this.$modalCaption.style.display = 'none';  // Executes a specific instruction or function call.
        if (this.protect) {  // Conditional statement: executes the following block only if the condition is true.
            this.$modalImage.style.WebkitTouchCallout = 'none';  // Executes a specific instruction or function call.
            this.$modalImage.style.userSelect = 'none';  // Executes a specific instruction or function call.
        } else {  // Begins a new code block scope.
            this.$modalImage.style.WebkitTouchCallout = '';  // Executes a specific instruction or function call.
            this.$modalImage.style.userSelect = '';  // Executes a specific instruction or function call.
        }  // Ends the current code block scope.
        if (client.mobile && !this.mobile) return;  // Conditional statement: executes the following block only if the condition is true.
        this.$modal.show(href);  // Executes a specific instruction or function call.
    };  // Executes a specific instruction or function call.
    lightboxGallery.prototype.zoomHandler = function() {  // Defines a function, which is a reusable block of code.
        var threshold = window.matchMedia('(orientation: portrait)').matches ? 50 : 100;  // Declares and initializes a variable with a value.
        if (window.outerWidth > window.innerWidth + threshold) this.$modal.classList.add('zooming');  // Conditional statement: executes the following block only if the condition is true.
        else this.$modal.classList.remove('zooming');  // Executes a specific instruction or function call.
    };  // Executes a specific instruction or function call.
    var _lightboxGallery = new lightboxGallery;  // Declares and initializes a variable with a value.
    _lightboxGallery.init({  // Begins a new code block scope.
        id: 'gallery01',  // Executes a specific instruction or function call.
        navigation: true,  // Executes a specific instruction or function call.
        captions: false,  // Executes a specific instruction or function call.
        mobile: true,  // Executes a specific instruction or function call.
        mobileNavigation: true,  // Executes a specific instruction or function call.
        scheme: 'dark',  // Executes a specific instruction or function call.
    });  // Executes a specific instruction or function call.
    class VideoThumbnail {  // Begins a new code block scope.
        static map;  // Executes a specific instruction or function call.
        static selector = 'div.video > .frame > .player.thumbnail';  // Executes a specific instruction or function call.
        static {  // Begins a new code block scope.
            this.map = new WeakMap;  // Executes a specific instruction or function call.
            $body.addEventListener('click', (event) => {  // Begins a new code block scope.
                let e = event.target;  // Declares and initializes a variable with a value.
                if (!e.matches(this.selector)) return;  // Conditional statement: executes the following block only if the condition is true.
                event.preventDefault();  // Executes a specific instruction or function call.
                event.stopPropagation();  // Executes a specific instruction or function call.
                let instance = this.map.get(e.parentNode.parentNode);  // Declares and initializes a variable with a value.
                if (instance) instance.play();  // Conditional statement: executes the following block only if the condition is true.
            });  // Executes a specific instruction or function call.
        }  // Ends the current code block scope.
        attributes = [];  // Executes a specific instruction or function call.
        id = '';  // Executes a specific instruction or function call.
        tag = '';  // Executes a specific instruction or function call.
        $element;  // Executes a specific instruction or function call.
        $thumbnail;  // Executes a specific instruction or function call.
        $video;  // Executes a specific instruction or function call.
        constructor(id, tag, attributes) {  // Declares and initializes a variable with a value.
            this.id = id;  // Executes a specific instruction or function call.
            this.tag = tag;  // Executes a specific instruction or function call.
            this.attributes = attributes;  // Executes a specific instruction or function call.
            this.$element = document.getElementById(this.id);  // Executes a specific instruction or function call.
            this.$frame = this.$element.querySelector('.frame');  // Executes a specific instruction or function call.
            this.$thumbnail = this.$frame.querySelector('.player.thumbnail');  // Executes a specific instruction or function call.
            this.constructor.map.set(this.$element, this);  // Declares and initializes a variable with a value.
        }  // Ends the current code block scope.
        play() {  // Begins a new code block scope.
            if (this.$thumbnail === null || this.$element.classList.contains('is-active')) return;  // Conditional statement: executes the following block only if the condition is true.
            this.$video = document.createElement(this.tag);  // Executes a specific instruction or function call.
            for (const [key, value] of Object.entries(this.attributes)) {  // Declares and initializes a variable with a value.
                if (value === '') this.$video.toggleAttribute(key, true);  // Conditional statement: executes the following block only if the condition is true.
                else this.$video.setAttribute(key, value);  // Executes a specific instruction or function call.
            }  // Ends the current code block scope.
            this.$element.classList.add('is-active');  // Executes a specific instruction or function call.
            setTimeout(() => {  // Begins a new code block scope.
                this.$frame.appendChild(this.$video);  // Executes a specific instruction or function call.
                if (this.$video.tagName === 'VIDEO') this.$video.play();  // Conditional statement: executes the following block only if the condition is true.
            }, (this.tag === 'video' ? 250 : 125));  // Executes a specific instruction or function call.
            setTimeout(() => {  // Begins a new code block scope.
                this.$frame.classList.remove('with-overlay');  // Executes a specific instruction or function call.
                this.$frame.removeChild(this.$thumbnail);  // Executes a specific instruction or function call.
                this.$thumbnail = null;  // Executes a specific instruction or function call.
            }, 250);  // Executes a specific instruction or function call.
        }  // Ends the current code block scope.
    }  // Ends the current code block scope.
    new VideoThumbnail('FakePos', 'video', {  // Begins a new code block scope.
        "class": "player",  // Executes a specific instruction or function call.
        "src": "resources\/videos\/fakepos.mp4?v=5e725a03",  // Executes a specific instruction or function call.
        "preload": "auto",  // Executes a specific instruction or function call.
        "playsinline": "",  // Executes a specific instruction or function call.
        "webkit-playsinline": "",  // Executes a specific instruction or function call.
        "autoplay": "",  // Executes a specific instruction or function call.
    });  // Executes a specific instruction or function call.
    new VideoThumbnail('ForceHit', 'video', {  // Begins a new code block scope.
        "class": "player",  // Executes a specific instruction or function call.
        "src": "resources\/videos\/forcehit.mp4?v=5e725a03",  // Executes a specific instruction or function call.
        "preload": "auto",  // Executes a specific instruction or function call.
        "playsinline": "",  // Executes a specific instruction or function call.
        "webkit-playsinline": "",  // Executes a specific instruction or function call.
        "autoplay": "",  // Executes a specific instruction or function call.
    });  // Executes a specific instruction or function call.
    onvisible.add('.buttons.style2', {  // Begins a new code block scope.
        style: 'wipe-up',  // Executes a specific instruction or function call.
        speed: 750,  // Executes a specific instruction or function call.
        intensity: 4,  // Executes a specific instruction or function call.
        threshold: 5,  // Executes a specific instruction or function call.
        delay: 250,  // Executes a specific instruction or function call.
        replay: false  // Executes a specific instruction or function call.
    });  // Executes a specific instruction or function call.
    onvisible.add('.container.style4', {  // Begins a new code block scope.
        style: 'fade-up',  // Executes a specific instruction or function call.
        speed: 500,  // Executes a specific instruction or function call.
        intensity: 0,  // Executes a specific instruction or function call.
        threshold: 2,  // Executes a specific instruction or function call.
        delay: 0,  // Executes a specific instruction or function call.
        replay: false  // Executes a specific instruction or function call.
    });  // Executes a specific instruction or function call.
    onvisible.add('.container.style1', {  // Begins a new code block scope.
        style: 'fade-up',  // Executes a specific instruction or function call.
        speed: 500,  // Executes a specific instruction or function call.
        intensity: 0,  // Executes a specific instruction or function call.
        threshold: 2,  // Executes a specific instruction or function call.
        delay: 0,  // Executes a specific instruction or function call.
        replay: false  // Executes a specific instruction or function call.
    });  // Executes a specific instruction or function call.
    onvisible.add('h1.style4, h2.style4, h3.style4, p.style4', {  // Begins a new code block scope.
        style: 'fade-down',  // Executes a specific instruction or function call.
        speed: 1000,  // Executes a specific instruction or function call.
        intensity: 5,  // Executes a specific instruction or function call.
        threshold: 3,  // Executes a specific instruction or function call.
        delay: 500,  // Executes a specific instruction or function call.
        stagger: 125,  // Executes a specific instruction or function call.
        staggerSelector: ':scope > *',  // Executes a specific instruction or function call.
        replay: false  // Executes a specific instruction or function call.
    });  // Executes a specific instruction or function call.
    onvisible.add('h1.style6, h2.style6, h3.style6, p.style6', {  // Begins a new code block scope.
        style: 'fade-in',  // Executes a specific instruction or function call.
        speed: 625,  // Executes a specific instruction or function call.
        intensity: 5,  // Executes a specific instruction or function call.
        threshold: 5,  // Executes a specific instruction or function call.
        delay: 500,  // Executes a specific instruction or function call.
        stagger: 125,  // Executes a specific instruction or function call.
        staggerSelector: ':scope > *',  // Executes a specific instruction or function call.
        replay: false  // Executes a specific instruction or function call.
    });  // Executes a specific instruction or function call.
    onvisible.add('#gallery01', {  // Begins a new code block scope.
        style: 'fade-in',  // Executes a specific instruction or function call.
        speed: 1000,  // Executes a specific instruction or function call.
        intensity: 5,  // Executes a specific instruction or function call.
        threshold: 3,  // Executes a specific instruction or function call.
        delay: 0,  // Executes a specific instruction or function call.
        replay: false  // Executes a specific instruction or function call.
    });  // Executes a specific instruction or function call.
    onvisible.add('#FakePos', {  // Begins a new code block scope.
        style: 'fade-up',  // Executes a specific instruction or function call.
        speed: 1000,  // Executes a specific instruction or function call.
        intensity: 5,  // Executes a specific instruction or function call.
        threshold: 3,  // Executes a specific instruction or function call.
        delay: 0,  // Executes a specific instruction or function call.
        replay: false  // Executes a specific instruction or function call.
    });  // Executes a specific instruction or function call.
    onvisible.add('.container.style2', {  // Begins a new code block scope.
        style: 'fade-up',  // Executes a specific instruction or function call.
        speed: 500,  // Executes a specific instruction or function call.
        intensity: 0,  // Executes a specific instruction or function call.
        threshold: 2,  // Executes a specific instruction or function call.
        delay: 0,  // Executes a specific instruction or function call.
        replay: false  // Executes a specific instruction or function call.
    });  // Executes a specific instruction or function call.
    onvisible.add('#ForceHit', {  // Begins a new code block scope.
        style: 'fade-up',  // Executes a specific instruction or function call.
        speed: 1000,  // Executes a specific instruction or function call.
        intensity: 5,  // Executes a specific instruction or function call.
        threshold: 3,  // Executes a specific instruction or function call.
        delay: 0,  // Executes a specific instruction or function call.
        replay: false  // Executes a specific instruction or function call.
    });  // Executes a specific instruction or function call.
    onvisible.add('.buttons.style3', {  // Begins a new code block scope.
        style: 'fade-in',  // Executes a specific instruction or function call.
        speed: 750,  // Executes a specific instruction or function call.
        intensity: 4,  // Executes a specific instruction or function call.
        threshold: 5,  // Executes a specific instruction or function call.
        delay: 250,  // Executes a specific instruction or function call.
        replay: false  // Executes a specific instruction or function call.
    });  // Executes a specific instruction or function call.
    onvisible.add('.buttons.style4', {  // Begins a new code block scope.
        style: 'fade-in',  // Executes a specific instruction or function call.
        speed: 750,  // Executes a specific instruction or function call.
        intensity: 4,  // Executes a specific instruction or function call.
        threshold: 5,  // Executes a specific instruction or function call.
        delay: 250,  // Executes a specific instruction or function call.
        replay: false  // Executes a specific instruction or function call.
    });  // Executes a specific instruction or function call.
    onvisible.add('.container.style6', {  // Begins a new code block scope.
        style: 'fade-down',  // Executes a specific instruction or function call.
        speed: 750,  // Executes a specific instruction or function call.
        intensity: 5,  // Executes a specific instruction or function call.
        threshold: 2,  // Executes a specific instruction or function call.
        delay: 0,  // Executes a specific instruction or function call.
        replay: false  // Executes a specific instruction or function call.
    });  // Executes a specific instruction or function call.
    onvisible.add('h1.style9, h2.style9, h3.style9, p.style9', {  // Begins a new code block scope.
        style: 'blur-in',  // Executes a specific instruction or function call.
        speed: 625,  // Executes a specific instruction or function call.
        intensity: 5,  // Executes a specific instruction or function call.
        threshold: 5,  // Executes a specific instruction or function call.
        delay: 500,  // Executes a specific instruction or function call.
        replay: false  // Executes a specific instruction or function call.
    });  // Executes a specific instruction or function call.
    onvisible.add('.container.style5', {  // Begins a new code block scope.
        style: 'fade-up',  // Executes a specific instruction or function call.
        speed: 500,  // Executes a specific instruction or function call.
        intensity: 0,  // Executes a specific instruction or function call.
        threshold: 2,  // Executes a specific instruction or function call.
        delay: 0,  // Executes a specific instruction or function call.
        replay: false  // Executes a specific instruction or function call.
    });  // Executes a specific instruction or function call.
    onvisible.add('h1.style8, h2.style8, h3.style8, p.style8', {  // Begins a new code block scope.
        style: 'fade-in',  // Executes a specific instruction or function call.
        speed: 1000,  // Executes a specific instruction or function call.
        intensity: 10,  // Executes a specific instruction or function call.
        threshold: 5,  // Executes a specific instruction or function call.
        delay: 500,  // Executes a specific instruction or function call.
        replay: false  // Executes a specific instruction or function call.
    });  // Executes a specific instruction or function call.
    onvisible.add('.container.style8', {  // Begins a new code block scope.
        style: 'fade-up',  // Executes a specific instruction or function call.
        speed: 500,  // Executes a specific instruction or function call.
        intensity: 0,  // Executes a specific instruction or function call.
        threshold: 2,  // Executes a specific instruction or function call.
        delay: 0,  // Executes a specific instruction or function call.
        replay: false  // Executes a specific instruction or function call.
    });  // Executes a specific instruction or function call.
    ready.run();  // Executes a specific instruction or function call.
})();  // Executes a specific instruction or function call.