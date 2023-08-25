import phrases from "./phrases.json";
import images from "./images.json";

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
