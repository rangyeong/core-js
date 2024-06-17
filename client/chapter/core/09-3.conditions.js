/* ---------------- */
/* Switch           */
/* ---------------- */

let a = 10;

switch (a) {
  case 10:
    console.log('10입니다!');
    break;
  case 11:
    console.log('11입니다!');
    break;
  case 12:
    console.log('12입니다!');
    break;
  default:
    console.log('10, 11, 12가 없습니다.');
}

const MORNING = '아침',
  LUNCH = '점심',
  DINNER = '저녁',
  NIGHT = '밤',
  LATE_NIGHT = '심야',
  DAWN = '새벽';

let thisTime = MORNING;

/* 다양한 상황에 맞게 처리 --------------------------------------------------- */

// 조건 유형(case): '아침'
// '뉴스 기사 글을 읽는다.'

// 조건 유형(case): '점심'
// '자주 가는 식당에 가서 식사를 한다.'

// 조건 유형(case): '저녁'
// '동네 한바퀴를 조깅한다.'

// 조건 유형(case): '밤'
// '친구에게 전화를 걸어 수다를 떤다.'

// 조건 유형(case): '심야'
// 조건 유형(case): '새벽'
// '한밤 중이거나, 새벽이니 아마도 꿈나라에 있을 것이다.'

switch (thisTime) {
  case MORNING:
    console.log('뉴스 기사 글을 읽는다.');
    break;
  case LUNCH:
    console.log('자주 가는 식당에 가서 식사를 한다.');
    break;
  case DINNER:
    console.log('동네 한바퀴를 조깅한다.');
    break;
  case NIGHT:
    console.log('친구에게 전화를 걸어 수다를 떤다.');
    break;
  case LATE_NIGHT:
    console.log('한밤 중이거나, 새벽이니 아마도 꿈나라에 있을 것이다.');
    break;
  case DAWN:
    console.log('한밤 중이거나, 새벽이니 아마도 꿈나라에 있을 것이다.');
    break;
  default:
    console.log('제시된 시간대를 입력해주세요.');
}

/* switch문 → if문 변환 --------------------------------------------------- */

if (thisTime === 'MORNING') {
  console.log('뉴스 기사 글을 읽는다.');
} else if (thisTime === 'LUNCH') {
  console.log('자주 가는 식당에 가서 식사를 한다.');
} else if (thisTime === 'DINNER') {
  console.log('동네 한바퀴를 조깅한다.');
} else if (thisTime === 'NIGHT') {
  console.log('친구에게 전화를 걸어 수다를 떤다.');
} else {
  console.log('제시된 시간대를 입력해주세요.');
}

/* switch vs. if -------------------------------------------------------- */

/*let  inputNum = +prompt('0 ~ 6 사이의 숫자를 입력해주세요');

switch (inputNum) {
  case 0:    console.log('일');    break;
  case 1:    console.log('월');    break;
  case 2:    console.log('화');    break;
  case 3:    console.log('수');    break;
  case 4:    console.log('목');    break;
  case 5:    console.log('금');    break;
  case 6:    console.log('토');    break;
  default:    console.log('0부터 6사이의 숫자를 넣어주세요!');
}

 */
/*let  inputNum = prompt('0 ~ 6 사이의 숫자를 입력해주세요');

switch (+inputNum) {
  case 0:    console.log('일');    break;
  case 1:    console.log('월');    break;
  case 2:    console.log('화');    break;
  case 3:    console.log('수');    break;
  case 4:    console.log('목');    break;
  case 5:    console.log('금');    break;
  case 6:    console.log('토');    break;
  default:    console.log('0부터 6사이의 숫자를 넣어주세요!');
}
 */

function getRandom(n) {
  let randomNum = Math.floor(Math.random() * n);
  return randomNum;
}

function getDay(num) {
  let randomNum = getRandom(num);
  //   console.log(randomNum);

  switch (randomNum) {
    case 0:
      console.log('일');
      return '일';
    case 1:
      console.log('월');
      return '월';
    case 2:
      console.log('화');
      return '화';
    case 3:
      console.log('수');
      return '수';
    case 4:
      console.log('목');
      return '목';
    case 5:
      console.log('금');
      return '금';
    case 6:
      console.log('토');
      return '토';
    default:
      console.log('0부터 6사이의 숫자를 넣어주세요!');
  }
}

function weekend() {
  const today = getDay(7);
  /* 
  if (today === '일' || today === '토') {
    return '주말';
  } else {
    return '평일';
  } */
/* 
  const day = today.includes('토') ? '주말' : today.includes('일') ? '주말' : '평일';
  return day; */
return today.includes('토')
  ? '주말'
  : today.includes('일')
    ? '주말'
    : '평일';
}
