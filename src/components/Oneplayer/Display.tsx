import { useEffect, useState } from "react";
import { useInputContext } from "../../context/OnePlayer/InputContext";
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
  const { initialValue, checkout, setCheckout } = useInputContext();

  useEffect(() => {
    for (let i = 0; i < PossibleCheckoutsList.length; i++) {
      if (initialValue === PossibleCheckoutsList[i].value) {
        setCheckout(PossibleCheckoutsList[i].checkout);
      }
    }
  }, [initialValue, setCheckout]);

  return (
    <ul className="text-center font-semibold">
      {checkout.map((data, i) => {
        return <li key={i}>{data}</li>;
      })}
    </ul>
  );
};

const CurrentPoint = () => {
  const {
    initialValue,
    setInitialValue,
    setDartCount,
    legs,
    setLegs,
    setCheckout,
  } = useInputContext();

  useEffect(() => {
    if (initialValue === 0) {
      setInitialValue(501);
      setDartCount(0);
      setLegs(legs + 1);
      setCheckout([""]);
    }
  }, [initialValue, setInitialValue, legs, setLegs, setCheckout, setDartCount]);

  return (
    <h1 className="text-center text-4xl font-bold text-neutral-300">
      {initialValue}
    </h1>
  );
};

const Statistic = () => {
  const { dartCount, highscore, allPoint, allArrow } = useInputContext();

  return (
    <div className="flex w-full items-center justify-between">
      <p>
        darts:<span className="font-bold text-red-500">{dartCount}</span>
      </p>
      <p>
        avg:
        <span className="font-bold text-red-500">
          {allArrow !== 0 ? ((allPoint / allArrow) * 3).toFixed(2) : 0}
        </span>
      </p>
      <p>
        hi:<span className="font-bold text-red-500">{highscore}</span>
      </p>
    </div>
  );
};

const SetLeg = () => {
  const [sets, setSets] = useState(0);
  const { legs, setLegs } = useInputContext();

  useEffect(() => {
    if (legs === 3) {
      setSets(sets + 1);
      setLegs(0);
    }
  }, [legs, setLegs, sets]);

  return (
    <div className="flex w-full items-center justify-around">
      <p>Sets:{sets}</p>
      <p>Legs:{legs}</p>
    </div>
  );
};

export const Display = (props: IName) => {
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
