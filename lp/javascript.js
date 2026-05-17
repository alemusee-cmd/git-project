const name = document.querySelector("#nameInput").value;

// const cardsArray = [
//   "🍎",
//   "🍎",
//   "🍌",
//   "🍌",
//   "🍒",
//   "🍒",
//   "🥑",
//   "🥑",
//   "🍉",
//   "🍉",
//   "🍇",
//   "🍇",
//   "🥝",
//   "🥝",
//   "🍍",
//   "🍍",
// ];

// // 2. פונקציית הערבוב
// function shuffleCards() {
//   // השורה הזו לוקחת את המערך ומבלגנת את הסדר שלו בצורה רנדומלית
//   cardsArray.sort(() => 0.5 - Math.random());
// }

// const board = document.querySelector(".memory-board");

// function createBoard() {
//   // קודם כל נערבב את הקלפים
//   shuffleCards();

//   // נעבור על כל אימוג'י במערך המעורבב בעזרת forEach
//   cardsArray.forEach((emoji) => {
//     // יצירת אלמנט div קלף "באוויר"
//     const card = document.createElement("div");

//     // הוספת קלאס של CSS שמעצב את הקלף
//     card.classList.add("card");

//     // החבאת האימוג'י בתוך ה-HTML (השחקן לא רואה את זה עדיין)
//     card.dataset.icon = emoji;

//     // אופציונלי: אפשר להכניס את האימוג'י כטקסט, ה-CSS יחביא אותו בהתחלה
//     card.innerHTML = emoji;

//     // הדבקת הקלף ללוח הראשי
//     board.appendChild(card);
//   });
// }

// // הפעלת הפונקציה ליצירת הלוח
// createBoard();
