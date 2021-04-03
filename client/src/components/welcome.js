import React from 'react';
import { Link } from 'react-router-dom';

export default () => (
  <div>

    { /*Main jumbotron for a primary marketing message or call to action*/ }
    <div className="jumbotron">
      <h1 className="display-3">Selamat Datang!</h1>
      <p>Ini adalah website untuk memenuhi tugas Day 5 ARC yang dibuat oleh: </p>
      <ol>
        <li>Marchotridyo (16520345)</li>
        <li>I Gede Arya R. P. (16520073)</li>
        <li>Ubaidillah Ariq P. (16520308)</li>
        <li>Fikri Khoiron F. (16520408)</li>
        <li>Muhammad Garebaldhie E. R. (16520273)</li>
      </ol>
      <p>Mohon untuk tidak menggunakan email dan password asli saat pembuatan akun.</p>
      <p><Link className="btn btn-dark btn-lg" to="/posts" role="button">Lihat postingan pada blog &raquo;</Link></p>
    </div>

    <div className="jumbotron">
      <h1 className='display-3'>Tentang Blog</h1>
      <p>Konten blog ini berisikan postingan-postingan mengenai networking. Blog ini dikembangkan dari repository karya haichao-yu (<a href="https://github.com/haichao-yu/react-redux-blog" target="_blank">react-redux-blog</a>) yang menggunakan React, NodeJS, ExpressJS, dan MongoDB. Layouting website menggunakan tema Bootstrap 4.</p>
    </div>

  </div>
);