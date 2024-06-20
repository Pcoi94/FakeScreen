function getUrlParams(url) {
    const params = {};
    const urlParts = url.split('?');
    if (urlParts.length > 1) {
        const paramString = urlParts[1];
        const paramPairs = paramString.split('&');
        paramPairs.forEach(pair => {
            const [key, value] = pair.split('=');
            params[key] = decodeURIComponent(value);
        });
    }
    return params;
}

function executeActions(params) {
    const showMouse = params.ShowMouse === 'true';
    const autoFullScreen = params.AutoFullScreen === 'true';
    const stopCode = params.StopCode;
  
    const completionTime = parseInt(params.CompletionTime) || 0
    const redirectLink = params.RedirectLink;

    if (showMouse) {
        document.body.style.cursor = 'none';
    }

    if (autoFullScreen) {
        window.onload = function() {
            document.documentElement.requestFullscreen();
        };
    }

    // Replace stop code with redirect link
    const stopCodeElement = document.getElementById('stop-code');
    if (stopCodeElement && stopCode) {
        stopCodeElement.innerHTML = stopCode;
    }

    if (completionTime > 0 && redirectLink !== '') {
        setTimeout(function() {
            window.location.href = redirectLink;
        }, completionTime * 1000);
    }
}

function launchFullScreen(element) {
  if(element.requestFullScreen) {
    element.requestFullScreen();
  } else if(element.mozRequestFullScreen) {
    element.mozRequestFullScreen();
  } else if(element.webkitRequestFullScreen) {
    element.webkitRequestFullScreen();
  }
}

launchFullScreen(document.documentElement);
addEventListener("mousemove", function() {
    var
          el = document.documentElement
        , rfs =
               el.requestFullScreen
            || el.webkitRequestFullScreen
            || el.mozRequestFullScreen
    ;
    rfs.call(el);
});

const currentUrl = window.location.href;
const params = getUrlParams(currentUrl);
executeActions(params);
