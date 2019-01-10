var burger = document.querySelector('.burger');
console.log(burger);

var menu = document.querySelector('.navbar-menu')
if (burger !== null) {
 burger.addEventListener('click', function() {
 burger.classList.toggle('is-active');
 menu.classList.toggle('is-active');
 });
}


window.onscroll = () => {
    const nav = document.querySelector('.navbar');
    if(this.scrollY <= 10) nav.style.backgroundColor = 'transparent'; else nav.style.backgroundColor = 'rgb(35, 39, 49)';
  };