const a = 'hello';

console.log('안녕 웹브라우저!');

// alert('마우스 우클릭 사용 금지. 불펌 금지.');
// confirm('정말..지울거야..?');
// prompt('당신의 이름은 무엇입니까?')

/* global clearContents */ //-> clearContents함수 문법 오류 안뜨게

import { attr, getNode, getNodes } from './lib/index.js';

function phase1() {
  const first = document.querySelector('#firstNumber');
  const second = document.querySelector('#secondNumber');
  const clear = getNode('#clear');
  const result = getNode('.result');

  function hadleInput() {
    const firstValue = +first.value;
    const secondValue = Number(second.value);

    let total = firstValue + secondValue;

    clearContents(result);

    insertLast(result, total);
  }

  function handleClear(e) {
    e.preventDefault();
    clearContents(first);
    clearContents(second);
    result.textContent = '-';
  }

  //   first.addEventListener('input', debounce(hadleInput)); //-> 프로젝트할 땐 이렇게 쓰기
  //   second.addEventListener('input', throtle(hadleInput));
  first.addEventListener('input', hadleInput);
  second.addEventListener('input', hadleInput);
  clear.addEventListener('click', handleClear);
}

function phase2() {
  const calculator = getNode('.calculator');
  const result = getNode('.result');
  const clear = getNode('#clear');
  const numberInputs = [...document.querySelectorAll('input:not(#clear)')];

  function handleInput() {
    const total = numberInputs.reduce((acc, cur) => acc + Number(cur.value), 0);

    clearContents(result);
    insertLast(result, total);
  }

  function handleClear(e) {
    e.preventDefault();
    numberInputs.forEach(clearContents);
    result.textContent = '-';
  }

  calculator.addEventListener('input', handleInput);
  clear.addEventListener('click', handleClear);
}
