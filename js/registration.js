
$(document).ready(function () {
    $('.btn-register').click(function () {

        const name = $('#name').val();
        const email = $('#email').val();
        const phoneNumber = $('#phoneNumber').val();
        const age = $('#age').val();
        const dob = $('#dob').val();
        const password = $('#password').val();


        console.log('Name:', name);
        console.log('Email:', email);
        console.log('Phone Number:', phoneNumber);
        console.log('Age:', age);
        console.log('Date of Birth:', dob);
        console.log('Password:', password);


        const data = {
            name: name,
            email: email,
            phoneNumber: phoneNumber,
            age: age,
            dob: dob,
            password: password,
        };


        $.ajax({
            url: 'php/register.php',
            method: 'POST',
            data: data,
            success: function (response) {
                var data = JSON.parse(response);
                if (data.status === 'success') {

                    alert(data.message);


                    setTimeout(function () {
                        window.location.href = 'login.html';
                    }, 4000);
                    alert(data.message);
                }
            },
            error: function (jqXHR, textStatus, errorThrown) {
                console.error('AJAX Error:', errorThrown);
                alert('Registration failed. Check the console for details.');
            }
        });


    });
});
