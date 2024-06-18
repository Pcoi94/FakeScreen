function updateResultLink() {
    var select = document.getElementById("select");
    var selectedOption = select.options[select.selectedIndex];
    var link = selectedOption.getAttribute("data-link");
    
    var showMouse = document.getElementById("show-mouse-checkbox").checked;
    var autoFullscreen = document.getElementById("auto-fullscreen-checkbox").checked;
    var stopCode = encodeURIComponent(document.getElementById("text-input").value);
    var completionTime = document.getElementById("number-input").value;
    var redirectLink = encodeURIComponent(document.getElementById("url-input").value);
    
    var finalUrl = link + "?ShowMouse=" + showMouse +
                   "&AutoFullScreen=" + autoFullscreen +
                   "&StopCode=" + stopCode +
                   "&CompletionTime=" + completionTime +
                   "&RedirectLink=" + redirectLink;
    
    // Update the href attribute of the result-btn
    var resultBtn = document.getElementById("result-btn");
    resultBtn.href = finalUrl;
}

updateResultLink()

function copyLink() {
    var resultBtn = document.getElementById("result-btn");
    var tempInput = document.createElement("input");
    tempInput.value = resultBtn.href;
    document.body.appendChild(tempInput);
    tempInput.select();
    document.execCommand("copy");
    document.body.removeChild(tempInput);
    alert("Link copied to clipboard!");
}