import MenuIMG from "../dist/image/menu_image.png";
import { Link } from "react-router-dom";

interface IOptionName {
  name: string;
  path: string;
}

const OptionNames = [
  { name: "1 Player", path: "/player_one" },
  { name: "2 Players", path: "player_two" },
];

const MenuOptions = (props: IOptionName, index: number) => {
  return (
    <Link
      key={index}
      to={props.path}
      className="hover:text-neutral-800 active:text-neutral-800 lg:text-4xl"
    >
      {props.name}
    </Link>
  );
};

const MenuImage = () => {
  return (
    <img
      src={MenuIMG}
      alt={MenuIMG}
      className="h-auto w-[200px] lg:w-[500px]"
    />
  );
};

export const MainMenu = () => {
  return (
    <main className="flex h-screen w-full flex-col items-center justify-center">
      <MenuImage />
      <div className="mt-16 flex flex-col text-2xl font-semibold text-zinc-100">
        {OptionNames.map((n, i) => {
          return MenuOptions(n, i);
        })}
      </div>
    </main>
  );
};
