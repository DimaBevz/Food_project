require('es6-promise').polyfill();
import 'nodelist-foreach-polyfill';

import  tabsOnPage from './modules/tabs';
import  modalWindow from './modules/modal';
import  timerOnPage from './modules/timer';
import  cards from './modules/cards';
import  calculator from './modules/calculator';
import  formOnPage from './modules/forms';
import  sliderOnPage from './modules/slider';
import {openModal} from './modules/modal';

window.addEventListener('DOMContentLoaded', () => {

    const modalTimerId = setTimeout(() => openModal('.modal', modalTimerId), 300000);

    tabsOnPage('.tabheader__item', '.tabcontent', '.tabheader__items', 'tabheader__item_active');
    modalWindow('[data-modal]', '.modal', modalTimerId);    // triggerSelector, modalSelector
    timerOnPage('.timer', '2021-05-31');
    cards();
    calculator();
    formOnPage('form', modalTimerId);
    sliderOnPage({
        container: '.offer__slider',
        nextArrow: '.offer__slider-next',
        prevArrow: '.offer__slider-prev',
        slide: '.offer__slide',
        totalCounter: '#total',
        currentCounter: '#current',
        wrapper: '.offer__slider-wrapper',
        field: '.offer__slider-inner'
    });

});
