ghosthead = false;
window.addEventListener('scroll', function(e) {
    console.log(ghosthead);
    if (ghosthead == false && window.scrollY >= document.documentElement.clientHeight * 1.1) {
        ghosthead = true;
        document.getElementsByTagName('header')[0].className = 'scroll';
        console.log(document.getElementsByTagName('header'));
    } else if (ghosthead == true && window.scrollY <= document.documentElement.clientHeight * 1.1) {
        ghosthead = false;
        document.getElementsByTagName('header')[0].className = 'top';
        console.log(document.getElementsByTagName('header'));
    }
    if (ghosthead == true && window.scrollY >= document.documentElement.clientHeight * 2.6) {
        ghosthead = false;
        document.getElementsByTagName('header')[0].className = 'top';
        console.log(document.getElementsByTagName('header'));
    }
});
