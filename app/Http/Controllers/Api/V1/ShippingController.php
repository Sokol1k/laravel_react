<?php

namespace App\Http\Controllers\Api\V1;

use App\Http\Controllers\Controller;
use App\Http\Requests\ShippingRequest;
use App\Models\Shipping;

class ShippingController extends Controller
{
    public function store(ShippingRequest $request)
    {
        $data = $request->all();
        $shipping = Shipping::create($data);
        return $this->response->array($shipping);
    }
}
