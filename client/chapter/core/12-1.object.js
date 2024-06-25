/* --------- */
/* Object    */
/* --------- */

/* global isObject */

// console.log(isObject);

const html = /* html */ `
    <h1>tile</h1>
    <div class="first">
        hello
    </div>
`;
/* Primitives vs. Object --------- */

// 객체 = key:value 쌍으로 구성된 엔티티(entity) 데이터 구조
let cssCode = /* css */ `
  .dialog {
    position: fixed;
    z-index: 10000;
    top: 50%;
    left: 50%;
    width: 60vw;
    max-width: 800px;
    height: 40vh;
    min-height: 280px;
    transform: translate(-50%, -50%);
  }
`;

// 위 CSS 스타일 코드를 JavaScript 객체로 작성해봅니다.
let cssMap = {
  position: 'fixed',
  zIndex: '10000',
  top: '50%',
  left: '50%',
  width: '60vw',
  maxWidth: '800',
  height: '40vh',
  minHeight: '280',
  transform: 'translate(-50%, -50%)',
};

// 인증 사용자 정보를 객체로 구성해봅니다.
// 인증 사용자(authentication user)
// - 이름
// - 이메일
// - 로그인 여부
// - 유료 사용자 권한

let authUser = null;

authUser = {
  uid: 'user-id-adlksfj932424!@',
  name: 'rangyeong',
  email: 'rkdud0217@naver.com',
  isSignIn: false,
  permission: 'paid', // paid | free
};

// 점(.) 표기법
// authUser 객체의 프로퍼티에 접근해 Console에 출력해봅니다.

console.log(authUser.uid);
console.log(authUser.name);
console.log(authUser.email);
console.log(authUser.isSignIn); // getter

console.log((authUser.permission = 'free')); // setter

// 대괄호([]) 표기법
// 유료 사용자 권한(paid User Rights) 이름으로 프로퍼티를 재정의하고
// 대괄호 표기법을 사용해 접근 Console에 출력해봅니다.

console.log(authUser['uid']);
console.log(authUser['name']);
console.log(authUser['email']);
console.log(authUser['isSignIn']); // getter
console.log((authUser['permission'] = 'allPass'));

Object.prototype.nickName = '호랑이'; // authUser 훼손시키기

// 객체 안에 키가 있는지 확인 방법
/* 
// * in 문

console.log('uid' in authUser);

for (let key in authUser) {
  if ({}.hasOwnProperty.call(authUser, key)) {
    // hasOwnProperty는 인스턴스 메서드
    console.log(authUser[key]);
  }
}
 */
/* 
// * 객체의 key 만을 모아서 배열을 반환하는 스테틱 메서드 Object.keys()
const keyList = Object.keys(authUser);

console.log(keyList); */
/* 
// * 객체의 value 만을 모아서 배열을 반환하는 메서드 Object.values()
const valueList = Object.values(authUser);

console.log(valueList);

function getPropertiesList(obj) {
  let result = [];
  for (let key in obj) {
    
        // * key 출력
        // if({}.hasOwnProperty.call(obj,key)){
        //     result.push(key);
        // }
    // * value 출력

    if ({}.hasOwnProperty.call(obj, key)) {
                  // 객체의 키(메서드)를 출력하면 해당 값이 나오니까..!
      result.push(obj[key]);
    }
  }

  return result;
}

getPropertiesList(authUser);
 */
console.clear();

/* 
// * 프로퍼티 제거(remove) or 삭제(delete)
// -> 비워두기    // -> 메모리 날림

// * 비우는 함수 
// -> 객체의 특정 키 값을 null로 만듦

function removeProperty(obj, key) {
        // 유틸함수로 객체가 맞는지 확인
  if (isObject(obj)) {
    obj[key] = null; // authUser.name = null;
  }
}

removeProperty(authUser, 'name');

// * 삭제하는 함수
function deleteProperty(obj, key) {
  if (isObject(obj)) {
    delete obj[key];
  }
}

deleteProperty(authUser, 'name'); // undefinde


 */

// 계산된 프로퍼티 (computed property)
let calculateProperty = 'phone'; // phone | tel

function createUser(name, age, phone) {
  return {
    name:name,
    age:age,
    [calculateProperty]: phone, // ! 변수를 키로 쓸 때는 대괄호로 써줘야 함
  };
}

