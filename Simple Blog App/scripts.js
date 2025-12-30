const navlinks = document.querySelectorAll('a[href^="#"]');

// scrolling effect
navlinks.forEach(link => {

    // add event listerner to each link
    link.addEventListener('click', function(e) {

        // prevent default behaviour of link
        e.preventDefault();

        // get target element id from href attribute
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.querySelector(targetId);

        // scroll to target element smmothly
        if (targetElement){
            targetElement.scrollIntoView(({
                behavior: 'smooth',
                block: 'start'
            }));
        }
});
});


async function handleFormSubmit(event) {

    // prevent default form submission behavior
    event.preventDefault();

    // get form data using the formAPI
    const form = event.target;
    const formData = new FormData(form);


    try {

        // use fetch API for an asynchronous Post request
        const response = await fetch("/send-email", {
            method: "POST",// use POST method to send the form data
            contentType: "application/json",
            body: JSON.stringify(data)
        });

        // wait for the response and check if  it was successfully sent
        if (!response.ok) {
            // if the response is not ok, throw an error
            throw new Error(`HTTP error! status: ${response.status}`);

        }

        // process the response data
        const result = await response.json();
        console.log("email sent successfully:", result);
        alert("Email sent successfully!");
        form.reset(); // reset the form fields
    } catch (error) {
        console.error("Error sending email:", error);
        alert("Failed to send Message.")
    }
}


// add event listener to the form submit event
document.addEventListener("DOMContentLoaded", (event) => {
    const ContactForm = document.getElementById("contact-form");
    if (ContactForm) {
        ContactForm.addEventListener("submit", handleFormSubmit);
    }
});
