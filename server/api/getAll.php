<?php
  include('../database/dbConfig.php');
  include('../database/dbMethods.php');

  $table = $_GET['table'];
  echo returnJSON(getAll($dbc, $table));//*/
?>