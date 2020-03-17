<?php

namespace App\Http\Controllers\Api\V1;

use App\Http\Controllers\Controller;
use App\Models\Product;

class ProductController extends Controller
{
    public function index()
    {
        $product = Product::all();
        return $this->response->array($product);
    }
    public function destroy(Product $product)
    {
        $product->delete();
        return $this->response->array([
            'message' => 'Product successfully deleted!'
        ]);
    }
}
