const express = require('express');
const { translateText } = require('./translation');
const { preprocessText } = require('./preprocessor');

const app = express();
const port = 3000;

app.use(express.json);

//Translation API endpoint
app.post('./translate', (req, res) => {
    const { text } = req.body;

    // Preprocess the input text
    const preprocessedText = preprocessText(text);

    // Translate the preprocessed text
    const translatedText = translateText(preprocessedText);

    // Send the translated text as a response
    req.json({ translatedText });
});

// Start the server
app.listen(port, () => {
    console.log('Server is running on port ${port}');
});