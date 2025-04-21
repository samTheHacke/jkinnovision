(function(){
    emailjs.init("mvUR1At4mqgzKEnk7"); // Your EmailJS User ID
})();

document.getElementById('contactForm').addEventListener('submit', function (e) {
    e.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    console.log("email sending");
    debugger;

    emailjs.send("service_tbk4v9g", "template_bxkc6ri", {
        name: name,
        email: email,
        message: message
    })
    .then(function(response) {
        // Show the success popup
        const modal = new bootstrap.Modal(document.getElementById('messageSentModal'));
        modal.show();
        document.getElementById('contactForm').reset();
    }, function(error) {
        alert('Failed to send message. Please try again.');
        console.error('EmailJS error:', error);
    });
});