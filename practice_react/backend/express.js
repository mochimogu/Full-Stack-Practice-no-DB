const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 4321;

app.use(express.json());
app.use(cors());

let backendDatabase = [
    {
        "index" : 0,
        "joke" : 'what did the horse say after it tripped?',
        "answer" : "help! I have fallen and I can't giddy-up"
    },
    {
        "index" : 1,
        "joke" : 'why did the chicken cross the road?',
        "answer" : 'to get to the other side'
    },
    {
        "index" : 2,
        "joke" : 'what do you call a well-balanced horse?',
        "answer" : 'a stable'
    }
];

app.get('/', (req, res) => {
    res.send('Hello World');
})

app.get('/getList', (req, res) => {

    res.status(200).json({backendDatabase})

})

app.post('/addToList', (req, res) => {

    const data = req.body;

    let length = backendDatabase.length

    if(data !== null) {
        const sending = {
            'index': length++,
            'joke': data.joke,
            'answer': data.answer
        }
        backendDatabase.push(sending);
    }

    res.status(200).json({'results' : 'successful'})
})

app.post('/addToList/:index', (req, res) => {

    const data = req.body;
    console.log(data);

    res.status(200).json({'results' : 'successful'});

})

app.delete('/deleteFromList', (req, res) => {
    const deletion = req.body;
    console.log(deletion);
})

app.get('/search/:word', (req, res) => {

    const word = req.params.word;
    console.log(word);

    const sending = [];

    for(let i = 0; i < backendDatabase.length; i++) {
        if(backendDatabase[i].joke.search(word) !== -1) {
            sending.push(backendDatabase[i]);
        }
    }
    
    res.status(200).json(sending);

})

app.listen(PORT, () => {
    console.log(`Listening to PORT : ${PORT}`);

})


