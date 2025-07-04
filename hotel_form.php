<?php
$connection = mysqli_connect('localhost', 'root', '', 'hotel_db');
if (!$connection) {
    die("Connection failed: " . mysqli_connect_error());
}

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST['name'];
    $email = $_POST['email'];
    $phone = $_POST['phone'];
    $arrival = $_POST['arrival'];
    $leaving = $_POST['leaving'];
    $guests = $_POST['guests'];

    $query = "INSERT INTO hotel_form (Name, Email, Phone, Arrival, Leaving, Guests)
              VALUES ('$name', '$email', '$phone', '$arrival', '$leaving', '$guests')";

    if (mysqli_query($connection, $query)) {
        // Redirect to success page
        header('Location: booking-success.html');
        exit();
    } else {
        echo "Database Error: " . mysqli_error($connection);
    }
} else {
    echo "Something went wrong, try again.";
}
?>
