document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting the traditional way

    // Show the span message
    var sendingMessageSpan = document.getElementById('sending-message');
    sendingMessageSpan.style.display = 'inline';

    // Get form data
    let email = document.getElementById('email').value;
    let message = document.getElementById('message').value;

    // Encode the email and message to be used in a URL
    let subject = "Contact Form Submission";
    let body = `Email: ${email}\n\nMessage: ${message}`;

    // Create the mailto link
    var mailtoLink = `mailto:bknideesh@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    // Redirect to the mailto link after a short delay to show the span message
    setTimeout(function() {
        window.location.href = mailtoLink;

        // Hide the span message after redirection (assuming email client opens quickly)
        setTimeout(function() {
            sendingMessageSpan.style.display = 'none';
        }, 1000);
    }, 1000);
});
