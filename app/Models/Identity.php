<?php

namespace App\Models;

use Illuminate\Support\Facades\Auth;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Jenssegers\Mongodb\Eloquent\Model;
use Jenssegers\Mongodb\Eloquent\SoftDeletes;
use Jenssegers\Mongodb\Auth\User as Authenticatable;
use Laravel\Sanctum\HasApiTokens;
use Illuminate\Notifications\Notifiable;

class Identity extends Authenticatable
{
    use HasFactory;
    use Notifiable;
    use HasApiTokens;
    
    protected $connection = 'mongodb';
    protected $collection = 'annikaid';
    public $timestamps = true;
    protected $primaryKey = '_id';
    protected $hidden = ['_id'];
    
    protected $fillable = [
        'pub', 'pubhash', 'ik', 'count', 'salut', 'email', 'country', 'pic', 'token'
    ];
}
