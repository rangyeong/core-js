/* -------------------------- */
/* Optional Chaining          */
/* -------------------------- */

const portableFan = {
  maker: 'fromB',
  brand: 'FD221',
  type: 'neckband',
  photo: {
    static: 'https://bit.ly/3OS50UD',
    animate: 'https://bit.ly/3P8646q',
  },
  getFullName() {
    return `${this.brand}, ${this.maker}`;
  },
};

// 아래 코드는 문제가 있어 런타임 중 오류가 발생합니다.
// console.log(portableFan.photos.animate);

// * 오류를 발생시키지 않으려면 아래와 같이 작성해야 합니다.
/* 
if ('photos' in portableFan) {
  if ('animate' in portableFan.photos) {
    console.log(portableFan.photos.animate);
  }
}
 */

// * 위 구문을 논리곱 연산자를 사용한 방식으로 변경해봅니다.
// portableFan && portableFan.photos && portableFan.photo.animate

// * 위 구문을 옵셔널 체이닝을 사용한 구문으로 변경해봅니다.
// portableFan.photos?.animate;

// 메서드 사용 시, 옵셔널 체이닝을 사용해봅니다.

const fullNameHas = portableFan.getFullName?.();
const fullNameNull = FormData.getFullName?.();

console.log(fullNameHas); // FD221, fromB
console.log(fullNameNull); // undefined;

// 객체의 프로퍼티 접근 시, 옵셔널 체이닝을 사용해봅니다.


// sync(동기) async(비동기) web

console.log(1)
console.log(2)
setTimeout(function timeout(){
    console.log(3)
},5000)

console.log(4);
console.log(5);

const button = document.querySelector('.my-button');

function fibonacci (n){
    if(n<=0) return 0;
    if(n<=2) return 1;
    return fibonacci(n-1) + fibonacci(n-2)
}

// fibonacci(40)



// setTimeout는 web API 이면서 window의 객체임.
const id = setTimeout(()=>{
    const template = /* html */`
        <button tyep="button" class="my-button">my-button</button>
    `

    document.body.insertAdjacentHTML('beforeend', template)
},3000)

// clearTimeout(id)
// -> id를 출력해보면 해당 타이머 함수의 고유 id 값이 숫자형으로 나옴. clearTimeout의 인수로 이 숫자를 넣어줘도 됨.


button?.addEventListener('click', ()=>{
    console.log('clicked~')
})

// 연산 오래걸리는 작엄

// setInterval() 일정시간 동안 지속적으로 함수를 반복 호출
/* 
let count=0;

let id2 = setInterval(()=>{
    // console.log(++count);
    count += 1;

    document.querySelector('.first').style.transform = `translateY(${count}px) rotate(${count}deg)`

    if(count >= 500){
    clearInterval(id2);
}
},10)

// clearInterval(id2)
 */
let counter = 0;

 function animation(){
    console.log(++counter);

    const id3 = requestAnimationFrame(animation);


    if (counter >= 500) {
      cancelAnimationFrame(id3);
    }
}

animation();