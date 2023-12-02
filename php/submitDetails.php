<?php
include('db.php'); // Include the database connection file

header('Content-Type: application/json'); // Set the content type to JSON

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Fetch form data
    $higherEducation = $_POST['higherEducation'];
    $collegeName = $_POST['collegeName'];
    $course = $_POST['course'];
    $specification = $_POST['specification'];
    $cgpa = $_POST['cgpa'];

    // Prepare and bind the SQL statement
    $stmt = $mysqli->prepare("INSERT INTO user_details (higher_education, college_name, course, specification, cgpa) VALUES (?, ?, ?, ?, ?)");

    // Bind parameters
    $stmt->bind_param("sssss", $higherEducation, $collegeName, $course, $specification, $cgpa);

    // Execute the statement
    if ($stmt->execute()) {
        $response = array('status' => 'success', 'message' => 'Details submitted successfully');
    } else {
        $response = array('status' => 'error', 'message' => 'Error submitting details: ' . $stmt->error);
    }

    // Close the statement
    $stmt->close();

    // Close the database connection
    $mysqli->close();

    // Return the JSON response
    echo json_encode($response);
} else {
    // Handle invalid request method (not POST)
    $response = array('status' => 'error', 'message' => 'Invalid request method');
    echo json_encode($response);
}
?>
