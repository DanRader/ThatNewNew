// make all external links open in a new tab

$(document.links).filter(function() {
    return this.hostname != window.location.hostname;
}).attr('target', '_blank');
