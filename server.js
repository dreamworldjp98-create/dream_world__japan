const express = require("express");
const cors = require("cors"); // Added CORS so your frontend can talk to the backend without errors
const app = express();
const PORT = 3000;

app.use(express.json());
app.use(cors()); 

// Dummy users database
let users = [];

// LOGIN ROUTE
app.post("/login", (req, res) => {
  const { username } = req.body;
  if (!username) {
    return res.status(400).json({ message: "Username required!" });
  }
  users.push(username);
  res.json({ message: "Welcome " + username });
});

// GET USERS ROUTE
app.get("/users", (req, res) => {
  res.json(users);
});

app.listen(PORT, () => console.log("✅ Server running on http://localhost:" + PORT));
