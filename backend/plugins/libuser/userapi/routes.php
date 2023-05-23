<?php
    use LibUser\Userapi\Http\Controllers\UserController;
    use LibUser\Userapi\Models\User;

    Route::group(["prefix" => "api"], function() {

        Route::group(["prefix" => "auth"], function() {
            Route::post("register", [UserController::class, "register"]);
            Route::post("login", [UserController::class, "login"]);
            
        Route::middleware(['auth'])->group (function() {   
            Route::post("addDetails", [UserController::class, "addDetails"]); 
        });
        });
    });