import { useDispatch, useSelector } from "react-redux";
import Dashboard from "./components/dashboard/Dashboard";
import type { RootState } from "./redux/store";
import Auth from "./components/auth/Auth";
import { useEffect, useState } from "react";
import PageLoader from "./components/ui/PageLoader";
import { getToken } from "./lib/token";
import { getUserData } from "./lib/api";
import { addUser } from "./components/auth/authSlice";

function App() {
  const { user } = useSelector((state: RootState) => state.auth);
  const isUserSignedIn = user !== null;

  const [isPending, setIsPending] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    async function fetchData() {
      try {
        const token = await getToken();
        if (token) {
          const res = await getUserData(token);
          dispatch(addUser({ user: res.data }));
        }
      } catch (error) {
        console.log((error as Error).message);
      } finally {
        setIsPending(false);
      }
    }

    fetchData();
  }, []);

  return (
    <section className="w-screen h-screen overflow-hidden">
      {isPending ? (
        <PageLoader msg="Just a moment 👍" />
      ) : isUserSignedIn ? (
        <Dashboard />
      ) : (
        <Auth />
      )}
    </section>
  );
}

export default App;
