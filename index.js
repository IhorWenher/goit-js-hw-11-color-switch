"use strict";

const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];

const startBtn = document.querySelector('[data-action="start"]');
const stopBtn = document.querySelector('[data-action="stop"]');
const bodySelector = document.querySelector('body');


// Случайный цвет для бэкграунда

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

let colorTimer = null;

// Колбеки

function startInterval() {
  
  colorTimer = setInterval(() => {
    const randomIndexOfColorsArray = randomIntegerFromInterval(0, colors.length);
    const randomColor = colors[randomIndexOfColorsArray];
    bodySelector.style.backgroundColor = randomColor;
  }, 1000);
  
  startBtn.setAttribute('disabled', ' ');
  stopBtn.removeAttribute('disabled', ' ');
  
}

function stopInterval() {
  clearInterval(colorTimer);
  stopBtn.setAttribute('disabled', ' ');
  startBtn.removeAttribute('disabled', ' ');
}

//Слушатели

startBtn.addEventListener('click', startInterval);
stopBtn.addEventListener('click', stopInterval);
