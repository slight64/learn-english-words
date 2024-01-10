type Word = {
  id: string;
  original: string;
  translated: string;
  loading: boolean;
};

export const saveInLocalStorage = (key: 'words', object: Word): void => {
  const localStorageWords = localStorage.getItem(key);
  if (!localStorageWords) {
    localStorage.setItem(key, JSON.stringify([]));
  }
  if (localStorageWords) {
    const storageWords = JSON.parse(localStorageWords);
    storageWords.push(object);
    const stringToObject = JSON.stringify(storageWords);
    localStorage.setItem(key, stringToObject);
  }
};

export const getFromLocalStorage = (key: 'words'): [] => {
  if (localStorage.getItem(key)) {
    const words = localStorage.getItem(key);
    if (words) {
      const result: [] = JSON.parse(words);
      return result;
    }
  }
  return [];
};

export const removeFromLocalStorage = (key: 'words', id: 'string'): void => {
  const localStorageWords = localStorage.getItem(key);
  if (localStorageWords) {
    const parsedWordsArray = JSON.parse(localStorageWords);
    const filteredWords = parsedWordsArray.filter((word: Word) => {
      return word.id !== id;
    });
    const convertedToJSON = JSON.stringify(filteredWords);
    localStorage.setItem(key, convertedToJSON);
  }
};
