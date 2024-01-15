<?php
// Include the database configuration file
include 'config.php';

// Set up headers for CORS
header('Access-Control-Allow-Origin: http://localhost:3000');
header('Access-Control-Allow-Methods: POST, GET, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');

// Function to sanitize input
function sanitize_input($data) {
    $data = trim($data);
    $data = stripslashes($data);
    $data = htmlspecialchars($data);
    return $data;
}

// Check for POST request
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Sanitize user inputs
    $Epasts = sanitize_input($_POST['Epasts']);
    $password = sanitize_input($_POST['password']);

    error_log("Username: " . $Epasts); // Debugging

    // SQL query to fetch user data
    $sql = "SELECT * FROM lietotajs_admins WHERE Lietotajvards = ? OR Epasts = ?";
    $stmt = $pdo->prepare($sql);
    if (!$stmt) {
        error_log("Error in prepare: " . $pdo->errorInfo()[2]);
    }

    if (!$stmt->execute([$Epasts, $Epasts])) {
        error_log("Error in execute: " . $stmt->errorInfo()[2]);
    }

    if ($stmt->rowCount() == 1) {
        $user = $stmt->fetch(PDO::FETCH_ASSOC);

        // Verify the password
        if (password_verify($password, $user['Parole'])) {
            echo "Login successful";
        } else {
            echo "Invalid username or password";
            error_log("Password verification failed");
        }
    } else {
        echo "Invalid username or password";
        error_log("User not found or multiple users returned");
    }
} else {
    echo "Invalid request method";
    error_log("Incorrect request method: " . $_SERVER["REQUEST_METHOD"]);
}

// Close the database connection
$pdo = null;
?>