/* ---------------- */
/* Condition        */
/* ---------------- */

// const result = prompt('자바스크립트의 "공식" 이름은 무엇일까요?');

//  (result = 'ECMAScript') ? alert('정답입니다!') : alert('x');

// 그 영화 봤니?
//     ↓
// Yes | No
//     | 영화 볼거니?
//           ↓
//       Yes | No

// 영화 봤니?
/* 
function watchingMovie(){
    let didWatchMovie = prompt('영화 봤니?');

    if ((didWatchMovie = 'yes')) {
      console.log('재밌었겠다');
    } else {
      let a = prompt('그럼 볼거니?');
    }

}
 */

// 영화 볼거니?
// let goingToWatchMovie;

// if 문(statement)

// else 절(caluse)

// else if 복수 조건 처리

// 조건부 연산자

let didWatchMovie = 'no';
let goingToWatchMovie = 'yes';

// let answer = confirm("이 영화 봤어?");

const answer=goingToWatchMovie 
? console.log('굿')
: console.log('agressive');

// 멀티 조건부 연산자 식
console.clear()

function render(node,isActive){

    let template = `
    <div>${isActive ? '안녕' : '잘가'}</div>
    `
    node.insertAdjacentHTML('beforeend', template);
}


