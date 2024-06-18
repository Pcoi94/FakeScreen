function updateResultLink() {
    var showMouse = document.getElementById("show-mouse-checkbox").checked;
    var autoFullscreen = document.getElementById("auto-fullscreen-checkbox").checked;
    var stopCode = encodeURIComponent(document.getElementById("text-input").value);
    var completionTime = document.getElementById("number-input").value;
    var redirectLink = encodeURIComponent(document.getElementById("url-input").value);

    // Replace with your desired base URL
    var baseLink = "https://death-screen.vercel.app/Window7";

    var finalUrl = baseLink + "?ShowMouse=" + showMouse +
                   "&AutoFullScreen=" + autoFullscreen +
                   "&StopCode=" + stopCode +
                   "&CompletionTime=" + completionTime +
                   "&RedirectLink=" + redirectLink;

    // Update the href attribute of the result-btn
    var resultBtn = document.getElementById("result-btn");
    resultBtn.href = finalUrl;
}

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

// Example: Call updateResultLink initially to set the link based on initial inputs
updateResultLink();
