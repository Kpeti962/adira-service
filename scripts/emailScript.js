function sendMail() {
    let params = {
        subject: document.getElementById("options").value,
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        message: document.getElementById("message").value,
    }

    emailjs.send("service_vochazd", "template_q5cwc7b", params).then(alert("Email elküldve!"));

    document.getElementById("options").value = "";
    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("message").value = "";
  
}