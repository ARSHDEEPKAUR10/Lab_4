// Function to validate the number of tickets
    function validateNumTickets(numTickets) { 
        if (numTickets < 1 || numTickets > 10) {
            return false; 
        }
        return true;
    }

// Function to display an error message next to the input field
    
function displayError(message, field) {
        const errorSpan = document.createElement('span');
        errorSpan.classList.add('error');
        errorSpan.textContent = message;
        field.insertAdjacentElement('afterend', errorSpan);
    }

// Function to clear any existing error message next to the input field
    function clearError(field) {
        const existingError = field.nextElementSibling;
        if (existingError && existingError.classList.contains('error')) {
            existingError.remove();
        }
    }

// Event listener for form submission
    document.getElementById("eventRegistrationForm").addEventListener("submit", function (event) {
        event.preventDefault(); 

        if (validateForm()) {
            window.location.href = "confirmation.html?success=true";
        }
    });

// Single validateForm function that checks all inputs
    function validateForm() {
        let valid = true;

// Validate name input
    const nameInput = document.getElementById("name").value;
    clearError(document.getElementById("name"));
    if (nameInput === "") {
        displayError("Name must be filled out", document.getElementById("name"));
        valid = false;
    }

// Validate email input
    const emailInput = document.getElementById("email").value;
    clearError(document.getElementById("email"));
    if (emailInput === "") {
        displayError("Please enter a valid email", document.getElementById("email"));
        valid = false;
    }

// Validate event type selection
    const eventTypeSelect = document.getElementById("eventType").value;
    clearError(document.getElementById("eventType"));
    if (eventTypeSelect === "") {
        displayError("Please select an event", document.getElementById("eventType"));
        valid = false;
    }

// Validate number of tickets
    const numTickets = document.getElementById('tickets').value;
    clearError(document.getElementById('tickets'));
    if (!validateNumTickets(numTickets)) {
        displayError("Please enter a number of tickets between 1 and 10.", document.getElementById('tickets'));
        valid = false;
    }

    return valid;
}
