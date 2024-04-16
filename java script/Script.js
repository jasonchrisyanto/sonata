document.getElementById("judul").innerHTML = "Javascript";

let desc = document.getElementById("deskripsi")
desc.innerHTML = "Belajar DOM, Variabel, Perulangan"

let nama = document.getElementById("nama")
let btnsimpan = document.getElementById("simpan")
let data = []; //Array

btnsimpan.addEventListener("click",function () {
    console.log("Tombol Di Tekan");
    data.push(nama.value); // simpan array ke data
    console.log(data);

    document.getElementById("list").innerHTML = ""; //Clear element list
    for(const [index, value] of data.entries()){
        console.log(value);
        document.getElementById("list").innerHTML += <li>${value}</li>;
    }
});