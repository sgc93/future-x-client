import { TbLoader, TbMail } from "react-icons/tb";
import logo from "../../assets/logo.png";
import { FcGoogle } from "react-icons/fc";
import { useState, type FormEvent } from "react";
import InputField from "../ui/InputField";
import { useDispatch } from "react-redux";
import Error from "../ui/Error";
import { handleAuth } from "../../lib/api";
import { storeToken } from "../../lib/token";
import { authSuccess } from "./authSlice";
import { type AppDispatch } from "../../redux/store";

const Auth = () => {
  const [isSigningIn, setIsSigningIn] = useState(true);
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const dispatch = useDispatch<AppDispatch>();

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    try {
      setIsLoading(true);
      setError(null);

      const res = await handleAuth(
        isSigningIn ? { email, password } : { email, password, username },
        isSigningIn ? "login" : "register"
      );

      const data = res.data;

      await storeToken(data.token, data.expiresIn);

      dispatch(
        authSuccess({
          user: data.user
        })
      );
    } catch (error) {
      console.error(error);
      setError((error as Error).message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="w-screen h-screen flex flex-col text-center overflow-y-auto hidden-scroll">
      <div className="max-mb:h-14 mb:flex-1 w-full border-b border-n-400/70 bg-n-600"></div>
      <div className="h-2 mb:h-5 w-full border-b border-n-400/70 bg-n-600" />
      <div className="grow flex">
        <div className="grow h-full border-r border-n-400/70 bg-n-600" />
        <div className="w-[450px] flex flex-col border-r border-n-400/70">
          <div className="relative h-max grow flex-1 flex flex-col gap-6 px-2.5 mb:px-6 pt-4 pb-5 m-2 mb:m-3 bg-n-600 border border-n-400/70 rounded-md overflow-hidden">
            <div className="flex flex-col gap-3">
              <a href="/" className="h-full flex items-center justify-center">
                <img src={logo} width={35} className="rounded-full" />
              </a>
              <span className="text-sm text-n-100">
                Sign in to access your FutureX account
              </span>
            </div>

            <button
              disabled
              className="flex items-center justify-center gap-3 p-[9px] bg-n-500 rounded-lg border border-n-400 transition-all duration-300 cursor-not-allowed"
            >
              <FcGoogle size={17} />
              <span className="text-sm font-semibold text-n-50">
                Continue with Google
              </span>
            </button>
            <div className="flex items-center gap-2">
              <div className="grow h-0.5 bg-n-500 rounded-full" />
              <span className="text-sm text-n-100">OR</span>
              <div className="grow h-0.5 bg-n-500 rounded-full" />
            </div>
            <div className="grid grid-cols-2 bg-n-500 border border-n-400 rounded-lg p-1 gap-1">
              {[
                { text: "Sign In", is: true },
                { text: "Sign Up", is: false }
              ].map((btn, index) => (
                <button
                  key={index}
                  onClick={() => setIsSigningIn(btn.is)}
                  className={`flex items-center justify-center gap-3 p-1.5 rounded-md transition-all duration-300 cursor-pointer ${
                    btn.is === isSigningIn
                      ? "bg-n-300/80 text-n-50"
                      : "hover:bg-n-400 text-n-100 hover:text-n-50"
                  }`}
                >
                  <span className="text-sm font-semibold">{btn.text}</span>
                </button>
              ))}
            </div>
            <form onSubmit={handleSubmit} className="flex flex-col gap-3">
              {!isSigningIn && (
                <InputField
                  placeholder="xyz"
                  label="Username"
                  value={username}
                  required
                  setValue={(v: string) => setUsername(v.trim())}
                />
              )}
              <InputField
                placeholder="you@example.com"
                label="Email"
                value={email}
                type="email"
                required
                setValue={(v: string) => setEmail(v)}
              />
              <InputField
                placeholder="* * * * * * * * "
                label="Password"
                type="password"
                value={password}
                required
                setValue={(v: string) => setPassword(v)}
              />
              <button
                type={isLoading ? "button" : "submit"}
                className="flex items-center justify-center gap-3 p-2 mt-2 bg-n-50 text-n-900 rounded-sm transition-all duration-300 hover:bg-n-50/90 cursor-pointer"
              >
                <TbMail size={20} />
                <span className="text-sm font-semibold">
                  Sign {isSigningIn ? "in" : "up"} with Email
                </span>
              </button>
            </form>
            <p className="text-n-100 text-[10px]">
              By signing in, you agree to out{" "}
              <a href="" className="underline underline-offset-2">
                Terms of Service
              </a>{" "}
              and{" "}
              <a href="" className="underline underline-offset-2">
                Terms of Service
              </a>
              .
            </p>
            {isLoading && (
              <div className="absolute top-0 left-0 flex flex-col gap-4 h-full w-full items-center justify-center bg-n-900/30 backdrop-blur-lg">
                <TbLoader className="animate-spin text-3xl" />
                <span className="text-base text-white">
                  {isSigningIn ? "Signing In ..." : "Sinning Up ..."}
                </span>
              </div>
            )}
            <Error error={error} onClose={() => setError(null)} />
          </div>
        </div>
        <div className="grow h-full border-l border-n-400/70 bg-n-600" />
      </div>
      <div className="h-5 w-full border-t border-n-400/70 bg-n-600" />
      <div className="grow flex items-end justify-end border-t border-n-400/70 bg-n-600" />
    </section>
  );
};

export default Auth;
