const AvatarPlaceHolder = ({ name }: { name: string }) => {
  const firstLetter = name[0];

  return (
    <div className="relative w-full h-full flex flex-col items-center justify-center bg-main-1">
      <span className="text-6xl uppercase font-bold text-n-50">{firstLetter}</span>
      <span className="absolute bottom-3 left-3 self-end text-[10px] text-n-100/80">No Avatar</span>
    </div>
  );
};

export default AvatarPlaceHolder;
