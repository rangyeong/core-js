/* ----------------------------- */
/* Classes                       */
/* ----------------------------- */

// 앞서 함수로 정의한 내용들을 class문법을 사용해 재정의 합니다.

// 1. 객체의 상속
// 2. 생성자 함수의 상속
// 3. 생성자 함수 모던 방식 class

class Animal {

    constructor(name){
        this.name = name;
        this.legs = 4;
        this.tail = true;
        this.stomach = [];

    }

    get eat(){
        return this.stomach
    }

    set eat(food){
        this.stomach.push(food)
    }
}

const a = new Animal('포동이');
// console.log(a) -> constructor: class Animal
// console.dir(Animal) -> class Animal

// class의 장점: 코드가 간결. 오류를 다 알려줌. 

// 부모의 능력을 쓰고 싶으면 super()을 사용해 줘야함.
class Tiger extends Animal {
    
    constructor(name){
        //  * .call() 처럼 Tiger의 this를 Animal에 넘겨서 사용할 수 있도록 프로토타입 체이닝
        super(name)
        this.pattern = '호랑이 무늬'

    }

    static bark(sound){
        return sound + '🐯'
    }

    hunt(target){
        return `${target}에게 조용히 접근한다.`
    }
}

const 호랑이 = new Tiger('호돌이')


 render(){ 
    this.list.insertAdjacentHTML('beforeend',this.#createList());
    this.target.value = ''
  }
  
  addTodoData(){
    this.todoList = this.data;
  }

  registerEvent(){
    this.registerButton.addEventListener('click',()=>{
      this.addTodoData()
      this.render()
    });
  }

}




const button = new Todo({
  input:'#todo',
  button:'.register',
  renderPlace:'.todoList'
})



const button2 = new Todo({
  input:'#todo2',
  button:'.register2',
  renderPlace:'.todoList2'
})