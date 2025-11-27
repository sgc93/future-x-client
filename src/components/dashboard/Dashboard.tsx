import Header from "./Header";
import Sidebar from "./Sidebar";
import ListBox from "./List";
import { useState } from "react";
import { getViewportWidth } from "../../utils/helper";

const Dashboard = () => {
  const [isSidebarOpened, setIsSidebarOpened] = useState(getViewportWidth() > 450 ? true : false);

  return (
    <section className="relative w-screen h-screen flex flex-col text-center">
      <Header toggleSidebar={() => setIsSidebarOpened((is) => !is)} isSidebarOpened={isSidebarOpened} />
      <div className="relative grow flex">
        <div className="min-w-2 mb:min-w-5 h-full border-r border-n-400/70 bg-n-600" />
        <Sidebar isSidebarOpened={isSidebarOpened} />
        <ListBox />
        <div className="min-w-2 mb:min-w-5 h-full border-l border-n-400/70 bg-n-600" />
      </div>
    </section>
  );
};

export default Dashboard;
