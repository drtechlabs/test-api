import express from 'express';

const app = express();
const PORT = process.env.PORT || 3000;

app.get('/test', (req, res) => {
  res.json({ message: 'Test OK' });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
}); 