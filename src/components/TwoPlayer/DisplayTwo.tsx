import { useEffect, useState } from "react";
import { useInputContextPlayerTwo } from "../../context/TwoPlayer/InputContextTwoPlayer";
import { PossibleCheckoutsList } from "../../other/PossibleCheckouts";

interface IName {
  name: string;
}

const Name = (props: IName) => {
  return (
    <input
      type="text"
      placeholder={props.name}
      className="w-[150px] border-neutral-900 bg-transparent text-center text-xl font-semibold focus:border-b focus:outline-none"
    />
  );
};

const PossibleCheckouts = () => {
  const { initialValuePlayerTwo, checkoutPlayerTwo, setCheckoutPlayerTwo } =
    useInputContextPlayerTwo();

  useEffect(() => {
    for (let i = 0; i < PossibleCheckoutsList.length; i++) {
      if (initialValuePlayerTwo === PossibleCheckoutsList[i].value) {
        setCheckoutPlayerTwo(PossibleCheckoutsList[i].checkout);
      }
    }
  }, [initialValuePlayerTwo, setCheckoutPlayerTwo]);

  return (
    <ul className="text-center font-semibold">
      {checkoutPlayerTwo.map((data, i) => {
        return <li key={i}>{data}</li>;
      })}
    </ul>
  );
};

const CurrentPoint = () => {
  const {
    initialValuePlayerTwo,
    setInitialValuePlayerTwo,
    setDartCountPlayerTwo,
    legsPlayerTwo,
    setLegsPlayerTwo,
    setCheckoutPlayerTwo,

    setInitialValuePlayerOne,
    setDartCountPlayerOne,
    setCheckoutPlayerOne,
  } = useInputContextPlayerTwo();

  useEffect(() => {
    if (initialValuePlayerTwo === 0) {
      setInitialValuePlayerTwo(501);
      setDartCountPlayerTwo(0);
      setInitialValuePlayerOne(501);
      setDartCountPlayerOne(0);
      setLegsPlayerTwo(legsPlayerTwo + 1);
      setCheckoutPlayerTwo([""]);
      setCheckoutPlayerOne([""]);
    }
  }, [
    initialValuePlayerTwo,
    setInitialValuePlayerTwo,
    setDartCountPlayerTwo,
    legsPlayerTwo,
    setLegsPlayerTwo,
    setCheckoutPlayerTwo,

    setInitialValuePlayerOne,
    setDartCountPlayerOne,
    setCheckoutPlayerOne,
  ]);

  return (
    <h1 className="text-center text-4xl font-bold text-neutral-300">
      {initialValuePlayerTwo}
    </h1>
  );
};

const Statistic = () => {
  const {
    dartCountPlayerTwo,
    highscorePlayerTwo,
    allPointPlayerTwo,
    allArrowPlayerTwo,
  } = useInputContextPlayerTwo();

  return (
    <div className="flex w-full items-center justify-between">
      <p>
        darts:
        <span className="font-bold text-red-500">{dartCountPlayerTwo}</span>
      </p>
      <p>
        avg:
        <span className="font-bold text-red-500">
          {allArrowPlayerTwo !== 0
            ? ((allPointPlayerTwo / allArrowPlayerTwo) * 3).toFixed(2)
            : 0}
        </span>
      </p>
      <p>
        hi:<span className="font-bold text-red-500">{highscorePlayerTwo}</span>
      </p>
    </div>
  );
};

const SetLeg = () => {
  const [setsPlayerTwo, setSetsPlayerTwo] = useState(0);
  const { legsPlayerTwo, setLegsPlayerTwo } = useInputContextPlayerTwo();

  useEffect(() => {
    if (legsPlayerTwo === 3) {
      setSetsPlayerTwo(setsPlayerTwo + 1);
      setLegsPlayerTwo(0);
    }
  }, [legsPlayerTwo, setLegsPlayerTwo, setsPlayerTwo]);

  return (
    <div className="flex w-full items-center justify-around">
      <p>Sets:{setsPlayerTwo}</p>
      <p>Legs:{legsPlayerTwo}</p>
    </div>
  );
};

export const DisplayTwo = (props: IName) => {
  return (
    <div className="flex h-[100%] w-full flex-col items-center justify-around border-r border-b border-neutral-200 bg-slate-500/30 p-2 md:h-[100%]">
      <Name name={props.name} />
      <SetLeg />
      <PossibleCheckouts />
      <CurrentPoint />
      <Statistic />
    </div>
  );
};
