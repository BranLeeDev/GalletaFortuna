import phrasesData from "./phrases.json";
import imagesData from "./images.json";

interface PhraseData {
  phrase: string;
}

interface ImageData {
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

export { getRandomPhrase, getRandomImage };
