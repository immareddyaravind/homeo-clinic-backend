<?php

// app/Models/Doctor.php
namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Doctor extends Model
{
    protected $fillable = ['name', 'title', 'experience', 'specialization', 'expertise', 'quote', 'phone', 'email', 'image_path', 'status'];

    protected $casts = [
        'expertise' => 'array',
        'status' => 'boolean'
    ];
}