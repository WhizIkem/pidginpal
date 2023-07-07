const axios = require('axios');

// Define the URL of the translation endpoint
const url = 'http://localhost:3000/translate';

// Define the text to be translated
const text = 'Hello, how are you?';


// Define the request body with the text to be translated
const requestBody = {
    text: text
  };
  
  // Send a POST request to the translation endpoint
  axios.post(url, requestBody)
    .then(response => {
      // Handle the response from the server
      const translatedText = response.data.translatedText;
      console.log(`Original text: ${text}`);
      console.log(`Translated text: ${translatedText}`);
    })
    .catch(error => {
      // Handle any errors that occur during the request
      console.error('An error occurred:', error.message);
    });