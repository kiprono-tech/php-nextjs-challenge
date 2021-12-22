<?php

namespace App\Http\Controllers;

use Illuminate\Foundation\Auth\Access\AuthorizesRequests;
use Illuminate\Foundation\Bus\DispatchesJobs;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Routing\Controller as BaseController;

class TeamController extends BaseController
{
    use AuthorizesRequests, DispatchesJobs, ValidatesRequests;

    protected $movements = [
        'D' => 'Down',
        'U' => 'Up',
        'L' => 'Left',
        'R' => 'Rigth'
    ];

    protected $movements_domain = [
        'D',
        'U', 
        'L',
        'R',
    ];


    public function getInitialMovements() {

        $movements_length = random_int(env('MIN_RAND'),env('MAX_RAND'));
        $movements_str = get_random_movements($movements_length, $this->movements_domain);
        $movements_final = str_to_array_movements($movements_str, $this->movements);

        return response()->json([   'status' => 'ok',
                                    'message' => 'Success', 
                                    'data' => $movements_final], 
                                    200); 


    }

    public function getFinalPosition(Request $request) {
        return response()->json([   'status' => 'ok',
                                    'message' => 'Success', 
                                    'data' => null], 
                                    200); 
    }
}
