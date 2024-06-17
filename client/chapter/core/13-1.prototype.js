/* ----------------------------- */
/* Prototype and inheritance     */
/* ----------------------------- */

// 프로토타입 상속(prototypal inheritance)을 사용하여 객체를 확장합니다.

// 여러가지 동물들을 키우는 게임 : 고양이,강아지,호랑이,사자,늑대,여우

const animal = {
    legs:4,
    tail:true,
    stomach:[],
    set eat(food){ //getter

        this.stomach.push(food);
    },
    get eat(){ //setter

        return this.stomach
    },
    // animal.Prototype = {
    //     eats: true
    // }
}

console.dir(animal) // Object [[Prototype]]:Object 가 1개 존재(window의 object.열어보면 object의 메서드 들어있음)

function 새로운동물의속성부여(person){
    this.owner = person;
}
// console.dir(새로운동물의속성부여) // [[Prototype]]{} -> constructor: ƒ 새로운동물의속성부여(person)
/* 
새로운동물의속성부여.prototype = animal; 
-> prototype 메서드 생성해서 animal참조(값으론 animal객체가 들어있음)
console.dir(새로운동물의속성부여) 
//  [[Prototype]]: ƒ () 
// -> 프로토타입이 함수라는 뜻(원래 자기자신을 가지지만 임의로 프로토타입을 바꿨기 때문에 자기자신을 가지지는 않지만 태어나길 함수로 태어났음. 하위 뎁스를 열어보면 상속값으로 넣어준 객체 때문에 [[Prototype]]:Object가 들어있음.
 */
const tiger = {
    pattern: '호랑이 무늬',
    hunt(target){
        this.prey = target;
        return `${target}에게 조용히 접근한다.`
    },
    __proto__: animal 
}
console.log(tiger) 
// proto를 바꾸기 전엔 [[prototype]]:object를 열어보면 object의 메서드 출력
// 바꾼 후는 [[prototype]]:object를 열어보면 animal의 속성이 들어감.
// -> [[prototype]]:object 가 2개 존재

// tiger을 출력하면 1depth에 eat이 보이는데 animal이 가지고 있는 eat 속성은 getter와 setter을 가지고 있기 때문에 중요도가 커서 상위 노출됨.

const 백두산호랑이 = {
    color:'white',
    name: '백돌이',
    __proto__:tiger,
}
// -> [[prototype]]:object 가 3개 존재 (계속 쌓인다..!)

// animal.setEat('고기');


// 생성자 함수

function Animal(){
    this.legs = 4;
    this.tail = true;
    this.stomach = [];
    this.getEat = function(){
        return this.stomach
    }
    this.setEat = function(food){
        this.stomach.push(food)
    }
    // 메서드가 아니기 때문에 get과 set을 따로 구분지을 수 없음..?
}

const a1 = new Animal();
// a1.constructor -> Animal함수 출력
// a1.constructor == Animal

function Tiger(name){
  Animal.call(this); // Animal의 this를 Tiger의 this로 설정해줌.(함수의 this를 현재자리의 this로 설정해줌)
//   Tiger의 this는 금강산 호랑이(생성자 함수를 통해 만든 인스턴이잉?
  this.name = name;
  this.pattern = '호랑이 무늬';
  this.hunt = function (target) {
    return ` ${target}에게 조용히 접근한다.`;
  };
  /* 
    //  this.__proto__ = new Animal; 
    // -> 이렇게 안에서 해줘도 됨..!
    // ? this.__proto__ = Animal; 왜 이렇게 안되지...
    // ! 메소드를 사용하려면 객체를 넣어줘야함 함수가 아니라 Animal은 함수니까 그 자체를 넣는다고 해서 메서드를 상속시켜줄 수는 없음. 그래서 생성자 함수로 넣어줘야하고 이를 변수(a1)에 담아서 값을 할당할 수도 있음
     */
}
// Tiger.prototype = a1;
// Tiger.prototype = new Animal;

const 금강산호랑이 = new Tiger('금순이');


/* 함수의 메서드 (함수의 능력) */
// call -> this를 동적으로 변경할 수 있는거
// apply -> call처럼 쓰는데 인수를 배열로 묶어주는 차이점
// bind -> 인수를 전달한 함수가 튀어나옴. 함수가 실행되지는 않음. 


function sum(a,b,c){
    console.log(this);
    return a + b + c
}

sum()// 함수를 실행할 때 인수를 전달해서 각 위치에 맞는 매개변수에 전달이 됨.
// 이 상태의 this는 window

sum.call(10, 1, 1, 1)
//      this
// sum의 함수를 대신 불러서 호출 해주겠다. 원하는 걸 넣을 수 있음. 
// this는 정말 아무거나 넣을 수 있는 건가..?오 뭐든지 전달할 수 있대. 자기 자신을 넣어서 재귀호출도 가능

sum.apply(10, [1, 1, 1]);
// 배열로 선언된 변수를 바로 넣어줄 수 있는 차이점.(call로 쓰면 전개연산자로 풀어서 넣어줘야함)
// -> 위 두 함수의 실행 값은 똑같이 나옴

const b = sum.bind('hello',1,2, 3)
// this를 전달함 인수를 개별로 받음 => 함수 실행 안함.
// b() 을 써줘야 함수가 실행이 됨.

// first.addEventListener('click',b)

sum.call(this) // -> 여기서 this는 window이고 sum의 this로 윈도우를 전달해주는 것임. 