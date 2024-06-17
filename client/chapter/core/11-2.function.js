/* ----------------------- */
/* Functions → Expression  */
/* ----------------------- */

function calcTotal(moneyA, moneyB, moneyC, moneyD) {
  return moneyA + moneyB + moneyC + moneyD;
}

const resultX = calcTotal(10000, 8900, 1360, 2100);
const resultY = calcTotal(21500, 3200, 9800, 4700);
const resultZ = calcTotal(9000, -2500, 5000, 11900);

// console.log(resultX);
// console.log(resultY);
// console.log(resultZ);

[1000, 5000, 2500].forEach(function () {});

// 함수 선언 → 일반 함수 (표현)식
let calculateTotal = function () {
  // arguments: 함수 안에서만 접근 가능한 인수들의 집합 객체로서 배열과 유사하여 유사배열 이라 불리는 지역변수. 따로 선언하지 않아도 불러내서 쓸 수 있음.
  let total = 0;

  /* 
    // * for문
    for(let i = 0; i < arguments.length; i++){
        total += arguments[i]
      } 
      console.log(total);
   
 */
  /* 
    * for...of문
    for(let value of arguments){
        total += value;
    } 
    console.log(arguments);
    // -> 순환 순서를 지정할 필요 없으니 i를 선언하지 않고 대신 arguments의 요소를 담을 변수 'value'를 선언함.
    */

  //  * arguments => array
  /* 
  -> argument를 다 쓰기 귀찮으니 배열로 만들자.
    const arr = [...arguments]
    // const arr = Array.from(arguments)
    const arr = Array.prototype.slice.call(arguments) // -> 배열의 요소 일부를 배열로 다시 만드는 메서드를 빌려와서 arguments 요소를 배열로 만듦.
    ? slice메서드의 인수가 어떻게 들어가는 거지..
    -> 오..slice 메서드는 인수로 아무것도 안 넣으면 그냥 복제가 됨.
    console.log(arr) ;


 */
  /* 
  *forEach
  arr.forEach(function (price) {
    total += price;
  });

  // [...arguments].forEach((item)=>(console.log(item)))
    ->  이렇게 쓰는 경우는 전역에 [...arguments]를 담은 변수가 선언되지 않은 상태에만 가능함.
  [...arguments].forEach(function (price) {
    total += price;
  });
  arr.forEach(price => total += price) // -> forEach메서드의 콜백함수를 화살표 함수로 만들기

 */
  /* 
  * reduce
  const arr = [...arguments];
  // ! total은 위에서 선언된 변수임. 다른 변수에 넣으려면 새로 선언해서 식을 넣어줘야 함.
  total = arr.reduce(function (acc, cur) {
    return acc + cur;
  }, 0);
  -> 초기값을 [] / {} / '' 등으로 써서 다른 자료형으로도 출력할 수 있음

  total = arr.reduce((acc, cur) => acc + cur, 0)
  -> 화살표 함수에서 중괄호를 생략하면 자동으로 명령을 return 해줌.
 */

  /* 
* reduce 메서드 사용하는 추가 예시 (보고 넘어가기)
const people = [
    {
        nickName: 'tiger',
        age: 40
    },
    {
        nickName: 'beom',
        age: 45
    },
    {
        nickName: 'seon',
        age: 20
    },
]

const template = people.reduce(function(htmlCode,cur){
    return htmlCode + `<div>${cur.nickName} : ${cur.age}</div>`
},'')

document.body.insertAdjacentHTML('beforeend', template);
 */
  /* 
  * 빌려쓰기
  Array.prototype.forEach.call(arguments,function(item){
    total += item
  })
 */
  /* 
  * 태생을 배열로 바꾸기
  arguments.__proto__ = Array.prototype

  console.log(arguments);
 */

  return arguments;
  // return total;
};

const result = calculateTotal(1000, 5000, 2500, 500);
console.log(result);

/* 
* 정리
// forEach  => 배열의 메서드 | 순환 O | 값 반환 X
// reduce   => 배열의 메서드 | 순환 O | 값 변환 O | 숫자/문자/배열/객체
// map      => 배열의 메서드 | 순환 O | 값 반환 O | only 배열
// filter   => 배열의 메서드 | 순환 O | 값 반환 O | only 배열
 */

