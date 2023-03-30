const clock = document.querySelector("h2#clock"); //id: clock

clock.innerText = "lalal"

//intervals
function getClock(){
    const date = new Date(); //objcet 생성
    const hours = String(date.getHours()).padStart(2,"0");
    const minutes = String(date.getMinutes()).padStart(2,"0");
    const seconds = String(date.getSeconds()).padStart(2,"0");
    clock.innerText =`${hours}:${minutes}:${seconds}`;
}

//setinterval 
getClock();
setInterval(getClock,1000) //실행할 함수, 초 ; 5000은 5초 ; ms단위


//Time out
//new Date()

//string을 문자 두 개로 채우기 - padStart()
//"1".padStart(2,"0") //문자열 길이를 2로 만들어달라. 길이가 2가 아니면 앞에 0추가
//"01"
//padEnd는 뒤에 추가하는 것  

//"hello".padStart(20,"x")
//xxxxxxxxxxxxxxxhello


