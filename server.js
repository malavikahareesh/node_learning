const express = require('express');
const app = express();
app.use(express.json());
let users = [];
app.get('/', (req, res) => {
  res.send('Hello World!');
});
app.get('/about', (req, res) => {
  res.json({message:"Hello from Backend"});
});
app.post('/users', (req, res) => {
  const user = req.body;
    users.push(user);
    res.json({message: "User added successfully", users});
});
app.get('/users', (req, res) => {
  res.json(users);
});


const port = 3000;
app.listen(port, () => {  console.log(`Server is running on port http://localhost:${port}`);});