// authentication

// 단축 프로퍼티
// -> key와 value가 같으면 key만 써도 됨.
let name = '선범';
let email = 'seonbeom2@euid.dev';
let authorization = 'Lv. 99';
let isLogin = true;

const student = {
  // name: name,
  // email:email,
  // authorization:authorization,
  // isLogin:isLogin,
  // name: name,

  name,
  email,
  authorization,
  isLogin,
};

// 프로퍼티 이름 제한
// 예약어: class, if, switch, for, while, ...

// 객체가 프로퍼티를 포함하는 지 유무를 반환하는 유틸리티 함수 isEmptyObject 작성
function isEmptyObject(obj) {
  if (Object.keys(obj).length === 0) {
    return true;
  } else {
    return false;
  }
}

isEmptyObject(student); // 값이 있는 student객체를 인수로 넣었으니 false출력
isEmptyObject({}); // 빈 배열이 인수로 받아졌으니 true

/* ------------------------------------------- */
/* 배열 구조 분해 할당  destructuring assignments   */
/* ------------------------------------------- */


// // 순서(order)를 바꿀 수 없음. 변수명 o 

const arr = [10, 100, 1000, 10_000];
/* 
const [a0, a1, a2, a3] = arr;
const a0 = arr[0];
const a0 = arr[1];
const a0 = arr[2];
const a0 = arr[3];
 */
const [a0, , a2, , a4 = 999] = arr; 
// -> 값을 비워도 되고(_ 안쓰고 그냥 비워도 자동으로 비워짐)
// -> 끝까지 안써도 됨
// -> 배열에 없는 요소를 생성하고 값을 부여해서 사용할 수 있음.

// const [a0, ...rest] = arr; // -> 나머지 연산자를 사용할 수 있음.
// 배열의 구조분해 할당은 무조건 순서대로 써야 함.

// * for of 문을 사용해서 구조분해 할당 하기
for (let [key, value] of Object.entries(authUser)) {
  console.log(key,':', value);
}

// * 유사배열(nodeList)구조분해 할당하기
const [first, second] = document.querySelectorAll('span');

// const first = spanList[0];
// const second = spanList[1];

// const first = document.querySelector('.first');
// const second = document.querySelector('.second');

/* -------------------------------------------- */
/* 객체 구조 분해 할당  destructuring assignments    */
/* --------------------------------------------- */

// * 순서를 고려하지 않음. key와 변수명이 동일해야 함. => 변수명 o 
// 기본 값 사용 가능 
const salaries = {
  함정민:95,
  지유진:110,
  이진용:15,
  한상학:300
}

       // key이름 재설정 + 기본값 지정    // key이름 재설정
const {함정민:함 = 100,지유진:지,한상학:한,이진용:리,장주원:장 = 500} = salaries;
                                            // 새로운 속성 추가하기
// const 이진용 = salaries.이진용;
// const 지유진 = salaries.지유진;


function sum(a){

  return 1 + a
}

sum()



function createUserObject({
  name = '철수',
  age,
  gender,
  job:j = '홈프로텍터',
  ...rest 
}={}){
  // -> rest 받은 속성들은 rest.key 로 값을 깨내쓸 수 있음
  console.log(rest.address)
  console.log(rest)
  
  // -> 구조분해 할당도 가능
  let {address:주소, tel:전화번호} = rest
  // ! 여기에서 주소와 전화번호는 address와 tel 속성의 값이 아니라 해당 속성의 이름을 재설정하는 것임.
  
  // const {name,age,gender,job} = obj;

                                      // 구조분해 할당을 해서 값을 써 주면 프로퍼티가 출력이 됨...?
  return { name, age, gender, job: j, 주소, 전화번호 };

}


const data = {
  name:'beom',
  age:40,
  gender:'male',
  job:'developer',
  address:'서울시 중랑구',
  tel:'010-716....'
} 

const person = createUserObject(data);

console.log(person)


const { 
  userName, 
  age, 
  gender, 
  job, 
  address = '서울시 중랑구', 
  tel
 } = {
  userName:'beom',
  age:40,
  gender:'male',
  job:'developer',
  address:'서울시 중랑구',
  tel:'010-716....'
}

// const {acos} = Math;

// const acos = Math.acos;