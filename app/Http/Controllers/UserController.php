<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Response;
use Illuminate\Support\Facades\File;
use Illuminate\Support\Facades\Log;
use App\Models\Identity;
use Illuminate\Support\Facades\Validator;
use Jenssegers\Mongodb\Validation;
use Illuminate\Validation\Rule;
use Carbon\Carbon;
use App\Services\ImageWriter;
use Exception;

class UserController extends Controller
{
    public function __construct(ImageWriter $imageWriter)
    {
        // $this->middleware('web');
        $this->imageWriter = $imageWriter;   
    }
    
    public function getIK(Request $request) {
        $data=$request->all();
        Log::info($data);
        $identity = Identity::where('pub', $data['pub'])->first();
        if(isset($identity)){
            $result = array(
                'ik' => $identity->ik,
                'count' => $identity->count
            );
            
            return response()->json($result);
        }
        $result = array('ik' => "identity not found");
        return response()->json($result);
    }

    public function privateArea(Request $request) {
        $data=$request->all();
        $identity = Identity::where('pub', $data['pub'])->first();        
       
        if(isset($identity)){
            if(hash('sha256',$identity->ik) == $data['ik']) {                    

                $result = array(
                    'salut' => $identity->salut,
                    'header' => 'Secret Message',                    
                    'demop' => "Yellow Jack Admiral of the Black nipper parrel careen main sheet rutters spanker yard yawl aft swing the lead jack landlubber or just lubber. Privateer driver parley bilge water blow the man down Buccaneer hulk hardtack fire in the hole loaded to the gunwalls boom hogshead hands chase guns six pounders measured fer yer chains execution dock grog blossom boatswain walk the plank topsail broadside come about schooner no prey, no pay grapple fathom lateen sail matey cog cutlass reef mutiny skysail killick black jack ballast flogging dead men tell no tales mizzen spike Davy Jones' Locker starboard rope's end sheet clap of thunder topmast Sail ho furl Jack Ketch gun Spanish Main scourge of the seven seas gally ho barkadeer long clothes rum poop deck sloop. Carouser rope's end warp bounty brigantine spanker red ensign piracy maroon.",
                );                
                return response()->json($result);
            }
           
        }
        $result = array('ik' => "identity not found");
        return response()->json($result);
    }

    // these PHP functions are compatible with Annika's cryptoJSAesEncrypt, cryptoJSAesDecrypt JS functions
    private function cryptoJSAesEncrypt($plain_text, $passphrase){
        $salt = openssl_random_pseudo_bytes(256);
        $iv = openssl_random_pseudo_bytes(16);    
        $iterations = 999;  
        $key = hash_pbkdf2("sha512", $passphrase, $salt, $iterations, 64);    
        $encrypted_data = openssl_encrypt($plain_text, 'aes-256-cbc', hex2bin($key), OPENSSL_RAW_DATA, $iv);    
        $data = array("ciphertext" => base64_encode($encrypted_data), "iv" => bin2hex($iv), "salt" => bin2hex($salt));
        return json_encode($data);
    }

    private function cryptoJSAesDecrypt($jsonString,$passphrase){
        $jsondata = json_decode($jsonString, true);
        try {
            $salt = hex2bin($jsondata["salt"]);
            $iv  = hex2bin($jsondata["iv"]);          
        } catch(Exception $e) { return null; }
        $ciphertext = base64_decode($jsondata["ciphertext"]);
        $iterations = 999; //same as js encrypting 
        $key = hash_pbkdf2("sha512", $passphrase, $salt, $iterations, 64);
        $decrypted= openssl_decrypt($ciphertext , 'aes-256-cbc', hex2bin($key), OPENSSL_RAW_DATA, $iv);
        return $decrypted;
    }
}
