import { useState } from "react";
import { Display } from "../components/Oneplayer/Display";
import { Header } from "../components/Header";
import { Input } from "../components/Oneplayer/Input";
import { InputContext } from "../context/OnePlayer/InputContext";

export const PlayerOne = () => {
  const [initialValue, setInitialValue] = useState<number>(501);
  const [throwValue, setThrowValue] = useState<number>(0);
  const [dartCount, setDartCount] = useState<number>(0);
  const [highscore, setHighscore] = useState<number>(0);
  const [throwBool, setThrowBool] = useState<boolean>(false);
  const [legs, setLegs] = useState<number>(0);
  const [checkout, setCheckout] = useState<string[]>([]);
  const [allPoint, setAllPoint] = useState<number>(0);
  const [allArrow, setAllArrow] = useState<number>(0);
  return (
    <div className="h-screen w-full">
      <Header title="One Player" />
      <main className="relative top-0 left-0 right-0 flex h-[93%] w-full flex-col md:flex-row">
        <InputContext.Provider
          value={{
            initialValue,
            setInitialValue,
            throwValue,
            setThrowValue,
            dartCount,
            setDartCount,
            highscore,
            setHighscore,
            throwBool,
            setThrowBool,
            legs,
            setLegs,
            checkout,
            setCheckout,
            allPoint,
            setAllPoint,
            allArrow,
            setAllArrow,
          }}
        >
          <Display name="player1" />
          <Input />
        </InputContext.Provider>
      </main>
    </div>
  );
};
