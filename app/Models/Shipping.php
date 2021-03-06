<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Shipping extends Model
{
    protected $fillable = ["name", "address", 'phone', 'email', 'total_price', 'shipping_options'];
}
