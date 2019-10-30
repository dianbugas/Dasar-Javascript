function selamatDatang(nama) {
    console.log('Selamat Datang, ' + nama + '<br/>');
}
selamatDatang('Bambang Rahmanto');

selamatDatang("Coder");
var username = 'Bambang Rahmanto bos qu';
selamatDatang(username);

// latihan
function profil(nama, kota, ttg) {
    console.log('Nama saya ' + nama);
    console.log('Saya berasal dari kota ' + kota);
    console.log('Saya lahir pada tahun ' + tgl);
}
var nama = 'James';
var asal = 'Medan';
var tgl = 1991;
profil(nama, asal, tgl);


// Dalam membangun aplikasi riil penggunaan skup global di dalam fungsi tidak efisien. Ada cara yang lebih baik untuk memproses suatu data di dalam fungsi, yakni dengan melewatkan variabel melalui argumen fungsi.

// Argumen fungsi adalah variabel yang ada di dalam kurung setelah nama fungsi. Argumen menjadi pintu masuk data yang akan digunakan di dalam fungsi. Kita dapat mengisi argumen fungsi dengan nilai input langsung, nilai default (bawaan), atau nilai referensi.

// function selamatDatang(nama)
// {
//   console.log('Selamat Datang, ' + nama + '<br/>');
// }
// selamatDatang('Bambang Rahmanto');


// selamatDatang("Coder");
// var username = 'Bambang Rahmanto';
// selamatDatang(username);
// Pada contoh di atas, kita membuat fungsi selamatDatang() yang memiliki satu buah argumen nama. Fungsi ini dipanggil dan argumen nama diisi dengan nilai string "Coder". Pada pemanggilan fungsi selanjutnya, argumen diisi dengan variabel username yang bernilai string 'Bambang Rahmanto'.

// Kita dapat membuat argumen fungsi lebih dari satu, dengan dipisahkan oleh tanda koma. Saat pemanggilan fungsi, argumen fungsi diisi sesuai urutan penulisan argumen (dari kiri ke kanan) pada deklarasi fungsi.



// Latihan
// Contoh kode:

// function profil(nama, kota)
// {
//     console.log('Nama saya ' + nama + '<br/>');
//     console.log('Saya berasal dari kota' + kota + '<br/>');
// }
// var nama = 'James';
// var asal = 'Medan';


// Link ke editor:

// https://glot.io/snippets/fbn5p7o69a/embed



// Praktek

// Pada editor, di baris ke-8 panggillah fungsi profil() dengan mengisikan argumen pertama dengan variabel nama dan argumen kedua dengan variabel asal. Jalankan program dan pelajari mengapa outputnya seperti itu.

// Buatlah argumen ketiga dengan nama tahun, dan buat kode di dalam fungsi untuk mencetak string 'Saya lahir pada tahun ' + tahun. Pada baris ke-9 panggil fungsi profil() dan jangan lupa untuk mengisi argumen ketiga tadi. Contoh output yang seharusnya tampil bila program dijalankan mestinya seperti ini:

// Nama saya James.
// Saya berasal dari kota Medan.
// Saya lahir pada tahun 1991