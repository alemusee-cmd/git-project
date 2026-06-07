const API_URL = "http://localhost:3000/api/users";

async function loadUsers() {
  try {
    const response = await fetch(API_URL);
    const users = await response.json();
    console.log(users);
  } catch (error) {
    console.error(error, "error loading users");
  }
}

function renderUsers(users) {}
loadUsers();
