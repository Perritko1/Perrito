<?php namespace Web\Owner\Updates;

use Schema;
use October\Rain\Database\Schema\Blueprint;
use October\Rain\Database\Updates\Migration;

/**
 * CreateOwnersTable Migration
 *
 * @link https://docs.octobercms.com/3.x/extend/database/structure.html
 */
return new class extends Migration
{
    /**
     * up builds the migration
     */
    public function up()
    {
        Schema::create('web_owner_owners', function(Blueprint $table) {
            $table->id();
            $table->string('number');
            $table->string('race');
            $table->timestamp('birthday');
            $table->string('dog_trained')->nullable();
            $table->string('location')->nullable();
            $table->string('popis')->nullable();
            $table->string('weight')->nullable();
            $table->string('pricehour')->nullable();
            $table->string('priceday')->nullable();
            $table->timestamps();
        });
    }

    /**
     * down reverses the migration
     */
    public function down()
    {
        Schema::dropIfExists('web_owner_owners');
    }
};
