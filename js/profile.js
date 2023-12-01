
$(document).ready(function () {

    const userDetails = JSON.parse(localStorage.getItem('userDetails'));

    if (userDetails) {

        const profileDetails = $('#profileDetails');
        profileDetails.html(`
            <p><strong>Name:</strong> ${userDetails.name}</p>
            <p><strong>Email:</strong> ${userDetails.email}</p>
            <p><strong>Phone:</strong> ${userDetails.phone}</p>
            <p><strong>Age:</strong> ${userDetails.age}</p>
            <p><strong>Date of Birth:</strong> ${userDetails.dob}</p>
        `);
    } else {

        alert('User details not found. Please log in.');
        window.location.href = 'login.html';
    }
});
