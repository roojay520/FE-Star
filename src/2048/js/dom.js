require('babel-register');
require('babel-polyfill');

import matrix from './matrix';

const app = document.querySelector('#app');

const bord = matrix();
app.innerHTML = bord;
