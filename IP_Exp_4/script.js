// JavaScript for form validation and receipt generation
function validateForm(event) {
    const tagline = document.getElementById('tagline').value;
    const phone = document.getElementById('phone').value;

    // Validate tagline length
    if (tagline.length > 100) {
        alert("Tagline must be 100 characters or less.");
        event.preventDefault();
        return false;
    }

    // Validate phone number
    if (phone.length !== 10 || isNaN(phone)) {
        alert("Phone number must be exactly 10 digits.");
        event.preventDefault();
        return false;
    }

    return true;
}

function generateReceipt(event) {
    if (!validateForm(event)) return;

    // Get form data
    const formData = new FormData(document.querySelector('form'));
    const receipt = `
        <h2>Order Receipt</h2>
        <p><strong>Date:</strong> ${new Date().toLocaleDateString()}</p>
        <p><strong>Tagline:</strong> ${formData.get('tagline')}</p>
        <p><strong>Color:</strong> ${formData.get('color')}</p>
        <p><strong>Size:</strong> ${formData.get('size')}</p>
        <p><strong>Quantity:</strong> ${formData.get('quantity')}</p>
        <p><strong>Delivery Date:</strong> ${formData.get('delivery-date')}</p>
        <p><strong>Recipient's Name:</strong> ${formData.get('name')}</p>
        <p><strong>Address:</strong> ${formData.get('address')}</p>
        <p><strong>Email:</strong> ${formData.get('email')}</p>
        <p><strong>Phone Number:</strong> ${formData.get('phone')}</p>
        <p><strong>Comments:</strong> ${formData.get('comments')}</p>
    `;

    // Show receipt
    document.body.innerHTML += receipt;
    event.preventDefault(); // Prevent form submission for demo
}

// Define the Person class
class Person {
    constructor(name, address, email, phone) {
        this.name = name;
        this.address = address;
        this.email = email;
        this.phone = phone;
    }

    // Method to display details
    displayDetails() {
        console.log(`Name: ${this.name}`);
        console.log(`Address: ${this.address}`);
        console.log(`Email: ${this.email}`);
        console.log(`Phone: ${this.phone}`);
    }

    // Arrow function to show a greeting
    greet = () => console.log(`Hello, ${this.name}!`);
}

// Define the Student class inheriting from Person
class Student extends Person {
    constructor(name, address, email, phone, rollNo) {
        super(name, address, email, phone);
        if (rollNo <= 0) {
            throw new Error("Roll number must be positive.");
        }
        this.rollNo = rollNo;
    }

    // Override displayDetails method
    displayDetails() {
        super.displayDetails();
        console.log(`Roll Number: ${this.rollNo}`);
    }
}

// Example usage
window.onload = () => {
    try {
        const student = new Student('John Doe', '123 Elm St', 'john@example.com', '1234567890', 1);
        student.displayDetails();
        student.greet();
    } catch (e) {
        console.error(e.message);
    }
};
