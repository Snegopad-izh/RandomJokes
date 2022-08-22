// Отсюда берём шутки на англицком
const url = 'https://geek-jokes.sameerkumar.website/api?format=json';

// получаем доступ к месту со стилем кнопки смены шутки
const changeBtn = document.querySelectorAll('button.main__button')[0];

// получаем доступ к кнопке смены языка
const langBtn = document.querySelectorAll('button.main__button-lang')[0];

// получаем место изменени текста шутки
const jokeInputPlace = document.querySelector('.joke__place');

// 0 - англицкий, 1 - россеянский
let actualLanguage = false;

// получаем шутку сразу при перезагрузе
getData();

  //Вешаем обработчик на кнопку смены шутки
changeBtn.addEventListener('click', changeBtnIsPressed);
function changeBtnIsPressed() {
  
  if (!actualLanguage) {
    getData();
  }

  if (actualLanguage) {
    getQuotes();
  }
}

//Обработчик кнопки смены языка
langBtn.addEventListener('click', lngBtnIsPressed);
function lngBtnIsPressed() {
  if (!actualLanguage) {
    actualLanguage = true;
    langBtn.innerHTML = 'EN';
    return;
  }
  if (actualLanguage) {
    actualLanguage = false;
    langBtn.innerHTML = 'RU';
  }
}

//Делаем запрос и переписываем шутку по-англицки
async function getData() {
  document.body.style.background = "rgb(85, 84, 84)";
  
  const res = await fetch(url);
  const data = await res.json();
  jokeInputPlace.innerHTML = data.joke;
  
  setStandardBodyBg ();
  
}

//Делаем запрос и переписываем шутку по-россеянски
async function getQuotes() {  
  document.body.style.background = "rgb(85, 84, 84)";
  
  const quotes = './assets/ru_jokes.json';
  const res = await fetch(quotes);
  const data = await res.json();
  const jokeIndex = Math.trunc(getRandomArbitrary(0, data.length));

  jokeInputPlace.innerHTML = `${data[jokeIndex].text} (Автор: ${data[jokeIndex].author})`;
  
  setTimeout(setStandardBodyBg, 200);
}

function setStandardBodyBg () {
  document.body.style.background = "rgb(41, 41, 41)";
}

function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min;
}

const message = '1. 10\n2. 10\n3. 10\n4. 10\n5. 10\n6. 10\n7. ?\n\nТаймаут для русского языка задан\nчтобы создать визуальный эффект\nЭто НЕ костыль\n\nАвтор не несёт ответственности,\nза содержимое шуток'
console.log(message);
