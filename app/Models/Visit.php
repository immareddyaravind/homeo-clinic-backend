<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Visit extends Model
{
    use HasFactory;

    protected $fillable = [
        'patient_id',
        'visit_date',
        'symptoms',
        'medical_notes',
        'created_at',
        'updated_at'
    ];

    // Relationship: Many visits belong to one patient
    public function patient()
    {
        return $this->belongsTo(Patient::class);
    }
}