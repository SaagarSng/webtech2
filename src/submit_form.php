<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Connect to the MySQL database
    $servername = "localhost";
    $username = "username";
    $password = "";
    $dbname = "bit";

    $conn = new mysqli($servername, $username, $password, $dbname);

    // Check connection
    if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
    }
    // Retrieve form data
    $name = $_POST['name'];
    $email = $_POST['email'];
    $phone = $_POST['phone'];
    $message = $_POST['message'];

    // Create a new MySQLi connection
    $mysqli = new mysqli('localhost', 'username', 'password', 'database_name');

    // Check connection
    if ($mysqli->connect_error) {
        die('Connection failed: ' . $mysqli->connect_error);
    }

    // Prepare and bind the SQL statement
    $stmt = $mysqli->prepare('INSERT INTO contacts (name, email, phone, message) VALUES (?, ?, ?, ?)');
    $stmt->bind_param('ssss', $name, $email, $phone, $message);

    // Execute the statement
    if ($stmt->execute()) {
        // Return a success response
        echo json_encode(['success' => true]);
    } else {
        // Return an error response
        echo json_encode(['success' => false, 'error' => $stmt->error]);
    }

    // Close the statement and connection
    $stmt->close();
    $mysqli->close();
}
?>