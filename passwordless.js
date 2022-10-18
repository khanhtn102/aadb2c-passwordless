const signInName = "signInName";
const buttonSubmit = "next";

// Check page already init set email/ phone to input
const intervalSubmit = setInterval(_ => {

    // Make sure the page is loaded
    let userInputElement = document.getElementById(signInName);
    if (userInputElement) {
        // Get user input
        const queryParams = new URLSearchParams(window.location.search);
        const token = queryParams.get("inputValue");
        if (token) {
            let inputValue = atob(token);
            // Set input value and submit form
            document.getElementById(signInName).value = inputValue;
            document.getElementById(buttonSubmit).click();
        }

        // Clear interval
        clearInterval(intervalSubmit);
    }
}, 100);