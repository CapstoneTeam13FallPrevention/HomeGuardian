<?php
    require_once 'dbDetails.php';

    session_start();


        $input = file_get_contents("php://input");
        $jsonObj = json_decode($input, true);
        
    
        $conn = mysqli_connect(HOST,USER,PASS,DB) or die('Unable to Connect...');
        $select_sql = "SELECT * FROM record";
        $select_result = mysqli_query($conn, $select_sql);
        $a=array();
        while ( $rows = mysqli_fetch_assoc($select_result)) {
           array_push($a,$rows);
        }
      
        $response["success"] = "1";
        $response["data"] = $a;
        echo json_encode($response);
        mysqli_close($conn);
    
?>



      
    