<?php
include('db.php'); 

header('Content-Type: application/json'); 

if ($_SERVER["REQUEST_METHOD"] == "POST") {
   
    $higherEducation = $_POST['higherEducation'];
    $collegeName = $_POST['collegeName'];
    $course = $_POST['course'];
    $specification = $_POST['specification'];
    $cgpa = $_POST['cgpa'];

  
    $stmt = $mysqli->prepare("INSERT INTO user_details (higher_education, college_name, course, specification, cgpa) VALUES (?, ?, ?, ?, ?)");


    $stmt->bind_param("sssss", $higherEducation, $collegeName, $course, $specification, $cgpa);


    if ($stmt->execute()) {
        $response = array('status' => 'success', 'message' => 'Details submitted successfully');
    } else {
        $response = array('status' => 'error', 'message' => 'Error submitting details: ' . $stmt->error);
    }


    $stmt->close();

  
    $mysqli->close();


    echo json_encode($response);
} else {

    $response = array('status' => 'error', 'message' => 'Invalid request method');
    echo json_encode($response);
}
?>
