// Existing login functionality
document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;

    if (email === '123@' && password === '456') {
        document.getElementById('login-section').style.display = 'none';
        document.getElementById('admin-section').style.display = 'block';
    } else {
        document.getElementById('login-section').style.display = 'none';
        document.getElementById('student-section').style.display = 'block';
    }
});

// Add functionality to toggle between login and signup forms
document.getElementById('show-signup').addEventListener('click', function(event) {
    event.preventDefault();
    document.getElementById('login-section').style.display = 'none';
    document.getElementById('signup-section').style.display = 'block';
});

document.getElementById('show-login').addEventListener('click', function(event) {
    event.preventDefault();
    document.getElementById('signup-section').style.display = 'none';
    document.getElementById('login-section').style.display = 'block';
});

// Signup functionality
document.getElementById('signup-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const firstName = document.getElementById('signupFirstName').value;
    const lastName = document.getElementById('signupLastName').value;
    const email = document.getElementById('signupEmail').value;
    const password = document.getElementById('signupPassword').value;
    const cnic = document.getElementById('signupCnic').value;

    console.log(`User Signed Up: ${firstName} ${lastName}, Email: ${email}, CNIC: ${cnic}`);
    alert("Signup successful!");

    // Redirect to login after successful signup
    document.getElementById('signup-section').style.display = 'none';
    document.getElementById('login-section').style.display = 'block';
});
