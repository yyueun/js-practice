// const loginForm = document.getElementById("login-form")
const loginInput = document.querySelector("#login-form input");
const loginButton = document.querySelector("#login-form button");
///loginForm은 html element
const greeting = document.querySelector("#greeting");

const link = document.querySelector("a");
//click event 를 로그인 버튼과 연결하기
//함수 생성 
function onLoginBtnClick(){
    const username = loginInput.value;
    if(username ===""){
        alert("Please write your name");
    } else if(username.length > 15) {
        alert("Your name is too long.")
    }
}

//이벤트 연결
loginButton.addEventListener("click", onLoginBtnClick)

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username"

function onLoginSubmit(event){
    event.preventDefault(); //어떤 event의 기본 행동이 발생되지 않게함- 주체: 브라우저
    loginForm.classList.add(HIDDEN_CLASSNAME) //hidden classname으ㄹ 더해서 form숨김
    const username = loginInput.value; //유저의 이름 변수로 저장 그  이름을 h1에 넣음
    localStorage.setItem(USERNAME_KEY,username);
    //greeting.innerText = `Hello" ${username}`; //h1에 텍스트 추가, "Hello"+username과 같은 표현
    //greeting.classList.remove(HIDDEN_CLASSNAME) //hidden class 제거
    paintGreetings(); //위의 두줄을 함수로 바꿈
    
}

//화면에 텍스트 출력 
function paintGreetings(){
    const username = localStorage.getItem(USERNAME_KEY);
    greeting.innerText = `Hello ${username}`; //텍스트 삽입
    greeting.classList.remove(HIDDEN_CLASSNAME);
}

//링크 클릭 이벤트
function handleLinkClick(event){
    event.preventDefalut();  //기본 동작 막음
    console.dir(event);
    alert("Clicked!")
}

//submit event 추가
loginForm.addEventListener("submit", onLoginSubmit);
//링크 클릭 시  함수 실행하도록 함 -- 브우가 event실행하게 만들어줌
link.addEventListener("click", handleLinkClick);



const savedUsername = localStorage.getItem(USERNAME_KEY);

if(savedUsername === null){ //localstorage에 유저 정보 없을때
    loginForm.classList.remove(HIDDEN_CLASSNAME) //form의 hidden class명 지움
    loginForm.addEventListener("submit",onLoginSubmit);
    //show the form
} else {
    // show the greetings
    paintGreetings(savedUsername);

    

}