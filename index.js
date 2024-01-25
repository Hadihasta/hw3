// -	Diketahui air memiliki kondisi tertentu kapan cair, uap maupun beku, berikut rentangnya
// -	Beku suhu minus -100 sampai 0
// -	Cair suhu 1 sampai 100
// -	Uap suhu 101 sampai 500
// -	Suhu selain rentang tersebut tidak terdeﬁnisi

let suhu = -100;

let kondisi_air = suhu >= -101 && suhu <= 0 ? "beku" : suhu >= 1 && suhu <= 100 ? "cair" : suhu >= 101 && suhu <= 500 ? "Uap" : "Tidak terdefinisi";

console.log(kondisi_air);

// -	Diketahui SPBU memiliki logika sebagai berikut
// -	Jika plat kuning atau motor maka BBM subsidi
// -	Jika mobil CC kurang dari 1500 maka PERTAMAX
// -	Jika mobil CC diatas atau sama dengan 1500 maka pertamax turbo

let warna_plat = "merah";
let cc_kendaraan = 200;
let jenis_kendaraan = "mobil";

let bbm_kendaraan = warna_plat == "kuning" || jenis_kendaraan == "motor" ? "BBM SUBSIDI" : jenis_kendaraan == "mobil" && cc_kendaraan <= 1499 ? "PERTAMAX" : jenis_kendaraan == "mobil" || cc_kendaraan >= 1500 ? "PERTAMAX TURBO" : "";

console.log(bbm_kendaraan);
