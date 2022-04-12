<?php

use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\Redis;
use Illuminate\Support\Facades\Mail;
use App\Mail\TestMail;



Route::get('/', function () {
    return view('welcome');
});

Route::get('/store', function () {
    Redis::set('foo', 'bar');
});
Route::get('/retrieve', function () {
    return Redis::get('foo');
});
Route::get('/send-mail', function () {
    Mail::to("adrianno_3@hotmail.com") -> send(new TestMail);
});
