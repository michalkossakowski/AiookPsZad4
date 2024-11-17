import fs from 'fs';
import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';

const app = express();

app.use(cors());
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

app.get('/', (req, res) => {
    res.send('Server with students');
});

app.get('/students', (req, res) => {
    fs.readFile('./students.json', 'utf8', (err, students) => {
        if (err) {
            console.log("File read failed in GET /students: "+ err);
            res.status(500).send('File read failed');
            return;
        }
        console.log("GET: /students");
        res.send(students);
    });
});

app.listen(7777, () => console.log("Server address http://localhost:7777"));