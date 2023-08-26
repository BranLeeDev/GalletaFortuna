import { useState } from "react";
import { getRandomImage, getRandomPhrase } from "./utils/getRandom";

function App(): JSX.Element {
  const randomPhrase: string = getRandomPhrase();
  const randomImage: string = getRandomImage();

  const [listToNoRepeat, setListToNoRepeat] = useState<[string, string]>([
    randomImage,
    randomPhrase,
  ]);

  const [currentPhrase, setCurrentPhrase] = useState<string>(randomPhrase);
  const [currentImage, setCurrentImage] = useState<string>(randomImage);

  const changePhraseAndBackground = (): void => {
    let currentImage = getRandomImage();
    let currentPhrase = getRandomPhrase();
    if (
      listToNoRepeat.includes(currentImage) ||
      listToNoRepeat.includes(currentPhrase)
    ) {
      currentImage = getRandomImage();
      currentPhrase = getRandomPhrase();
    }
    setListToNoRepeat([currentImage, currentPhrase]);
    setCurrentPhrase(currentPhrase);
    setCurrentImage(currentImage);
  };

  return (
    <>
      <div
        className="h-screen w-full bg-cover bg-no-repeat"
        style={{ backgroundImage: `url(${currentImage})` }}
      >
        <h1 className="text-2xl">{currentPhrase}</h1>
        <button onClick={changePhraseAndBackground}>Cambiar</button>
      </div>
    </>
  );
}

export default App;
