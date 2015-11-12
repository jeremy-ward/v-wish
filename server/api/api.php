<?php
  include("../database/hisSQL.php");

  $request = $_SERVER['REQUEST_METHOD'];
  if($request!="GET"){
    $reqParams    = json_decode(file_get_contents("php://input"));
  }else{
    parse_str($_SERVER['QUERY_STRING'], $reqParams);
  }
  // echo json_encode($reqParams);/*
  $params = array();
  $limit=NULL;
  forEach($reqParams as $key => $value){
    if($key=='limit'){
      $limit = $value;
    }
    else if($key!='table'){
      $params[$key] = $value;
    }
  }
  
  $params=empty($params)?NULL:$params; //if no params set equal to NULL for find method

  $dbObj = new hisSQL($config);
  switch ($request) {
    case 'POST':
      echo $dbObj->create($params);
      break;
    case 'GET':
      echo $dbObj->find($params, $limit);
      break;
    case 'DELETE':
      echo $dbObj->removeOneById($params);
      break;
    default:
      echo "did not understand your request method";
  }//*/
?>