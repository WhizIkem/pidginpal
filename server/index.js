const express = require('express');
const { translateText } = require('./translation');
const { preprocessText } = require('./preprocessor');
const path = require('path');

const app = express();
const port = 3000;

app.use(express.json());

// Serve static files from the "client" directory
app.use(express.static(path.join(__dirname, '../client')));

// Handle the root URL
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/index.html'));
});

// Handle the translation endpoint
app.post('/translate', (req, res) => {
    const { text } = req.body;

    // Preprocess the input text
    const preprocessedText = preprocessText(text);

    // Translate the preprocessed text
    translateText(preprocessedText)
        .then(translatedText => {
            // Send the translated text as a response
            res.json({ translatedText });
        })
        .catch(error => {
            console.error('Translation error:', error);
            res.status(500).json({ error: 'Translation failed' });
        });
});

// Additional route
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/index.html'));
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});