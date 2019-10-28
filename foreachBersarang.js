var herbivora = new Array('kambing', 'sapi', 'kuda');
var karnivora = new Array('harimau', 'serigala', 'anjing');
var omnivora = new Array('ayam', 'monyet', 'beruang');
var binatang = new Array(herbivora, karnivora, omnivora);

binatang.forEach(function (jenis) {
    jenis.forEach(function (nama) {
        console.log(nama + '<br/>');
    });
});

//Latihan
var herbivora = new Array('kambing', 'sapi', 'kuda');
var karnivora = new Array('harimau', 'serigala', 'anjing');
var omnivora = new Array('ayam', 'monyet', 'beruang');
var binatang = new Array(herbivora, karnivora, omnivora);

binatang.forEach(function (jenis, index) {
    jenis.forEach(function (nama, array) {
        console.log('indek ke- ' + index, array + 'ada binatang' + nama);
    });
});

// Bagaimana halnya bila kita hendak menampilkan setiap elemen array yang ada di dalam array (array bersarang/multidimensi)? Gunakanlah foreach bersarang.

// var herbivora = new Array('kambing', 'sapi', 'kuda');
// var karnivora = new Array('harimau', 'serigala', 'anjing');
// var omnivora = new Array('ayam', 'monyet', 'beruang');
// var binatang = new Array(herbivora, karnivora, omnivora);


// Untuk menampilkan semua nilai elemen pada array multidimensi di atas, kita dapat menggunakan foreach seperti berikut:

// binatang.forEach(function(jenis)
// {
//   jenis.forEach(function(nama)
//   {
//     console.log(nama + '<br/>');
//   });
// })


// foreach pertama mengiterasi variabel array binatang dan setiap elemennya dapat dipanggil pada variabel jenis. Karena nilai variabel jenis juga bertipe array, maka kita panggil variabel tersebut pada foreach kedua. Elemen dari variabel array jenis dapat diakses pada variabel nama.



// Latihan
// Contoh kode:

// var herbivora = new Array('kambing', 'sapi', 'kuda');
// var karnivora = new Array('harimau', 'serigala', 'anjing');
// var omnivora = new Array('ayam', 'monyet', 'beruang');
// var binatang = new Array(herbivora, karnivora, omnivora);

//   binatang.forEach(function(jenis)
//   {
//       jenis.forEach(function(nama)
//       {
//           console.log(nama + '<br/>');
//       });
//   });


// Link ke editor:

// https://glot.io/snippets/fbn5k8ofdv/embed



// Praktek

// Pada editor sudah ada array multidimensi yang setiap elemennya dicetak menggunakan foreach bersarang. Jalankan program dan Anda akan melihat setiap elemen dicetak dengan relatif lebih rapi.

// Sekarang coba tampilkan masing-masing indeks dari array binatang sehingga output dari programnya nampak seperti ini:

// Indeks ke-[0][0] ada binatang: kambing
// Indeks ke-[0][1] ada binatang: sapi
// Indeks ke-[0][2] ada binatang: kuda
// Indeks ke-[1][0] ada binatang: harimau
// Indeks ke-[1][1] ada binatang: serigala
// Indeks ke-[1][2] ada binatang: anjing
// Indeks ke-[2][0] ada binatang: ayam
// Indeks ke-[2][1] ada binatang: monyet
// Indeks ke-[2][2] ada binatang: beruang