/* ---------------- */
/* For In Loop      */
/* ---------------- */

const javaScript = {
  creator: 'Brendan Eich',
  createAt: '1995.05',
  standardName: 'ECMAScript',
  currentVersion: 2023,
  hasOwnProperty(){
    return '메서드 훼손';
  },
};

console.log('toString' in javaScript); // 조상까지 가서 toString 키를 찾음(in의 문제)
Object.prototype.nickName = '조상훼손';

// 객체의 속성(property) 포함 여부 확인 방법
// - 모든 객체가 사용 가능하도록 속성이 확장되었을 때 포함 여부 결과는?

// 객체 자신의 속성인지 확인하는 방법
// - "자신의 속성을 가지고있는지 확인 방법"이 덮어쓰여질 수 있는 위험에 대처하는 안전한 방법은?
// console.clear()

/* 
console.log(javaScript.hasOwnProperty('nickName')); // 객체의 프로토타입이 아니라 오염된(재선언된)함수의 실행값이 출력됨.
console.log(javaScript.hasOwnProperty('standardName'));
 */

// 메서드 빌려쓰기
console.log(Object.prototype.hasOwnProperty.call('nickName'));
                                                // 사용할 객체 , 객체의 키
console.log(Object.prototype.hasOwnProperty.call(javaScript, 'nickName'));
console.log({}.hasOwnProperty.call(javaScript, 'nickName'));


// for ~ in 문
// - 객체 자신의 속성만 순환하려면?
// - 배열 객체 순환에 사용할 경우?

for (let key in javaScript){
    console.log(key)
}
// -> 위에서 조상이 회손된 enumerable(열거할 수 있는)한 key값까지 출력.
// 콘솔에서 객체를 출력했을 때 파란색으로 활성화된 프로퍼티는 열거가능한 속성임.

// 자기 것만 담기
for (let key in javaScript){
    if(Object.prototype.hasOwnProperty.call(javaScript,key)){

        console.log(javaScript[key]);
    }

        console.log(key);
}

// 점 표기법      => 변수 설정 x
// 대괄호 표기법   => 변수 설정 o


console.clear()

for(let key in javaScript){
    console.log(key)
}


for (let key in javaScript) {
  if (Object.prototype.hasOwnProperty.call(javaScript, key)) {
    console.log(javaScript[key]);
  }
}
// 점표기법은 객체에 존재하는 key를 입력해야지 출력가능 함
// 대괄호표기법은 변수를 만들어서 해당 변수에 해당하는 key를 가져올 수 있음

// console.clear();

const tens = [10, 100, 1000, 10_000];

for (let key in tens) {
  console.log(key) // 배열의 키 = 인덱스 숫자가 출력
  console.log(tens[key]); // 배열의 요소 출력
}

// 범쌤 코드
const obj = {}


obj.nickName = 'tiger'


// Object.defineProperty(obj,'age',{
//   value:30,
//   enumerable: true,
//   writable: false,
//   configurable:true
// })


// Object.defineProperties(obj,{
//   age:{
//     value:30,
//     enumerable:true,
//     writable:true
//   }
// })

