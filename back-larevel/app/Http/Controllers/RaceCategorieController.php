<?php

namespace App\Http\Controllers;

use App\Models\RaceCategorie;
use Illuminate\Http\Request;

class RaceCategorieController extends Controller
{
    public function index(){
        return RaceCategorie::all();
    }
}
