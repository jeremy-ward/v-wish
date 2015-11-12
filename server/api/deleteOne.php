<?php

  include("../database/dbConns.php");
  include("../database/dbMethods.php");

  $table      = $_GET['table'];
  $postdata   = file_get_contents("php://input");
  $request    = json_decode($postdata);
  $id         = $request->id;

  echo deleteOne($dbc, $table, $id);

?>