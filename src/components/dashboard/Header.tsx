import { TbSearch } from "react-icons/tb";
import logo from "../../assets/logo.png";
import { RiMenu2Line } from "react-icons/ri";

const Header = ({ toggleSidebar,isSidebarOpened }: { toggleSidebar: () => void, isSidebarOpened: boolean}) => {
  return (
    <div className=" flex flex-col">
      {" "}
      <div className="w-full flex border-b border-n-400 bg-n-600">
        <div className="h-full min-w-2 mb:min-w-5 border-r border-n-400 bg-n-600" />
        <div className="flex items-center gap-1 w-52">
          <a
            href="/"
            className={`h-full ${isSidebarOpened ? 'hidden mb:flex': 'hidden'} items-center justify-center p-2`}
          >
            <img src={logo} className="rounded-full w-8" />
          </a>
          <button
            onClick={() => toggleSidebar()}
            className={` ${
              isSidebarOpened ? "flex mb:hidden" : "flex"
            } text-center px-2 py-1`}
          >
            {" "}
            <RiMenu2Line size={22} />{" "}
          </button>
          <span className="hidden mb:flex text-base text-main-1 font-semibold">
            FutureX
          </span>
        </div>
        <div className="grow flex items-center max-mb:p-2">
          <div className="flex w-64 bg-n-400/80 rounded-md overflow-hidden text-n-100">
            <div className="flex items-center justify-center bg-n-400/80 border-r p-1.5 border-n-300">
              <TbSearch size={20} />
            </div>
            <input
              type="text"
              placeholder="Search Videos"
              className="grow p-2 placeholder:text-n-100/50 text-sm tracking-wide border-none outline-none"
            />
          </div>
        </div>
        <div className="self-end h-full min-w-2 mb:min-w-5 border-l border-n-400 bg-n-600" />
      </div>
      <div className="min-h-2 mb:min-h-5 w-full border-b border-n-400/70 bg-n-600" />
    </div>
  );
};

export default Header;
