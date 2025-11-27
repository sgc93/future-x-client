import { sampleVideos } from "../../constants/data";
import logo from "../../assets/logo.png";

export const ListBox = () => {
  return (
    <div className="h-[92.3dvh] mb:h-[90.8dvh] grow flex p-1">
      <div className="relative grow h-full flex flex-col items-start gap-1 bg-n-600 p-3 mb:p-5 mb:pr-0 pb-0 rounded-lg border border-n-400">
        <span className="text-sm font-bold text-n-100">
          Videos ({sampleVideos.length})
        </span>
        <div className="absolute left-0 top-8 mb:top-10 z-10 w-full h-5 bg-linear-to-b from-n-600 to-transparent" />
        <div className="h-[98%] flex flex-wrap items-center mb:max-lg:justify-center gap-6 py-3.5 px-0 mb:px-3 overflow-y-auto overflow-x-hidden hidden-scroll mb:light-scroll">
          {sampleVideos.map((video, index) => (
            <div
              key={index}
              className="w-[98%] mb:max-[500px]:w-[80%] sm:max-[1000px]:w-[45%] min-[1000px]:w-[270px] h-[270px] flex flex-col gap-2 bg-n-400/60 border border-n-400 rounded-lg overflow-hidden cursor-pointer transition-all duration-300 hover:border-n-200 shadow-black shadow-lg"
            >
              <div className="relative flex">
                <img src={logo} className="w-full h-[187px]" />
                <span className="absolute right-2 bottom-2 bg-n-500/30 text-n-100 px-1 pt-px text-[11px] rounded-md">
                  {video.duration}
                </span>
              </div>
              <div className="flex flex-col items-start gap-1 pt-0 p-3">
                <span className="line-clamp-1 text-ellipsis text-sm text-start">{video.title}</span>
                <span className="text-start text-sm text-n-200 line-clamp-2 text-ellipsis">
                  {video.description}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ListBox;
