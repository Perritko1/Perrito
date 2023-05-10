<?php
    use LibUser\Userapi\Http\Controllers\UserController;

            Route::post("register", [UserController::class, "register"]);
            Route::post("login", [UserController::class, "login"]);
