export const useHeader = () => {
  const header = document.querySelector('.header');
  const heroSection = document.querySelector('.hero');
  const headerHeight = header.offsetHeight;
  let lastScrollTop = 0;
  // Задем отступ от .hero т.к. .header выпадает изи потока
  // heroSection.style.marginTop = `${headerHeight}px`;
  document.body.style.marginTop = `${headerHeight}px`;

  window.addEventListener('scroll', () => {
    let scrollDistance = window.scrollY;
    // Добавляем класс header--show и header--background-transparent когда .header находится в самом верху страницы
    if (scrollDistance <= headerHeight) {
      header.classList.add('header--show');
      header.classList.add('header--background-transparent');
      // Добавляем класс header--fixed при прокрутке вниз, при условии что мы прокрутили больше высоты headerHeight
    } else if (scrollDistance > lastScrollTop && scrollDistance > headerHeight) {
      header.classList.remove('header--show');
      header.classList.add('header--fixed');
      header.classList.remove('header--background-transparent');

      // Добавляем класс header--show и header--fixed при прокрутке вверх
    } else if (scrollDistance < lastScrollTop && scrollDistance > headerHeight) {
      header.classList.add('header--show');
      header.classList.add('header--fixed');
      header.classList.remove('header--background-transparent');
    }

    lastScrollTop = scrollDistance;
  });
};
