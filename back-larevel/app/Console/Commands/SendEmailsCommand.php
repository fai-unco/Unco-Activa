<?php

namespace App\Console\Commands;

use App\Mail\AlertMail;
use Illuminate\Console\Command;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Mail;

class SendEmailsCommand extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'command:name';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Command description';

    /**
     * Execute the console command.
     *
     * @return int
     */
    public function handle()
    {
        $emails = DB::table('inscriptions')->pluck('email');

        foreach ($emails as $email) {
            Mail::to($email)->send(new AlertMail());
        }
        return Command::SUCCESS;
    }
}
