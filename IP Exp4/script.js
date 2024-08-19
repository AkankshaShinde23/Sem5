function validateMobileNumber() {
    const mobileInput = document.getElementById('mobile');
    mobileInput.value = mobileInput.value.replace(/\D/g, ''); // Remove any non-digit characters
    if (mobileInput.value.length > 10) {
        mobileInput.value = mobileInput.value.slice(0, 10); // Restrict to 10 digits
    }
}

function validateForm() {
    const mobileInput = document.getElementById('mobile').value;
    if (mobileInput.length !== 10) {
        alert('Please enter a valid 9 digit number');
        return false; // Prevent form submission
    }
    return true; // Allow form submission
}

document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.order-form').forEach(form => {
        form.addEventListener('submit', function(event) {
            event.preventDefault();
            
            const watchName = this.querySelector('input[name="watchName"]').value;
            const watchPrice = this.querySelector('input[name="watchPrice"]').value;
            const currentDate = new Date().toLocaleDateString();

            const receiptDetails = `
                <strong>Order Confirmation:</strong><br>
                Watch: ${watchName}<br>
                Price: ${watchPrice}<br>
                Date of Receipt: ${currentDate}
            `;

            document.getElementById('receiptDetails').innerHTML = receiptDetails;
            document.getElementById('receipt').style.display = 'block';
        });
    });
});
