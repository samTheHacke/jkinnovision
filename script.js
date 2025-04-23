(function(){
    emailjs.init("mvUR1At4mqgzKEnk7");
})();

document.getElementById('contactForm').addEventListener('submit', function (e) {
    e.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const message = document.getElementById('message').value;


    emailjs.send("service_tbk4v9g", "template_bxkc6ri", {
        name: name,
        email: email,
        message: " message from customer is : " + message + " phone number of customer is: "+ phone
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