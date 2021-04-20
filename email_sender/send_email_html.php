<?php

//use PHPMailer\PHPMailer\PHPMailer;

require_once 'PHPMailer/PHPMailerAutoload.php';
//require_once 'PHPMailer/SMTP.php';
//require_once 'PHPMailer/Exception.php';

$mail = new PHPMailer();
if (isset($_POST['submit'])) {
    $subject = $_POST['subject'];
    $to_email_address = $_POST['to_email_address'];
    $to_name = $_POST['to_name'];
    $content = $_POST['content'];
    $cv = $_POST['cv'];
//SMTP settings
//$mail->isSMTP();
    $mail->Host = "smtp.gmail.com";
    $mail->SMTPAuth = true;
    $mail->Username = "abdelrhmanmgahed131@gmail.com";
    $mail->Password = "abdelrhmanradwa1859813497";
    $mail->Port = 587;
    $mail->SMTPSecure = "ssl";


// allow for demo mode testing of emails
    define("DEMO", false); // setting to TRUE will stop the email from sending.

// set the location of the template file to be loaded
    $template_file = "./email_templates/template_email_activation.php";

// set the email 'from' information
    $email_from = "Abdelrhman Mgahed <abdelrhmanmgahed131@gmail.com>";

// create a list of the variables to be swapped in the html template
    $swap_var = array(
        "{SITE_ADDR}" => "http://www.mgahed.me",
        "{EMAIL_LOGO}" => "https://wuzzuf.s3.eu-west-1.amazonaws.com/files/user-photos/thumb_8d0c834f7432b781f38987c54428875a.jpeg",
        "{EMAIL_TITLE}" => $subject,
        "{CUSTOM_URL}" => "http://mgahed.me/cv.pdf",
//        "{CUSTOM_IMG}" => "https://i1.wp.com/www.heytuts.com/wp-content/uploads/2019/05/thumbnail_Send-emails-with-php-from-localhost-with-SendMail.png",
        "{TO_NAME}" => $to_name,
        "{TO_EMAIL}" => $to_email_address,
        "{Content}" => $content,
        "{cv}" => $cv
    );

// create the email headers to being the email
    $email_headers = "From: " . $email_from . "\r\n";
    $email_headers .= "MIME-Version: 1.0\r\n";
    $email_headers .= "Content-Type: text/html; charset=ISO-8859-1\r\n";

// load the email to and subject from the $swap_var
    $email_to = $swap_var['{TO_EMAIL}'];
    $email_subject = $swap_var['{EMAIL_TITLE}']; // you can add time() to get unique subjects for testing: time();

// load in the template file for processing (after we make sure it exists)
    if (file_exists($template_file))
        $email_message = file_get_contents($template_file);
    else
        die ("Unable to locate your template file");

// search and replace for predefined variables, like SITE_ADDR, {NAME}, {lOGO}, {CUSTOM_URL} etc
    foreach (array_keys($swap_var) as $key) {
        if (strlen($key) > 2 && trim($swap_var[$key]) != '')
            $email_message = str_replace($key, $swap_var[$key], $email_message);
    }

// display the email template back to the user for final approval
    echo $email_message;

// check if the email script is in demo mode, if it is then dont actually send an email
    if (DEMO) {
        echo "<hr /><a href='index.php'>Go to home</a><br><br>";
        die("<center>This is a demo of the HTML email to be sent. No email was sent. </center>");
    }


//Mail settings
    $mail->isHTML('true');
    $mail->setFrom('abdelrhmanmgahed131@gmail.com', 'Abdelrhman Mgahd');
    $mail->addAddress($email_to);
    $mail->Subject = $email_subject;
    $mail->Body = $email_message;
    if ($mail->send()) {
        $status = "success";
        echo '<hr /><center>Success! Your email has been sent to ' . $email_to . '</center>';
    } else {
        $status = "failed";
        echo '<hr /><center> UNSUCCESSFUL... Your email was <b>NOT</b> sent. </center>';
        echo 'Mailer error: ' . $mail->ErrorInfo;
    }
    echo "<a href='index.php'>Go to home</a><br><br>";


// send the email out to the user
    if (mail($email_to, $email_subject, $email_message, $email_headers))
        echo '<hr /><center>Success! Your email has been sent to ' . $email_to . '</center>';
    else
        echo '<hr /><center> UNSUCCESSFUL... Your email was <b>NOT</b> sent. </center>';
    
    exit(json_encode(array("response" => $status)));
    
}