<?php

use October\Rain\Database\Updates\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddDogPreferenceToUsersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('users', function (Blueprint $table) {
            $table->string('dog_preference')->nullable();
            $table->string('race')->nullable();
            $table->string('number')->nullable();
            $table->string('birthday')->nullable();
            $table->string('dog_trained')->nullable();
            $table->string('location')->nullable();
            $table->string('popis')->nullable();
            $table->string('weight')->nullable();
            $table->string('pricehour')->nullable();
            $table->string('priceday')->nullable();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('users', function (Blueprint $table) {
            $table->dropColumn('dog_preference');
            $table->dropColumn('race');
            $table->dropColumn('number');
            $table->dropColumn('birthday');
            $table->dropColumn('dog_trained');
            $table->dropColumn('location');
            $table->dropColumn('popis');
            $table->dropColumn('weight');
            $table->dropColumn('pricehour');
            $table->dropColumn('priceday'); 
        });
    }
};
