<?php

if (!function_exists('get_random_movements')) {

  function get_random_movements($n, $domain) {

    $response = '';
    for ($i=1; $i <= $n; $i++) { 
      $random = rand(0, count($domain) - 1);
      $response .= $domain[$random];
    }

    return $response;

  }

}

if (!function_exists('str_to_array_movements')) {

  function str_to_array_movements($str, $domain_arr) {

    $response = [];

    foreach (str_split($str) as $mov) {
      $response[] = [$mov => $domain_arr[$mov]];
     }

    return $response;

  }

}

if (!function_exists('get_final_position')) {

  function get_final_position($init, $movements_list) {

    $actual_position = json_decode($init);
    $response = [];
    foreach (json_decode($movements_list) as $mov) {
      $mov_to_do = get_movement($mov);
      $actual_position[0] = ($actual_position[0] + $mov_to_do[0]) > 0? $actual_position[0] + $mov_to_do[0] : $actual_position[0];
      $actual_position[1] = ($actual_position[1] + $mov_to_do[1]) > 0? $actual_position[1] + $mov_to_do[1] : $actual_position[1];
      $response[] = $actual_position;
    }

    return $response;

  }

}

if (!function_exists('get_movement')) {

  function get_movement($mov) {

    $movement = [];
    switch ($mov) {
      case 'L':
          $movement = [-1, 0];
        break;
      case 'R':
        $movement = [1, 0];
        break;
      case 'U':
        $movement = [0, -1];
        break;
      case 'D':
        $movement = [0, 1];
        break;
    }

    return $movement;

  }

}

