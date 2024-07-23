function sendMail() {

const wrongAlert = document.querySelector(".wrongAlert");
const successAlert = document.querySelector(".successAlert");
    const params = {
        subject: document.getElementById("options").value,
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        message: document.getElementById("message").value
    };
    
    let datasheet = document.getElementById("checkbox").checked;
    
    if (datasheet && params.subject !== "" && params.email !== "" && params.message !== "") {
        emailjs.send("service_vochazd", "template_q5cwc7b", params)
        .then(() => {
            successAlert.classList.remove("hidden");
            setTimeout(() => {
                successAlert.classList.add("hidden");
            }, 3000);
        });

        document.getElementById("options").value = "";
        document.getElementById("name").value = "";
        document.getElementById("email").value = "";
        document.getElementById("message").value = "";
        document.getElementById("checkbox").checked = false;
    } else if(!datasheet){
        wrongAlert.classList.remove("hidden")
        
        setTimeout(() => {
             wrongAlert.classList.add("hidden")
          }, 3000);
    }

}
