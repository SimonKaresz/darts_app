import { IoMdArrowRoundBack } from "react-icons/io";
import { Link } from "react-router-dom";

interface ITitle {
  title: string;
}

const HeaderTitle = (props: ITitle) => {
  return <h1 className="mx-6 text-xl text-white">{props.title}</h1>;
};

const BackToMenu = () => {
  return (
    <Link to="/">
      <IoMdArrowRoundBack className="text-3xl text-white" />
    </Link>
  );
};

export const Header = (props: ITitle) => {
  return (
    <header className="relative top-0 left-0 right-0 flex h-[7%] w-full items-center bg-neutral-800">
      <BackToMenu />
      <HeaderTitle title={props.title} />
    </header>
  );
};
