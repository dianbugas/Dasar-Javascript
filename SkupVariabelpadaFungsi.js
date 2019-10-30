//error
function otherFunction() {
    var pesan = 'Halo Coder!'
}

function cetakPesan() {
    console.log(pesan)
}

otherFunction();
cetakPesan();

//success
var pesan = 'Halo Coder!'

function cetakPesan() {
    console.log(pesan)
}
cetakPesan();


// var x;
function kuadrat() {
    x *= x;
}
x = 5;
console.log('sebelum dikuadratkan: ' + x + '<br/>');
kuadrat();
console.log('setelah dikuadratkan: ' + x + '<br/>');

// Di dalam Javascript dikenal adanya skup variabel local dan global.Ketika kita membuat sebuah variabel di dalam fungsi, maka skup variabel tersebut adalah local yang berarti hanya dapat diakses di dalam fungsi tersebut.

// function cetakPesan() {
//     var pesan = 'Halo Coder!';
//     console.log(pesan);
// }


// console.log(pesan);
// Pada contoh kode di atas, variabel pesan terdapat di dalam fungsi dan hanya dapat digunakan di dalam fungsi.Kode console.log(pesan); yang ada di luar fungsi akan menghasilkan error pada program yaitu ReferenceError: pesan is not defined.

// Begitu pula jika mengakses sebuah variabel yang skupnya berada pada fungsi lain.

// function otherFunction() {
//     var pesan = 'Halo Coder!'
// }

// function cetakPesan() {
//     console.log(pesan)
// }

// otherFunction();
// cetakPesan();
// Pada contoh kode di atas baris kode console.log(pesan); yang ada di dalam fungsi tidak akan menghasilkan apapun(riilnya akan menampilkan pesan error) karena variabel pesan di dalam fungsi adalah variabel baru yang skupnya lokal dan bukan variabel yang ada di luar fungsi.



// Agar variabel dapat diakses pada skup yang luas, maka deklarasikan variabel tersebut sebagai global variabel.Anda bisa mendeklarasikannya pada awal berkas javascript.

// var pesan = 'Halo Coder!'

// function cetakPesan() {
//     console.log(pesan)
// }
// cetak()
// Jangan menggunakan variabel global jika memang tak terlalu dibutuhkan.Di Strict Mode variabel secara otomatis akan gagal dideklarasikan.



//     Latihan
// Contoh kode:

// // var x;
// function kuadrat() {
//     x *= x;
// }
// x = 5;
// console.log('sebelum dikuadratkan: ' + x + '<br/>');
// kuadrat();
// console.log('setelah dikuadratkan: ' + x + '<br/>');


// Link ke editor:

// https://glot.io/snippets/fbn5oc8sth/embed



// Praktek

// Pada editor terdapat kode berisi sebuah fungsi untuk mengkuadratkan nilai dari variabel x.Pada baris ke - 7 dan 9 kita mencetak nilai variabel x sebelum dan sesudah dikuadratkan.Jalankan program dan lihat output apa yang muncul.

// Nampaknya nilai x sebelum dan sesudah dikuadratkan masih sama.Itu terjadi karena variabel x masih belum bisa diakses di dalam fungsi kuadrat().Tambahkan keyword global untuk variabel x di dalam fungsi kuadrat(), pada baris sebelum fungsi kuadrat(), tambahkan baris baru untuk menulis kode var x;.Lalu jalankan kembali program.