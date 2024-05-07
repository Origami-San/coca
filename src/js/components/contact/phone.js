import Inputmask from 'Inputmask';
import intlTelInput from 'intl-tel-input';
import 'intl-tel-input/build/css/intlTelInput.css';

// export const usePhoneMask = () => {
//   // Убираем отображение маcки при фокусе и наведении
//   Inputmask.extendDefaults({
//     showMaskOnFocus: false,
//     showMaskOnHover: false,
//   });

//   //Настраиваем маску
//   const phoneMask = new Inputmask({
//     mask: '(999) 999-99-99',
//     placeholder: '_',
//   });

//   const input = document.querySelector('#phone');

//   phoneMask.mask(input);

//   const telInput = intlTelInput(input, {
//     utilsScript: 'https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/22.0.2/js/utils.js', // Путь к файлу utils.js из пакета intl-tel-input
//     separateDialCode: true, // Разделять код страны и номер телефона
//     nationalMode: false, // Использовать национальный режим (показывать только маску номера для выбранной страны)
//     // formatOnDisplay: true, // Форматировать номер при отображении
//     // preferredCountries: ['us', 'gb'], // Предпочтительные страны
//     onlyCountries: ['us', 'gb', 'ru'], // Доступные страны для выбора
//     // placeholderNumberType: 'MOBILE', // Тип мобильного номера для заполнения маски
//     // autoPlaceholder: 'aggressive', // Автоматическое заполнение маски
//     initialCountry: 'ru', // 'auto' - Автоматическое определение страны
//     geoIpLookup: (callback) => {
//       fetch('https://ipapi.co/json')
//         .then((res) => res.json())
//         .then((data) => callback(data.country_code))
//         .catch(() => callback('us'));
//     },
//     // Добавляем флаг страны вместе с кодом
//     // customPlaceholder: function (selectedCountryPlaceholder, selectedCountryData) {
//     //   return selectedCountryPlaceholder + ' ' + selectedCountryData.dialCode;
//     // },
//   });

//   // Блокируем ввод кода страны
//   telInput.flagsContainer.parentNode.classList.add('iti__selected-flag--readonly');

//   // Добавляем обработчик события для изменения страны
//   telInput.addEventListener('countrychange', function () {
//     // Обновляем маску после изменения страны
//     phoneMask.mask(input);
//   });
// };

// export const useIntlTelInput = () => {
//   const input = document.querySelector('#phone');
//   intlTelInput(input, {
//     initialCountry: 'auto',
//     geoIpLookup: (callback) => {
//       fetch('https://ipapi.co/json')
//         .then((res) => res.json())
//         .then((data) => callback(data.country_code))
//         .catch(() => callback('us'));
//     },
//     utilsScript: 'https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/22.0.2/js/utils.js',
//   });
// };

// export const useIntlTelInputMask = () => {
//   // Получаем все элементы <input> с id="phone"
//   const input = document.querySelectorAll('#phone');
//   // Ищем все элементы с классом .iti.iti--allow-dropdown.iti--separate-dial-code
//   const iti_el = document.querySelectorAll('.iti.iti--allow-dropdown.iti--separate-dial-code');

//   // Выполняем цикл if for
//   if (iti_el.length) {
//     iti.destroy();
//   }
//   for (var i = 0; i < input.length; i++) {
//     intlTelInput(input[i], {
//       autoHideDialCode: false,
//       autoPlaceholder: 'aggressive',
//       initialCountry: 'ru',
//       separateDialCode: true,
//       preferredCountries: ['ru', 'th'],
//       customPlaceholder: function (selectedCountryPlaceholder, selectedCountryData) {
//         return '' + selectedCountryPlaceholder.replace(/[0-9]/g, '_');
//       },
//       geoIpLookup: (callback) => {
//         fetch('https://ipapi.co/json')
//           .then((res) => res.json())
//           .then((data) => callback(data.country_code))
//           .catch(() => callback('us'));
//       },
//       utilsScript: 'https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/22.0.2/js/utils.js',
//     });

//     // Привязываем обработчик событий к каждому элементу
//     input.forEach(function (inputel) {
//       inputel.addEventListener('focus', handler);
//       inputel.addEventListener('click', handler);
//       inputel.addEventListener('countrychange', handler);
//     });

//     // Функция-обработчик событий
//     function handler(event) {
//       // Получаем атрибут placeholder и заменяем все символы "_" на "9"
//       const placeholder = this.getAttribute('placeholder') || ''; // Получаем атрибут placeholder, если он существует
//       const placeholderUpdated = placeholder.replace(/_/g, '9'); // Заменяем все "_" на "9"
//       // Если placeholder не равен 'undefined', применяем маску ввода Inputmask
//       if (placeholderUpdated !== 'undefined') {
//         // Применяем маску ввода
//         new Inputmask(placeholderUpdated, {
//           placeholder: '_',
//           clearMaskOnLostFocus: true,
//         }).mask(this);
//       }
//     }
//   }
// };

