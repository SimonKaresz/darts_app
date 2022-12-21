import { useState } from "react";
import { Header } from "../components/Header";
import { DisplayOne } from "../components/TwoPlayer/DisplayOne";
import { DisplayTwo } from "../components/TwoPlayer/DisplayTwo";
import { InputTwoPlayer } from "../components/TwoPlayer/InputTwoPlayer";
import { InputContextTwoPlayer } from "../context/TwoPlayer/InputContextTwoPlayer";

export const PlayerTwo = () => {
  const [throwValue, setThrowValue] = useState<number>(0);
  const [changePlayer, setChangePlayer] = useState<boolean>(false);

  //Player One
  const [initialValuePlayerOne, setInitialValuePlayerOne] =
    useState<number>(501);
  const [dartCountPlayerOne, setDartCountPlayerOne] = useState<number>(0);
  const [highscorePlayerOne, setHighscorePlayerOne] = useState<number>(0);
  const [throwBoolPlayerOne, setThrowBoolPlayerOne] = useState<boolean>(false);
  const [legsPlayerOne, setLegsPlayerOne] = useState<number>(0);
  const [checkoutPlayerOne, setCheckoutPlayerOne] = useState<string[]>([]);
  const [allPointPlayerOne, setAllPointPlayerOne] = useState<number>(0);
  const [allArrowPlayerOne, setAllArrowPlayerOne] = useState<number>(0);

  //PlayerTwo
  const [initialValuePlayerTwo, setInitialValuePlayerTwo] =
    useState<number>(501);
  const [dartCountPlayerTwo, setDartCountPlayerTwo] = useState<number>(0);
  const [highscorePlayerTwo, setHighscorePlayerTwo] = useState<number>(0);
  const [throwBoolPlayerTwo, setThrowBoolPlayerTwo] = useState<boolean>(false);
  const [legsPlayerTwo, setLegsPlayerTwo] = useState<number>(0);
  const [checkoutPlayerTwo, setCheckoutPlayerTwo] = useState<string[]>([]);
  const [allPointPlayerTwo, setAllPointPlayerTwo] = useState<number>(0);
  const [allArrowPlayerTwo, setAllArrowPlayerTwo] = useState<number>(0);

  return (
    <div className="h-screen w-full">
      <Header title="Two players" />
      <main className="relative top-0 left-0 right-0 flex h-[93%] w-full flex-col md:flex-row">
        <InputContextTwoPlayer.Provider
          value={{
            throwValue,
            setThrowValue,
            changePlayer,
            setChangePlayer,

            //PlayerOne
            initialValuePlayerOne,
            setInitialValuePlayerOne,
            dartCountPlayerOne,
            setDartCountPlayerOne,
            highscorePlayerOne,
            setHighscorePlayerOne,
            throwBoolPlayerOne,
            setThrowBoolPlayerOne,
            legsPlayerOne,
            setLegsPlayerOne,
            checkoutPlayerOne,
            setCheckoutPlayerOne,
            allPointPlayerOne,
            setAllPointPlayerOne,
            allArrowPlayerOne,
            setAllArrowPlayerOne,

            //PlayerTwo
            initialValuePlayerTwo,
            setInitialValuePlayerTwo,
            dartCountPlayerTwo,
            setDartCountPlayerTwo,
            highscorePlayerTwo,
            setHighscorePlayerTwo,
            throwBoolPlayerTwo,
            setThrowBoolPlayerTwo,
            legsPlayerTwo,
            setLegsPlayerTwo,
            checkoutPlayerTwo,
            setCheckoutPlayerTwo,
            allPointPlayerTwo,
            setAllPointPlayerTwo,
            allArrowPlayerTwo,
            setAllArrowPlayerTwo,
          }}
        >
          <div className="flex h-[100%] w-full md:flex-col">
            <DisplayOne name="Player1" />
            <DisplayTwo name="Player2" />
          </div>
          <InputTwoPlayer />
        </InputContextTwoPlayer.Provider>
      </main>
    </div>
  );
};
