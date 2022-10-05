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
        Schema::create('inscriptions', function (Blueprint $table) {
            $table->id();  
            $table->foreignId('race_categorie_id')->nullable()->constrained()->onDelete('set null');
            // $table->unsignedBigInteger('race_categories_id')->nullable();                  
            $table->string('name');
            $table->string('surname');
            $table->string('files')->nullable();
            $table->string('promo')->nullable();
            $table->bigInteger('dni')->nullable();
            $table->date('birth')->nullable();
            $table->string('gender')->nullable();
            $table->string('address')->nullable();
            $table->string('country')->nullable();
            $table->string('province')->nullable();
            $table->string('city')->nullable();
            $table->bigInteger('phone')->nullable();
            $table->string('social_work')->nullable();
            $table->string('shirt_size')->nullable();
            $table->string('email')->unique();  
            $table->string('emergency_contac_name');            
            $table->bigInteger('emergency_contac_phone');
            $table->string('emergency_contac_bond');          
            $table->timestamp('billing_verified_at')->nullable();
            $table->timestamp('verification_denied')->nullable();
            $table->rememberToken();
            $table->timestamps();

            // $table->foreign('race_categories_id')->references('id')->on('race_categories');   
            
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('inscription');
    }
};
