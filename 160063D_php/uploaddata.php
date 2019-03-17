<?php
    header('Access-Control-Allow-Origin:*');

   
   require_once 'dbDetails.php';
//
    session_start();

        $code = $_POST["code"];
        $area = $_POST["area"];
        $therapist = $_POST["therapist"];
        $username = $_POST["username"];
        $name = $_POST["name"];
        $password = $_POST["password"];
        $date = $_POST["date"];
        $imageName = $_POST["imageName"];
        $dateId = $_POST["dateId"];

    
    $response["code"] = $code;
    $response["area"] = $area;
    $response["therapist"] = $therapist;
     $response["name"] = $name;
    $response["password"] = $password;
    $response["date"] = $date;
    $response["username"] = $username;
    $response["imageName"] = $imageName;
    $response["dateId"] = $dateId;
    
    
//    echo json_encode($response);
//    return;
    
    $conn = mysqli_connect(HOST,USER,PASS,DB) or die('Unable to Connect...');
    
    $insert_sql = "INSERT INTO record (code,area,therapist,username,name, password,date,imageName,dateId) VALUES ('$code','$area','$therapist','$username','$name','$password','$date','$imageName','$dateId')";
//     $insert_sql = "INSERT INTO record (code,area,therapist) VALUES ('$code','$area','$therapist')";
    $insert_result = mysqli_query($conn, $insert_sql);
    $rsID = mysqli_insert_id($conn);
    mysqli_close($conn);
    
    if($insert_result) {
        
        $response["ID"] = $rsID;
        $response["success"] = true;
        echo json_encode($response);
    }
    else {
        $response["success"] = false;
        $response["msg"] = mysqli_connect_errno($conn);
        $response["sql"] = $insert_sql;
        echo json_encode($response);
    }
    
    
    
    
?>
