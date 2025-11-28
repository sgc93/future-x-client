import { TbLoader } from "react-icons/tb";

const PageLoader = ({msg, isError=false}: {msg: string, isError?: boolean}) => {
  return (
    <section className="w-screen h-screen flex flex-col text-center overflow-y-auto hidden-scroll">
      <div className="max-mb:h-14 mb:flex-1 w-full border-b border-n-400/70 bg-n-600"></div>
      <div className="h-2 mb:h-5 w-full border-b border-n-400/70 bg-n-600" />
      <div className="grow flex">
        <div className="flex-1 h-full border-r border-n-400/70 bg-n-600" />
        <div className="w-[250px] flex border-r p-3 border-n-400/70 bg-n-900">
          <div className="grow flex flex-col items-center justify-center gap-3 rounded-lg p-5 bg-n-600">
            {isError ? (
              <TbLoader className="animate-pulse text-red-600 text-3xl" />
            ) : (
              <TbLoader className="animate-spin text-3xl" />
            )}
            {isError ? (
              <span className="text-base text-red-600">{msg}</span>
            ) : (
              <span className="text-base text-n-100">{msg}</span>
            )}
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

export default PageLoader;
