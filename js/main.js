// Down keyCheck Function
document.onkeydown = checkDownKey;
var mainBody = document.getElementById("body");
var avatarWrap = document.getElementById("avatar-wrap");
var avatar = document.getElementById("avatar");

function checkDownKey(e) {
    if (e.keyCode == '37') {
        // left arrow
        avatar.style.animationPlayState = "running";
        avatar.style.transform = "scale(0.5) rotateY(180deg)";
    } else if (e.keyCode == '38') {
        // up arrow
        avatar.style.animationPlayState = "running";
    } else if (e.keyCode == '39') {
        // right arrow
        avatar.style.animationPlayState = "running";
        avatar.style.transform = "scale(0.5) rotateY(0deg)";
    } else if (e.keyCode == '40') {
        // down arrow
        avatar.style.animationPlayState = "running";
    }
}

// UpkeyCheck Function
document.onkeyup = checkUpKey;

function checkUpKey(e) {
    if (e.keyCode == '37') {
        // left arrow
        avatar.style.transform = "scale(0.5) rotateY(180deg)";
        avatar.style.animationPlayState = "paused"
    } else if (e.keyCode == '38') {
        // up arrow
        avatar.style.animationPlayState = "paused"
    } else if (e.keyCode == '39') {
        // right arrow
        avatar.style.transform = "scale(0.5) rotateY(0deg)";
        avatar.style.animationPlayState = "paused"

    } else if (e.keyCode == '40') {
        // down arrow
        avatar.style.animationPlayState = "paused"
    }
}

var pane = $(mainBody),
    box = $(avatarWrap),
    w = pane.width() - box.width(),
    d = {},
    x = 3;

function newv(v, a, b) {
    debugger
    var n = parseInt(v, 10) - (d[a] ? x : 0) + (d[b] ? x : 0);
    return n < 0 ? 0 : n > w ? w : n;
}

$(window).keydown(function(e) {
    debugger
    d[e.which] = true;
});
$(window).keyup(function(e) {
    debugger
    d[e.which] = false;
});

setInterval(function() {
    box.css({
        left: function(i, v) { return newv(v, 37, 39); },
        top: function(i, v) { return newv(v, 38, 40); }
    });
}, 20);