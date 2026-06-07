const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

// This keeps your portfolio website visible
app.use(express.static(__dirname)); 

// A simple test message to show it works
app.get('/api/status', (req, res) => {
  res.json({ 
    status: "Success", 
    message: "Your backend server is officially up and running!" 
  });
});

// Automatically use Replit's system port
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is perfectly running on port ${PORT}`);
});