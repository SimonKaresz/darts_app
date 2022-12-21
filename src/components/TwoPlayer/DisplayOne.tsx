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
  const { initialValuePlayerOne, checkoutPlayerOne, setCheckoutPlayerOne } =
    useInputContextPlayerTwo();

  useEffect(() => {
    for (let i = 0; i < PossibleCheckoutsList.length; i++) {
      if (initialValuePlayerOne === PossibleCheckoutsList[i].value) {
        setCheckoutPlayerOne(PossibleCheckoutsList[i].checkout);
      }
    }
  }, [initialValuePlayerOne, setCheckoutPlayerOne]);

  return (
    <ul className="text-center font-semibold">
      {checkoutPlayerOne.map((data, i) => {
        return <li key={i}>{data}</li>;
      })}
    </ul>
  );
};

const CurrentPoint = () => {
  const {
    initialValuePlayerOne,
    setInitialValuePlayerOne,
    setDartCountPlayerOne,
    legsPlayerOne,
    setLegsPlayerOne,
    setCheckoutPlayerOne,

    setInitialValuePlayerTwo,
    setDartCountPlayerTwo,
    setCheckoutPlayerTwo,
  } = useInputContextPlayerTwo();

  useEffect(() => {
    if (initialValuePlayerOne === 0) {
      setInitialValuePlayerOne(501);
      setDartCountPlayerOne(0);
      setInitialValuePlayerTwo(501);
      setDartCountPlayerTwo(0);
      setLegsPlayerOne(legsPlayerOne + 1);
      setCheckoutPlayerOne([""]);
      setCheckoutPlayerTwo([""]);
    }
  }, [
    initialValuePlayerOne,
    setInitialValuePlayerOne,
    setDartCountPlayerOne,
    legsPlayerOne,
    setLegsPlayerOne,
    setCheckoutPlayerOne,

    setInitialValuePlayerTwo,
    setDartCountPlayerTwo,
    setCheckoutPlayerTwo,
  ]);

  return (
    <h1 className="text-center text-4xl font-bold text-neutral-300">
      {initialValuePlayerOne}
    </h1>
  );
};

const Statistic = () => {
  const {
    dartCountPlayerOne,
    highscorePlayerOne,
    allPointPlayerOne,
    allArrowPlayerOne,
  } = useInputContextPlayerTwo();

  return (
    <div className="flex w-full items-center justify-between">
      <p>
        darts:
        <span className="font-bold text-red-500">{dartCountPlayerOne}</span>
      </p>
      <p>
        avg:
        <span className="font-bold text-red-500">
          {allArrowPlayerOne !== 0
            ? ((allPointPlayerOne / allArrowPlayerOne) * 3).toFixed(2)
            : 0}
        </span>
      </p>
      <p>
        hi:<span className="font-bold text-red-500">{highscorePlayerOne}</span>
      </p>
    </div>
  );
};

const SetLeg = () => {
  const [setsPlayerOne, setSetsPlayerOne] = useState(0);
  const { legsPlayerOne, setLegsPlayerOne } = useInputContextPlayerTwo();

  useEffect(() => {
    if (legsPlayerOne === 3) {
      setSetsPlayerOne(setsPlayerOne + 1);
      setLegsPlayerOne(0);
    }
  }, [legsPlayerOne, setLegsPlayerOne, setsPlayerOne]);

  return (
    <div className="flex w-full items-center justify-around">
      <p>Sets:{setsPlayerOne}</p>
      <p>Legs:{legsPlayerOne}</p>
    </div>
  );
};

export const DisplayOne = (props: IName) => {
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
