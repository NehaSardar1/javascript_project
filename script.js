$(document).ready(function () {
    $('#registration-form').submit(function (event) {
        event.preventDefault();
        
        var name = $('#name').val();
        var email = $('#email').val();
        var password = $('#password').val();
        var confirmPassword = $('#confirm-password').val();
        
        if (password !== confirmPassword) {
            $('#message').html('<p>Passwords do not match.</p>');
            return;
        }
        
        $.ajax({
            type: 'POST',
            url: '/register',
            data: {
                name: name,
                email: email,
                password: password
            },
            success: function (response) {
                if (response.success) {
                    $('#message').html('<p>Welcome, ' + name + '!</p>');
                } else {
                    $('#message').html('<p>Registration failed. Please try again.</p>');
                }
            },
            error: function () {
                $('#message').html('<p>Error processing the request.</p>');
            }
        });
    });
});
