<?php namespace Web\Guardian\Updates;

use Schema;
use October\Rain\Database\Schema\Blueprint;
use October\Rain\Database\Updates\Migration;

/**
 * CreateGuardiansTable Migration
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
        Schema::create('web_guardian_guardians', function(Blueprint $table) {
            $table->id();
            $table->timestamps();
        });
    }

    /**
     * down reverses the migration
     */
    public function down()
    {
        Schema::dropIfExists('web_guardian_guardians');
    }
};
