<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Sanitize input data
    function clean_input($data) {
        return htmlspecialchars(stripslashes(trim($data)));
    }

    $username = clean_input($_POST["username"]);
    $email = clean_input($_POST["email"]);
    $phone = clean_input($_POST["phone"]);
    $message = clean_input($_POST["message"]);

    // Validate email
    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        echo "<script>alert('Invalid email address! Please enter a valid email.'); window.history.back();</script>";
        exit;
    }

    // Validate phone number (allowing numbers and basic symbols like + and -)
    if (!preg_match("/^[0-9\-\+\s]+$/", $phone)) {
        echo "<script>alert('Invalid phone number! Please enter a valid phone number.'); window.history.back();</script>";
        exit;
    }

    // Ensure no empty fields
    if (empty($username) || empty($email) || empty($phone) || empty($message)) {
        echo "<script>alert('All fields are required! Please fill out the form.'); window.history.back();</script>";
        exit;
    }

    // Email setup
    $to = "jannajustiniano1@gmail.com";
    $subject = "New Contact Form Submission";
    $body = "Username: $username\nEmail: $email\nPhone: $phone\n\nMessage:\n$message";

    // Additional headers to prevent spam filtering
    $headers = "From: Shelves and Storage <$to>\r\n";
    $headers .= "Reply-To: $email\r\n";
    $headers .= "Content-Type: text/plain; charset=UTF-8\r\n";

    // Send the email
    if (mail($to, $subject, $body, $headers)) {
        echo "<script>alert('Message sent successfully!'); window.location.href='index.html';</script>";
    } else {
        // Optional: Log errors (Only for debugging, remove in production)
        error_log("Mail sending failed for: $email");

        echo "<script>alert('Error sending message. Please try again later.'); window.history.back();</script>";
    }
}
?>
