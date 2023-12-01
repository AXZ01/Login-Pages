
$(document).ready(function () {
    $('.btn-login').click(function () {

        const email = $('#email').val();
        const password = $('#password').val();

        console.log('Email:', email);
        console.log('Password:', password);


        const formData = {
            email: email,
            password: password,
        };

        $.ajax({
            url: 'php/login.php',
            method: 'POST',
            data: formData,
            success: function (response) {
                var data = JSON.parse(response);
                if (data.status === 'success') {
                    alert(data.message);
                    localStorage.setItem('userDetails', JSON.stringify(data.user));
                    window.location.href = 'profile.html';
                } else {
                    alert(data.message);
                }
            },
            error: function (jqXHR, textStatus, errorThrown) {
                console.error('Login error:', errorThrown);
                alert('Login failed. Check the console for details.');
            }
        });
    });
});
