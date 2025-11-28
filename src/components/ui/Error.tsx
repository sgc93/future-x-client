import { useEffect } from "react";
import { CiWarning } from "react-icons/ci";

const Error = ({error, onClose}:{error: string | null, onClose: () => void}) => {

    useEffect(() => {
        const timeout = setTimeout(() => {
            if(error){
                onClose();
            }
        }, 4000);

        return () => clearTimeout(timeout)
    },[onClose, error])

  return (
    <div
      className={`absolute ${
        error ? "top-0 h-max" : "-top-full h-0"
      } w-max max-w-[85%] left-1/2 -translate-x-1/2 flex flex-col gap-3 p-3 items-center justify-center rounded-b-lg bg-n-600 text-red-600 shadow-black shadow-lg transition-all duration-500`}
    >
      <CiWarning className="animate-pulse" size={22}/>
      <span className="text-base">{error}</span>
    </div>
  );
};

export default Error;
