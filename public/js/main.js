window.onscroll = () => {
    const nav = document.querySelector('.navbar');
    if(this.scrollY <= 10) nav.style.backgroundColor = 'rgba(35, 39, 49,0)'; else nav.style.backgroundColor = 'rgb(35, 39, 49)';
  };