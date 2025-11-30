import FeaturesCard from "@/components/features-card";
import LogoLoop from "@/components/LogoLoop";
import Link from "next/link";

const FEATURES = [
  {
    title: "Realistic Scenarios",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veniam aspernatur cum sint saepe rerum iste, beatae repellendus, nihil aut minima voluptatibus amet, adipisci molestiae ducimus neque quidem hic obcaecati voluptatum.",
    imageSrc: "/images/Patreon.png",
  },
  {
    title: "Realistic Scenarios",
    description:
      "Engage with authentic news articles, social media posts, and documents that mirror real-world misinformation challenges.",
    imageSrc: "/images/Patreon.png",
  },
  {
    title: "Realistic Scenarios",
    description:
      "Engage with authentic news articles, social media posts, and documents that mirror real-world misinformation challenges.",
    imageSrc: "/images/Patreon.png",
  },
];

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-zinc-50 font-sans select-none">
      {/* ----- LANDING SECTION ----- */}
      <section className="">
        <img src="/images/Landing.png" alt="" className="w-full" />
        <LogoLoop
          logos={[
            { node: <h1 className="text-[#D9D9D9]">Republica Post!</h1> },
            { node: <h1 className="text-[#863131]">Republica Post!</h1> },
          ]}
          speed={120}
          direction="left"
          logoHeight={50}
          gap={40}
          pauseOnHover={false}
          className="bg-[#383838] h-fit py-5 lg:text-2xl border-y-12 border-[#863131]"
        />
      </section>

      {/* ----- ABOUT SECTION ----- */}
      <section id="about" className="relative w-full scroll-mt-20">
        <div className="absolute top-12 md:top-25 lg:top-35 xl:top-50 2xl:top-70 left-1/2 transform -translate-x-1/2 z-10 flex flex-col items-center gap-2 md:gap-4 lg:gap-8 xl:gap-12 2xl:gap-16">
          <h1 className="text-[#383838] text-md md:text-3xl lg:text-5xl xl:text-7xl 2xl:text-[7rem]/[7rem] flex flex-row gap-1 md:gap-4">
            What is{" "}
            <span className="bg-[#383838] text-[#D9D9D9] px-8">
              Fact Checking
            </span>
            <div className="w-0.5 md:w-1 lg:w-2 bg-[#383838] animate-caret-blink" />
          </h1>
          <p className="text-center text-xs md:text-xl lg:text-2xl xl:text-4xl 2xl:text-5xl text-[#383838] w-70 md:w-120 lg:w-150 xl:w-220 2xl:w-290">
            Step into the shoes of an investigative journalist in a world
            overwhelmed by misinformation, fake news, and propaganda.{" "}
            <span className="bg-[#383838]/50 px-2">Fact Check</span> is a
            simulation game where you analyze news articles, social media posts,
            and leaked documents to determine what's true, what's false, and
            what's unverified. Test your integrity, sharpen your critical
            thinking, and become a champion of truth in the digital age.
          </p>
        </div>
        <img src="/images/About.png" alt="" className="w-full" />
      </section>

      {/* ----- FEATURES SECTION ----- */}
      <section id="features" className="relative w-full scroll-mt-20">
        <div className="absolute top-12 md:top-20 lg:top-35 xl:top-40 2xl:top-50 left-1/2 transform -translate-x-1/2 z-10 flex flex-col items-center gap-2 md:gap-4 lg:gap-8 xl:gap-12 2xl:gap-16 overflow-y-auto overflow-x-hidden h-40 md:h-80 lg:h-90 xl:h-145 2xl:h-210">
          {FEATURES.map((feature, index) => (
            <FeaturesCard key={index} data={feature} />
          ))}
        </div>
        <img src="/images/Features.png" alt="" className="w-full" />
      </section>

      {/* ----- SCREENSHOTS ----- */}
      {/* <section id="screenshots" className="w-full scroll-mt-20">
        <img src="/images/Screenshots.png" alt="" className="w-full" />
      </section> */}
      
      {/* ----- SURVEY SECTION ----- */}
      <section id="survey" className="relative w-full scroll-mt-20">
        <div className="absolute md:top-12 lg:top-20 xl:top-40 2xl:top-50 left-1/2 transform -translate-x-1/2 z-10 flex flex-col items-center gap-2 md:gap-4 lg:gap-8 xl:gap-12 2xl:gap-14 text-white">
          <h1 className="text-2xl md:text-5xl lg:text-6xl xl:text-7xl">
            Help Us Improve
          </h1>
          <p className="text-center w-xs md:w-xl lg:w-3xl xl:w-5xl md:text-2xl lg:text-4xl xl:text-5xl">
            Your feedback is crucial! We're conducting a research study to
            measure the effectiveness of Fact Check in improving media literacy
            and critical thinking skills. Please take a few minutes to complete
            our survey and share your experience playing the game.
          </p>
          <Link
            href=""
            target="_blank"
            className="bg-[#863131] px-4 py-2 rounded text-white hover:bg-[#a64c4c] hover:text-white transition shadow-[#383838] shadow-md md:text-4xl lg:text-5xl xl:text-7xl"
          >
            TAKE THE SURVEY
          </Link>
        </div>
        <img src="/images/Survey.png" alt="" className="w-full" />
      </section>
    </div>
  );
}
