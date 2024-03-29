function composeEmail(event) {
    event.preventDefault();
    var email = "alwayscleannt@outlook.com";
    var subject = "Inquiry from Always Clean NT";
    var body = "Hello, I am interested in your cleaning services.";
    var link = "mailto:" + email + "?subject=" + encodeURIComponent(subject) + "&body=" + encodeURIComponent(body);
    window.location.href = link;
}


function handleSubmit(event) {
    event.preventDefault();

    let messageDiv = document.getElementById("message");
    let form = document.getElementById("contactForm");
    let top_form = document.getElementById("topForm");
    let bottom_form = document.getElementById("botForm");
    messageDiv.style.display = "block";
    form.style.height = "29.5rem";
    top_form.style.display = "none";
    bottom_form.style.display = "none";

    setTimeout(function() {
        messageDiv.style.animation = "none";
        void messageDiv.offsetWidth;
        setTimeout(function() {
            messageDiv.style.display = "none";
            form.style.height = "auto";
            top_form.style.display = "flex";
            bottom_form.style.display = "flex";
        }, 500);
    }, 1000);
}
