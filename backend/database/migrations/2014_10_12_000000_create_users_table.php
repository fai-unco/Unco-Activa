<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('users', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->string('surname');
            $table->integer('dni')->nullable()->unique();;
            $table->date('birth')->nullable();
            $table->string('sex');
            $table->string('address')->nullable();
            $table->string('country')->nullable();;
            $table->string('province')->nullable();;
            $table->string('city')->nullable();
            $table->integer('phone')->unique();;
            $table->string('social_work')->nullable();
            $table->string('shirt_size')->nullable(); 
            $table->tinyInteger('id_emergency_contact')->nullable();          
            $table->string('profile_photo_path', 2048)->nullable();
            $table->string('email')->unique();
            $table->timestamp('email_verified_at')->nullable();
            $table->string('password');
            $table->rememberToken();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('users');
    }
};
