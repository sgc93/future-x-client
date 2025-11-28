import { TbSettings, TbUser, TbUsers, TbVideoPlus } from "react-icons/tb";
import { BiVideo } from "react-icons/bi";
import { type ReactNode } from "react";

const Btn = ({
  btn,
  handleClick,
  isSelected
}: {
  btn: { text: string; icon: ReactNode };
  handleClick: () => void;
  isSelected: boolean;
}) => {
  return (
    <button
      onClick={() => handleClick()}
      className={`group flex items-center gap-3 p-1 rounded-sm transition-all duration-300 ${
        isSelected
          ? "text-main-1 bg-n-400/40"
          : "hover:bg-n-600 hover:text-main-1"
      } cursor-pointer`}
    >
      <div
        className={`rounded-sm border p-[5px] text-lg ${
          isSelected
            ? "border-main-1/30 bg-main-1/10"
            : "border-n-400 bg-n-400/30 group-hover:border-main-1/30 group-hover:bg-main-1/10"
        } backdrop-blur-lg`}
      >
        {btn.icon}
      </div>
      <span className="text-base w-max mb:max-[1117px]:hidden flex transition-all duration-300">
        {btn.text}
      </span>
    </button>
  );
};

const Sidebar = ({
  isSidebarOpened,
  tab,
  setTab,
  toggleSidebar
}: {
  isSidebarOpened: boolean;
  tab: string;
  setTab: (t: string) => void;
  toggleSidebar: (t: boolean) => void;
}) => {
  return (
    isSidebarOpened && (
      <div className="max-mb:absolute z-30 flex h-full max-mb:min-w-52 min-[1200px]:min-w-42 p-1 border-r bg-n-900 border-n-400">
        <div className="grow flex flex-col gap-1 bg-n-600 p-2 rounded-lg">
          {[
            { icon: <BiVideo />, text: "Videos" },
            { icon: <TbUsers />, text: "Users" },
            { icon: <TbVideoPlus />, text: "Add video" },
            null,
            { icon: <TbSettings />, text: "Settings" },
            { icon: <TbUser />, text: "Account" }
          ].map((btn, index) =>
            btn ? (
              <Btn
                key={index}
                btn={btn}
                handleClick={() => {
                  setTab(btn.text);
                  toggleSidebar(false);
                }}
                isSelected={tab === btn.text}
              />
            ) : (
              <div key={index} className="flex-1" />
            )
          )}{" "}
        </div>
      </div>
    )
  );
};

export default Sidebar;
