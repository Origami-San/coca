export const useHeader = () => {
  const header = document.querySelector('.header');
  const heroSection = document.querySelector('.hero');
  const headerHeight = header.offsetHeight;
  let lastScrollTop = 0;

  window.addEventListener('scroll', () => {
    let scrollDistance = window.scrollY;

    if (scrollDistance > lastScrollTop) {
      MakeItNotFixed();
    } else {
      MakeItFixed();
    }

    if (scrollDistance === 0) {
      MakeItNotFixed();
    }

    function MakeItNotFixed() {
      header.classList.remove('header--fixed');
      header.classList.remove('header--show');
      heroSection.style.marginTop = null;
    }

    function MakeItFixed() {
      header.classList.add('header--fixed');
      header.classList.add('header--show');
      heroSection.style.marginTop = `${headerHeight}px`;
    }

    lastScrollTop = scrollDistance;
  });
};
