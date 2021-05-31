// tad content
const tabsContainer = document.querySelector('.about-tabs');
const aboutSection = document.querySelector('.about');

tabsContainer.addEventListener('click', (e) => {
  if (
    e.target.classList.contains('btn-tab-item') &&
    !e.target.classList.contains('active')
  ) {
    tabsContainer.querySelector('.active').classList.remove('active');
    e.target.classList.add('active');
    const target = e.target.getAttribute('data-target');
    console.log(target);
    aboutSection
      .querySelector('.tab-content.active')
      .classList.remove('active');
    aboutSection.querySelector(target).classList.add('active');
  }
});

//  portfolio popup
document.addEventListener('click', (e) => {
  if (e.target.classList.contains('btn-view-project')) {
    togglePopup();
    portfolioItemDetails(e.target.parentElement);
  }
});

const togglePopup = () => {
  document.querySelector('.portfolio-popup').classList.toggle('open');
  document.body.classList.toggle('hide-scrolling');
  document.querySelector('.main').classList.toggle('fade-out');
};

document.querySelector('.pp-close').addEventListener('click', togglePopup);

const portfolioItemDetails = (portfolioItem) => {
  document.querySelector('.pp-thumbnail img').src = portfolioItem.querySelector(
    '.portfolio-item-thumbnail img'
  ).src;

  document.querySelector('.pp-header h3').innerHTML =
    portfolioItem.querySelector('.portfolio-item-title').innerHTML;

  document.querySelector('.pp-body').innerHTML = portfolioItem.querySelector(
    '.portfolio-item-details'
  ).innerHTML;
};

document.addEventListener('click', (e) => {
  if (e.target.classList.contains('pp-inner')) {
    togglePopup();
  }
});

//  toggle navbar
const navToggler = document.querySelector('.nav-toggler');
navToggler.addEventListener('click', (e) => {
  hideSection();
  toggleNavbar();
  document.body.classList.toggle('hide-scrolling');
});

const hideSection = () => {
  document.querySelector('section.active').classList.toggle('fade-out');
};

const toggleNavbar = () => {
  document.querySelector('.header').classList.toggle('active');
};

// active section
document.addEventListener('click', (e) => {
  if (e.target.classList.contains('link-item') && e.target.hash !== '') {
    document.querySelector('.overlay').classList.add('active');

    navToggler.classList.add('hide');

    if (e.target.classList.contains('nav-item')) {
      toggleNavbar();
    } else {
      hideSection();
      document.body.classList.add('hide-scrolling');
    }
    setTimeout(() => {
      document
        .querySelector('section.active')
        .classList.remove('active', 'fade-out');
      document.querySelector(e.target.hash).classList.add('active');
      window.scrollTo(0, 0);
      document.body.classList.remove('hide-scrolling');
      navToggler.classList.remove('hide');
      document.querySelector('.overlay').classList.remove('active');
    }, 500);
  }
});

// page loader
window.addEventListener('load', () => {
  document.querySelector('.main').classList.remove('hidden');
  document.querySelector('.home').classList.add('active');

  // loader
  document.querySelector('.page-loader').classList.add('fade-out');
  setTimeout(() => {
    document.querySelector('.page-loader').style.display = 'none';
  }, 600);
});
