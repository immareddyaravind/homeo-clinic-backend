<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Response;

class DatabaseExportController extends Controller
{
    public function export()
    {
        try {
            // Get all tables
            $tables = DB::select('SHOW TABLES');
            $databaseName = DB::getDatabaseName();
            
            $sql = "-- Database Export\n";
            $sql .= "-- Generated: " . now() . "\n\n";
            
            foreach ($tables as $table) {
                $tableName = $table->{'Tables_in_' . $databaseName};
                
                // Skip migrations table
                if ($tableName === 'migrations') {
                    continue;
                }
                
                // Get table structure
                $createTable = DB::select("SHOW CREATE TABLE `$tableName`")[0];
                $sql .= "\n-- Table structure for table `$tableName`\n";
                $sql .= $createTable->{'Create Table'} . ";\n\n";
                
                // Get table data
                $rows = DB::table($tableName)->get();
                
                if ($rows->count() > 0) {
                    $sql .= "-- Dumping data for table `$tableName`\n";
                    
                    foreach ($rows as $row) {
                        $values = array_map(function($value) {
                            if ($value === null) {
                                return 'NULL';
                            }
                            return "'" . addslashes($value) . "'";
                        }, (array) $row);
                        
                        $sql .= "INSERT INTO `$tableName` (`" . implode('`, `', array_keys((array) $row)) . "`) VALUES (" . implode(', ', $values) . ");\n";
                    }
                    $sql .= "\n";
                }
            }
            
            $filename = 'database_backup_' . date('Y-m-d_H-i-s') . '.sql';
            
            return Response::make($sql, 200, [
                'Content-Type' => 'application/sql',
                'Content-Disposition' => 'attachment; filename="' . $filename . '"'
            ]);
            
        } catch (\Exception $e) {
            return redirect()->back()->with('error', 'Database export failed: ' . $e->getMessage());
        }
    }
}