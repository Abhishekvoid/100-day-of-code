
let bars = document.getElementById('bars');


let mobileMenu = document.getElementById('mobileMenu');


bars.addEventListener('click', function(){
  mobileMenu.classList.toggle('show');
  bars.classList.toggle('fa-times');
});