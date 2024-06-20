/* --------------------------------- */
/* DOM traversal                     */
/* --------------------------------- */

/* 모든 노드에서 사용 */
// - parentNode
// - childNodes
// - firstChild
// - lastChild
// - previousSibling
// - nextSibling

/* 요소 노드에서만 사용 가능 */
// - parentElement
// - children  // -> 유사배열이 반환돼서 반복을 돌릴 수 있다.
// - firstElementChild
// - lastElementChild
// - previousElementSibling
// - nextElementSibling

/* 문서 대상 찾기 */
// - getElementById
// - getElementsByTagName
// - getElementsByClassName
// - querySelector
// - querySelectorAll
// - closest

// -> 여기까지 실습안했으니까 복습하면서 메서드 익히기...🥺




getNode('.list')  // [li,li]

// #1. id가 visual-section인 section 태그 요소
const visual = document.querySelector('#visual-section')
// const visual = document.getElementById('#visual-section')


// #2. class가 list인 ul 태그 요소
/* 
! 리스트로 반환돼서 안됨.
// const list = document.querySelectorAll('.list')
// const list = document.getElementsByClassName('.list')
 */
//           ⬇️ 범위 범주를 선택하는 컨택스트 영역
const list = document.querySelector('.list')
//    ⬆️list는 ul태그이자 객체

// #3. list 요소 안에 about li 태그 요소                       // 따옴표 안에 css선택자를 넣어줌.
// const about = document.querySelector('.list > li:nth-child(2)')
const about = list.querySelector(
  'li:nth-child(2)'
)

// 3-1. list 요소 안에 about 텍스트를 가진 li 태그 요소
//list.children // forEach가 없음
// const aboutLi = [...list.children].find((li) => {
//   return li.textContent === 'about';
// });

const aboutLi = [...list.children].find((li) => li.textContent === 'about')



// #4. name 속성이 search-box인 form 태그 요소
const form = document.querySelector('form[name="search-box"]');

// #5. form 요소 안에 있는 모든 자식 요소 
// const children = form.children // -> htmlList가 반환. Symbol(Symbol.iterator) 有 
const children = form.querySelectorAll('*')

// #6. form 요소 안에 있는 input 태그 요소 
// const input = form.lastElementChild;
const input = children[children.length -1]; // children배열에서 마지막 요소 가져오기(index는 0부터 시작하니까 -1을 해야 마지막 인덱스를 가져올 수 있음.)



/* 문서 대상 확인 */
// - matches
// - contains
