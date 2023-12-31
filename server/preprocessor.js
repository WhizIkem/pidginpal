// Purpose: Preprocess text for NLP tasks
function preprocessText(text) {
  if (!text) {
      console.error('Invalid input text.');
      return '';
  }

  // Text cleaning: Remove non-alphanumeric characters and convert to lowercase
  const cleanedText = text.replace(/[^a-zA-Z0-9 ]/g, '').toLowerCase();

  // Tokenization: Split the text into words
  const tokens = cleanedText.split(' ');

  // Example: Remove stop words (adjust this list based on your requirements)
  const stopWords = ['a', 'an', 'the', 'is', 'are', 'and', 'of'];
  const filteredTokens = tokens.filter(token => !stopWords.includes(token));

  // Join the filtered tokens back into a preprocessed text string
  const preprocessedText = filteredTokens.join(' ');

  return preprocessedText.trim(); // Trim any leading/trailing spaces
}

// Export the preprocessText function
module.exports = {
  preprocessText
};