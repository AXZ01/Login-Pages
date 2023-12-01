// profile.js
$(document).ready(function () {
    // Fetch user details from localStorage
    const userDetails = JSON.parse(localStorage.getItem('userDetails'));

    if (userDetails) {
        // Display user details on the profile page
        const profileDetails = $('#profileDetails');
        profileDetails.html(`
            <p><strong>Name:</strong> ${userDetails.name}</p>
            <p><strong>Email:</strong> ${userDetails.email}</p>
            <p><strong>Phone:</strong> ${userDetails.phone}</p>
            <p><strong>Age:</strong> ${userDetails.age}</p>
            <p><strong>Date of Birth:</strong> ${userDetails.dob}</p>
        `);
    } else {
        // Handle the case where user details are not available
        alert('User details not found. Please log in.');
        window.location.href = 'login.html'; // Redirect to login page
    }
});
