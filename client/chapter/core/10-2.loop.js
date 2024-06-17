/* -------------------- */
/* Do While Loop        */
/* -------------------- */

/* 
let i = 10;

do{
    console.log(i);
    i++
}while(i < 5);
// i가 조건에 부합하지 않아도 최초 1회는 실행시키기 때문에 10이 출력이 됨


 */
/* 
let ii = 0;

do {
  console.log(ii);
  if(ii === 3){
    console.log('3번 입니다.')
  }
  ii++;
} while (ii < 5);

 */

// do ~ while 문 (역순환)
// - prompt 창을 띄워 사용자로 하여금 순환 횟수를 요청
// - 사용자로부터 요청된 횟수 만큼 역방향으로 순환 출력
// - 사용자로부터 요청된 횟수가 0보다 작을 경우,
//   '최초 실행된 메시지입니다. 이 메시지는 조건이 거짓이어도 볼 수 있습니다.' 출력
// - 순환 중단

/* let loopCount = prompt('몇번 반복?');
let i = loopCount;
 */
//1. 내가 한 거
/* 
console.log(i);
do {
  console.log(i);
  console.log(
    '최초 실행된 메시지입니다. 이 메시지는 조건이 거짓이어도 볼 수 있습니다.'
  );
  i--;
} while (i >= 0);
 */
/* 
do{
    console.log(i);
    if(i < 0){
  console.log(
    '최초 실행된 메시지입니다. 이 메시지는 조건이 거짓이어도 볼 수 있습니다.'
  );
        break;
        // 이 코드가 없으면 마이너스 값을 입력했을 때 무한 반복에 빠짐.
    }
    i--;
}while(i);

 */

// do ~ while 문 (순환)
// - 위 do ~ while 문을 순방향으로 순환되도록 설정
/* 
let count = 0;

do{
    console.log(count++);
} while(i--);
// while 에 받은 값이 한 번 반복될 때까지 반복되면서 위의 명령도 같이 실행됨. */

let first = document.querySelector('.first');
/* 
do {
  first = first.nextSibling;
} while (first.nodeType !== 1);
// while (
//   first.nodeType !== Node.ELEMENT_NODE
// ); 
 */
// search 'nodeType in mdn'
console.log(Node.ELEMENT_NODE);
console.log(Node.TEXT_NODE);
console.log(Node.COMMENT_NODE);

function next(node) {
  do {
    node = node.nextSibling;
  } while (node.nodeType !== 1);
  return node;
}
let second = next(first);

function prev(node){
    do {
      node = node.previousSibling;
    } while (node.nodeType !== 1);
    return node;
}

function next2(node) {
     node = document.querySelector(node);
  do {
    node = node.nextSibling;
  } while (node.nodeType !== 1);
  return node;
}
const second2 = next2('.first2');

// 함수 바깥에 클래스를 수집해서 변수를 미리 생성하느냐 아니면 변수를 생성할 때 매개변수로 클래스를 받아서 함수 안쪽에서 요소 수집을 할 수 있게 하느냐의 차이... 뭐가 이점이 있는 건가?

// 변수로도 쓰고 싶고 문자로도 쓰고 싶어. -> 노드를 채크하는 과정이 필요해. 어떤 타입인지 출력하기
// 헷갈린다면 값을 node에 넣지 않고 새로운 변수를 선언해서 진행할 수도 있음.


// 태그는 객체임.

// 클래스 이름을 직접 넣어도, 표현식?을 넣어도 모두 기능하게
function next3(node) {
  console.log(typeof node);
  if(typeof node === 'string'){
  node = document.querySelector(node);
  }

  do {
    node = node.nextSibling;
  } while (node.nodeType !== 1);
  return node;

}

let second3 = next3('.first2');
second3 = next3(first);






function prev2(node) {
    if(typeof node === 'string'){
        node = document.querySelector(node);
    }
  do {
    node = node.previousSibling;
  } while (node.nodeType !== 1);
  return node;
}

// 둘 다 가능!
let previous = prev2('.second');
let previous2 =prev2(second2);

console.clear

let value1 = func1(4, 10);
let value2 = func2(3, 7);

function func1(a, b) {
  return a - b;
}

const func2 = function (a, b) {
  return a * b;
};
