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
