<?php

namespace App\Http\Controllers;

use App\Mail\PreInscriptionMail;
use App\Models\Inscription;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;

use function PHPUnit\Framework\isNull;

class InscriptionController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return Inscription::all();
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //dd($request);
        $userEnrolled = Inscription::select('id')->where('email', '=', $request->email)->get("id");
        if (count($userEnrolled) === 0) {
            $inscription = new Inscription();
            $inscription->name = $request->name;
            $inscription->race_categorie_id = $request->race_categorie_id;
            $inscription->surname = $request->surname;
            $inscription->dni = $request->dni;
            $inscription->birth = date($request->birth);
            $inscription->gender = $request->gender;
            $inscription->address = $request->address;
            $inscription->country = $request->country;
            $inscription->province = $request->province;
            $inscription->city = $request->city;
            $inscription->phone = $request->phone;
            $inscription->social_work = $request->social_work;
            $inscription->shirt_size = $request->shirt_size;
            $inscription->email = $request->email;
            $inscription->emergency_contac_name = $request->emergency_contac_name;
            $inscription->emergency_contac_phone = $request->emergency_contac_phone;
            $inscription->emergency_contac_bond = $request->emergency_contac_bond;
            $inscription->save();
        }
          /* $arreglocontacto = ["name" => $request->name . " " . $request->surname];
          $correo = new PreInscriptionMail($arreglocontacto);
          if (!Mail::to($request->email)->send($correo)) abort(500); */
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
