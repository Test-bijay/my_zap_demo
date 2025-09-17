const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send(`
    <html>
      <head><title>ZAP Test App</title></head>
      <body>
        <h1>Hello from ZAP Test App</h1>
        <p>This is a simple app for OWASP ZAP scanning.</p>
      </body>
    </html>
  `);
});

app.listen(port, () => {
  console.log(`App is running at http://localhost:${port}`);
});
