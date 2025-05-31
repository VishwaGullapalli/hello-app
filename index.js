const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// Get the name from environment variable
const name = process.env.NAME || '';

app.get('/', (req, res) => {
  if (name) {
    res.send(`
      <!DOCTYPE html>
      <html lang="en">
      <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Greeting</title>
          <style>
              body {
                  font-family: Arial, sans-serif;
                  text-align: center;
                  margin-top: 50px;
              }
              h1 {
                  color: #4CAF50;
              }
          </style>
      </head>
      <body>
          <h1>Hello ${name}!</h1>
          <p>Welcome to the application.</p>
      </body>
      </html>
    `);
  } else {
    res.send(`
      <!DOCTYPE html>
      <html lang="en">
      <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Greeting</title>
          <style>
              body {
                  font-family: Arial, sans-serif;
                  text-align: center;
                  margin-top: 50px;
              }
              h1 {
                  color: #4CAF50;
              }
          </style>
      </head>
      <body>
          <h1>Hello!</h1>
          <p>Welcome to the application.</p>
      </body>
      </html>
    `);
  }
});

app.get('/health', (req, res) => {
  res.status(200).json({ status: 'OK', message: 'Application is running' });
});

process.on('SIGINT', () => {
  console.log('Received SIGINT. Shutting down gracefully...');

  server.close(() => {
    console.log('Closed out remaining connections. Exiting now.');
    process.exit(0);
  });

  setTimeout(() => {
    console.error('Forcing shutdown after timeout.');
    process.exit(1);
  }, 10000);
});

const server = app.listen(port, () => {
  console.log(`Server running on port ${port}`);
  if (name) {
    console.log(`Greeting message: Hello ${name}`);
  } else {
    console.log('Greeting message: Hello');
  }
});