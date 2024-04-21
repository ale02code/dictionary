const API = 'https://api.dictionaryapi.dev/api/v2/entries/en/';

export async function getWord(word = "Fire") {
  try {
    if (!word) return;

    const fetching = await fetch(API.concat(word));
    const response = await fetching.json();

    const foundWord = response[0];

    const formattedWord = {
      word: foundWord.word,
      definitions: foundWord.meanings[0].definitions,
      synonyms: foundWord.meanings[0].synonyms,
      partOfSpeech: foundWord.meanings[0].partOfSpeech,
      phonetic: foundWord.phonetic,
      phonetics: foundWord.phonetics,
      sourceUrls: foundWord.sourceUrls,
    };

    return formattedWord;

  } catch (e) {
    throw new Error("Failed to fetch data");
  }
}
