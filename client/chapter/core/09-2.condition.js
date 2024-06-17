/* ------------------- */
/* Logical Operators   */
/* ------------------- */

let a = 10;
let b = '';
let value = Boolean(b);

// 논리곱(그리고) 연산자 &&
let AandB = a && b;
console.log('AandB :', AandB);

// 논리합(또는) 연산자 ||
let AorB = a || b;
console.log('AorB :', AorB);

// 논리 할당 연산자 Logical OR Assignment
// a ||= b

// 부정 연산자
let reverseValue = !value;
console.log('reverseValue : ', reverseValue);

// 조건 처리

// 첫번째 Falsy를 찾는 연산 (&&)
// let whichFalsy = true && ' ' && [] && {thisIsFalsy:false};

// 첫번째 Truthy를 찾는 연산 (||)
// let whichTruthy = false || '' || [2,3].length || {thisIsFalsy:true};

console.clear();
/* 
let userName = prompt('whoAreYou?');
if (userName === 'admin') {
  question();
}
function question() {
    let pw = prompt('비밀번호는?')
  if (pw == '' && pw == null) {
    alert('취소되었습니다.');
  } else if (pw == 'abc') {
    alert('환영합니다!');
  } else {
    alert('인증에 실패하였습니다.');
  }
}
 */

let userName = prompt('누구세요?');

if (userName?.toLowerCase() === 'admin') {
  let pw = prompt('비밀번호는?');

  if (pw?.toLowerCase() === 'me') {
    alert('환영');
  } else if (pw === null || pw?.replace(/\s*/g, '') === '') {
      alert('취소');
      console.log(11);
  } else {
    alert('비밀번호를 잘못 입력하셨습니다.');
    console.log(22);
  }
} else if (userName === null || userName?.replace(/\s*/g, '') === '') {
  alert('취소');
} else {
  alert('실패');
}

/* const na = '나';
if (na == '나'){
    prompt('변수가 없어도 함수가 실행이 되는 걸까?') // 됨!!
} */

/* 
let aa = prompt('질문');

console.log(aa); */
