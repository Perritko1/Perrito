<?php namespace Web\Owner\Models;

use Model;

/**
 * Owner Model
 *
 * @link https://docs.octobercms.com/3.x/extend/system/models.html
 */
class Owner extends Model
{
    use \October\Rain\Database\Traits\Validation;

    /**
     * @var string table name
     */
    public $table = 'web_owner_owners';


    public $attachOne = [
        'owneravatar' => \System\Models\File::class
    ];

    /**
     * @var array rules for validation
     */
    public $rules = [
    ];
}
