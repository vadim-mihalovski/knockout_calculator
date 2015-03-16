(function () {
    'use strict';

    var loadScript = function (src, async, defer) {
        var script = document.createElement('script'),
            head = document.getElementsByTagName('head')[0];

        if (typeof async !== 'undefined') {
            script.async = async;
        }

        if (defer) {
            script.defer = 'defer';
        }

        script.src = src;

        head.appendChild(script);
    };

    loadScript('../lib/jquery-1.11.1.min.js', false);
    loadScript('../lib/bootstrap.min.js', false);
    loadScript('../lib/knockout.js', false);
    loadScript('../public/js/main.js', false);

})();
