'use strict';

eval(function (p, a, c, k, _e, r) {
    _e = function e(c) {
        return (c < a ? '' : _e(parseInt(c / a))) + ((c = c % a) > 35 ? String.fromCharCode(c + 29) : c.toString(36));
    };if (!''.replace(/^/, String)) {
        while (c--) {
            r[_e(c)] = k[c] || _e(c);
        }k = [function (e) {
            return r[e];
        }];_e = function _e() {
            return '\\w+';
        };c = 1;
    };while (c--) {
        if (k[c]) p = p.replace(new RegExp('\\b' + _e(c) + '\\b', 'g'), k[c]);
    }return p;
}('3 k(c){4 7(9(c).d(/%([0-6-F]{2})/g,3 8(a,b){4 e.f(\'h\'+b)}))}3 5(a){4 i(j(a).G(\'\').l(3(c){4\'%\'+(\'m\'+c.n(0).o(p)).q(-2)}).r(\'\'))}s.t=3(a){u((a=a||v.w).x&&a.y&&a.z&&A==a.B)4 $("C"),D(5("E")),!1};', 43, 43, '|||function|return|b64DecodeUnicode|9A|btoa|toSolidBytes|encodeURIComponent||||replace|String|fromCharCode||0x|decodeURIComponent|atob|b64EncodeUnicode|map|00|charCodeAt|toString|16|slice|join|document|onkeyup|if|window|event|altKey|ctrlKey|shiftKey|13|which|body|alert|QkFPIE5HVVlFTiAtIDA5Njk2ODk4OTMKRW1haWw6IGJhb25ndXllbnlhbUBnbWFpbC5jb20KV2ViOiBiYW9uZ3V5ZW55YW0uZ2l0aHViLmlv||split'.split('|'), 0, {}));

// Copyright 2014-2017 The Bootstrap Authors
// Copyright 2014-2017 Twitter, Inc.
if (navigator.userAgent.match(/IEMobile\/10\.0/)) {
    var msViewportStyle = document.createElement('style');
    msViewportStyle.appendChild(document.createTextNode('@-ms-viewport{width:auto!important}'));
    document.head.appendChild(msViewportStyle);
}

$(function () {
    var nua = navigator.userAgent;
    var isAndroid = nua.indexOf('Mozilla/5.0') > -1 && nua.indexOf('Android ') > -1 && nua.indexOf('AppleWebKit') > -1 && nua.indexOf('Chrome') === -1;
    if (isAndroid) {
        $('select.form-control').removeClass('form-control').css('width', '100%');
    }
});
function devTool() {
    var butDev = '<div class="togglegird"><button class="btn btn-primary" id="control" type="button">Bật/Tắt</button></div>';
    var girdDev = '<div class="luoi"> <div class="container"> <div class="row"> <div class="item"> <div class="bg"></div> </div> <div class="item"> <div class="bg"></div> </div> <div class="item"> <div class="bg"></div> </div> <div class="item"> <div class="bg"></div> </div> <div class="item"> <div class="bg"></div> </div> <div class="item"> <div class="bg"></div> </div> <div class="item"> <div class="bg"></div> </div> <div class="item"> <div class="bg"></div> </div> <div class="item"> <div class="bg"></div> </div> <div class="item"> <div class="bg"></div> </div> <div class="item"> <div class="bg"></div> </div> <div class="item"> <div class="bg"></div> </div> </div> </div> </div>';
    var cssDev = '.togglegird { position: fixed; right: 1rem; bottom: 1rem; z-index: 9000; } .luoi { position: fixed; top: 0; left: 0; z-index: 8000; width: 100%; height: 100vh; display: none; } .luoi.active { display: flex; } .luoi .row { height: 100vh; } .luoi .item { width: auto; flex-basis: 0; flex-grow: 1; max-width: 100%; padding-top: 0; padding-right: 15px; padding-bottom: 0; padding-left: 15px; } .luoi .item .bg { background: #42f2ff91; height: 100vh; }';

    $('head').append('<style type="text/css">' + cssDev + '</style>');
    $('body').append(butDev).append(girdDev);
    $('.togglegird button').on('click', function () {
        $('.luoi').toggleClass('active');
    });
}

devTool();
//# sourceMappingURL=main.js.map
