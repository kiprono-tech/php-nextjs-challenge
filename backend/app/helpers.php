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