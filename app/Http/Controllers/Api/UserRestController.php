<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class UserRestController extends Controller
{

    public function users(): JsonResponse
    {
        return response()->json(User::all());
    }

}