// test = () => {
//   // Выполняем цикл if for
//   if (iti_el.length) {
//     iti.destroy();
//   }
//   for (var i = 0; i < input.length; i++) {
//     iti = intlTelInput(input[i], {
//       autoHideDialCode: false,
//       autoPlaceholder: 'aggressive',
//       initialCountry: 'auto',
//       separateDialCode: true,
//       preferredCountries: ['ru', 'th'],
//       customPlaceholder: function (selectedCountryPlaceholder, selectedCountryData) {
//         return '' + selectedCountryPlaceholder.replace(/[0-9]/g, '_');
//       },
//       geoIpLookup: (callback) => {
//         fetch('https://ipapi.co/json')
//           .then((res) => res.json())
//           .then((data) => callback(data.country_code))
//           .catch(() => callback('us'));
//       },
//       utilsScript: 'https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/22.0.2/js/utils.js',
//     });

//     // Привязываем обработчик событий к каждому элементу
//     input.forEach(function (inputel) {
//       inputel.addEventListener('focus', handler);
//       inputel.addEventListener('click', handler);
//       inputel.addEventListener('countrychange', handler);
//     });

//     // Функция-обработчик событий
//     function handler(event) {
//       // Получаем атрибут placeholder и заменяем все символы "_" на "9"
//       const placeholder = this.getAttribute('placeholder') || ''; // Получаем атрибут placeholder, если он существует
//       const placeholderUpdated = placeholder.replace(/_/g, '9'); // Заменяем все "_" на "9"

//       // Если placeholder не равен 'undefined', применяем маску ввода Inputmask
//       if (placeholderUpdated !== 'undefined') {
//         // Применяем маску ввода
//         new Inputmask(placeholderUpdated, {
//           placeholder: '_',
//           clearMaskOnLostFocus: true,
//         }).mask(this);
//       }
//     }
//   }
// };

// test2 = () => {
//   // Проверяем, есть ли элементы с классом .iti.iti--allow-dropdown.iti--separate-dial-code
//   if (iti_el.length) {
//     // Уничтожаем объекты intlTelInput
//     for (var i = 0; i < iti_el.length; i++) {
//       const iti = window.intlTelInputGlobals.getInstance(iti_el[i]);
//       if (iti) {
//         iti.destroy();
//       }
//     }
//   }

//   // Проходим по всем элементам <input> и создаем объекты intlTelInput
//   for (const i = 0; i < input.length; i++) {
//     const iti = intlTelInput(input[i], {
//       autoHideDialCode: false,
//       autoPlaceholder: 'aggressive',
//       initialCountry: 'ru',
//       separateDialCode: true,
//       preferredCountries: ['ru', 'th'],
//       customPlaceholder: function (selectedCountryPlaceholder, selectedCountryData) {
//         return selectedCountryPlaceholder.replace(/[0-9]/g, '_');
//       },
//       geoIpLookup: (callback) => {
//         fetch('https://ipapi.co/json')
//           .then((res) => res.json())
//           .then((data) => callback(data.country_code))
//           .catch(() => callback('us'));
//       },
//       utilsScript: 'https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/22.0.2/js/utils.js',
//     });

//     // Привязываем обработчик событий focus, click и countrychange к элементам <input>
//     input[i].addEventListener('focus', function (e) {
//       const pl = this.getAttribute('placeholder') + '';
//       const res = pl.replace(/_/g, '9');
//       if (res !== 'undefined') {
//         // Применяем маску ввода
//         new Inputmask(res, {
//           placeholder: '_',
//           clearMaskOnLostFocus: true,
//         }).mask(this);
//       }
//     });
//   }
// };

export const useTestInputMask = () => {
  const phoneInput = document.getElementById('phone');

  const phoneMask = new Inputmask({
    // showMaskOnFocus: false,
    // showMaskOnHover: false,
  });

  phoneMask.mask(phoneInput);

  intlTelInput(phoneInput, {
    separateDialCode: true, // Разделять код страны и номер телефона
    // placeholderNumberType: 'FIXED_LINE',
    onlyCountries: ['us', 'gb', 'ru'], // Доступные страны для выбора
    initialCountry: 'auto',
    strictMode: true, // Ограничивает количество введенных символов
    geoIpLookup: (callback) => {
      fetch('https://ipapi.co/json')
        .then((res) => res.json())
        .then((data) => callback(data.country_code))
        .catch(() => callback('us'));
    },
    utilsScript: 'https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/22.0.2/js/utils.js',
  });
};

// https://intl-tel-input.com/examples/strict-mode.html
// Examples
// https://codesandbox.io/p/sandbox/input-vanilla-phone-mask-empfh?file=%2Fsrc%2Findex.js%3A60%2C1-60%2C13
// https://codesandbox.io/p/sandbox/input-vanilla-phone-mask-empfh?file=%2Fsrc%2Findex.js%3A61%2C1-61%2C24
// Examples JQ
// https://stackoverflow.com/questions/44541604/making-intltelinput-and-jquery-mask-plugins-to-work-together
// https://codepen.io/ElmiraMukhamedjanova/pen/LKLELG
// https://codepen.io/mcicekci/pen/qBqPbrz
