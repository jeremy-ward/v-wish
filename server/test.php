<?php
  
  include("database/dbObject.php");

  $config=array(
      'table' => "email"
    );
  $params=array(
      'name' => "jeremy"
    );

  $myObj = new hisSQL($config);
  echo $myObj->create($params);//*/
?>