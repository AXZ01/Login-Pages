<?php

$host = "localhost"; // replace with your database host
$user = "root"; // replace with your database username
$password = ""; // replace with your database password
$database = "user_authentication"; // replace with your database name

$mysqli = new mysqli($host, $user, $password, $database);

if ($mysqli->connect_error) {
    die("Connection failed: " . $mysqli->connect_error);
}
?>
