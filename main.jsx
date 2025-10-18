function sendmail(event) {
    event.preventDefault(); // prevent default form submission

    const parms = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        phone: document.getElementById("phone").value,
        message: document.getElementById("message").value
    };

    // emailjs.send(serviceID, templateID, templateParams)
+    emailjs.send("service_whtaoqe", "template_77yw8pf", parms)
        .then(function(response) {
            alert("Message Sent Successfully!");
            const form = document.getElementById('contact');
            if (form) form.reset(); // clear form
            console.log('EmailJS response:', response);
        })
}
