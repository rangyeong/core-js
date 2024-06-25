

/* 
function earth(){

    let water = true;
    let gravity = 10;

    function tiger(value){
        
        gravity = value;
        return water;
    }

    return tiger
}
 */
const ufo = earth()
// 외계인은 지구에 접근할 수 없으니 지구에 살던 호랑이를 통해서 자원(변수)과 지삭(값)을 갈취할 수 있음.

ufo(-10)
// 외계인과 호랑이는 일심동체가 되었고 ufo는 호랑이를 통해 지구의 정보를 바꿀 수 있다.


const ufo2 = earth();
// 여기서 다른 ufo가 지구에 접근한다면 다른 차원이 열려서 제 2의 지구에 접근하는 것. 각각의 지구 내부에 일어나는 일은 같지 않음.
/* 
function earth() {
  let water = true;
  let gravity = 10;

  return function (value) { // 지구의 정보를 빼오는 노예의 이름은 필요없으니 익명함수로 바꾸고 노예 자체를 반환(노예는 아무나 될 수 있다...)
    gravity = value;
    return water;
  }

}
 */
// 이름이 없는 함수는 화살표 함수로 변경 할 수 있음.
function earth() {
  let water = true;
  let gravity = 10;

  return (value) => {
    gravity = value;
    return [water, gravity]
  };
}


const button = document.querySelector('button');


function handleClick(){

  let isClicked = false;

  return function inner() {
    if (isClicked) {
      document.body.style.background = 'orange';
    } else {
      document.body.style.background = 'white';
    }
    isClicked = !isClicked;
  };

}

button.addEventListener('click', handleClick())
                                // 이건 함수를 실행하면 이너 함수의 본문이 나오니까 이렇게 쓴 것임.
/* 
const handleClick = (() => {
  let isClicked = false;

  return () => {
    if (isClicked) {
      document.body.style.background = 'orange';
    } else {
      document.body.style.background = 'white';
    }
    isClicked = !isClicked;
  };
})();


// button.addEventListener('click', handleClick())
                                        //이 괄호를 거슬러해야한대,,관례에 어긋남..!
 
// 즉시실행함수 IIFE 패턴으로 만들어서 함수가 호출되면 바로 실행이 되도록 만들기
button.addEventListener('click', handleClick);
 */


function useState(init){
    let value = init;

    function read(){
        return value;
    }

    function write(newValue) {
      value = newValue;
    }

    return[read, write];
}

// let getNumber = useState[0];
// let setNumber = useState[1];

// * 함수를 배열로 출력했으니 구조분해 할당
const [getNumber, setNumber] = useState(10)