// Public API for fetching word 
const API = 'https://api.dictionaryapi.dev/api/v2/entries/en/';

export async function getWord(word = "Fire") {
  try {
    if (!word) return;

    const fetching = await fetch(API.concat(word));
    const response = await fetching.json();

    const foundWord = response[0];

    const formattedWord = {
      word: foundWord.word,
      meanings: foundWord.meanings.map(meaning => ({
        partOfSpeech: meaning.partOfSpeech,
        definitions: meaning.definitions,
        synonyms: meaning.synonyms,
      })),
      phonetic: foundWord.phonetic,
      phonetics: foundWord.phonetics,
      sourceUrls: foundWord.sourceUrls[0] ,
    };

    return formattedWord;

  } catch (e) {
    throw new Error("Failed to fetch data");
  }
}
