import Inputmask from 'inputmask';
import intlTelInput from 'intl-tel-input';
import 'intl-tel-input/build/css/intlTelInput.css';

export const usePhoneMask = () => {
  // Убираем отображение маки при фокусе и наведении
  Inputmask.extendDefaults({
    // showMaskOnFocus: false,
    // showMaskOnHover: false,
  });

  // Настраиваем маску
  const phoneMask = new Inputmask({
    mask: '(999) 999-99-99',
    placeholder: '_',
  });

  const input = document.querySelector('#phone');

  phoneMask.mask(input);

  const telInput = intlTelInput(input, {
    utilsScript: 'https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/22.0.2/js/utils.js', // Путь к файлу utils.js из пакета intl-tel-input
    separateDialCode: true, // Разделять код страны и номер телефона
    nationalMode: false, // Использовать национальный режим (показывать только маску номера для выбранной страны)
    formatOnDisplay: true, // Форматировать номер при отображении
    // preferredCountries: ['us', 'gb'], // Предпочтительные страны
    onlyCountries: ['us', 'gb', 'ru'], // Доступные страны для выбора
    placeholderNumberType: 'MOBILE', // Тип мобильного номера для заполнения маски
    autoPlaceholder: 'aggressive', // Автоматическое заполнение маски
    initialCountry: 'auto', // 'auto' - Автоматическое определение страны
    geoIpLookup: (callback) => {
      fetch('https://ipapi.co/json')
        .then((res) => res.json())
        .then((data) => callback(data.country_code))
        .catch(() => callback('us'));
    },
    // Добавляем флаг страны вместе с кодом
    // customPlaceholder: function (selectedCountryPlaceholder, selectedCountryData) {
    //   return selectedCountryPlaceholder + ' ' + selectedCountryData.dialCode;
    // },
  });

  // Блокируем ввод кода страны
  telInput.flagsContainer.parentNode.classList.add('iti__selected-flag--readonly');

  // Добавляем обработчик события для изменения страны
  telInput.addEventListener('countrychange', function () {
    // Обновляем маску после изменения страны
    phoneMask.mask(input);
  });
};

export const usePhone = () => {
  const input = document.querySelector('#phone');
  intlTelInput(input, {
    initialCountry: 'auto',
    geoIpLookup: (callback) => {
      fetch('https://ipapi.co/json')
        .then((res) => res.json())
        .then((data) => callback(data.country_code))
        .catch(() => callback('us'));
    },
    utilsScript: 'https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/22.0.2/js/utils.js',
  });
};
