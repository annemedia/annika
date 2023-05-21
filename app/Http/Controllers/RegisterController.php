<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\Auth;
use App\Http\Controllers\Controller;
use App\Providers\RouteServiceProvider;
use Illuminate\Foundation\Auth\RegistersUsers;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;

use Illuminate\Http\Request;
use App\Models\Identity;
use Carbon\Carbon;
use Jenssegers\Mongodb\Validation;
use Illuminate\Validation\Rule;
use Exception;
use Illuminate\Support\Facades\Log;
use Jenssegers\Mongodb\Eloquent\Model;
use App\Services\ImageWriter;
use App\Services\TokenManager;

use Jenssegers\Mongodb\Auth\User as Authenticatable;


class RegisterController extends Controller
{

    /**
     * Create a new controller instance.
     *
     * @return void
     */
    private $tokenManager;
    
    public function __construct(ImageWriter $imageWriter, TokenManager $tokenManager)
    {
        // $this->middleware('web');
        $this->imageWriter = $imageWriter;
        $this->tokenManager = $tokenManager;
    }

    public function createID(Request $request) {

        $data=$request->all();
        $ctoken = $request->session()->token();
        // $values=array_values($data);
        $validator = Validator::make($data, [
                    'pub' => [
                        "required", Rule::unique('mongodb.annikaid')
                    ],
                    'salut' => [
                        "required", Rule::unique('mongodb.annikaid')
                    ],
                    'country' => [
                        "required"
                    ],
                ]);
    
        if($validator->fails() )
        {
            return response()->json($validator->errors());
        }

        $timestamp = Carbon::now();
        $image_info = getimagesize($data['pic']);
        $extension = (isset($image_info["mime"]) ? explode('/', $image_info["mime"] )[1]: "jpg");
        $destination =  "img/id/" . $data['salut'] . "." . $extension;
        $this->imageWriter->writeFromBinaryData($destination, $data['pic']);
        $identity = new Identity();
        $identity->pub = $data['pub'];
        $identity->pubhash = hash('sha256', $data['pub']);
        $identity->ik = '';
        $identity->count = '';                
        $identity->salut = $data['salut'];
        $identity->email = $data['email'];
        $identity->country = $data['country'];            
        $identity->pic = $destination;
        $identity->ctoken = $ctoken;
        $identity->created_at = $timestamp;
        $identity->updated_at = $timestamp;
        $identity->save();

        $_id = $identity->id;
        $userid = hash('sha256', $_id);
        $authid = Identity::where('_id', $_id)->first();
        $stoken = $this->tokenManager->createToken($authid)->plainTextToken;
        Log::info($stoken);
        $authid->token = $stoken;
        $authid->save();
        return array($userid, $stoken);
    }

    public function getSalut(Request $request) {
        
        $data=$request->all();
        
        $validator = Validator::make($data, [
            'salut' => [
                "required", Rule::unique('mongodb.annikaid')
            ],
        ]);
        if($validator->fails()) {   
            return response()->json($validator->errors());
        }
        return true;
    }

    public function updateID(Request $request) {
    
        $data=$request->all();
        $validator = Validator::make($data, [
                    'pub' => [
                        "required", Rule::unique('mongodb.annikaid')
                    ],
                    'ik' => [
                        "required", Rule::unique('mongodb.annikaid')
                    ],
                    'count' => [
                        "required"
                    ],
                    'msg' => [
                        "required"
                    ]
                ]);

        if($validator->fails() )
        {
            $timestamp = Carbon::now();
    
            try {
                $identity = Identity::where('pub', $data['pub'])->first();
                $hashhash = hash('sha256',hash('sha256',$identity->id));
                if($hashhash === $data['msg']) {
                    $identity->ik = $data['ik'];
                    $identity->count = $data['count'];
                    $identity->updated_at = $timestamp;
                    if(isset($data['safe'])) {
                        $identity->safe = $data['safe']; 
                    }
                    $identity->save();
                    $true = array("true");
                    return json_encode($true);
                } else {
                    abort(404);
                }
            }
            catch(Exception $e) {
                abort(404);
            }
            // return response()->json($validator->errors());
        }
        else {
            return null;
        }
    }

}

