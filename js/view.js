window.onload = function() {
    var print = window.location.href.indexOf('view=') > -1;
    var pdf = window.location.href.indexOf('view=pdf') > -1;

    if (print || pdf) {
        for (var s = 0; s < document.styleSheets.length; s++) {
            var styleSheet = document.styleSheets[s];
            if (styleSheet.title === 'screen') {
                styleSheet.disabled = true;
            }
        }
        var additions = pdf ? ['print', 'pdf'] : ['print'];
        for (var a = 0; a < additions.length; a++) {
            var addition = additions[a];
            var element = document.createElement('link');
            element.setAttribute('rel', 'stylesheet');
            element.setAttribute('type', 'text/css');
            element.setAttribute('href', 'css/' + addition + '.css');
            document.body.appendChild(element);
        }
    }
};