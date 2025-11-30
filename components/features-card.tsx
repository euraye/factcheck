import React from "react";

const FeaturesCard = ({
  data,
}: {
  data: { title: string; description: string; imageSrc: string };
}) => {
  return (
    <div className="w-80 md:text-2xl md:w-2xl lg:text-3xl lg:w-4xl xl:text-5xl xl:w-7xl 2xl:text-6xl 2xl:w-400 border-[#404040] border-2 xl:border-4 px-4 py-2">
      <div className="flex flex-row items-center gap-1 md:gap-3 xl:gap-4">
        <img
          src={data.imageSrc}
          alt={data.title}
          className="size-4 md:size-6 lg:size-8 xl:size-12 2xl:size-16"
        />
        <h2 className="font-semibold">{data.title}</h2>
      </div>
      <p className="text-xs md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl">{data.description}</p>
    </div>
  );
};

export default FeaturesCard;
