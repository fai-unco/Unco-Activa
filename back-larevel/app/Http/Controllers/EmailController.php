<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support;
use App\Mail\AlertMail;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Mail;

class EmailController extends Controller
{
    public function sendEmails(){
        $emails = DB::table('inscriptions')->pluck('email');

        foreach ($emails as $email) {
            Mail::to($email)->send(new AlertMail());
        }
        return redirect()->back()->with('success', 'Emails enviados correctamente');
    }
}
