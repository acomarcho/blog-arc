## Deskripsi singkat dan cara menggunakan
Website ini adalah website blog sederhana yang berbasis pada repository https://github.com/haichao-yu/react-redux-blog untuk memenuhi tugas ARC. Pengguna dapat membuat akun dan berkontribusi membuat postingan tentang networking pada blog ini. Selain itu, berbagai pengguna dapat berinteraksi juga melalui fitur kolom komentar.

## Cara instalasi
Untuk menjalankannya secara lokal, diperlukan tiga terminal: satu untuk menjalankan klien, satu untuk menjalankan server, dan satu lagi untuk menjalankan MongoDB.

Langkah yang perlu dilalui:

 1. Install Node.js
 2. Install MongoDB
 3. Clone repository ini.
 4. Di terminal pertama, masuk ke directory `client`, jalankan `npm install` lalu `npm run dev`
 5. Di terminal kedua, masuk ke directory `server`, jalankan `npm install` lalu `npm run start`
 6. Di terminal ketiga, jalankan `mongod`. Apabila tidak ada, jalankan saja `mongo.exe` yang terletak pada folder `bin` tempat instalasi MongoDB.
 7. Buka website di `http://localhost:3000`

## Fitur yang dibuat dan teknologi yang digunakan

 1. Bagian front-end menggunakan React dan Redux serta Bootstrap 4 untuk styling website sederhana.
 2. Bagian backend menggunakan Express.js Dan Node.js serta Passport.js. Dalam autentikasi user digunakan JSON Web Token (JWT).
 3. Database menggunakan MongoDB untuk aktivitas CRUD. Aktivitas CRUD di sini di antaranya dalam sistem pengaturan profil, pembuatan post, dan pembuatan komen.

## Nama dan NIM anggota
1. Marchotridyo (16520345)
2. I Gede Arya R. P. (16520073)
3. Ubaidillah Ariq P. (16520308)
4. Fikri Khoiron F. (16520408)
5. Muhammad Garebaldhie E. R. (16520273)

##  Link dan informasi terkait yang dibutuhkan
Blog ini sangat diinspirasi oleh repositori https://github.com/haichao-yu/react-redux-blog. Kami mempelajari bagaimana cara kerja repositori tersebut sambil memodifikasinya untuk menghasilkan projek ini.

## Tampak Website
![Tampak halaman depan website](https://i.ibb.co/BK3rYgt/image.png)

![Tampak halaman postingan](https://i.ibb.co/FzLv8Pp/image.png)
![Tampak halaman membuat postingan baru](https://i.ibb.co/Rh4yzrT/image.png)
![Tampak kolom komentar](https://i.ibb.co/nch0QqQ/image.png)