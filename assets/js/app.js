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



// weird mousey magic for the about page

$(document).ready(function() {
    var movementStrength = 20;
    var height = movementStrength / $(window).height();
    var width = movementStrength / $(window).width();

    $("#top-image").mousemove(function(e){
             var pageX = e.pageX - ($(window).width() / 2);
             var pageY = e.pageY - ($(window).height() / 2);
             var newvalueX = width * pageX * 1 + 1;
             var newvalueY = height * pageY * 1 + 1;
             $('#top-image').css("background-position", "calc(100% + "+newvalueX+"px)"+" calc(50% + "+newvalueY+"px), "+"calc(100% + "+newvalueX+"px / 3)"+" calc(50% + "+newvalueY+"px / 3)" );
             // $('#top-image').css("background-position", `calc(100% + ${newvalueX}px) calc(50% + ${newvalueY}), right center`);

    });
});

// weird mousey magic for the home page

$(document).ready(function() {
    var movementStrength = 60;
    var height = movementStrength / $(window).height();
    var width = movementStrength / $(window).width();



    $(document).mousemove(function(e){
        $(".shape").each(function(){
             var y = $( this ).offset().top
             var x = $( this ).offset().left
             var pageX = e.pageX - x - ($(window).width() / 2) ;
             var pageY = e.pageY - y - ($(window).height() / 3) ;
             var newvalueX = width * pageX * 1 + 6;
             var newvalueY = height * pageY * 1 + 3;
             $( this ).css("transform",
                // Y axis
                "translateY("+newvalueY+"px)"+" translateX("+newvalueX+"px)" );
      });
    });
});

$(document).ready(function() {
    var movementStrength = 80;
    var height = movementStrength / $(window).height();
    var width = movementStrength / $(window).width();



    $(document).mousemove(function(e){
        $(".shape-2").each(function(){
             var y = $( this ).offset().top
             var x = $( this ).offset().left
             var pageX = e.pageX - x - ($(window).width() / 2) ;
             var pageY = e.pageY - y - ($(window).height() / 3) ;
             var newvalueX = width * pageX * 1 + 6;
             var newvalueY = height * pageY * 1 + 3;
             $( this ).css("transform",
                // Y axis
                "translateY("+newvalueY+"px)"+" translateX("+newvalueX+"px)" );
      });
    });
});
