<?php
    use LibUser\Userapi\Http\Controllers\UserController;
    use LibUser\Userapi\Models\User;

    Route::group(["prefix" => "api"], function() {

        Route::group(["prefix" => "auth"], function() {
            Route::post("register", [UserController::class, "register"]);
            Route::post("login", [UserController::class, "login"]);
            Route::get("getOwner", [UserController::class, "getOwner"]);
            Route::get("getCaretaker", [UserController::class, "getCaretaker"]);
        Route::middleware(['auth'])->group (function() {   
            Route::post("addDetails", [UserController::class, "addDetails"]); 
            Route::get("getUser", [UserController::class, "getUser"]);
        });
        });
    });