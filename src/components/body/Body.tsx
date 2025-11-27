import { TbSearch, TbSettings, TbUser, TbUsers, TbVideoPlus } from "react-icons/tb";
import logo from "../../assets/logo.png";
import { BiVideo } from "react-icons/bi";

const Body = () => {
  return (
    <section className="w-screen h-screen flex flex-col text-center">
      <div className="w-full flex border-b border-n-500/80 bg-n-600/70">
        <div className="h-full w-5 border-r border-n-500/80 bg-n-600/70" />
        <div className="flex items-center gap-1 w-52">
          <a href="/" className="h-full flex items-center justify-center p-2">
            <img src={logo} width={35} className="rounded-full" />
          </a>
          <span className="text-base text-main-1 font-semibold">FutureX</span>
        </div>
        <div className="grow py-2 flex">
          <div className="flex items-center px-2 w-64 bg-n-600 rounded-md text-n-100">
            <div className="bg-n-600">
              <TbSearch size={20} />
            </div>
            <input
              type="text"
              placeholder="Search Videos"
              className="grow placeholder:text-n-100/50 text-sm tracking-wide border-none outline-none"
            />
          </div>
        </div>
        <div className="self-end h-full w-5 border-l border-n-500/80 bg-n-600/70" />
      </div>
      <div className="h-5 w-full border-b border-n-500/80 bg-n-600/70" />
      <div className="grow flex">
        <div className="w-5 h-full border-r border-n-500/80 bg-n-600/70" />
        <div className="flex h-full w-52 p-1 border-r border-n-500/80">
          <div className="grow flex flex-col justify-between gap-1 p-2 bg-n-600/70 border border-n-500/80 rounded-sm">
            <div className=" flex flex-col gap-1">
              {[
                { icon: <BiVideo />, text: "Videos" },
                { icon: <TbUsers />, text: "Users" },
                { icon: <TbVideoPlus />, text: "Add Video" }
              ].map((tab, index) => (
                <button
                  key={index}
                  className="flex items-center gap-3 p-1 transition-all duration-300 hover:bg-n-600 hover:text-main-1"
                >
                  <div className="bg-n-600 rounded-sm border border-n-500 p-1.5 text-lg">
                    {tab.icon}
                  </div>
                  <span className="text-base">{tab.text}</span>
                </button>
              ))}{" "}
            </div>
            <div className=" flex flex-col gap-1">
              {[
                { icon: <TbSettings />, text: "Settings" },
                { icon: <TbUser />, text: "Account" }
              ].map((tab, index) => (
                <button
                  key={index}
                  className="flex items-center gap-3 p-1 rounded-sm transition-all duration-300 hover:bg-n-600 hover:text-main-1"
                >
                  <div className="bg-n-600 rounded-sm border border-n-500 p-1.5 text-lg">
                    {tab.icon}
                  </div>
                  <span className="text-base">{tab.text}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
        <div className="grow flex p-1">
          <div className="grow h-full flex bg-n-600/70 p-5 rounded-sm border border-n-500/80">
            <span className="text-6xl font-bold text-n-50">
              FutureX Education
            </span>
          </div>
        </div>
        <div className="w-5 h-full border-l border-n-500/80 bg-n-600/70" />
      </div>
    </section>
  );
};

export default Body;
