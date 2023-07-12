document.addEventListener('DOMContentLoaded', () => {
    const translateButton = document.getElementById('translateButton');
    translateButton.addEventListener('click', handleTranslation);
});

async function handleTranslation() {
    // Get the input text from the textarea
    const inputText = document.getElementById('inputText').value;

    // Call the translateText function
    const translatedText = await translateText(inputText);

    // Display the translated text
    displayTranslatedText(translatedText);
}

function displayTranslatedText(translatedText) {
    const outputText = document.getElementById('outputText');
    outputText.textContent = translatedText;
    outputText.removeAttribute('data-placeholder');
}

async function translateText(text) {
    try {
        const response = await fetch('/translate', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ text }),
        });

        if (!response.ok) {
            throw new Error('Translation request failed');
        }

        const data = await response.json();
        return data.translatedText;
    } catch (error) {
        console.error('Error during translation:', error);
        return '';
    }
}

 // Set the "active" class for the "Translate" link
 document.addEventListener("DOMContentLoaded", function() {
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(function(link) {
      if (link.getAttribute('href') === 'translate.html') {
        link.classList.add('active');
      } else {
        link.classList.remove('active');
      }
    });
  });