export const BlogHero = () => {
  return (
    <section
      className="w-full py-16 sm:py-24 flex flex-col items-center max-sm:gap-2 justify-center text-center"
      style={{
        background:
          "linear-gradient(160deg, #1a1756 0%, #3730a3 50%, #6d5fd5 100%)",
      }}
    >
      <h1 className="text-[72px] max-sm:text-5xl font-bold text-center text-white">
        PbN <span className="text-violet-300">Blog</span>
      </h1>
      <p className="text-lg sm:text-xl w-fit sm:text-nowrap text-center text-white">
        The best tips, tricks, and insights about dental practice management.
      </p>
    </section>
  );
};
