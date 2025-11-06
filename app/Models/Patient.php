<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Patient extends Model
{
    use HasFactory;

    protected $fillable = [
        'full_name',
        'phone_number',
        'email_address',
        'created_at',
        'updated_at'
    ];

    // Relationship: One patient has many appointments/visits
    public function appointments()
    {
        return $this->hasMany(Appointment::class);
    }

    // Relationship: One patient has many visits (medical notes)
    public function visits()
    {
        return $this->hasMany(Visit::class);
    }
}