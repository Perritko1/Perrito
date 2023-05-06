<?php namespace Web\Guardian\Models;

use Model;

/**
 * Guardian Model
 *
 * @link https://docs.octobercms.com/3.x/extend/system/models.html
 */
class Guardian extends Model
{
    use \October\Rain\Database\Traits\Validation;

    /**
     * @var string table name
     */
    public $table = 'web_guardian_guardians';

    public $attachOne = [
        'guardianavatar' => \System\Models\File::class
    ];

    /**
     * @var array rules for validation
     */
    public $rules = [];
}
