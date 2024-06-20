/* --------------------- */
/* Event Handling        */
/* --------------------- */

/* 이벤트 핸들링 3가지 방법 --------------------------------------------------- */

// 1. HTML 속성 : onclick="handler()"

function handler(){
    console.log('클릭 이벤트 발생!')
}

// 2. DOM 프로퍼티 : element.onclick = handler


const first = getNode('.first');

// first.onclick = handler;


const second = getNode('.second');

// 3. 메서드 : element.addEventListener(event, handler[, phase])

function handleClick(event){
  //                 ⬇️이벤트 객체가 제공하는 정보(ex. length)
  console.log(event.type); // click
  console.log(event.target); // <span class="first hello hi bye" sayhi="hola" data-value="10">hello</span>
  console.log(event.offsetX); // 46
}

first.addEventListener('click',handleClick);
// first.addEventListener('mouseDown',handleClick); // 마우스 때면 발생?
// first.addEventListener('mouseUp',handleClick); // 마우스 때면 발생?

/* 

// #second 를 클릭 했을 때 제거해보자!
second.addEventListener('click',()=>{

    first.removeEventListener('click', handleClick);

})

 */
/* 
const firstEventRemove = bindEvent('.first', 'click', handleClick);
//                                ⬇️클로저를 이용해서 함수가 태어난 환경을 기억하고 이를 이용하여 값을 기억하고 메소드의 인자로 쓸 수 있는 것
second.addEventListener('click', firstEventRemove);




function bindEvent(node,type,handler){
    if(isString(node)) node = getNode(node)
    // node.addEventListener(type,handler);

    return () => node.removeEventListener(type,handler)
}
 */

/* 이벤트 추가/제거 --------------------------------------------------------- */

// - addEventListener
// - removeEventListener


const ground = getNode('.ground');
const ball = getNode('#ball')

function handleClickBall({ offsetX: xPos, offsetY: yPos }) {
  // const {offsetX:x, offsetY:y} = e;
  const w = ball.offsetWidth;
  const h = ball.offsetHeight;

  // let x = e.offsetX;
  // let y = e.offsetY;

  ball.style.transform = `translate(${xPos - w / 2}px,${yPos - h / 2}px)`;
}


// ground.addEventListener('click',handleClickBall)


function handleMove({offsetX:xPos, offsetY:yPos}){
    // console.log(xPos, yPos)

    let template = /* html */`
    <div class="emotion" style="top:${yPos - 16}px; left:${xPos - 16}px;">🌸</div>
    `
    insertLast(ground,template);
}

// let timeout; // -> 함수 안에 있으면 값이 초기화 되니까 전역을 선언해야 하거나 클로저로 만들어줘야함.

function deboundce(callback,limit){

    let timeout;
    
    return function (e){
    // *        2. 타이머를 지웠음(web API에 있는 동안 함수가 반복 실행되면 밑의 명령이 취소되고 마지막 함수에서만 실행되게)
  clearTimeout(timeout);
  // * 1. setTimeout은 id가 튀어나옴. 이걸 변수로 받아서
  timeout = setTimeout(() => {
    callback.call(this,e);
  }, limit);}
}
/* 
ground.addEventListener('mousemove', deboundce((e)=>{
    console.log(e)
},500));

 */
ground.addEventListener('mousemove', deboundce(function(e){
    console.log(this)
    console.log(e)
},500));


let waiting = false;

function throttle(callback,limit = 500){

    return function(...argsArr){
        if(!waiting){
        callback.apply(this, argsArr);
        waiting = true

        setTimeout(()=>{
            waiting = false;
        },limit)
    }}
    
}

ground.addEventListener('mousemove', throttle(handleMove));


//                         mousemove는 마우스를 움질 일 때 마다 이벤트 실행
// ground.addEventListener('mousemove', handleMove)


//  throttle(수도꼭지), debounce(공 튀김 방지)