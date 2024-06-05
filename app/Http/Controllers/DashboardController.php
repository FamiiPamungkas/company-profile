<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Foundation\Auth\Access\AuthorizesRequests;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class DashboardController extends Controller
{
    use AuthorizesRequests, ValidatesRequests;

    /**
     * Display the user's profile form.
     */
    public function dashboard(Request $request): Response
    {
        $users = User::all();
        return Inertia::render('Dashboard', [
            'userCount' => sizeof($users),
        ]);
    }
}
