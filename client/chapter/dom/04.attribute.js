/* ------------------------------------ */
/* HTML Attributes vs. DOM Properties   */
/* ------------------------------------ */

/* HTML 속성 ------------------------------------------------------------- */

// 브라우저는 HTML 태그를 해석해 DOM 객체를 만들 때 HTML 표준 속성을 인식하고,
// 이 표준 속성을 사용해 DOM 프로퍼티를 생성합니다. 표준 속성이 아닌 경우,
// 이에 매핑하는 DOM 프로퍼티가 생성되지 않습니다.
// HTML 속성 값은 항상 문자열입니다.

/* DOM 프로퍼티 ----------------------------------------------------------- */

// DOM 노드(DOM node)는 JavaScript 객체입니다.
// DOM 프로퍼티와 메서드는 일반 JavaScript 객체처럼 행동하므로 아래와 같은 특징을 보입니다.
// - 어떤 값이든 가질 수 있습니다.
// - 대·소문자를 구분하므로 `elem.nodeType`이 아닌, `elem.NoDeTyPe`는 동작하지 않습니다.
// - DOM 프로퍼티는 HTML 속성과 달리 값이 항상 문자열이 아닙니다.

/* DOM 프로퍼티 검토 ------------------------------------------------------- */

// - elementNode.hasAttribute(name) – 속성 존재 여부 확인

const first = getNode('.first');

console.log(first.hasAttribute('class'))
console.log(first.hasAttribute('id'))



// - elementNode.getAttribute(name) – 속성값을 가져옴
console.log(first.getAttribute('class'))
// console.log(first.getAttribute('class').split(' ')) // -> 가져온 속성 배열로 만들기

console.log(first.getAttribute('sayHi'));
console.log(first.getAttribute('data-value'));



// - elementNode.setAttribute(name, value) – 속성값을 변경함
first.setAttribute('id','tiger')
//                 1.속성   2.값
console.log(first.getAttribute('id'));

// - elementNode.removeAttribute(name) – 속성값을 지움
first.removeAttribute('id')
console.log(first.getAttribute('id')); // null
console.log(first.id) // 아무것도 안 뜨는 빈 줄
// -> 표준속성은 지워도 속성 자체가 없어지지 않음. 출력을 접근하면 공란(null)이 뜸.

// - elementNode.attributes – 열거 가능한(iterable) 속성 집합을 반환함
console.log(first.attributes)  // 요소가 가진 속성을 NamedNodeMap객체로 반환; // class="first hello hi bye"

console.log(first.attributes[Symbol.iterator]().next().value); // class="first hello hi bye"

let iterFirst = first.attributes[Symbol.iterator]();
console.log(iterFirst) // Array Iterator
console.log(iterFirst.next().value); // class="first hello hi bye"
console.log(iterFirst.next().value); // sayhi="hola"
console.log(iterFirst.next().value); // data-value="10"


/* 비표준 속성, 프로퍼티 설정 ------------------------------------------------- */

// data-* 속성은 커스텀 데이터를 안전하고 유효하게 전달해줍니다.
// data-* 속성을 사용하면 읽기 쉽고, 수정도 손쉽습니다.

// - elementNode.dataset

first.dataset.name = 'rangyeong' // first에 data-name="rangyeong" 속성이 생김

console.log(first.dataset) // DOMStringMap{value: '10', name: 'rangyeong'}
console.log(first.dataset.name); // rangyeong
console.log(first.dataset.value); // 10
console.log(first.getAttribute('data-name')); // rangyeong


first.removeAttribute('data-name');
// console.log(data-name); // data is not defined

/* 
function getAttr(node,prop){
    
    if(isString(node)){
        node = getNode(node)
    }

    if(!isString(prop)) throw new TypeError('getAttr 함수의 두 번째 인수는 문자')

        return node.getAttribute(prop);

}
getAttr('.first', 'sayHi')
 */


const second = getNode('.second');


/* 
function setAttr (node,prop,value){
    if(isString(node)) node = getNode(node)

    if (!isString(prop)) {throw new TypeError('setAttr 함수의 두 번째 인수는 문자');}

    if(value === ''){
        node.removeAttribute(prop)
        return;
    }

    if(!value) throw new ReferenceError('setAttr 함수의 세 변째 인수는 필수 입력값 입니다.')
        // ⬆️이 코드를 3번째 if 위에 넣으면 value에 true가 들어가므로 코드가 제대로 실행이 안됨.
    
     node.setAttribute(prop,value);
}
setAttr('.second','id','merong') // 이걸 콘솔창에 찍으면 undefined가 출력되는데 setter는 값을 변경해주지 반환해주지 않기 때문
 */

console.log(second.getAttribute('id'));

// 미니 숙제. 데이터셋으로 넣는다는게 퍼스트 데이터 셋 네임처럼 넣으라는 거 맞나요? 네 맞습니다. 그러면 이제 이거 잘라야 되겠죠. 이렇게 잘라가지고 얘만 가지고 어디다가 이제 넣어가지고 데이터 세트로 만들어 버립니다


/* 
function attr(node,prop,value){

    if(!value){
        return getAttr(node,prop)
    }else{
        return setAttr(node,prop,value)
    }
}
 */

/* 
const attr = (node, prop,value) => !value ? getAttr(node, prop) : setAttr(node, prop, value);

attr('.first','class') // getter
attr('.first','class','hahaha') // setter

 */