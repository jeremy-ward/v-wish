<?php
  //returns all rows from provided table and provided db
  function getAll($db, $table)
  {
    $q = "SELECT * from $table";
    return mysqli_query($db, $q);
  }
  //adds values into provide table on provided db
  function addOne($db, $table, $columns, $values){
    $q = "INSERT INTO $table (id $columns) VALUES (NULL $values)";
    if(mysqli_query($db, $q)){
      return mysqli_insert_id($db);
    }else{
      return "Error: " . $q . "<br>" . mysqli_error($db);
    }
  }
  //return JSON verions of mysql query results;
  function returnJSON($result){
    $rows = array();
    while($r = mysqli_fetch_assoc($result)) {
        $rows[] = $r;
    }
    return json_encode($rows);
  }
  //delete on based on id
  function deleteOne($db, $table, $id){
    $q = "DELETE FROM $table WHERE id = $id";
    if(mysqli_query($db, $q)){
      return 'deleted '.$id;
    }else{
      return "Error: " . $q . "<br>" . mysqli_error($db);
    }
  } 
?>