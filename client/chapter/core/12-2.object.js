/* ------------------------- */
/* Copy object by reference  */
/* ------------------------- */

// 복사(copy) vs. 참조(reference)

let message = '문자 값은 프리미티브 데이터 타입으로 값이 복사됩니다.';
let messenger = {
  name: 'kakao talk',
  manufacture: 'kakao',
};

let text = message;
let conversationTool = messenger;

// 비교 (복사 vs. 참조)
console.log(message == text);
console.log(message === text);
console.log(messenger == conversationTool);
console.log(messenger === conversationTool);

// 객체 복사
// 1. for ~ in 문을 사용한 복사

const cloneObject = {};

for(let key in messenger){
    cloneObject[key] = messenger[key]
}

console.log(cloneObject);


// 2. Object.assign()을 사용한 복사 (얕복)

const copyObject = Object.assign({},messenger);
console.log(copyObject);

// 3. 전개 연산자(...)를 사용한 복사  (얕복)

const spreaObject = {...messenger};

console.log(spreaObject);

// 4. 객체를 복사해주는 유틸 함수

const copiedObject = obj => Object.assign({},obj);



// const newObject = copiedObject(obj);

// 객체 병합(합성)
const cssMapA = {
  color: '#4b004b',
  margin: '0 auto',
};

const cssMapB = {
  display: 'flex',
  flexFlow: 'column',
  justifyContent: 'center',
  padding: '0.4em 0.62em',
  color: '#3f9e97',
};

// mixin
// -> 동일한 키를 가진 값은 뒤의 값이 덮어씌워짐 
// let combinedCssMap = Object.assign({},cssMapA, cssMapB)
let combinedCssMap = {...cssMapA, ...cssMapB};


// 중첩된 프로퍼티에 객체를 포함하는 객체 복사
// 얕은 복사 vs. 깊은 복사
const containerStyles = {
  'min-height': '100vh',
  'max-width': {
    sm: '90%',
    md: 640,
    lg: 960,
    xl: 1120,
    xxl: 1140,
  },
};

let copiedContainerStyles = cloneDeep(containerStyles);

// 1. 깊은 복사 유틸리티 함수
function cloneDeep(object) {
  return Object.fromEntries(
    Object.entries(object).map(([key, value]) => {
      let type = typeof value;
      if (value && type === 'object') {
        value = cloneDeep(value);
      }
      return [key, value];
    })
  );
}


console.clear

const defaultOptions = {
  method:'GET',
  body:null,
  headers:{
    'content':'application/json',
    'access': '*'
  }
}


function ajax(options){
  // 이것도 믹스인 방식
  const { method, headers, body } = {
    ...defaultOptions,
    ...options,
    headers: { ...defaultOptions.headers, ...options.headers },
  };

  // const {method,headers,body} = newOptions;

  // console.log( newOptions );

  // method, body, header

  console.log(method);
}
// 오늘 예제는 새 변수를 선언해서 값으로 객체를 만들어서 전개연산자를 통해 속성을 얕은 복사를 했으니까 해당 객체는 원본 객체랑 독립된 새로운 객체. 그러니까 새로운 객체의 속성을 변경해도 원본 객체는 훼손되지 않음. 하지만 얕은 객체라서 더 깊은 복사를 위한 처리(반복문, 재귀, 한번더 전개하기)를 해주지 않으면 Key의 값이 객체인 더 깊은 depth의 값을 변경하면 원본 객체도 변경이됨.

ajax({
    method:'POST',
    body:'데이터'
})







// 2. Lodash 라이브러리 활용
// _.cloneDeep(value)
// 참고: https://lodash.com/docs/4.17.15#cloneDeep
// CDN : https://cdn.jsdelivr.net/npm/lodash@4.17.21/lodash.min.js
