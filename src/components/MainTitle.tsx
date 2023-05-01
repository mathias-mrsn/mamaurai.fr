const titlesClassName =
  "dark:text-white text-black text-9xl max-sm:text-7xl font-playfair tracking-title";

export const MainTitle = () => {
  return (
    <>
      <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center">
        <div className="w-5/6 flex flex-col items-center">
          <h3 className="text-white font-inter font-thin tracking-[.25em] text-xs mb-7 ">
            MATHIAS MAURAISIN DEVELOPPER
          </h3>
          <h1 className={titlesClassName}>Turn</h1>
          <div className="flex flex-row">
            <h1 className={titlesClassName}>your&nbsp;</h1>
            <h1 className={titlesClassName + " text-yellow-400 dark:text-yellow-400"}>idea</h1>
          </div>
          <h1 className={titlesClassName}>into</h1>
          <div className="relative flex justify-center">
            <h1 className="relative text-yellow-400 text-9xl max-sm:text-7xl font-roboto font-bold tracking-title">
                reality
            </h1>
          </div>
        </div>
      </div>
    </>
  );
};
