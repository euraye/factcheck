import FeaturesCard from "@/components/features-card";
import LogoLoop from "@/components/LogoLoop";
import Link from "next/link";

const FEATURES = [
  {
    title: "Investigate Sources",
    description:
      "Verify information from multiple sources. Learn to distinguish credible journalism from manipulation.",
    imageSrc: "/images/Patreon.png",
  },
  {
    title: "Sort Through Emails",
    description:
      "Identify phishing scams, fake news, and propaganda. Every email is a test of your judgement.",
    imageSrc: "/images/Gmail.png",
  },
  {
    title: "Make Moral Choices",
    description:
      "Face ethical dilemmas as government influence and corporate agendas test your integrity.",
    imageSrc: "/images/Checkmark.png",
  },
  {
    title: "Track your progress",
    description:
      "Monitor your integrity meter and see how your decisions shape your career as a journalist.",
    imageSrc: "/images/notesApp.png",
  },
];

const SCREENSHOTS = [
  "/images/Image1.jpg",
  "/images/Image2.jpg",
  "/images/Image3.jpg",
  "/images/Image4.jpg",
  "/images/Image1.jpg",
  "/images/Image2.jpg",
  "/images/Image3.jpg",
  "/images/Image4.jpg",
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
        <div className="absolute top-12 md:top-20 lg:top-25 xl:top-40 2xl:top-50 left-1/2 transform -translate-x-1/2 z-10 flex flex-col items-center gap-2 md:gap-4 lg:gap-4 xl:gap-6 2xl:gap-8 overflow-y-auto overflow-x-hidden h-40 md:h-80 lg:h-110 xl:h-145 2xl:h-200">
          {FEATURES.map((feature, index) => (
            <FeaturesCard key={index} data={feature} />
          ))}
        </div>
        <img src="/images/Features.png" alt="" className="w-full" />
      </section>

      {/* ----- SCREENSHOTS ----- */}
      <section id="screenshots" className="relative w-full scroll-mt-20">
        {/* ----- HEADER TEXT ----- */}
        <div className="bg-[#383838] text-[#D9D9D9] h-30 flex flex-row items-center">
          <h1 className="text-center text-4xl md:text-5xl lg:text-6xl xl:text-7xl ml-15  xl:ml-30">
            Screenshots
          </h1>
        </div>

        {/* ----- OVERLAID PHOTOS ----- */}
        <div className="absolute z-3 top-70 xl:top-60 left-1/2 -translate-x-1/2 flex flex-row gap-4 w-[95%] overflow-x-auto pb-10 snap-x snap-mandatory">
          {/* ----- PHOTO 1 -----  */}
          {SCREENSHOTS.map((src, index) => (
            <div key={index} className="relative shrink-0 w-80 md:w-110 xl:w-110 2xl:w-145 snap-center">
              <img src="/images/BoxTL.png" alt="" className="z-2" />
              <img
                src={src}
                alt=""
                className="absolute bottom-[0.6rem] right-0 w-[98%] z-1 object-cover aspect-[4.13/3]"
              />
            </div>
          ))}

          {/* <div className="relative">
            <img src="/images/BoxM.png" alt="" className="z-2"/>
            <img src="/images/Image2.jpg" alt="" className="absolute bottom-3 right-[0.1rem] z-1 w-[98%] object-cover aspect-[4.17/3]"/>
          </div>
          <div className="relative">
            <img src="/images/BoxBR.png" alt="" className="z-2"/>
            <img src="/images/Image3.jpg" alt="" className="absolute bottom-3 right-0 z-1 w-[97.5%] object-cover aspect-[4.15/3]"/>
          </div> */}
        </div>
        {/* ----- BACKGROUND ----- */}
        <img src="/images/Screenshots.png" alt="" className="w-full h-150 lg:h-250" />
      </section>

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
            href="https://forms.gle/oNEQP84QsaN6otQq9"
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
