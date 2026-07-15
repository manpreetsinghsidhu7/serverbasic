const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('Hello from your basic Express server!');
});

app.get('/about', (req, res) => {
  res.json({ message: 'This is the about route', status: 'ok' });
});

app.get('/status', (req, res) => {
  res.json({ status: 'running', server: 'basic-express' });
});

app.get('/hello/:name', (req, res) => {
  res.json({ message: `Hello, ${req.params.name}!` });
});

app.use((req, res) => {
  res.status(404).json({ error: 'Route not found' });
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
