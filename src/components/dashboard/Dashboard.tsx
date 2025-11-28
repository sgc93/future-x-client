import Header from "./Header";
import Sidebar from "./Sidebar";
import { Videos } from "./Videos";
import { useState } from "react";
import { getViewportWidth } from "../../utils/helper";
import Users from "./Users";
import type { User } from "../../types/AuthType";
import Account from "./Account";

const Dashboard = () => {
  const [isSidebarOpened, setIsSidebarOpened] = useState(
    getViewportWidth() > 450 ? true : false
  );
  const [tab, setTab] = useState<string>("Videos");
  const [users, setUsers] = useState<User[]>([]);

  return (
    <section className="relative w-screen h-screen flex flex-col text-center">
      <Header
        toggleSidebar={() => setIsSidebarOpened((is) => !is)}
        isSidebarOpened={isSidebarOpened}
      />
      <div className="relative grow flex">
        <div className="min-w-2 mb:min-w-5 h-full border-r border-n-400/70 bg-n-600" />
        <Sidebar
          isSidebarOpened={isSidebarOpened}
          tab={tab}
          setTab={(t: string) => setTab(t)}
          toggleSidebar={(t: boolean) =>
            getViewportWidth() < 450 ? setIsSidebarOpened(t) : {}
          }
        />
        {tab === "Videos" && <Videos />}
        {tab === "Users" && (
          <Users users={users} setUsers={(users: User[]) => setUsers(users)} />
        )}
        {tab === "Account" && <Account />}
        <div className="min-w-2 mb:min-w-5 h-full border-l border-n-400/70 bg-n-600" />
      </div>
    </section>
  );
};

export default Dashboard;
