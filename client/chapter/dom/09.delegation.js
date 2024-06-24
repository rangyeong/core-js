/* ------------------------ */
/* Event delegation         */
/* ------------------------ */

const nav = getNode('nav')

/* 클래스를 사용한 위임 ---------------- */

/* 속성을 사용한 위임 ------------------ */

/* 노드를 사용한 위임 ------------------ */

function handleClick(e){
    const target = e.target;
    const name = target.dataset.name;
    const li = target.closest('li');
    
    if(!li) return;

    /*  클래스를 사용한 위임 ------------------------------ */

   /*  if (target.matches('about')) { //* matches찾아보깅
      console.log('about!!!!!');
    }
    

    if (target.classList.contains('home')) console.log('home!!!!!');
    
    

    if (target.classList.contains('contact'))console.log('contact!!!!!');
     */

    /*  속성을 위한 위임x ------------------------------- */ //-> 범쌤은 이걸 주로 쓰신댜

    // console.log(target.getAttribute('data-name'))
    // console.log(target.dataset.name)
    // console.log(attr(target,'data-name'))
/* 
    if(name === 'about') console.log('about!!')
    if(name === 'home') console.log('home!!')
    if(name === 'contact') console.log('contact!!')

 */
/* 노드를 사용한 위임 ------------------------------ */

// *정확히 li만 조회

if(li.textContent.includes('ABOUT')) console.log('about!!');
if(li.textContent.includes('HOME')) console.log('home!!');
if(li.textContent.includes('CONTACT')) console.log('contact!!');

    
}

nav.addEventListener('click',handleClick)


/* 
#버블링 중단
event.stopPropagation()
 */