/* 
* map
const arr = [10,100,1000]

const mapValue = arr.map(function(item){
  return item * 2
})
console.log(mapValue)
 */
/* 
* map2
const arr = ['a', 'b', 'c']
const mapValue = arr.map(function(item){
  return '멋쟁이-' + item
})
console.log(mapValue)
 */

// 익명(이름이 없는) 함수 (표현)식
let anonymousFunctionExpression = function () {};

// 유명(이름을 가진) 함수 (표현)식
let namedFunctionExpression = function hello() {};

// 콜백 함수 (표현)식
let callbackFunctionExpression;

let cb = function (isActive, success, fail) {
  if (isActive) {
    success();
  } else {
    fail();
  }
};

cb(
  false,
  function () {
    console.log('성공');
  },
  function () {
    console.log('실패');
  }
);

function movePage(url, success, fail){
  if(url.includes('https')){
    success(url)
  } else{
    fail()
  }
}

movePage(
  'https://www.naver.com',
  function (url) {
    console.log(`현재 입력하신 url은 ${url}니다. 3초 뒤 해당 사이트로 이동합니다.`);
    // location.href = url // -> 바로 링크 열리는 메서드
  },
  function () {
    console.log('잘못된 url을 입력하셨습니다.');
  }
);




// higher-order function = 고차함수 (함수형 프로그래밍에서 쓰임. 일단 지금은 넘어가기)
function map(arr, func) {
  let result = [];

  for (let i = 0; i < arr.length; i++) {
    result.push(func(arr[i]));
  }

  return result;
}


// 함수를 인수로 받아 처리함.
// 함수를 리턴함
function greater(n) {
  return function (m) {
    return n > m;
  };
}
console.log(greater(3)(5))

const g = (n) => (m) => n > m;

console.log(g(6)(2))



// 함수 선언문 vs 함수 (표현)식

// 즉시 실행 함수 (표현)식 = Immediately Invoked Function Expression(IIFE)
let IIFE;

/* 
(function () {
  console.log('즉시 실행함수 실행');
})();
 */


// 함수가 선언됨과 동시에 실행되는 것을 말합니다. 

// var는 블록 스코프 : X , 함수 스코프 : O

// encapsulation (캡슐화) //closure에서 사용(넘어가기)
// 모듈 프로그래밍 => (import, export)

/* 
? 즉시 실행 함수도 매개변수를 받을 수 있나요?
-> ㅇㅇ

(function (g) {
  g.console.log('(window).console.log()를 이렇게 쓸 수 있음. 함수 내에서 안전하게 글로벌 오염시키기')
})(window);


*/

// 즉시실행함수는 매개변수를 받을 수 있나요?  window => tiger

const MASTER = (function (tiger){

  
  let uuid = 'azxcqwASFqjKJ112314!23'
  
  return {
    getKey(){
      return uuid
    },
    setKey(value){
      uuid = value
    }
  }

})(window)

// uuid = 'asdasdasdas' -> 바깥에서는 uuid에 접근할 수 없음. uuid의 값을 바꾸려면 무조건 MASTER의 setKey메서드를 사용해야 함.

// uuid 변경하는 법
MASTER.setKey('아이디 변경')

// uuid 출력하는 법
let getUuid = MASTER.getKey()
console.log(getUuid)


const css = (function(){

  function setStyle(node,prop,value){
    if(typeof node === 'string') node = document.querySelector(node)
    if(typeof prop !== 'string') throw new Error('setStyle 함수의 두 번째 인수는 문자 타입 이어야 합니다.');
    if(!value) throw new Error('setStyle 함수의 세 번째 인수는 필수값 입니다.');
    node.style[prop] = value
  }
  
  function getStyle(node,prop){
    if(typeof node === 'string') node = document.querySelector(node);
    if(typeof prop !== 'string') throw new Error('getStyle 함수의 두 번째 인수는 문자 타입 이어야 합니다.');
    return getComputedStyle(node)[prop]
  }
  
  function css(node,prop,value){
    return !value ? getStyle(node,prop) : setStyle(node,prop,value);
  }

  return css
  
})()


// closure



