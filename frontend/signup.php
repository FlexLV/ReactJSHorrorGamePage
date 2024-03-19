<?php
// Include the database configuration file (make sure this is secure)
include 'config.php';

// Only allow specific origins if necessary (for better security)
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

// Debugging: Check the request method
$requestMethod = $_SERVER["REQUEST_METHOD"];
echo "Request Method: " . $requestMethod . "<br>";

// Check for POST request
if ($requestMethod == "POST") {
    // Sanitize user inputs
    $firstname = sanitize_input($_POST['firstname']);
    $lastname = sanitize_input($_POST['lastname']);
    $username = sanitize_input($_POST['username']);
    $email = filter_var(sanitize_input($_POST['email']), FILTER_VALIDATE_EMAIL);
    $password = password_hash(sanitize_input($_POST['password']), PASSWORD_DEFAULT); // Hashing the password

    // Check if email is valid
    if (!$email) {
        echo "Invalid email format";
        exit;
    }

    // SQL query to check if the username or email already exists
    $checkSql = "SELECT * FROM lietotajs_admins WHERE Lietotajvards = ? OR `Epasts` = ?";
    $checkStmt = $pdo->prepare($checkSql);
    $checkStmt->execute([$username, $email]);

    if ($checkStmt->rowCount() > 0) {
        echo "Username or Email already exists";
        exit;
    }

    // SQL query to insert user data
    $sql = "INSERT INTO lietotajs_admins (Vards, Uzvards, Lietotajvards, `Epasts`, Parole) VALUES (?, ?, ?, ?, ?)";
    $stmt = $pdo->prepare($sql);

    // Execute and check if the statement was successful
    if ($stmt->execute([$firstname, $lastname, $username, $email, $password])) {
        echo "Registration successful";
    } else {
        echo "Error during registration: " . $stmt->errorInfo()[2]; // Provide the specific error message
    }
} else {
    echo "Invalid request method: " . $requestMethod; // Return an error message for unsupported HTTP methods
}

// Close the database connection
$pdo = null;
echo "PHP script reached the end\n";
?>