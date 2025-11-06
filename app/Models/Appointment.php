<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Appointment extends Model
{
    use HasFactory;

    protected $fillable = [
        'patient_id',
        'appointment_date',
        'appointment_time',
        'status', // e.g., 'pending', 'completed', 'cancelled'
        'type', // e.g., 'online', 'manual'
        'created_at',
        'updated_at'
    ];

    // Relationship: Many appointments belong to one patient
    public function patient()
    {
        return $this->belongsTo(Patient::class);
    }
}