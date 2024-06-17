/* ------------ */
/* For Loop     */
/* ------------ */

// 2 ~ 10까지의 짝수 출력하기

for (let ii = 1; ii <= 10; ii++) {
  if (ii % 2 === 0) {
    console.log(ii);
  }
}
/* 
// for문은 이렇게 변환할 수 있음. while문으로 바뀌는 과정.
let ii = 1

for( ; ii <= 10 ; ){

    ii++
    if(ii%2 === 0){
        console.log(ii)
    }
}

 */
let ii = 0;
while (ii <= 10) {
  ii++;
  if (ii % 2 !== 0) continue;
  console.log(ii);
}

const frontEndDev = 'HTML CSS SVG JavaScript jQuery React Redux'.split(' ');

let i = 0;
let l = frontEndDev.length;

while (i < l) {
  //   console.log(frontEndDev[i]);
  i += 1;
}

// while 문 → for 문 (순환)
// - 실행 흐름
// - 순환 중단 또는 이어서 순환
//   - 조건이 맞을 경우, 이어서(continue) 순환
//   - 조건: SVG, jQuery는 출력하지 마세요.

// let smallArray = frontEndDev.toLowerCase.split(' ');

// 내 실습
for (let i = 0; i < l; i++) {
  if (i === 'SVG' || i === 'jQuery') continue;
  console.log(frontEndDev[i]);
}

// 범쌤 코드
for (let i = 0; i < l; i++) 
    {let value = frontEndDev[i];
    let lower = value.toLowerCase();

  if (lower.includes('svg') || lower.includes('jquery')) continue;
  console.log(frontEndDev[i]);}

  // -> 조건문에 쓸 단어들을 대소문자 상관없이 매치할 수 있게 함.
  // 조건에서 연산자가 아니라 메소드를 사용함.

//   - 조건이 맞을 경우, 순환 중단(break)
//   - 조건: JavaScript 까지만 출력하세요.

//   - 무한 루프 (브레이크)
//   - for 문 (역순환)



for(let i = 0; i < l; i++){

  console.log( frontEndDev.shift() );
}


/* 
for(let i = l, subject; subject = frontEndDev[--i];){
  console.log(subject);
}

 */