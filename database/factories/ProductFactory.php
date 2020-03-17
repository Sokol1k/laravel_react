<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Models\Product;
use Faker\Generator as Faker;

$factory->define(Product::class, function (Faker $faker) {
    return [
        'title' => $faker->text($maxNbChars = 50),
        'description' => $faker->text($maxNbChars = 150),
        'price' => 15,
        'total_price' => 15
    ];
});
