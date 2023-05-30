<?php namespace LibUser\Userapi\Http\Controllers;

use LibUser\Userapi\Http\Resources\UserResource;
use Exception;
use LibUser\Userapi\Models\User;
use RainLab\User\Facades\Auth;
use Tymon\JWTAuth\Facades\JWTAuth;
use System\Models\File;
class UserController {

    // register user
    function register() {
        $creds = [
            "name" => post("name"),
            "surname" => post("surname"),
            "email" => post("email"),
            "password" => post("password"),
            "password_confirmation" => post("password_confirmation"),
            "dog_preference" => post("dog_preference")
        ];

        $user = Auth::register($creds); //register nevie pracovat s tvojimi custom datami, manualne ich nastav, na $user, nizsie
        $user = User::find($user->id);
        $user->dog_preference = post("dog_preference");

        return [
            "token" => JWTAuth::fromUser($user),
            'user' => new UserResource($user)
        ];
    }

    // login user
    function login() {
        $creds = [
            "email"    => post("email"),
            "password" => post("password")
        ];

        if (!$token = auth()->attempt($creds)) {
            throw new Exception("Wrong email or password");
        }

        return $this->respondWithToken($token);
    }
    function addDetails()
    {
        $user = auth()->user();
        $user->race = post("race");
        $user->number = post("number");
        $user->birthday = post("birthday");
        $user->dog_trained = post("dog_trained");
        $user->location = post("location");
        $user->popis = post("popis");
        $user->weight = post("weight");
        $user->pricehour = post("pricehour");
        $user->priceday = post("priceday");

        if (request()->hasFile('avatar')){
            $file = new File();
            $file->fromPost(request()->file("avatar"));
            $file->save();
            $user->avatar()->add($file);
        }

        $user->save();

        return new UserResource($user);
    }
    function getUser ()
    {
        $user = auth()->user();
        return new UserResource($user);
    }

    // respond json array with jwt info
    private function respondWithToken($token) {
        return response()->json([
            "token" => $token,
            "token_type" => "bearer",
            "expires_in" => config("jwt.ttl")
        ]);
    }
    
}