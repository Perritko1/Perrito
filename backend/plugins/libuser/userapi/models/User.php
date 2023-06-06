<?php namespace LibUser\Userapi\Models;

use RainLab\User\Models\User as RainlabUser;
use Tymon\JWTAuth\Contracts\JWTSubject;

class User extends RainlabUser implements JWTSubject {

    public function getJWTIdentifier()
    {
        return $this->getKey();
    }

    public function getJWTCustomClaims()
    {
        return [];
    }

    public function getMorphClass()
    {
        return \RainLab\User\Models\User::class;
    }

}