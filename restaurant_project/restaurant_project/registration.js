document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    fetch('/auth/users/', { // Djoser registration endpoint
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({username: username, password: password})
    })
    .then(response => response.json())
    .then(data => {
        console.log('Success:', data);
        // Handle success (e.g., redirect to login page)
    })
    .catch(error => {
        console.error('Error:', error);
        // Handle error
    });
});

// booking.js
document.getElementById('bookingForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const date = document.getElementById('date').value;
    const time = document.getElementById('time').value;
    const table_size = document.getElementById('table_size').value;

    // Assume you have a JWT token stored
    const token = localStorage.getItem('jwt_token');

    fetch('/api/bookings/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}` // Include JWT token
        },
        body: JSON.stringify({date: date, time: time, table_size: table_size})
    })
    .then(response => response.json())
    .then(data => {
        console.log('Success:', data);
        // Handle success (e.g., display confirmation message)
    })
    .catch(error => {
        console.error('Error:', error);
        // Handle error
    });
});