<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;
use PhpParser\Node\Expr\Cast\String_;

class PreInscriptionMail extends Mailable
{
    use Queueable, SerializesModels;

    /**
     * Create a new message instance.
     *
     * @return void
     */

    public string $mensaje;

    public string $sujeto;
    public function __construct(string $sujeto, string $mensaje)
    {
        $this->mensaje = $mensaje;
        $this->sujeto = $sujeto;
    }

    /**
     * Build the message.
     *
     * @return $this
     */
    public function build()
    {
        return $this->subject("Formulario de contacto-". config("app.name"))
        ->markdown('mail.Preinscription-mail');
    }
}
