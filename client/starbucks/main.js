const aList = document.querySelectorAll('nav a');
/* 
const depthList = document.querySelectorAll('.depth');
const header = document.querySelector('#header')

const h = (t) => (t.style.height = 0);

depthList.forEach((item)=>{
    console.log(item)
})

depthList.forEach(console.log)
// -> 전달하는 값이 똑같으면 생략할 수 있다. 함수를 바로 쓰면 됨.
 */
/* 
aList.forEach((a) => {
  a.addEventListener('mouseenter', () => {
    const target = a.lastElementChild;

    depthList.forEach(h);
    target.style.height = '100px';
  })
})

header.addEventListener('mouseleave',()=> depthList.forEach(h))
 */
/* global gsap */
aList.forEach((a) => {

    const target = a.lastElementChild;

    const tl = gsap.timeline({paused:true}).to(target,{height:100,ease:'power3.inOut'})
    
  a.addEventListener('mouseenter', () => tl.play())
  a.addEventListener('mouseleave', () => tl.reverse())
})
