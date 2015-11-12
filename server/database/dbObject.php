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
    public function find($params=NULL){
      $p = $params!=NULL?" WHERE ".$this->queryString($params):"";
      $q = "SELECT * FROM $this->table".$p;
      return mysqli_query($this->dbc, $q);
    }
    public function getOneByID($id){
      $q = "SELECT * FROM $this->table WHERE id=$id";
      return mysqli_query($this->dbc, $q);
    }
    public function create($obj){
      $q = "INSERT into $this->table ".$this->insertString($obj);
      //echo mysqli_get_host_info($this->dbc);
      echo $q."\n";
      //return mysqli_query($this->dbc, $q);
    }
    private function queryString($params){
      $paramStr = "";
      forEach($params as $prop => $val){
        $paramStr .= $prop."=".$val." ";
      }
      return rtrim($paramStr);
    }
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
    //public function createOne
  }
?>