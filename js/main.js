const navTop = document.getElementById('navTop');
const heading = document.getElementById('heading');
const navBtn = document.getElementById('navBtn');
const sideNav = document.getElementById('sideNav');
const overlay = document.getElementById('overlay');


window.addEventListener('scroll', () => {
  if(scrollY >= 70) {
    navTop.classList.add('nav-onscroll');
    navTop.classList.remove('nav-default')

  } else {
    navTop.classList.add('nav-default')
    navTop.classList.remove('nav-onscroll');
  }
});

navBtn.addEventListener('click', () => {
  if(navBtn.className === 'nav-btn-default') {
    navBtn.classList.add('nav-btn-onclick');
    navBtn.classList.remove('nav-btn-default');
    
    //*Open side nav;
    sideNav.style.width = '260px';
    overlay.style.display = 'block';
    document.querySelector('html').style.overflowY = 'hidden';
  }

  else if(navBtn.className === 'nav-btn-onclick') {
    navBtn.classList.add('nav-btn-default');
    navBtn.classList.remove('nav-btn-onclick');

    //*Close sidenav
    sideNav.style.width = '0';
    overlay.style.display = 'none';
    document.querySelector('html').style.overflowY = '';
  }
});

overlay.onclick = function() {
  navBtn.classList.add('nav-btn-default');
  navBtn.classList.remove('nav-btn-onclick');

  //*Close sidenav
  sideNav.style.width = '0';
  overlay.style.display = 'none';
  document.querySelector('html').style.overflowY = '';
}


//*Smoot Scroll
$('a[href*="#"]').on('click', function(e) {
  e.preventDefault();

  $('html, body').animate({
       scrollTop: $($(this).attr('href')).offset().top - 47,
  }, 500, 'linear')
});
