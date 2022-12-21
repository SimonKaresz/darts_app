import { TiArrowBackOutline } from "react-icons/ti";
import { AiOutlineArrowRight } from "react-icons/ai";
import { useInputContext } from "../../context/OnePlayer/InputContext";

const InputNumber = () => {
  const { throwValue, setThrowValue } = useInputContext();
  const digits = [];
  for (let i = 1; i <= 9; i++) {
    digits.push(
      <button
        key={i}
        onClick={() => {
          setThrowValue(Number(throwValue.toString() + i.toString()));
        }}
        className="h-[100%] w-full border border-black bg-neutral-800/90 text-neutral-200"
      >
        {i}
      </button>
    );
  }
  return digits;
};

const IconButton = (props: any) => {
  return (
    <button
      onClick={props.event}
      style={{ backgroundColor: props.color }}
      className="flex h-[100%] w-full items-center justify-center border border-black text-2xl text-neutral-200"
    >
      {props.icon}
    </button>
  );
};

const OtherButtons = () => {
  const {
    throwValue,
    setThrowValue,
    setInitialValue,
    initialValue,
    dartCount,
    setDartCount,
    highscore,
    setHighscore,
    allPoint,
    setAllPoint,
    allArrow,
    setAllArrow,
  } = useInputContext();
  const Correction = (): boolean => {
    const exceptions: number[] = [
      180, 179, 178, 177, 176, 175, 174, 173, 172, 171, 169, 168, 166, 165, 163,
      162, 159,
    ];
    let error: boolean = false;
    for (let i = 0; i < exceptions.length; i++) {
      if (initialValue === exceptions[i] && throwValue === exceptions[i]) {
        error = true;
      }
    }
    return error;
  };

  return (
    <>
      <IconButton
        event={() => setThrowValue(0)}
        icon={<TiArrowBackOutline />}
        color="rgb(239 68 68)"
      />
      <button
        onClick={() => {
          setThrowValue(Number(throwValue.toString() + "0"));
        }}
        className="h-[100%] w-full border border-black bg-neutral-800/90 text-neutral-200"
      >
        0
      </button>
      <IconButton
        event={() => {
          if (
            throwValue <= 180 &&
            throwValue >= 0 &&
            throwValue <= initialValue &&
            !Correction() &&
            initialValue - throwValue !== 1
          ) {
            setInitialValue(initialValue - throwValue);
            setThrowValue(0);
            setDartCount(dartCount + 3);
            setAllPoint(allPoint + throwValue);
            setAllArrow(allArrow + 3);
            if (highscore < throwValue) {
              setHighscore(throwValue);
            }
          } else {
            setThrowValue(0);
          }
        }}
        icon={<AiOutlineArrowRight />}
        color="rgb(2 132 199)"
      />
    </>
  );
};

const ThrowValue = () => {
  const { throwValue } = useInputContext();
  return (
    <div className="flex h-[50px] w-full items-center justify-center bg-neutral-800/90 text-2xl text-neutral-200">
      {throwValue > 0 ? throwValue : ""}
    </div>
  );
};

export const Input = () => {
  return (
    <div className="flex h-[100%] w-full flex-col md:h-[100%]">
      <ThrowValue />
      <div className="grid h-[100%] grid-cols-3">
        {InputNumber()}
        <OtherButtons />
      </div>
    </div>
  );
};
