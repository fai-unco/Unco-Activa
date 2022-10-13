<?php

namespace App\Http\Controllers;

use App\Mail\ContactMail;
use Illuminate\Support\Facades\Mail;
use Illuminate\Http\Request;

class ContactUsController extends Controller
{
    public function index()
    {
        return view('mail.contact');
    }

    public function store(Request $request)
    {
        $correo = new ContactMail($request->all());

        if (!Mail::to('uncoactiva@gmail.com')->send($correo)) abort(500, 'Error al enviar el mail.');
    }
}
