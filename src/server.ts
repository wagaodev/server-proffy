import express from 'express';

const app = express();

app.post('/users', (req, res) => {
  const users = [
    { name: 'Wagner', age: 26},
    { name: 'Cintia', age: 28}
  ]

  return res.json(users)
});

app.listen(3333);