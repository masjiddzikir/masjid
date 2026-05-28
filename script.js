// =====================================================
// FILE : script.js
// =====================================================

// JAM DIGITAL
function updateClock(){

const now = new Date();

let h = now.getHours();
let m = now.getMinutes();
let s = now.getSeconds();

h = h < 10 ? "0"+h : h;
m = m < 10 ? "0"+m : m;
s = s < 10 ? "0"+s : s;

document.getElementById("clock").innerHTML =
h + ":" + m + ":" + s;

}

setInterval(updateClock,1000);

updateClock();


// ============================
// COUNTDOWN IQOMAH
// ============================

function startCountdown(id, minutes){

let time = minutes * 60;

setInterval(() => {

    let min = Math.floor(time / 60);
    let sec = time % 60;

    min = min < 10 ? "0"+min : min;
    sec = sec < 10 ? "0"+sec : sec;

    document.getElementById(id).innerHTML =
    min + ":" + sec;

    if(time > 0){
        time--;
    }

},1000);

}

// UBAH ANGKA MENIT SESUAI KEINGINAN

startCountdown("subuh-count",10);
startCountdown("dzuhur-count",15);
startCountdown("ashar-count",10);
startCountdown("maghrib-count",5);
startCountdown("isya-count",10);
