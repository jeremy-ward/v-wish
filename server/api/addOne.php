<?php
  include ('../database/dbConns.php');
  include ('../database/dbMethods.php');

  $postdata   = file_get_contents("php://input");
  $request    = json_decode($postdata);
  $table = $_GET['table'];
  $inputVals  = "";
  $colVals    = "";
  forEach($request as $param => $value){
    $colVals   .= ", ".$param;
    $inputVals .= ", '".$value."'";
  }

  echo addOne($dbc, $table, $colVals, $inputVals);  //returns id of newly created row
?>