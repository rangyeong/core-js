/* -------------------- */
/* String Type          */
/* -------------------- */

let message = 'Less is more.';

// length 프로퍼티
let stringTotalLength = message.length;

console.log(stringTotalLength);

// 특정 인덱스의 글자 추출
let extractCharacter = message[5];

console.log('extractCharacter : ', extractCharacter); // i

// enumerable // 열거 가능한
// iterable // 반복 가능한
// immutable // 불변의
// mutable // 변경 가능한
// mutant // 돌연변이

// const a = {...immutable}

// 문자열 중간 글자를 바꾸는 건 불가능
// (기존 문자 변경 대신, 새로운 문자를 생성해야 함)
let immutableChangeCharacter = 'P' + message.slice(1);

console.log(message);

// 부분 문자열 추출
let slice = message.slice(4, -1);
console.log('slice : ', slice); // is more

let subString = message.substring(2, 5); // 객체의 시작 인덱스로 부터 종료 인덱스 전 까지 문자열의 부분 문자열을 반환
console.log('subString : ', subString); // ss

// let subStr = message.substr();ß

// 문자열 포함 여부 확인
let indexOf = message.indexOf('is');
console.log('indexOf : ', indexOf);

function checkBrowser() {

  const agent = window.navigator.userAgent.toLowerCase();
  let browserName;

  switch (true) {
    case agent.indexOf('edg') > -1:
      browserName = 'MS Edge';
      break;
    case agent.indexOf('chrome') > -1 && !!window.chrome:
      browserName = 'Chrome';
      break;
    case agent.indexOf('safari') > -1:
      browserName = 'Safari';
      break;
    case agent.indexOf('firefox') > -1:
      browserName = 'Firefox';
      break;
    case agent.indexOf('trident') > -1:
      browserName = 'IE';
      break;
    default:
      browserName = '무슨 브라우저 쓰세요..?';
  }

  return browserName;
}

checkBrowser(); // chrome

let lastIndexOf = message.lastIndexOf('s');

console.log('lastIndexOf',lastIndexOf)

// * 불린값 반환
// 이거 포함해?
let includes = message.includes('Less');
console.log('includes : ', includes);

// 이걸로 시작해?
let startsWith = message.startsWith('less');
console.log('startsWith : ', startsWith);

// 이걸로 끝나?
let endsWith = message.endsWith('more.');
console.log('endsWith : ', endsWith);



// 공백 잘라내기

let str = '    a      b  c          d       ';

let trimStart = str.trimStart(); // 앞공백 자르기
console.log('trimStart : ',trimStart)

let trimEnd = str.trimEnd(); // 뒷공백 자르기
console.log('trimEnd : ',trimEnd)

let trim = str.trim(); // 앞뒤 공백 자르기
console.log('trim : ',trim)
// -> trim 메서드로는 문자열 중간의 공백을 자를 수 없음


const replaceAll = str.replaceAll(' ', ''); // -> 첫 번째 매개변수(한 칸 띄움)를 모두 찾아서 두 번째 매개변수로 대체함.
console.log('repaceAll : ',replaceAll)

const replace = str.replace(/\s*/g, ''); // -> 비밀번호 쓸 때 사용함
console.log('replace : ',replace)

const trimText = (txt) =>  txt.replaceAll(' ','')
trimText(str)

// 텍스트 반복
let repeat = message.repeat(3);
console.log('repeat : ',repeat)

repeat.log 

// 대소문자 변환
let toLowerCase = message.toLowerCase();
console.log('toLowerCase :',toLowerCase)

let toUpperCase = message.toUpperCase();
console.log('toUpperCase :',toUpperCase);

// 텍스트 이름 변환 유틸리티 함수
function toCamelCase(string) {
  return string.replace(/(\s|-|_)+./g, ($1) =>
    $1
      .trim()
      .replace(/(-|_)+/, '')
      .toUpperCase()
  );
}

function toPascalCase(string) {
  let name = toCamelCase(string);
  return name[0].toUpperCase() + name.slice(1);
}
