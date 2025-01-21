document.addEventListener('DOMContentLoaded', () => {
    const dropdown = document.querySelector('.dropdown');
    const dropdownParent = document.querySelector('nav ul li');

    dropdownParent.addEventListener('mouseenter', () => {
        dropdown.style.display = 'block';
    });

    dropdownParent.addEventListener('mouseleave', () => {
        dropdown.style.display = 'none';
    });
});
document.getElementById("contact-form").addEventListener("submit", async function(event) {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    try {
        const response = await fetch("https://formspree.io/f/{YOUR_FORM_ID}", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                name,
                email,
                message,
            }),
        });

        if (response.ok) {
            alert("Thank you for reaching out! I'll get back to you soon.");
            document.getElementById("contact-form").reset();
        } else {
            alert("Oops! Something went wrong. Please try again later.");
        }
    } catch (error) {
        console.error("Error:", error);
        alert("An error occurred. Please try again.");
    }
});
