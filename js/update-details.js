// update-details.js

function submitUpdateDetails() {
    // Fetch form data
    var formData = {
        higherEducation: $("#higherEducation").val(),
        collegeName: $("#collegeName").val(),
        course: $("#course").val(),
        specification: $("#specification").val(),
        cgpa: $("#cgpa").val()
    };

    // Send the data to the server using AJAX
    $.ajax({
        url: 'php/submitDetails.php', // Update the path to your submitDetails.php script
        method: 'POST',
        data: formData,
        success: function (response) {
            var data = JSON.parse(response);
            if (data.status === 'success') {
                alert(data.message);
                // Optionally, redirect to another page or perform additional actions
            } else {
                alert(data.message);
            }
        },
        error: function (jqXHR, textStatus, errorThrown) {
            console.error('AJAX Error:', errorThrown);
            alert('Update details failed. Check the console for details.');
        }
    });
}
