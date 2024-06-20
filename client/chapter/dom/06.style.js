/* -------------------- */
/* DOM Styling          */
/* -------------------- */

/* 클래스를 관리할 수 있게 해주는 DOM 프로퍼티 ------------------------------------ */

const first = getNode('.first');

// - className – 클래스 전체를 문자열 형태로 반환해주는 프로퍼티로 클래스 전체를 관리할 때 유용

console.log(first.className)

// - classList – 클래스 하나를 관리할 수 있게 해주는 메서드로 개별 클래스를 조작할 때 유용

first.classList.add('bea');
first.classList.remove('hello');
// first.classList.toggle('hello'); //Boolean
console.log(first.classList.contains('hello')); //Boolean



// first.className = '' // -> 전체 삭제
/* 
//#배열로 받기(rest parameter는 배열로 반환됨)
function addClass(node,...className){
// if(isString(node)) node = getNode(node)
    if(typeof node === 'string') node = document.querySelector(node);

    if (isArray(className)) {
      className.forEach((c) => node.classList.add(c));
      return; // className이 여러개 들어오면 여기까지하고 함수 멈춤
    }
      // 함수가 배열이 아니면. 즉, 요소가 1개 들어왔을 때 해당 인자가 문자가 아니면 오류 반환.
      // ! 조건문의 순서 중요
    if (typeof className !== 'string') { 
      throw new TypeError(
        'addClass 함수의 두 번째 인수는 문자 타입 이어야 합니다.'
      );
    }

    node.classList.add(className)
}

addClass('.ground',['a','b','c'])
addClass('.ground','a','b','c')
addClass('.ground','a,b,c')
addClass('.ground',{a:'one',b:'two'})


 */

// #문자형으로 받기
function addClass(node,className){
// if(isString(node)) node = getNode(node) //-> 밑에 풀어서 씀
    if(typeof node !== 'string'){
        throw new TypeError('addClass 함수의 두 번째 인수는 문자 타입 이어야 합니다.')
    }
    if(typeof node === 'string') node = document.querySelector(node);
    node.classList.add(className)
}
// addClass('.first','hello')


// # 클래스 값 지우기
function removeClass(node,className){

    if (typeof node !== 'string') {
      throw new TypeError(
        'removeClass 함수의 두 번째 인수는 문자 타입 이어야 합니다.'
      );
    }

    if(typeof node === 'string') node = document.querySelector(node);
        
    
    
    if (!className) {
      node.className = '';
      return;
    }
    
    node.classList.remove(className)

}

// removeClass('.first','hi'); // -> 특정 값만 지우기
// removeClass('.first',''); // -> 전체 지우기


function toggleClass(node,className){
  if(typeof node === 'string') node = document.querySelector(node)

  if(typeof className !== 'string'){
    throw new TypeError('toggleClass 함수의 두 번째 인수는 문자 타입 이어야 합니다.');
  }
  // * 원래 toggle메서드 처럼 불린값을 반환해주기 위함
  return node.classList.toggle(className);
}


toggleClass('.first','hello')


/* 스타일 변경 방법 --------------------------------------------------------- */

// ?div.style 은 객체이고 읽기 전용
// console.dir(first.style) // -> CSSStyleDeclaration
// console.dir(getComputedStyle(first)) // -> CSSStyleDeclaration

console.log(first.style.color); // -> 공백
console.log(first.style['color']); // -> 공백

console.log(getComputedStyle(first).color) // -> rgb(0, 0, 0)
console.log(getComputedStyle(first)['color']) // -> rgb(0, 0, 0)

// - style.cssText - "style" 속성 전체에 대응하므로 스타일 전체에 대한 문자열 저장

first.style.background = 'dodgerblue'

first.style.cssText = `
    color:white;
    padding:1rem;
    border:1px solid red;

`
// -> cssText로 쓰면 위의 값을 무시하고 덮어씌움


function getStyle(node,prop){
    if(isString(node)) node = getNode(node);

    if(!(prop in document.body.style)){
        throw new SyntaxError(
          'document.body.style에 해당 속성이 있는지 확인하고 없으면 SyntaxError를 발생시킵니다.'
        );
    }
    
    // if(!value)
    
    return getComputedStyle(node)[prop]
}
getStyle('.first','font-size')


/* 계산된 스타일 읽기 ------------------------------------------------------- */
//                               ⬇️ 가상요소
// - getComputedStyle(element, [pseudoElement]) `읽기 전용` //-> 스타일 정보가 들어 있는 객체가 반환


console.log(getComputedStyle(first)['font-size'])
