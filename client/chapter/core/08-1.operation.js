/* ---------------- */
/* Operators        */
/* ---------------- */

// 연산자(演算子): 연산을 표시하기 위한 기호
// 피연산자(被演算子): 처리 대상

let a = '10';
let b = '30';

// 단항 연산자
let unary = +a;
console.log('unary : ',unary);

// 이항 연산자
let binary = +a + +b;
console.log('binary : ' ,binary);

// 삼항 연산자
let ternary = a >= 10 ? true : false;
console.log('ternary : ',ternary);

// 산술 연산자: 덧셈
let addition = 1 + 2;
console.log(addition);

// 산술 연산자: 뺄셈
let subtraction = 10 - 3;
console.log(subtraction);


// 산술 연산자: 곱셈
let multiplication = 22 * 4;
console.log(multiplication);

// 산술 연산자: 나눗셈
let division = 30 / 2;
console.log(division);

// 산술 연산자: 나머지
let remainder = 10 % 3;
console.log('remainder : ', remainder);

if( a % 2 != 0 ){
    console.log('홀수야!');
}

// 산술 연산자: 거듭 제곱
let power = 2 ** 53;
console.log('power : ',power);
console.log( Math.pow(2, 25));

// JavaScript 연산자는 피연산자를 적절한 타입(유형)으로 강제 변환합니다.
let coercionTypeConversion = '9' * '3';
console.log(coercionTypeConversion);
// coercionTypeConversion = 강제 유형변환

// 대부분의 연산자는 기본 값으로만 작동합니다.
let onlyWorkDefaultValues = [1, 2, 3] + [4, 5, 6]; // 1,2,34,5,6 -> 숫자형 반환
let onlyWorkDefaultValues2 = [1, 2, 3].concat([4, 5, 6]); // (6) [1, 2, 3, 4, 5, 6] -> 배열 반환
console.log(onlyWorkDefaultValues);
console.log(onlyWorkDefaultValues2);
//배열끼리는 더할 수 없댜. 메서드를 사용해줘야 함.

let first = [1,2,3];
let second = [4, 5, 6];
console.log(...first); // 1 2 3 -> 배열의 요소가 나열 됨.
console.log(...first, ...second); // 1 2 3 4 5 6
console.log([...first, ...second]); // (6)[1, 2, 3, 4, 5, 6]

// '...배열' 의 형태를 spread syntax (전개 구문) 혹은 spread oprator (전개 연산자)라고 함. 전개 구문이 정식 명칭


// 연산자 우선 순위
// 단항(+,-) > 거듭제곱(**) > 곱셈(*) > 나눗셈(/) > 덧셈(+) > 뺄셈(-) > 할당(=)

// 선,후 증감 연산자
// ++, --

console.clear()

let counter = 0;

console.log(counter++);
console.log(counter);

// 복합 할당 연산자
counter += 1;

// 풀어서
counter = counter + 1;




// 아래 코드를 읽기 쉽도록 변경합니다.
// 그리고 연산자 우선 순위에 따라 연산 과정을 유추해보세요.

let count = 10;
// let total = (count % 4) * (count /= 2) + count ** 3; // ?

let total = count % 4;
count = count /2 ;
let pow = count ** 3;
total = total * count + pow;

console.log(total);