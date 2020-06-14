

window.onload = function () {
    window.onscroll = function () {
        scrollFunction();
    }
}

var prevScrollpos = window.pageYOffset;

function scrollFunction() {
    // // button appear if user scroll past the navigation
    // if (document.body.scrollTop > 90 || document.documentElement.scrollTop > 90) {
    //     console.dir("Hello");
    // } else {
    //     console.dir("Hello1");
    // }

    console.dir("fwefewf");

    var currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
        // $(".center-logo").style.margin.top = "0"
        $('.center-logo').css('margin-top', '0px');
        console.dir("Hello");
    } else {
        // $(".center-logo").style.margin.top = "-110px"
        $('.center-logo').css('margin-top', '-100px');
        console.dir("Hello2");
    }
    prevScrollpos = currentScrollPos;

    console.dir(prevScrollpos + " >> " + currentScrollPos);
}