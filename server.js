

const express = require('express');
const path = require('path');
const fs = require('fs');

const app = express();
const PORT = 3000;


let fileAccessLog = [];


app.use((req, res, next) => {
  const filePath = path.join(__dirname, req.path);
  fileAccessLog.push(filePath);
  console.log("Accessed:", filePath);
  next();
});

app.get('/', (req, res) => {
  res.send(`
    <h1>Welcome to Practical 10</h1>
    <p><a href="/page1">Go to Page 1</a></p>
    <p><a href="/page2">Go to Page 2</a></p>
    <p><a href="/report">View Access Report</a></p>
  `);
});


app.get('/page1', (req, res) => res.send('<h2>This is Page 1</h2>'));
app.get('/page2', (req, res) => res.send('<h2>This is Page 2</h2>'));


app.get('/report', (req, res) => {
  let uniquePaths = [...new Set(fileAccessLog)];

  let result = '';

  if (uniquePaths.length < fileAccessLog.length) {
  
    result += '<h3>Redundancy detected. Using path.resolve() to fix paths.</h3>';
    uniquePaths = uniquePaths.map(p => path.resolve(p));
  } else {
   
    result += '<h3>No redundancy found. Using path.join() for consistency.</h3>';
    uniquePaths = uniquePaths.map(p => path.join(p));
  }

  result += '<ul>' + uniquePaths.map(p => `<li>${p}</li>`).join('') + '</ul>';
  res.send(result);
});


app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
