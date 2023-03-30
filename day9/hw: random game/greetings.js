
const rangeForm = document.querySelector("#rangeform");
const rangeInput = document.querySelector(".rangeinput");
const chooseForm = document.querySelector("#chooseform");
const chooseInput = document.querySelector(".chooseinput");
const paintRes = document.querySelector(".paintResult");


//play버튼 누면 머신선택 숫자 랜덤으로 나와야함

//rangeInput값을 최대 값으로 지정
function handleRangeInput(){
    const rangeNum = rangeInput.value; // 
    chooseInput.setAttribute("max",rangeNum) //rangeNum을 chooseinput의 max값으로 속성 추가
    
}
//이벤트 걸어주기
rangeForm.addEventListener("input",handleRangeInput);


//paint함수 생성 - 결과 비교 
function paintResult(chooseNum,randomNum){
    if(parseInt(chooseNum)> randomNum){
        paintRes.innerText = `You chose ${chooseNum}, the machine chose: ${randomNum} \n You Win!`

    } else if(parseInt(chooseNum) < randomNum){
        paintRes.innerText = `You chose ${chooseNum}, the machine chose: ${randomNum} \n You lost!`

    }else if(parseInt(chooseNum) === randomNum){
        paintRes.innerText = `You chose ${chooseNum}, the machine chose: ${randomNum} \n Drow!`

    }
}


//submit
function handleSubmit(event){
    event.preventDefault();
    console.log(event);
    const rangeNum = rangeInput.value;
    const chooseNum = chooseInput.value;
    const randomNum = Math.floor(Math.random() * rangeNum+1); // 0~ rangeNum+1 범위의 정수 난수 생성
    //예시 : Math.floor(Math.random()*100) 0~99범위의 정수 난수 생성
    paintResult(chooseNum,randomNum);
    
}

chooseForm.addEventListener("submit",handleSubmit);


