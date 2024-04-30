export const usePriceSwither = () => {
  const swither = document.querySelector('[data-price="swither"]');
  const starterPrice = document.querySelector('[data-price="starter"]');
  const popularPrice = document.querySelector('[data-price="popular"]');
  const enterprisePrice = document.querySelector('[data-price="enterprise"]');
  const procePeriod = document.querySelectorAll('[data-period]');

  // Задаем переменые для цены
  // const priceList = {
  //   starter: {
  //     default: 120,
  //     witchSale: 100,
  //   },
  //   popular: {
  //     default: 1680,
  //     witchSale: 1400,
  //   },
  //   enterprise: {
  //     default: 2520,
  //     witchSale: 2100,
  //   },
  // };

  const priceList = {
    starter: {
      monthlyPrice: 10,
      annualPrice: 100,
    },
    popular: {
      monthlyPrice: 140,
      annualPrice: 1400,
    },
    enterprise: {
      monthlyPrice: 210,
      annualPrice: 2100,
    },
  };

  // Цена за год
  // const setPricesWithSale = () => {
  //   starterPrice.textContent = priceList.starter.witchSale;
  //   popularPrice.textContent = priceList.popular.witchSale;
  //   enterprisePrice.textContent = priceList.enterprise.witchSale;
  // };
  const setPricesAnnual = () => {
    starterPrice.textContent = priceList.starter.annualPrice;
    popularPrice.textContent = priceList.popular.annualPrice;
    enterprisePrice.textContent = priceList.enterprise.annualPrice;
  };

  // Цена за месяц
  // const setPricesDefault = () => {
  //   starterPrice.textContent = priceList.starter.default;
  //   popularPrice.textContent = priceList.popular.default;
  //   enterprisePrice.textContent = priceList.enterprise.default;
  // };
  const setPricesMonthly = () => {
    starterPrice.textContent = priceList.starter.monthlyPrice;
    popularPrice.textContent = priceList.popular.monthlyPrice;
    enterprisePrice.textContent = priceList.enterprise.monthlyPrice;
  };

  // Gереключатель всегда активным
  swither.checked = true;

  // swither.addEventListener('change', () => {
  //   if (swither.checked) {
  //     setPricesWithSale();
  //   } else {
  //     setPricesDefault();
  //   }
  // });
  swither.addEventListener('change', () => {
    if (swither.checked) {
      setPricesAnnual();
    } else {
      setPricesMonthly();
    }
  });

  procePeriod.forEach((e) => {
    swither.addEventListener('change', () => {
      if (swither.checked) {
        e.textContent = '/year';
      } else {
        e.textContent = '/month';
      }
    });
  });
};
