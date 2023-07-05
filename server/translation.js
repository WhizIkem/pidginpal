const { Translate } = require('@google-cloud/translate').v2;

// Instantiate the Translation client
const translate = new Translate();

async function translateText(text) {
    const targetLanguage = 'pcm'; //Pidgin language code

    try {
        // Translate the text to pidgin
        const [Translation] = await translate.translate(text, targetLanguage);
        return Translation;
    }   catch (error) {
        console.error('Translation error', error);
        return '';
    }
}

module.exports = {
    translateText,
};