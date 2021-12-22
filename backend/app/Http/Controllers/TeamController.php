<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
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


    private function validateValues(Request $request) {

        $this->validate($request, [
            'initial' => 'required',
            'items_mov' => 'required',
        ],
        [
            'initial.required' => "Error! El movimiento inicial es requerido para obtener la posición final.",
            'itmov.required' => "Error! El listado de movimientos es requerido para poder calcular la posición final."
        ]);

    }

    public function getFinalPosition(Request $request) {

        $this->validateValues($request);

        try {

            $final_position = get_final_position($request->initial, $request->items_mov);

        }  catch(\Exception $e){
            // do task when error
            return response()->json(['status' => 'fail',
                                    'message' => $e->getMessage(), 
                                'data' => null], 
                                500);
         }

         return response()->json([   'status' => 'ok',
            'message' => 'Success', 
            'data' =>
                ['movements' => $final_position] 
            ], 
         200); 

        
    }
}
