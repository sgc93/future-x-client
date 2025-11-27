import { TbMail } from "react-icons/tb";
import logo from "../../assets/logo.png";
import { FcGoogle } from "react-icons/fc";

const Auth = () => {
  return (
    <section className="w-screen h-screen flex flex-col text-center">
      <div className="flex-1 w-full border-b border-n-500/80 bg-n-600/70">
      </div>
      <div className="h-5 w-full border-b border-n-500/80 bg-n-600/70" />
      <div className="grow flex">
        <div className="grow h-full border-r border-n-500/80 bg-n-600/70" />
        <div className="w-[450px] flex flex-col border-r border-n-500/80">
          <div className="h-max flex-1 flex flex-col gap-6 p-6 m-3 bg-n-600/70 border border-n-500/80 rounded-md">
            <div className="flex flex-col gap-3">
              <a
                href="/"
                className="h-full flex items-center justify-center p-2"
              >
                <img src={logo} width={35} className="rounded-full" />
              </a>
              <span className="text-sm text-n-100">
                Sign in to access your FutureX account
              </span>
            </div>

            <button className="flex items-center justify-center gap-3 p-2.5 bg-n-600 rounded-lg border border-n-500 transition-all duration-300 hover:bg-n-500/50 cursor-not-allowed">
              <FcGoogle size={17} opacity={0.5} />
              <span className="text-sm font-semibold text-n-50/50">
                Continue with Google
              </span>
            </button>
            <div className="flex items-center gap-2">
              <div className="grow h-0.5 bg-n-500 rounded-full" />
              <span className="text-sm text-n-100">OR</span>
              <div className="grow h-0.5 bg-n-500 rounded-full" />
            </div>
            <div className="grid grid-cols-2 bg-n-500/80 rounded-lg p-1.5">
              <button className=" flex items-center justify-center gap-3 p-1.5 bg-n-700 text-n-50 rounded-sm transition-all duration-300 cursor-pointer">
                <TbMail size={20} />
                <span className="text-sm font-semibold">Sign In</span>
              </button>
              <button className=" flex items-center justify-center gap-3 p-1.5 text-n-100 rounded-sm transition-all duration-300 cursor-pointer">
                <TbMail size={20} />
                <span className="text-sm font-semibold">Sign Up</span>
              </button>
            </div>
            <div className="flex flex-col gap-4">
              <div className="flex flex-col gap-2">
                <span className="self-start text-n-100">Email</span>
                <input
                  type="text"
                  placeholder="you@example.com"
                  className="bg-n-500/80 px-2 py-2.5 rounded-lg placeholder:text-n-100/50 text-sm tracking-wide border-none outline-none"
                />
              </div>
              <div className="flex flex-col gap-2">
                <span className="self-start text-n-100">Password</span>
                <input
                  type="password"
                  placeholder="* * * * * * * * "
                  className="bg-n-500/80 px-2 py-2.5 rounded-lg placeholder:text-n-100/50 text-sm tracking-wide border-none outline-none"
                />
              </div>
              <button className="flex items-center justify-center gap-3 p-2 mt-2 bg-n-50 text-n-900 rounded-sm transition-all duration-300 hover:bg-n-50/90 cursor-pointer">
                <TbMail size={20} />
                <span className="text-sm font-semibold">
                  Continue with Email
                </span>
              </button>
            </div>
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
          </div>
          <div className="h-5 w-full border-t border-n-500/80 bg-n-600/70" />
          <div className="grow flex items-end justify-end border-t border-n-500/80 bg-n-600/70" />
        </div>
        <div className="grow h-full border-l border-n-500/80 bg-n-600/70" />
      </div>
    </section>
  );
};

export default Auth;
