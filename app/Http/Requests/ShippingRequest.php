<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class ShippingRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'name' => ['required', 'string', 'max:255'],
            'address' => ['required', 'string', 'max:150'],
            'phone' => ['nullable', 'string', 'min:17', 'max:17'],
            'email' => ['nullable', 'string', 'email', 'max:255'],
            'shipping_options' => ['required', 'string'],
            'total_price' => ['required']
        ];
    }
}
