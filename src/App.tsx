import { useState } from "react";
import { getRandom } from "./utils/getRandom";

function App(): JSX.Element {
  interface JsonData {
    phrase: string;
    image: string;
  }
  const randomData: JsonData = getRandom();

  const [currentData, setCurrentData] = useState(randomData);

  const changePhraseAndBackground = (): void => {
    const randomData: JsonData = getRandom();
    setCurrentData(randomData);
  };

  return (
    <>
      <main
        className="flex h-screen max-h-[62.5rem] min-h-[30rem] w-full min-w-[20rem] max-w-[125rem] flex-col items-center justify-center gap-12 bg-cover bg-no-repeat font-roboto"
        style={{ backgroundImage: `url(${currentData.image})` }}
      >
        <h1
          className="text-center text-3xl uppercase tracking-wider text-gray-50"
          style={{ textShadow: "0.3rem 0.4rem 0.2rem rgb(0, 0, 0, 1)" }}
        >
          Galletas de la Fortuna
        </h1>
        <div
          className="flex h-1/5 min-h-[10.75rem] w-5/6 flex-col items-center justify-center bg-contain bg-center bg-no-repeat"
          style={{
            backgroundImage:
              "url('https://res.cloudinary.com/dbbixakcl/image/upload/f_auto,q_auto/v1/React/GalletaFortuna/cmzhkwtza83wqfcmconc')",
          }}
        >
          <p className="w-[90%] max-w-[24rem] px-2 text-center text-xs sm:text-lg">
            {currentData.phrase}
          </p>
        </div>
        <button
          className="rounded-lg border-2 border-gray-50 bg-transparent px-8 py-2 text-gray-50"
          onClick={changePhraseAndBackground}
        >
          Cambiar
        </button>
      </main>
    </>
  );
}

export default App;
