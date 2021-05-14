<?php

function clean_string($string) {

  $bad = array("content-type","bcc:","to:","cc:","href");

  return str_replace($bad,"",$string);

}

function validateForm()
{
  if(isset($_POST['email'])) {
  


    if(!isset($_POST['first_name']) || !isset($_POST['last_name']) || !isset($_POST['email']) ||  !isset($_POST['telephone']) || !isset($_POST['comments'])) {
        redirectError(); 
    }

    $first_name = $_POST['first_name']; // required 
    $last_name = $_POST['last_name']; // required  
    $email_from = $_POST['email']; // require  
    $telephone = $_POST['telephone']; // not required  
    $comments = $_POST['comments']; // required
    $error_message = ""; 
    $email_exp = '/^[A-Za-z0-9._%-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/';

  if(!preg_match($email_exp,$email_from)) {
    redirectError();
  }

    $string_exp = "/^[A-Za-z .'-]+$/";

  if(!preg_match($string_exp,$first_name)) {
    redirectError();
  }

  if(!preg_match($string_exp,$last_name)) {
    redirectError();
  }

  if(strlen($comments) < 2) {
    redirectError();
  }
}
}
  function sendEmail() 
  {
    
    $email_to = "$CONTACT_EMAIL";

    $email_subject = "NESVT Contact Request";

    validateForm();

    $first_name = $_POST['first_name']; // required 
    $last_name = $_POST['last_name']; // required  
    $email_from = $_POST['email']; // require  
    $telephone = $_POST['telephone']; // not required  
    $comments = $_POST['comments']; // required


    $email_message = "Form details below.\n\n";

    $email_message .= "First Name: ".clean_string($first_name)."\n";

    $email_message .= "Last Name: ".clean_string($last_name)."\n";

    $email_message .= "Email: ".clean_string($email_from)."\n";

    $email_message .= "Telephone: ".clean_string($telephone)."\n";

    $email_message .= "Comments: ".clean_string($comments)."\n";


    // create email headers

    $headers = 'From: '.$email_from."\r\n".

    'Reply-To: '.$email_from."\r\n" .

    'X-Mailer: PHP/' . phpversion();

    mail($email_to, $email_subject, $email_message, $headers);

  }

  function redirectError()
  {
    header("Location: contact.html?result=error");
    die();
  }

  function redirectSuccess()
  {
    header('Location: contact.html?result=success');
    die();
  }

  function died($error) {
    header('Location: contact.html?result=error');
    die(); 
  }

  $privatekey = "$CAPTCHA_PRIVATE_KEY";


  $captchaResponse = $_POST['g-recaptcha-response'];


  $response = file_get_contents("https://www.google.com/recaptcha/api/siteverify?secret=&response=".$captchaResponse."&remoteip=".$_SERVER['REMOTE_ADDR']);
  $obj = json_decode($response);
  if($obj->success == true)
  {
    sendEmail();
    redirectSuccess();
  
  }
  else
  {
    redirectError();
  }


?>