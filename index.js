const connectDB = require('./db');
const express = require('express')

connectDB();
const app = express()
const port = 5555
app.use(express.json())


app.use('/api/auth', require('./routes/auth'))

app.use('/api/notes', require('./routes/notes'))

app.get('/', (req, res) => {
  res.send('hey API is conected')
})









app.listen(port, () => {
  console.log(`Backend app listening at http://localhost:${port}`)
})