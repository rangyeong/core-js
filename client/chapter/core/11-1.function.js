/* ---------------------------------------------------------------------- */
/* Functions → Declaration                                                */
/* ---------------------------------------------------------------------- */
/* 
console.log('총 합 = ', 10000 + 8900 + 1360 + 2100);
console.log('총 합 = ', 21500 + 3200 + 9800 + 4700);
console.log('총 합 = ', 3800 + 15200 - 500 + 80200);
console.log('총 합 = ', 560 + 5000 + 27100 + 10200);
console.log('총 합 = ', 9000 - 2500 + 5000 + 11900);
 */


function getRandomValue(){
    return Math.random() > 0.5 ? 1 : 0;
}

//default parameter
// 함수 선언
                // 매개변수 = parameter = 인자
function calcPrice(priceA, priceB, priceC = getRandomValue()){
    
    // if(priceC === undefined) priceC = 0;
    // if(!priceC) priceC = 0;
    // priceC = priceC || 0;
    // priceC ||= 0;

    // priceC = priceC ?? 0;
    // priceC ??= 0;

    console.log(priceA + priceB + priceC);
}

// 함수 호출
                         // 인수 / argument
const result = calcPrice(1000, 3000);


// 함수 값 반환

// 매개 변수

// 매개 변수 (parameter) vs. 전달 인수 (argument)

// 외부(전역 포함), 지역 변수

// 매개 변수 기본 값

/*  */
// 좋은 함수 작성 여건

// 1. 함수의 이름을 잘 지어야 한다. (동사) / 가독성 => 읽었을 때 바로 기능을 할 수 있다.
// 2. 전역의 오염을 막는다.
// 3. 하나의 기능만을 수행해야 한다.
// 4. 재사용성이 좋아야 한다.
/*  */




/* 다음 함수를 작성해봅니다. -------------------------------------------------- */

// rem(pxValue: number|string, base: number):string;

/* 
 function rem (value, base){
    if(base === undefined){
        // return (value * 1 / 16) + 'rem'
        return parseInt(value) / 16 + 'rem'
    }
    // return (value * 1) / (base * 1) + 'rem'
    return parseInt(value) / parseInt(base) + 'rem'
}
 */
                        // 매개변수가 안 들어왔을 때 defualt 값 지정
function rem(pxValue = 0, base = 16){

    if(!pxValue){
        throw new Error('rem 함수의 첫 번째 인수는 필수 입력 값 입니다.')
    }
    if(typeof pxValue === 'string'){
        pxValue = parseInt(pxValue, 10)
    }
    if(typeof base === 'string'){
        base = parseInt(base, 10);
    }

    return pxValue / base + 'rem';
}
/* 
console.log(rem(25));
console.log(rem('25px'));
console.log(rem('30px', 10));
 */

// TDD(Test Driven Development)맛보기
console.assert(rem(20) === '1.25rem'); // 맞는 값은 출력 x
// console.assert(rem(20) === '1.252rem'); // 함수의 반환 값과 할당값이 다르면 콘솔창에 에러 발생


// css(node: string, prop: string, value: number|strung) : string;

// 점 표기법    => 변수로 사용 x
// 대괄호 표기법 => 변수로 사용 o

/* 
function setStyle(node, property, color){
    let element = document[querySelector('node')]
    node.style[property] = color
}
setStyle('.first', 'color', 'blue');
console.log(setStyle('.first', 'color', 'blue'))
 */

const first = document.querySelector('.first');

function setStyle(node, prop, value){
    if(typeof node === 'string') node = document.querySelector(node);
    if(typeof prop !== 'string') throw new Error('setStyle 함수의 두 번째 인수는 문자 타입 이어야 합니다.')
    if(!value) throw new Error ('setStyle 함수늬 세 번째 인수는 필수값 입니다.');
    
    node.style[prop] = value
}
setStyle('.first', 'color', 'blue');


function getStyle(node, prop){
    if(typeof node === 'string') node = document.querySelector(node);
    if(typeof prop !== 'string') throw new Error('getStyle 함수의 두 번째 인수는 문자 타입 이어야 합니다.');

    return getComputedStyle(node)[prop]
}

const h1FontSize = getStyle('.first', 'fontSize') // 32px

/* 

1. function name
2. argument (함수 실행부)
3. parameter
4. return value
5. validation
6. Test Driven Development (TDD)


*/


function css(node, prop, value){
    if(!value){
        // getter
        return getStyle(node, prop)
    } else{
        // setter
        setStyle(node, prop, value)
    }
    return !value ? getStyle(node, prop) : setStyle(node, prop, value);

    // condition ? value1 : value2
}

// const css2 = (node, prop, value) => !value ? getStyle(node,prop) : setStype(node, prop, value);
css('.first', 'color', 'red') // setter
css('.first', 'color') // getter












// node의 값을 'h1'으로 받았을 경우

// node가 없거나 document.ELEMENT_NODE가 아닐 경우

// prop의 값이 string이 아닐 경우

// prop의 값이 sytle 속성이 아닐 경우

// value의 값이 number가 아닌 경우

// 클릭 이벤트를 이용한 h1의 폰트 크기를 증가시키는 함수와 감소시키는 함수 만들기

// 1. h1,plus,minus 요소를 변수로 지정한다.
// 2. h1의 폰트 사이즈를 가져온다.
// 3. 증가함수와 감소함수를 만든다.
// 4. 클릭 이벤트와 바인딩한다.
