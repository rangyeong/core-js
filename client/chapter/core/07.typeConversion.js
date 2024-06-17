/* --------------------- */
/* Type Conversion       */
/* --------------------- */

/* 데이터 → 문자 ----------------------------------------------------------- */

// number
const YEAR = 2024;

console.log(typeof (YEAR + ''));

// undefined, null

let days = null;
console.log(days + '');

let friends = undefined;
console.log(typeof (friends + ''));

// boolean

let isClicked = true;

console.log(String(isClicked));

// dot log

/* 데이터 → 숫자 ----------------------------------------------------------- */

// undefined => NaN

let friend;
console.log(Number(friend));

// null => 0

let money = null;
console.log(Number(money));

// boolean
// true = 1, false = 0

let isMarried = true;
console.log(Number(isMarried));

// string

let num = '100';

console.log(typeof (num * 1));
console.log(num / 1);
console.log(+num);
// 숫자형의 암시적 형변환 방법 3가지

// numeric string

const width = '120.5px'; // 문자가 들어가면 숫자형으로 형 변환했을 때 NaN 값이 console.error('반환됨',반환됨)

console.log(parseInt(width));
console.log(parseFloat(width));
console.log(parseInt('12a13')); // parse~ 메서드는 숫자 앞에서 자름

/* 데이터 → 불리언 ---------------------------------------------------------- */

// null, undefined, 0, NaN, ''
// 위에 나열한 것 이외의 것들

console.log(Boolean(friend)); // false
console.log(Boolean(0)); //false
console.log(Boolean('')); // false
console.log(Boolean(NaN)); // false
console.log(Boolean('  ')); // true
console.log(Boolean('0')); //true

// console('2'+ 3+1);
// console(3 + 1 + '2');


let a = 1;
let b = 2;

let c = 3 - (a = b + 1);

alert( a ); // 3
alert( c ); // 0
