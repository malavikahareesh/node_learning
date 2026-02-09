const express = require('express');
const app = express();
app.get('/', (req, res) => {
  res.send('Hello World!');
});
app.get('/about', (req, res) => {
  res.json({message:"Hello from Backend"});
});
const port = 3000;
app.listen(port, () => {  console.log(`Server is running on port http://localhost:${port}`);});
