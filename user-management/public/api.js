const API_URL = "http://localhost:3000/api/users";

const totalUsers = document.getElementById("totalUsers");
const avgAge = document.getElementById("avgAge"); // תוקן בהתאם ל-HTML (avgAge במקום Average)
const addUserForm = document.getElementById("addUserForm");
const usersGrid = document.getElementById("usersGrid");

async function loadUsers() {
  try {
    const response = await fetch(API_URL);
    const users = await response.json();
    console.log(users);

    // בונוס: נעדכן גם את הסטטיסטיקות על המסך אם האלמנטים קיימים
    if (totalUsers) totalUsers.innerText = users.length;

    renderUsers(users);
  } catch (error) {
    console.error("error loading users:", error);
  }
}

function renderUsers(users) {
  if (users.length === 0) {
    usersGrid.innerHTML = `<p>no users yet, please add one.</p>`;
    return;
  }

  usersGrid.innerHTML = users
    .map(
      (user) => `
    <div class="card">
        <button class="deleteBtn" onclick="deletedUser('${user._id}')">delete</button>
        <div><strong>Name:</strong> ${user.name}</div>
        <div><strong>Email:</strong> ${user.email}</div>
        <div><strong>Age:</strong> ${user.age}</div>
    </div>
    `,
    )
    .join("");
}

async function deletedUser(id) {
  // תוקן: עטיפת הכל בסוגריים מסולסלים כדי שהתנאי יעבוד כמו שצריך
  if (confirm("are you sure you want to delete this user?")) {
    try {
      await fetch(`${API_URL}/${id}`, {
        method: "DELETE",
      });
      loadUsers(); // רענון הרשימה לאחר המחיקה
    } catch (error) {
      // תוקן: הוספת (error) לתוך ה-catch
      console.error("error deleting user:", error);
    }
  }
}

// הפעלה ראשונית של טעינת המשתמשים
loadUsers();
