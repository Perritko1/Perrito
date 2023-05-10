<?php

namespace Web\Extenduser\Classes\Extend;

use RainLab\User\Models\User;
use Rainlab\User\Controllers\Users as UsersController;
use Event;

class UserExtend{
    public static function extendUser_dogprefferance() {
        Event::listen('rainlab.user.register', [$user, $data]) 
        {

        }
    }
}
