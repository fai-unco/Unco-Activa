<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class UserController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return User::all();
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
        $user = new User();
        $user->user_name = $request->userName;
        $user->email = $request->email;
        $user->password = $request->password;

        //Hash Password
        $user->password = bcrypt($request['password']);
        $user->save();
        $userObj = User::find($user->id);
        $token = $userObj->createToken('token-name')->plainTextToken;
        

        return response()->json(['data'=> $userObj, 'token' => $token, 'token_type' => 'Bearer']);

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


    public function authenticate(Request $request){

        if(auth::attempt($request->only('user_name', 'password'))){
            $user = User::where('user_name', $request['user_name'])->firstOrFail();
            $token = $user->createToken('token-name')->plainTextToken;
            return response()
            ->json([
                'message'=> 'Hi '.$user->user_name, 
                'accesstoken' => $token, 
                'token_type' => 'Bearer',
                'user' => $user,
            ]);
        }/* else{
            return response()
            ->json([
                'message'=> 'no entro'
            ]);
        } */
        return response()->json(['massage' => 'Invalid Credencials'], 401);
    }

    public function logout(){

        Auth::user()->tokens->each(function($token, $key) {
            $token->delete();
        });
        
        return ['message' => 'You have successfully logged out an token was succsessfully deleted'];
    }
}
