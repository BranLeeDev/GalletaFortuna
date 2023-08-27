import phrasesData from "./phrases.json";
import imagesData from "./images.json";

interface PhraseData {
  phrase: string;
}

interface ImageData {
  image: string;
}

interface JsonData {
  phrase: string;
  image: string;
}

const phrases: PhraseData[] = phrasesData;
const images: ImageData[] = imagesData;

function getRandomPhrase(): string {
  const randomIndex: number = Math.floor(Math.random() * phrases.length);
  const phrase: string = phrases[randomIndex].phrase;
  return phrase;
}

function getRandomImage(): string {
  const randomIndex: number = Math.floor(Math.random() * images.length);
  const urlImage: string = images[randomIndex].image;
  return urlImage;
}

function getRandom(): JsonData {
  const phrase = getRandomPhrase();
  const image = getRandomImage();
  const result = {
    phrase,
    image,
  };
  return result;
}

export { getRandom };
