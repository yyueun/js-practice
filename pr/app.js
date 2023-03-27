// const loginForm = document.getElementById("login-form")
const loginInput = document.querySelector("#login-form input");
const loginButton = document.querySelector("#login-form button");
///loginForm은 html element

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


function onLoginSubmit(event){
    event.preventDefalut(); //어떤 event의 기본 행동이 발생되지 않게함- 주체: 브라우저
    const username = loginInput.value;
    console.log(username);
}

//submit event 추가
loginForm.addEventListener("submit", onLoginSubmit);

