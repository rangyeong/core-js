/* ------------------------ */
/* Data Types               */
/* ------------------------ */

/* ECMAScript의 8가지 데이터 타입 -------------------------------------------- */

// 1. 존재하지 않는(nothing) 값 / 비어있는(empty) 값 / 알 수 없는(unknown) 값
// 2. 값이 할당되지 않은 상태
// 3. 따옴표를 사용해 묶은 텍스트(큰", 작은', 역`)

let empty = null;

console.log(typeof empty);

let undef;

const double = 'hello';
const single = 'hello';
const backtick = `hello $(single + double)`;

console.log(backtick);

const str = new String('hello');

console.log(str);
// 4. 정수, 부동 소수점 숫자(길이 제약)

const integer = 150;
const floatingPointNumber = 10.5;
const nan = NaN;


const num = new Number(150);
console.log(typeof nan);
console.log(num);
// 5. 길이에 제약이 없는 정수(예: 암호 관련 작업에서 사용)

const bigInt = 123n;

console.log(typeof bigInt);

// 6. 참(true, yes) 또는 거짓(false, no)

const isActive = false;
console.log(typeof isActive);


// 7. 데이터 컬렉션(collection) 또는 복잡한 엔티티(entity)

const obj = {
    name : 'tiger'
}

const object = new Object({name : 'seonbeom'});

console.log(obj);
console.log(object);
// 8. 고유한 식별자(unique identifier)

// const id = new Symbol('uuid');
// const id2 = Symbol('uuid');

console.log(typeof id);

/* typeof 연산자의 2가지 사용법 ---------------------------------------------- */


// 1) 연산자 typeof
// 2) 함수 typeof()

// 언어 상, 오류

console.clear();

// Object

const user = {
  name: 'tiger',
  age: 20,
  sum: function (a, b) {
    return a + b;
  },

  sayHi: function () {
    return 'hello';
  }, // 1. nomal function
  sayHi2: () => {
    return 'hi';
  }, //2. arrow function. window바인딩 x
  sayHi3() {
    return 'hi';
  }, // 3. concise method. window를 바인딩해서 불러올 수 있음. 프로토타입(열어보면 생성자가 나옴)이 없음.
};

console.log(user.sayHi2);
// Array

const newArray = new Array(1, 2, 3);
const testArray = new Array(2)

const arr = [10, 100, 1000, null, undefined, 'hello', {name: 'tiger'}, function(){}];

// const why = new bigInt(100);
// console.log(typeof why);

console.log(newArray);



// function

function 더하기(a, b){
    console.log(a + b);
}

더하기() // 매개변수를 안 넣어주면 연산 값이 nan이 됨.

function 붕어빵틀(재료){
    return `따끈 따끈 맛있는 ${재료}맛 붕어빵`;
}

const 팥붕 = 붕어빵틀('팥')
const 슈붕 = 붕어빵틀('슈크림')
const 피자붕 = 붕어빵틀('피자맛')
console.log(팥붕);


// this
