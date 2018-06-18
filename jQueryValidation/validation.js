function validation() {

    $.validator.setDefaults({
        submitHandler: function() {
            alert('You registered successfully!');
        }
    })

    $('#registerForm').validate({
        rules: {
            fName: {
                required: true,
                minlength: 2
            },
            lName: {
                required: true,
                minlength: 2
            },
            email: {
                required: true,
                email: true
            },
            password: {
                required: true,
                minlength: 8
            },
            confirmPass: {
                required: true,
                equalTo: '#pass'
            },
            terms: {
                required: true
            }
        },
        messages: {
            fName: {
                required: 'Please enter a first name!',
                minlength: 'First name should be contains at least 2 characters!'
            },
            lName: {
                required: 'Please enter a last name!',
                minlength: 'Last name should be contains at least 2 characters!'
            },
            email: {
                required: 'Please enter an email!',
                email: 'Please enter a valid email. It should be contains "@" and "."!'
            },
            password: {
                required: 'Please enter a password!',
                minlength: 'Password should be contains at least 8 characters!'
            },
            confirmPass: {
                required: 'Please confirm a password!',
                equalTo: 'Passwords don\'t macth!'
            },
            terms: {
                required: "Please indicate that you accept the Terms and Conditions"
            }
        }

        
    });
    
}