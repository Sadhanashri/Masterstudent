document.addEventListener('DOMContentLoaded', () => {
  // DOM elements
  const signupForm = document.getElementById('signup-form');
  const signupUsernameInput = document.getElementById('signup-username');
  const signupPasswordInput = document.getElementById('signup-password');
  const signupRoleInput = document.getElementById('userrole');
  const loginForm = document.getElementById('login-form');
  const loginUsernameInput = document.getElementById('login-username');
  const loginPasswordInput = document.getElementById('login-password');

  // Signup form submission
  signupForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    const username = signupUsernameInput.value;
    const password = signupPasswordInput.value;
    const role = signupRoleInput.value;

    // Perform signup request
    const response = await fetch('/api/signup', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username, password, userrole }),
    });

    const data = await response.json();
    console.log(data);
  });

  // Login form submission
  loginForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    const username = loginUsernameInput.value;
    const password = loginPasswordInput.value;

    // Perform login request
    const response = await fetch('/api/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username, password }),
    });

    const data = await response.json();
    console.log(data);

    // Redirect based on user role
    if (data.userrole === 'Master') {
      window.location.href = 'master.html';
    } else if (data.userrole === 'Student') {
      window.location.href = 'student.html';
    }
  });
  const fetchActivityLog = async () => {
    // Perform request to fetch activity log
    const response = await fetch('/api/activity-log');
    const data = await response.json();}

    // Display activity log
    activityLog.innerHTML = '';
    data.forEach(activity => {
      const listItem = document.createElement('li');
      listItem.textContent = `Calculation: ${activity.calculation}, Requested by: ${activity.master}, Performed by: ${activity.student}`;
      activityLog.appendChild(listItem);
    });
  });

  // Fetch activity log on page load
  fetchActivityLog();

