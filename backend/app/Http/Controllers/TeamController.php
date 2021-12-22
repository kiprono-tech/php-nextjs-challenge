<?php

namespace App\Http\Controllers;

use Illuminate\Foundation\Auth\Access\AuthorizesRequests;
use Illuminate\Foundation\Bus\DispatchesJobs;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Routing\Controller as BaseController;

class TeamController extends BaseController
{
    use AuthorizesRequests, DispatchesJobs, ValidatesRequests;

    public function getInitialMovements() {
        return response()->json([   'status' => 'ok',
                                    'message' => 'Success', 
                                    'data' => null], 
                                    200); 
    }

    public function getFinalPosition(Request $request) {
        return response()->json([   'status' => 'ok',
                                    'message' => 'Success', 
                                    'data' => null], 
                                    200); 
    }
}
