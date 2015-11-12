<?php
  include('../database/dbConns.php');
  include('../database/dbMethods.php');

  $table = $_GET['table'];
  echo returnJSON(getAll($dbc, $table));//*/
?>