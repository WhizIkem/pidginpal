const express = require('express');
const { translateText } = require('./translation');
const { preprocessText } = require('./preprocessor');

const app = express();
const port = 3000;

app.use(express.json());

//  const { text } = req.body;
app.route('/translate')
.get((req, res) => {
    res.send('This endpoint only accepts POST requests.');
  })
  .post((req, res) => {
    const { text } = req.body;
    // Preprocess the input text
    console.log('Request body', req.body); // Verify the request body contents
    const preprocessedText = preprocessText(text);

    // Translate the preprocessed text
    const translatedText = translateText(preprocessedText);

    // Send the translated text as a response
    res.json({ translatedText: translatedText });
});

// Additional route
app.get('/', (req, res) => {
    res.send('Welcome to PidginPal!');
});
// Start the server
app.listen(port, () => {
    console.log('Server is running on port ${port}');
});