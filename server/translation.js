// Load the axios library, to make HTTP requests
const axios = require('axios');

// Define the MyMemory API URL
const apiUrl = 'https://api.mymemory.translated.net/get';

// Define your MyMemory API key
const apiKey = 'e1559e800b4a701c8cc0';

// Define the URL of your local server
const localServerUrl = 'http://localhost:3000/translate';

// Translate the text using the MyMemory API
async function translateText(text) {
  try {
    // Make a GET request to the MyMemory API with the text and API key
    const apiResponse = await axios.get(apiUrl, {
      params: {
        q: text,
        langpair: 'en|pis',
        key: apiKey
      },
    });

    // Check if translation is available
    if (
      apiResponse.data && 
      apiResponse.data.responseData && 
      apiResponse.data.responseData.translatedText
    ) {
      const translatedText = apiResponse.data.responseData.translatedText;
      return translatedText;

 } else {
        console.error('Translation not available from MyMemory API.');
        return '';
    }
 } catch (error) {
    console.error('Translation error:', error.message);
    return '';
 }
}

// Export the translateText function
module.exports = {
 translateText
};