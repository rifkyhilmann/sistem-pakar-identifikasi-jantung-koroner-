// input
let inputNama = document.getElementById('input-nama');
let inputJK = document.getElementById('input-jk');
let inputUmur = document.getElementById('input-umur');
let inputAlamat = document.getElementById('input-alamat');
let inputBB = document.getElementById('input-bb');
let inputTB = document.getElementById('input-tb');
let inputDarah = document.getElementById('input-darah');

// gejala
let selectAutoimun = document.getElementById('autoimun');
let selectBanyakMinum = document.getElementById('banyakMinum');
let selectBanyakKencing = document.getElementById('banyakKencing');
let selectBanyakMakan = document.getElementById('banyakMakan');
let selectFaktorGenetik = document.getElementById('faktorGenetik');
let selectPenglihatanKabur = document.getElementById('penglihatanKabur');
let selectKesemutan = document.getElementById('kesemutan');
let selectBbMenurun = document.getElementById('bbMenurun');
let selectKadarGula = document.getElementById('kadarGula');
let selectDarahTinggi = document.getElementById('darahTinggi');
let selectGulaDarah = document.getElementById('gulaDarah');



// hasil
let hasilNama = document.getElementById('hasil-nama');
let hasilJk = document.getElementById('hasil-jk');
let hasilUmur = document.getElementById('hasil-umur');
let hasilAlamat = document.getElementById('hasil-alamat');
let hasilBB = document.getElementById('hasil-bb');
let hasilTB = document.getElementById('hasil-tb');
let hasilDarah = document.getElementById('hasil-darah');


// hasilGejala
let hasilAutoimun = document.getElementById('hasil-gejala-autoimun');
let hasilBanyakMinum = document.getElementById('hasil-gejala-banyakMinum');
let hasilBanyakKencing = document.getElementById('hasil-gejala-banyakKencing');
let hasilBanyakMakan = document.getElementById('hasil-gejala-banyakMakan');
let hasilFaktorGenetik = document.getElementById('hasil-gejala-faktorGenetik');
let hasilPengelihatanKabur = document.getElementById('hasil-gejala-pengelihatanKabur');
let hasilKesemutan = document.getElementById('hasil-gejala-kesemutan');
let hasilBBmenurun = document.getElementById('hasil-gejala-BBmenurun');
let hasilKadarGula = document.getElementById('hasil-gejala-kadarGula');
let hasilDarahTinggi = document.getElementById('hasil-gejala-darahTinggi');
let hasilGulaDarah = document.getElementById('hasil-gejala-gulaDarah');


// form
let diagnosaContainer = document.getElementById('diagnosa-container');
let hasilContainer = document.getElementById('hasil-container');



function submitData() {
    if (inputNama.value === "" || 
    inputJK.value === "" || 
    inputUmur.value === "" || 
    inputAlamat.value === "" || 
    inputBB.value === "" || 
    inputTB.value === "" || 
    inputDarah.value === "") 
    {
        alert("Isi Semua Kolom Data Pasien!");
    }
    else {
        diagnosaContainer.style.display = 'flex';
    }
}

function submitDiagnosa() {
    if (
        selectAutoimun.value === "" ||
        selectBanyakMinum.value === "" ||
        selectBanyakKencing.value === "" ||
        selectBanyakMakan.value === "" ||
        selectFaktorGenetik.value === "" ||
        selectPenglihatanKabur.value === "" ||
        selectKesemutan.value === "" ||
        selectBbMenurun.value === "" ||
        selectKadarGula.value === "" ||
        selectDarahTinggi.value === "" ||
        selectGulaDarah.value === ""
    ){
        alert('Isi Range Terlebih Dahulu')
    }else {
        hasilContainer.style.display = 'flex';
        hasilNama.value = inputNama.value;
        hasilJk.value = inputJK.value;
        hasilUmur.value = inputUmur.value;
        hasilAlamat.value = inputAlamat.value;
        hasilBB.value = inputBB.value;
        hasilTB.value = inputTB.value;
        hasilDarah.value = inputDarah.value;
        hasilAutoimun.value = selectAutoimun.value;

        hasilAutoimun.value = selectAutoimun.value; 
        hasilBanyakMinum.value = selectBanyakMinum.value;
        hasilBanyakKencing.value = selectBanyakKencing.value ;
        hasilBanyakMakan.value = selectBanyakMakan.value;
        hasilFaktorGenetik.value = selectFaktorGenetik.value;
        hasilPengelihatanKabur.value = selectPenglihatanKabur.value;
        hasilKesemutan.value = selectKesemutan.value;
        hasilBBmenurun.value = selectBbMenurun.value;
        hasilKadarGula.value = selectKadarGula.value;
        hasilDarahTinggi.value = selectDarahTinggi.value;
        hasilGulaDarah.value = selectGulaDarah.value;

        let hasilPenyakit = document.getElementById('hasil-nama-penyakit');
        let hasilPersentase = document.getElementById('hasil-persentase');
        let hasilDefinisi = document.getElementById('hasil-definisi');
        let hasilSolusi = document.getElementById('hasil-solusi');

        hasilPenyakit.value = "Diabetes Melitius Tipe 2"
        hasilPersentase.value = "49.44%";
        hasilDefinisi.value = " Diabetes melitius tipe 2 adalah suatu kondisi kronis di mana tubuh tidak dapat menggunakan insulin secara efektif atau tidak memproduksi cukup insulin untuk memenuhi kebutuhan. Hal ini menyebabkan peningkatan kadar gula darah yang dapat menyebabkan berbagai masalah kesehatan. Faktor risiko untuk diabetes tipe 2 termasuk gaya hidup tidak sehat, obesitas, dan faktor genetik.";
        hasilSolusi.value = "Diabetes mellitus tipe 2 melibatkan pendekatan holistik yang mencakup perubahan gaya hidup sehat. Ini melibatkan penerapan pola makan yang seimbang dengan fokus pada serat, buah-buahan, sayuran, dan makanan rendah lemak. Olahraga teratur juga menjadi elemen kunci dalam mengelola diabetes tipe 2, membantu meningkatkan sensitivitas insulin dan mengontrol berat badan. Selain itu, pemantauan rutin kadar gula darah, menjaga berat badan yang sehat, dan menghindari kebiasaan merokok dapat memberikan kontribusi positif dalam pengelolaan kondisi ini.";
    }   
    
}



