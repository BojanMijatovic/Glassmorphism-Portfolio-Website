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
