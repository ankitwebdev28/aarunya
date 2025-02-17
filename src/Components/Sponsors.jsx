import * as motion from "motion/react-client";

const Sponsors = [
  "/images/sponsor/Coca-Cola.png",
  "/images/sponsor/Coca-Cola.png",
  "/images/sponsor/Coca-Cola.png",
];

const titleSponsor = ["/images/sponsor/Coca-Cola.png"];
const poweredBy = ["/images/sponsor/Coca-Cola.png"];
const coPoweredBy = ["/images/sponsor/Coca-Cola.png"];
const presentedBy = ["/images/sponsor/Coca-Cola.png"];
const strategicSponsor = ["/images/sponsor/Coca-Cola.png"];
const foodBeverageSponsor = ["/images/sponsor/Coca-Cola.png"];

export default function Sponsor() {
  return (
    <>
      <div
        className="relative flex flex-col justify-center items-center min-h-screen bg-no-repeat bg-cover bg-center"
        style={{
          backgroundImage: "url('/images/bg/sponsor_bg.png')",
        }}
      >
        {/* Centered Overlay Content */}
        <div className="absolute inset-0 flex flex-col justify-center items-center w-full h-full gap-6 z-40">
          <h1 className="text-white text-3xl md:text-4xl font-seagram font-semibold text-center">
            Sponsor's of
          </h1>

          {/* Main Logo */}
          <div
            className="bg-center bg-no-repeat bg-contain opacity-90 w-2/3 sm:w-1/2 md:w-1/3 h-auto aspect-[3/2]"
            style={{
              backgroundImage: "url('/images/aarunya_poster.png')",
            }}
          ></div>

          <h1 className="text-white text-3xl md:text-4xl font-seagram font-semibold text-center">
            Sponsorship and Marketing Heads
          </h1>

          {/* Sponsor Logos */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 max-w-screen-lg">
            {Sponsors.map((sponsor, index) => (
              <div
                key={index}
                className="bg-[#000000af] w-32 h-16 bg-contain bg-center bg-no-repeat"
                style={{
                  backgroundImage: `url('${sponsor}')`,
                }}
              ></div>
            ))}
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center justify-center py-10 bg-[#1b5060]">
        <h1 className="text-white text-4xl font-seagram font-semibold text-center mb-6">
          Our Sponsors
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 w-4/5">
          {/* Title Sponsor */}
          <SponsorCategory title="Title Sponsor" sponsors={titleSponsor} />

          {/* Powered By */}
          <SponsorCategory title="Powered By" sponsors={poweredBy} />

          {/* Co-Powered By */}
          <SponsorCategory title="Co-Powered By" sponsors={coPoweredBy} />

          {/* Presented By */}
          <SponsorCategory title="Presented By" sponsors={presentedBy} />

          {/* Strategic Sponsor */}
          <SponsorCategory
            title="Strategic Sponsor"
            sponsors={strategicSponsor}
          />

          {/* Food & Beverage Sponsor */}
          <SponsorCategory
            title="Food & Beverage Sponsor"
            sponsors={foodBeverageSponsor}
          />
        </div>
      </div>
    </>
  );
}

function SponsorCategory({ title, sponsors }) {
  return (
    <div className="flex flex-col items-center">
      <h2 className="text-white text-2xl font-semibold mb-4">{title}</h2>
      {sponsors.map((sponsor, index) => (
        <div
          key={index}
          className="bg-[#000000af] w-40 h-20 bg-contain bg-center bg-no-repeat mb-4"
          style={{
            backgroundImage: `url('${sponsor}')`,
          }}
        ></div>
      ))}
    </div>
  );
}
