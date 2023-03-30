const clock = document.querySelector("h2#clock");

function christClock(){
    const christdate = new Date("2023-12-25");
    const today = new Date(); //현재날짜 
    const subdate = christdate - today;
    const day = Math.floor(subdate / (1000 * 60 * 60 * 24));
    const hours = Math.floor((subdate / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((subdate / (1000 * 60 ))% 60);
    const seconds = Math.floor((subdate / 1000) % 60);


    clock.innerText =` ${day}d ${hours}h ${minutes}m ${seconds}s`;
}

setInterval(christClock,1000)