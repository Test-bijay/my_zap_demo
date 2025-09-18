const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// Middleware to simulate information leakage
app.use((req, res, next) => {
  res.setHeader('X-Powered-By', 'Express 4.17.1'); // Intentionally revealing tech stack
  next();
});

// Vulnerable to reflected XSS
app.get('/xss', (req, res) => {
  const name = req.query.name || 'Guest';
  res.send(`
    <html>
      <head><title>XSS Vulnerable Page</title></head>
      <body>
        <h1>Hello, ${name}</h1> <!-- Unescaped input -->
        <p>This page reflects user input directly.</p>
      </body>
    </html>
  `);
});

// Simulated SQL Injection endpoint (no real DB, but enough for ZAP)
app.get('/login', (req, res) => {
  const user = req.query.user || '';
  const pass = req.query.pass || '';

  // Simulate insecure SQL-like logic
  if (user === "' OR '1'='1" && pass === "' OR '1'='1") {
    res.send("Logged in as admin");
  } else {
    res.send("Invalid credentials");
  }
});

// Information disclosure
app.get('/debug', (req, res) => {
  res.send(`
    <pre>
      DEBUG INFO:
      ENV=development
      DB_USER=root
      DB_PASS=toor
    </pre>
  `);
});

// Default route
app.get('/', (req, res) => {
  res.send(`
    <html>
      <head><title>ZAP Test App</title></head>
      <body>
        <h1>Welcome to ZAP Test App</h1>
        <ul>
          <li><a href="/xss?name=%3Cscript%3Ealert('XSS')%3C/script%3E">Test XSS</a></li>
          <li><a href="/login?user=' OR '1'='1&pass=' OR '1'='1">Test SQL Injection</a></li>
          <li><a href="/debug">View Debug Info</a></li>
        </ul>
      </body>
    </html>
  `);
});

app.listen(port, () => {
  console.log(`Vulnerable app running at http://localhost:${port}`);
});
