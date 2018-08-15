// make all external links open in a new tab

$(document.links).filter(function() {
    return this.hostname != window.location.hostname;
}).attr('target', '_blank');



// find items with the class nav-item, on hover of the nav-item...

var navItem = document.getElementsByClassName("nav-item")

navItem.onmouseover = showMouseOver;
navItem.onmouseout = showMouseOut;

function showMouseOver() {
    // document.getElementsByClassName("nav-item").style.color = "red";
    var notice = document.getElementById("notice");
    notice.innerHTML = 'mouse over detected';
}

function showMouseOut() {
    // document.getElementsByClassName("nav-item").style.color = "black";
    console.log ("💩")
}

// target the marquee with the class var-marquee,
// give it the class active and make it visible
