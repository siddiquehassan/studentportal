// Login functionality
document.getElementById('login-form').addEventListener('submit', function(event) {
  event.preventDefault();
  const email = document.getElementById('loginEmail').value;
  const password = document.getElementById('loginPassword').value;

  // Sample logic for determining user type (Admin or Student)
  if (email === '123@' && password === '456') {
      document.getElementById('login-section').style.display = 'none';
      document.getElementById('admin-section').style.display = 'block';
  } else {
      document.getElementById('login-section').style.display = 'none';
      document.getElementById('student-section').style.display = 'block';
  }
});

// Add event listener to Add Student form
document.getElementById('add-student-form').addEventListener('submit', function(event) {
  event.preventDefault();
  const firstName = document.getElementById('firstName').value;
  const lastName = document.getElementById('lastName').value;
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  const cnic = document.getElementById('cnic').value;
  const userType = document.getElementById('userType').value;

  console.log(`Student Added: ${firstName} ${lastName}, Email: ${email}, CNIC: ${cnic}, UserType: ${userType}`);
  alert("Student added successfully!");
});

// Add event listener to Upload Marks form
document.getElementById('upload-marks-form').addEventListener('submit', function(event) {
  event.preventDefault();
  const course = document.getElementById('course').value;
  const studentId = document.getElementById('studentId').value;
  const marks = document.getElementById('marks').value;
  const totalMarks = document.getElementById('totalMarks').value;
  const grade = document.getElementById('grade').value;

  console.log(`Marks Uploaded: Course: ${course}, Student ID: ${studentId}, Marks: ${marks}/${totalMarks}, Grade: ${grade}`);
  alert("Marks uploaded successfully!");
});

// Edit Profile functionality
document.getElementById('edit-profile-form').addEventListener('submit', function(event) {
  event.preventDefault();
  const firstName = document.getElementById('editFirstName').value;
  const lastName = document.getElementById('editLastName').value;
  const cnic = document.getElementById('editCnic').value;

  console.log(`Profile Updated: ${firstName} ${lastName}, CNIC: ${cnic}`);
  alert("Profile updated successfully!");
});

// View Result functionality
document.getElementById('view-result-form').addEventListener('submit', function(event) {
  event.preventDefault();
  const cnic = document.getElementById('searchCnic').value;

  // Sample logic for displaying result
  document.getElementById('result-display').style.display = 'block';
  document.getElementById('resultText').innerText = `Results for CNIC: ${cnic} - Marks: 85/100, Grade: A`;
});
