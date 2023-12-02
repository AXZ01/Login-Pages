

function submitUpdateDetails() {

    var formData = {
        higherEducation: $("#higherEducation").val(),
        collegeName: $("#collegeName").val(),
        course: $("#course").val(),
        specification: $("#specification").val(),
        cgpa: $("#cgpa").val()
    };


    $.ajax({
        url: 'php/submitDetails.php',
        method: 'POST',
        data: formData,
        success: function (response) {
            var data = JSON.parse(response);
            if (data.status === 'success') {
                alert(data.message);

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
