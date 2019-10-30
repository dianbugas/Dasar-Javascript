function cetakPesan(nama, bahasa = 'id') {
    var pesan = 'Selamat datang, ' + nama;
    if (bahasa == 'en') {
        pesan = 'Welcome, ' + nama;
    }
    console.log(pesan);
}
var nama = 'Bambang';
cetakPesan(nama);

function cetakPesan(nama, bahasa = 'id') {
    var pesan = 'Selamat datang, ' + nama;
    if (bahasa == 'en') {
        pesan = 'Welcome, ' + nama;
    }
    //console.log(pesan);

    let hasil = "";
    switch (bahasa) {
        case 'en':
            hasil = console.log(pesan);
            break;
        case 'id':
            hasil = console.log(pesan);
            break;
        case 'dian':
            hasil = console.log(pesan);
            break;
        default:
            hasil = console.log('Mohon maaf bahasa yang diminta belum terdaftar!');
    }
}
var nama = 'Bambang';
cetakPesan(nama, 'id'); //yg di ubah argumen ke duanya ''

// Apa yang terjadi bila suatu fungsi memiliki misalnya dua buah argumen dan kita hanya mengisi salah satunya atau tidak mengisi kedua argumen tersebut saat pemanggilan? Program tentunya akan memunculkan pesan peringatan bahwa fungsi tersebut memerlukan input pada argumennya.

// Namun adakalanya suatu fungsi membolehkan beberapa argumen tidak wajib diisi (opsional). Hal yang sama juga dapat kita lakukan pada fungsi yang kita buat sendiri, yakni dengan mendefinisikan nilai bawaan pada argumen.

// function cetakPesan(nama, bahasa='id')
// {
//   var pesan = 'Selamat datang, ' + nama;
//   if(bahasa == 'en')
//   {
//     pesan = 'Welcome, ' + nama;
//   }
//   console.log(pesan);
// }
// var nama = 'Bambang';
// cetakPesan(nama);
// Sebagai contoh, fungsi cetakPesan() di atas memiliki dua buah argumen. Argumen nama wajib diisi saat pemanggilan fungsi karena tidak diset nilai bawaannya, sedangkan argumen bahasa tidak wajib diisi karena sudah memiliki nilai default.



// Latihan
// Contoh kode:

// function cetakPesan(nama, bahasa='id')
// {
//     var pesan = 'Selamat datang, ' + nama;
//     if(bahasa == 'en')
//     {
//         pesan = 'Welcome, ' + nama;
//     }
//     console.log(pesan);
// }
// var nama = 'Bambang';
// cetakPesan(nama);


// Link ke editor:

// https://glot.io/snippets/fbn5qfg698/embed/



// Praktek

// Jalankan kode program dan amati outputnya, kemudian modifikasi pemanggilan fungsi di baris ke-11 dengan mengisikan argumen kedua dengan string 'en' dan perhatikan output yang muncul. Mengapa bisa demikian?

// Panggil fungsi dengan mengisi argumen kedua dengan string selain 'id' dan 'en'. Output apakah yang muncul?

// Dapatkah Anda memodifikasi kode pada fungsi sehingga bila argumen kedua diisi string selain 'id' dan 'en' (misalnya diisi string 'it' atau 'ar') program akan mencetak pesan 'Mohon maaf bahasa yang diminta belum terdaftar.' ? (Petunjuk: banyak teknik yang dapat Anda gunakan, salah satunya dengan switch)
