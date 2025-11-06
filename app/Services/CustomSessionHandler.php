<?php

namespace App\Services;

use Illuminate\Session\HandlerInterface;
use Illuminate\Support\Facades\DB;

class CustomSessionHandler implements HandlerInterface
{
    public function __construct()
    {
        // Any initialization, if needed
    }

    // Open the session (optional)
    public function open($savePath, $sessionName)
    {
        return true;
    }

    // Close the session (optional)
    public function close()
    {
        return true;
    }

    // Read a session
    public function read($sessionId)
    {
        // Fetch the session data from the 'users' table, assuming you're using a column like 'session_data' or similar
        $session = DB::table('users')->where('id', 1)->first(); // Update this query according to your needs
        return $session ? $session->session_data : '';
    }

    // Write session data
    public function write($sessionId, $data)
    {
        // You might want to write the session data to a user or other table
        DB::table('users')
            ->where('id', 1) // Here, modify based on your session logic
            ->update(['session_data' => $data]);

        return true;
    }

    // Destroy a session
    public function destroy($sessionId)
    {
        DB::table('users')->where('id', 1)->update(['session_data' => '']); // Modify as needed
        return true;
    }

    // Garbage collection (optional, can be ignored)
    public function gc($lifetime)
    {
        return true;
    }
}
