const express = require('express');
const { connect, getDB } = require('./db');

const app = express();
const port = 3000;

app.use(express.json());

app.get('/api/users', async (req, res) => {
  try {
    const db = getDB();
    const users = await db.collection('users').find().toArray();
    res.json(users);
  } catch (error) {
    console.error('Error retrieving users:', error);
    res.status(500).json({ error: 'An error occurred' });
  }
});

app.post('/api/users', async (req, res) => {
  try {
    const db = getDB();
    const user = req.body;
    const result = await db.collection('users').insertOne(user);
    res.json(result.ops[0]);
  } catch (error) {
    console.error('Error creating user:', error);
    res.status(500).json({ error: 'An error occurred' });
  }
});

connect()
  .then(() => {
    app.listen(port, () => {
      console.log(`Server listening on port ${port}`);
    });
  })
  .catch((error) => {
    console.error('Error connecting to the database:', error);
    process.exit(1);
  });
