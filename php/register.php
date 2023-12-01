<?php
include('db.php');

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $name = $_POST['name'];
    $email = $_POST['email'];
    $phoneNumber = $_POST['phoneNumber'];
    $age = $_POST['age'];
    $dob = $_POST['dob'];
    $password = password_hash($_POST['password'], PASSWORD_BCRYPT);

   

    $stmt = $mysqli->prepare("INSERT INTO users (name, email, phone, age, dob, password) VALUES (?, ?, ?, ?, STR_TO_DATE(?, '%Y-%m-%d'), ?)");
    $stmt->bind_param("ssssss", $name, $email, $phoneNumber, $age, $dob, $password);

    if ($stmt->execute()) {
        echo json_encode(array('status' => 'success', 'message' => 'Registration successful.'));
    } else {
        echo json_encode(array('status' => 'error', 'message' => 'Registration failed.', 'error' => $stmt->error));
    }
    

    $stmt->close();
    $mysqli->close();
} else {
    http_response_code(405); // Method Not Allowed
    echo json_encode(array('status' => 'error', 'message' => 'Method Not Allowed.'));
}
?>
