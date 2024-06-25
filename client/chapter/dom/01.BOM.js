/* ------------------------------ */
/* Browser Object Model           */
/* ------------------------------ */

/*
JavaScript가 작동하는 플랫폼은 호스트(host)라고 불립니다. 
호스트는 브라우저, 웹서버, 심지어는 커피 머신이 될 수도 있습니다. 

각 플랫폼은 해당 플랫폼에 특정되는 기능을 제공하는데, JavaScript 명세서에는 
이를 호스트 환경(host environment) 이라고 부릅니다.

호스트 환경은 JavaScript 코어에 더해 플랫폼에 특정되는 객체와 함수를 제공합니다. 
웹 브라우저는 웹 페이지를 제어하기 위한 수단을 제공하고, Node.js는 서버를 포함해 
애플리케이션 개발에 필요한 다양한 기능을 제공합니다.

브라우저 객체 모델(Browser Object Model, BOM)은 문서 이외의 모든 것을 
제어하기 위해 브라우저(호스트 환경)가 제공하는 추가 객체를 나타냅니다.
*/

/* Window 객체 ----------------------------------------------------------- */

const { alert, confirm, prompt, setTimeout, setInterval } = window; // 윈도우가 제공하는 메서드들을 가시적으로 보여주기 위한 코드

/* Location 객체 --------------------------------------------------------- */
// http://localhost:5500/index.html?type=listing&page=2#title

const { href, protocol, host, port, search, hash, replace, reload } = location;
location;

console.log(href) // 전체주소. 'location.href = 새주소' 로 주소를 변경할 수도 있음
console.log(protocol) // 통신규약. 프로토콜은 보안이 없다? 보안이 있는 세크리트??
console.log(host)
console.log(port)
console.log(search) // 검색을 했을 때 파라미터? 쿼리? 서치? 에 할당되는 변수. 이 부분을 보통 query string이라고 함.
console.log(hash); // -> 이 쿼리를 주소에 넣어서 공유하면 해당 부분 인덱스로 출력화면이 조정된 채로 출력됨.



                        // 값을 전달하는 메서드
const urlParams = new URLSearchParams(location.search);
        // 객체로 받아짐
                            
// for (const [key, value] of urlParams) { // urlParams는 이터러블 프로토콜을 따르는 이터러블 객체. object.entries 처럼 key와 value를 뽑아쓸 수 있음.
//   console.log(`${key}:${value}`);
// }

console.log(urlParams)
console.log(urlParams.get('type'));

/* Navigator 객체 -------------------------------------------------------- */

const { platform, userAgent, language, onLine, geolocation } = navigator;

console.log(navigator)
console.log(navigator.onLine)
// console.log(navigator.geolocation)


// callback -> promise -> async await



navigator.geolocation.getCurrentPosition((data)=>{
    if(data){

        const {latitude:lat, longitude:long} = data.coords

        // console.log(lat, long)
        
    } else {
        // console.error('위치 서비스 동의 하세요')
    }
})
// -> 유저들의 위치를 참고하여 만드는 서비스(당근 등등)
/* 
function getGeoLocation(data){
    navigator.geolocation.getCurrentPosition((data) => {
  if (data) {
    const { latitude: lat, longitude: long } = data.coords;

    console.log(`{lat : ${lat}, long : ${long}}`);
  } else {
    console.error('위치 서비스 동의 하세요');
  }
});

}
getGeoLocation()
 */
/* 
function getGeoLocation(data){
    navigator.geolocation.getCurrentPosition((data)=>{

        if(data){

        const { longitude: long, latitude: lat } = data.coords;
            // console.log(`{longitude : ${long}, latitude : ${lat}}`);

            const geo = {
                long,
                lat,
            }
            console.log(geo)
        } else {
            console.error('위치 동의 plz')
        }
    });
}

getGeoLocation()
 */     

                        // expo는 함수 본문이 들어있음.
function getGeoLocation(expo,e){
    navigator.geolocation.getCurrentPosition((data)=>{

        if(data){

        const { longitude: long, latitude: lat } = data.coords;
            // console.log(`{longitude : ${long}, latitude : ${lat}}`);

            const geo = {
                long,
                lat,
            }
            expo(geo)

        }
    },()=>{e = 'fail({message: 위치 정보를 찾을 수 없습니다.})'});
}
// getCurrentPosition의 매개변수1 = 위치 서비스 동의 받았을 때, 매개변수2 = 못 받았을 때 .

getGeoLocation(
  ({ lat, long }) => {
    console.log(`{lat : ${lat}, long : ${long}}`);
  },
  (e) => {
    console.log(e);
  }
) // 함수를 인수로 전달


/* 
// * 나중에 다시 다룸!
function getGeolocation(){
  
  return new Promise((resolve, reject) => {
      navigator.geolocation.getCurrentPosition((data)=>{
  
    if(data){
      const {latitude:lat,longitude:long} = data.coords;
      const geo = { lat, long };
      resolve(geo)
    }
    else{
      reject({message:'위치 서비스 동의 하세요'});
    }
    })
  })
}

getGeolocation()
.then(res => console.log(res))


 */






/* Screen 객체 ----------------------------------------------------------- */

const { width, height, availWidth, availHeight, orientation } = screen;
/* 
navigator.mediaDevices.getUserMedia({video:true})
.then((stream)=>{
    document.querySelector('#videoElement').srcObject = stream;
})
 */
/* History 객체 ---------------------------------------------------------- */

const { back, forward, go, length, pushState, replaceState } = history;
