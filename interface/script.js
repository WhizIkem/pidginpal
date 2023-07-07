function translateText() {
    // Get the input text from the textarea
    const inputText = document.getElementById('inputText').ariaValueMax;

    // Make a POST request to the translation API endpoint
    fetch('/translate', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ text: inputText}),
    })
    .then(Response => Response.json())
    .then(data => {
        // Display the translated text in the output paragraph
        document.getElementById('outputText').textContent = data.translatedText;
    })
    .catch(error => {
        console.error('Error durring translation:', error);
    });
}