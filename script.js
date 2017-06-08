endtext = false;
window.addEventListener('scroll', function(e) {
    console.log(endtext);
    if (endtext == false && window.scrollY >= document.documentElement.clientHeight * 4) {
        endtext = true;
        document.getElementsByTagName('header')[0].className = 'scroll';
        console.log(document.getElementsByTagName('header'));
    } else if (endtext == true && window.scrollY <= document.documentElement.clientHeight * 4) {
        endtext = false;
        document.getElementsByTagName('header')[0].className = 'default';
        console.log(document.getElementsByTagName('header'));
    }
});
