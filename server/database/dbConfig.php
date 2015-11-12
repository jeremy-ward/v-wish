<?php
  $host     = 'localhost';
  $user     =  'dev';
  $password = 'password';
  $db       = 'vwish-dev';
  $config   = array(
    'table' => $_GET['table'],
    'json' => true
  );

  $dbc  = mysqli_connect($host, $user, $password, $db) or die(mysqli_connect_error());
  
?>