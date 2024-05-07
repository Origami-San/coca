import '/scss/contact.scss';

// Components
import { useTheme } from './components/theme.js';
useTheme();

import { useBurger } from './components/burger.js';
useBurger();

import { useHeader } from './components/header.js';
useHeader();

import { useMap } from './components/contact/map.js';
useMap();

import { usePartnersSlider } from './components/home/slider.js';
usePartnersSlider();

import { useTestInputMask } from './components/contact/phone.js';
// useIntlTelInput();
// usePhoneMask();
//useIntlTelInputMask();
useTestInputMask();

// import { formValidator } from './components/contact/formValidator.js';
// formValidator();
