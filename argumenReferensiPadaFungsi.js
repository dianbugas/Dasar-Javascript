function kuadrat(angka) {
    angka.key *= angka.key;
}

var x = { key: 5 };
console.log('sebelum dikuadratkan: ' + x['key'] + '<br/>');
kuadrat(x);
console.log('setelah dikuadratkan: ' + x['key'] + '<br/>');

//latihan
function kuadrat(angka) {
    angka.key *= angka.key;
}

var x = { key: 5 };
console.log('sebelum dikuadratkan: ' + x['key'] + '<br/>');
kuadrat(x);
console.log('setelah dikuadratkan: ' + x['key'] + '<br/>');

// Ketika kita melewatkan variabel ke dalam argumen sebuah fungsi, nilai yang ada di dalam variabel tersebut tidak akan berubah.

// function kuadrat(angka)
// {
//   angka.key *= angka.key;
// }

// var x = {key:5};
// console.log('sebelum dikuadratkan: ' + x['key'] + '<br/>');
// kuadrat(x);
// console.log('setelah dikuadratkan: ' + x['key'] + '<br/>');
// Pada kode di atas, nilai awal x adalah 5. Saat fungsi kuadrat(x) dipanggil, fungsi tersebut akan mengkuadratkan nilai variabel argumen dan mencetaknya. Adapun variabel x setelah proses pemanggilan fungsi kuadrat() bernilai 25.



// Latihan
// Contoh kode:

// function kuadrat(angka)
// {
//     angka.key *= angka.key;
// }

// var x = {key:5};
// console.log('sebelum dikuadratkan: ' + x['key'] + '<br/>');
// kuadrat(x);
// console.log('setelah dikuadratkan: ' + x['key'] + '<br/>');


// Link ke editor:

// https://glot.io/snippets/fbn5rc07ag/embed/



// Praktek

// Jalankan kode yang ada di editor. Apakah nilai variabel x sebelum dan sesudah pemanggilan fungsi kuadrat() berubah? Mengapa?