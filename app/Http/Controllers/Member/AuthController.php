<?php

namespace App\Http\Controllers\Member;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class AuthController extends Controller
{
    public function login()
    {
        return inertia('Auth/Member/Login');
    }

    public function register()
    {
        return inertia('Auth/Member/Register');
    }
}
