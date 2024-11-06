// Import Express Framework
import express from 'express';

// Import data from cars.json
import cars from './data/cars.json' assert { type: 'json'}

const app = express();
const port = 3000;

// Route Root:
// URL => http://localhost:
app.get('/', (req, res) => {
    res.send('<h1>Group 2: Christopher, Juan, Wint</h1>')
});

// Route Root:
// URL => http://localhost:3000/cars
app.get('/cars', (req, res) => {
    res.send(cars)
});

// Listen to the predefined port to run the app
app.listen(port, () => {
    console.log(`Check the cars list here => http://localhost:${port}/cars`)
});