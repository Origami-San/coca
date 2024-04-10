export const useBurger = () => {
  const burgerBtn = document.querySelector('[data-burger="btn"]');
  const burgerMenu = document.querySelector('[data-burger="menu"]');
  const overlay = document.querySelector('[data-burger="overlay"]');
  // Находим body для запрета скрола при открытии burger-меню
  const body = document.body;

  // Сброс классов активности
  const closeBurgerMenu = () => {
    burgerBtn.classList.remove('burger--active');
    burgerMenu.classList.remove('header__right--visible');
    overlay.classList.remove('overlay--visible');
    // Убираем модификатор с body
    body.classList.remove('body--fixet');
  };

  burgerBtn.addEventListener('click', () => {
    burgerBtn.classList.toggle('burger--active');
    burgerMenu.classList.toggle('header__right--visible');
    overlay.classList.toggle('overlay--visible');
    // Добавляем модификатор на body
    body.classList.toggle('body--fixet');
  });

  // Скрыте меню по клику на overlay
  overlay.addEventListener('click', closeBurgerMenu);
};
