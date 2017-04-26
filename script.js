ghosthead = false;
window.addEventListener('scroll', function(e) {
  console.log(ghosthead);
  if (ghosthead == false && window.scrollY >= document.documentElement.clientHeight ) {
    ghosthead = true;
    document.getElementsByTagName('header')[0].className = 'ghostly';
    console.log(document.getElementsByTagName('header'));
  }
  else if (ghosthead == true && window.scrollY <= document.documentElement.clientHeight){
    ghosthead = false;
    document.getElementsByTagName('header')[0].className = 'thicc';
    console.log(document.getElementsByTagName('header'));
  }
});
