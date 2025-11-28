import { useDispatch, useSelector } from "react-redux";
import { type AppDispatch, type RootState } from "../../redux/store";
import AvatarPlaceHolder from "../ui/AvatarPlaceHolder";
import { BiLogOut } from "react-icons/bi";
import { removeToken } from "../../lib/token";
import { logoutSuccess } from "../auth/authSlice";

const Account = () => {
  const user = useSelector((state: RootState) => state.auth.user);
  const dispatch = useDispatch<AppDispatch>()

  if (!user) return null;

  const handleLogout = () => {
    removeToken();
    dispatch(logoutSuccess())
  };

  return (
    <section className="grow flex flex-col text-center ">
      <div className="max-mb:h-14 mb:flex-1 w-full border-b border-n-400/70 bg-n-600"></div>
      <div className="h-2 mb:h-5 w-full border-b border-n-400/70 bg-n-600" />
      <div className="grow flex">
        <div className="flex-1 h-full border-r border-n-400/70 bg-n-600" />
        <div className=" flex border-r p-3 border-n-400/70 bg-n-900">
          <div className="grow flex flex-col items-center  gap-3 rounded-lg p-3 bg-n-600">
            <div className="relative flex items-center justify-center h-[200px] w-full rounded-md overflow-hidden">
              {user.avatar ? (
                <img src={user.avatar} className="w-full h-full" />
              ) : (
                <AvatarPlaceHolder name={user.username} />
              )}
              <span className="absolute right-2 bottom-2 bg-n-500/30 text-n-100 px-1 pt-px text-[11px] rounded-md">
                Id: {user.id}
              </span>
            </div>
            <div className="flex flex-col items-start gap-0.5 pt-0 p-2.5">
              {[
                "Username: " + user.username,
                "Email: " + user.email,
                "Role: " + user.role
              ].map((d, i) => (
                <div key={i} className="flex items-center gap-1">
                  <span className="text-start text-sm text-n-200 line-clamp-2 text-ellipsis">
                    {d.split(":")[0]}:
                  </span>
                  <span className="line-clamp-1 text-ellipsis text-sm text-start">
                    {d.split(":")[1]}
                  </span>
                </div>
              ))}
            </div>
            <button
              onClick={() => handleLogout()}
              className={`self-end group flex items-center gap-2 px-3 py-2 rounded-sm transition-all duration-300 text-n-100 bg-n-400/70 hover:bg-n-400 hover:text-main-1 cursor-pointer`}
            >
              <div
                className={`text-base`}
              >
                <BiLogOut />
              </div>
              <span className="text-base w-max">
                Sing out
              </span>
            </button>
          </div>
        </div>
        <div className="flex-1 h-full border-l border-n-400/70 bg-n-600" />
      </div>
      <div className="h-5 w-full border-t border-n-400/70 bg-n-600" />
      <div className="grow flex items-center justify-center border-t border-n-400/70 bg-n-600">
        <span className="text-n-200 font-bold text-sm p-3">FutureX, 2025</span>
      </div>
    </section>
  );
};

export default Account;
