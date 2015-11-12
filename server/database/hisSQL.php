<?php
  include("dbConfig.php");
  class hisSQL{
    public function __construct(array $arguments = array()){
      if (!empty($arguments)) {
        foreach ($arguments as $property => $argument) {
          $this->{$property} = $argument;
        }
      }
      global $dbc;
      $this->dbc = $dbc;
    }

    public function find($params, $limit){
      $l = $limit !=NULL?" LIMIT ".$limit:"";
      $p = $params!=NULL?" WHERE ".$this->queryString($params):"";
      $q = "SELECT * FROM $this->table".$p.$l;
      return $this->returnQuery($q);
    }

    public function findOneById($id){
      $q = "SELECT * FROM $this->table WHERE id=$id";
      return $this->returnQuery($q);
    }

    public function create($obj){
      $q = "INSERT into $this->table ".$this->insertString($obj);
      return $this->returnQuery($q);
    }

    public function removeOneById($id){
      $id = $this->queryString($id);
      $q = "DELETE from $this->table WHERE ".$id;
      return $this->returnQuery($q, $id);
    }

    //private functions

      //excute query and returns either PHP object or JSON
      private function returnQuery($q, $id=NULL){
        if($result = $this->dbc->query($q)){
          $action = substr($q,0,3);
          if($action=="INS"){
            return $this->dbc->insert_id;
          }
          else if($action=="DEL"){
            return "Deleted $id from $this->table";
          }else{
            $output=array();
            while($cRecord = $result->fetch_assoc()){
              $output[] = $cRecord;
            }
            if($this->json){
              return json_encode($output);
            }else{
              return $output;
            }
          }
        }else{
          return "Error: " . $q . "<br>" . $this->dbc->error;
        }
      }

      //create a query string from $params object
      private function queryString($params){
        $paramStr = "(";
        forEach($params as $prop => $val){
          $paramStr .= $prop."='".$val."' AND ";
        }
        return substr($paramStr, 0, -5).")";
      }

      //creata an insert string from $insert object
      private function insertString($insert){
        $headerStr = "(id";
        $valueStr  = "(NULL";
        forEach($insert as $prop => $val){
          $headerStr .= ", ".$prop;
          $escapedStr = mysqli_real_escape_string($this->dbc, $val);
          $valueStr .=", '".$escapedStr."'";
        }
        $headerStr .= ") ";
        $valueStr  .= ")";
        return $headerStr." VALUES ".$valueStr; 
      }
    
  }
?>