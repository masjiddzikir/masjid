// ==============================
// JAM DIGITAL
// ==============================

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


// ==============================
// JADWAL SHOLAT
// ==============================

const jadwal = {

    subuh  : "09:00",
    dzuhur : "11:30",
    ashar  : "14:53",
    maghrib: "17:40",
    isya   : "18:50"

};

// ==============================
// IQOMAH MENIT
// ==============================

const iqomahMenit = {

    subuh  : 10,
    dzuhur : 15,
    ashar  : 10,
    maghrib: 5,
    isya   : 10

};


// ==============================
// CEK WAKTU SHOLAT
// ==============================

let countdownAktif = false;

function cekIqomah(){

    if(countdownAktif) return;

    const now = new Date();

    let jam =
        String(now.getHours()).padStart(2,'0');

    let menit =
        String(now.getMinutes()).padStart(2,'0');

    let waktuSekarang = jam + ":" + menit;

    for(let sholat in jadwal){

        if(waktuSekarang === jadwal[sholat]){

            mulaiIqomah(
                sholat,
                iqomahMenit[sholat]
            );

        }

    }

}

setInterval(cekIqomah,1000);


// ==============================
// MULAI COUNTDOWN
// ==============================

function mulaiIqomah(nama, menit){

    countdownAktif = true;

    let totalDetik = menit * 60;

    document.getElementById("iqomah-title")
    .innerHTML =
    "IQOMAH " + nama.toUpperCase();

    document.getElementById("iqomah-box")
    .style.display = "block";

    const hitung = setInterval(() => {

        let m = Math.floor(totalDetik / 60);
        let s = totalDetik % 60;

        m = m < 10 ? "0"+m : m;
        s = s < 10 ? "0"+s : s;

        document.getElementById("iqomah")
        .innerHTML = m + ":" + s;

        totalDetik--;

        if(totalDetik < 0){

            clearInterval(hitung);

            document.getElementById("iqomah-box")
            .style.display = "none";

            countdownAktif = false;

        }

    },1000);

}
