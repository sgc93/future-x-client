import { useSelector } from "react-redux";
import Dashboard from "./components/dashboard/Dashboard";
import type { RootState } from "./redux/store";
import Auth from "./components/auth/Auth";

function App() {
  const { user } = useSelector((state: RootState) => state.auth);
  const isUserSignedIn = user !== null;

  return (
    <section className="w-screen h-screen overflow-hidden">
      {isUserSignedIn ? <Dashboard /> : <Auth />}
    </section>
  );
}

export default App;
