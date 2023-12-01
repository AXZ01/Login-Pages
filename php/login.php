<?php
include('db.php');


if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405); 
    exit('Method Not Allowed');
}

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $email = $_POST['email'];
    $password = $_POST['password'];

    
    $stmt = $mysqli->prepare("SELECT * FROM users WHERE email = ?");
    $stmt->bind_param("s", $email);
    $stmt->execute();
    $result = $stmt->get_result();

    if ($result->num_rows > 0) {
        $user = $result->fetch_assoc();
        if (password_verify($password, $user['password'])) {
            echo json_encode(array('status' => 'success', 'message' => 'Login successful.', 'user' => $user));
        } else {
            echo json_encode(array('status' => 'error', 'message' => 'Incorrect password.'));
        }
    } else {
        echo json_encode(array('status' => 'error', 'message' => 'Account not found.'));
    }

    $stmt->close();
    $mysqli->close();
}
?>
