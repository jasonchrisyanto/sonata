let nama = document.getElementById("nama");
let instansi = document.getElementById("instansi");
let btnsimpan = document.getElementById("simpan");
let list = document.getElementById("list");

let data = [];

btnsimpan.addEventListener("click", function () {
    console.log("Tombol Di Tekan");
    //simpan data ke dalam array
    data.push({nama: nama.value, instansi: instansi.value
    });
    console.log(data);

    document.getElementById("list").innerHTML = ""; //Clear element list
    for(const [index, value] of data.entries()){
        console.log(value);
        document.getElementById("list").innerHTML += <tr><td>${value.nama} </td><td>${value.instansi}</td></tr>;
    }
});