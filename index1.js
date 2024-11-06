// Import Express Framework
import express from 'express';

const app = express()
const port = 3000

// Route Root:
// URL => http://localhost:
app.get('/', (req, res) => {
    res.send('<h1>Group 2: Christopher, Juan, Wint</h1>')
});

app.listen(port,() => {
    console.log(`App listening on port http://localhost:${port}`)
});