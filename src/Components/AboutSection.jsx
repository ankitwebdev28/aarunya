import React, { useEffect, useState, useRef } from "react";

const gwaliorImages = [
  "https://res.cloudinary.com/dgimh0a2j/image/upload/v1739351721/Reel%20Photo/Screenshot_20250210-104300_-_Shiv_Shrivastava_cu78wo_e2tcgw.png",
  "https://res.cloudinary.com/dgimh0a2j/image/upload/v1739351641/Reel%20Photo/IMG_9410_-_rahul_tomar_wwvugv_rtblsk.jpg",
  "https://res.cloudinary.com/dgimh0a2j/image/upload/v1739351641/Reel%20Photo/IMG-20250209-WA0003_-_0901CD221021_BRAJRAJ_MISHRA_ynofpz_kkuvvp.jpg",
  "https://res.cloudinary.com/dgimh0a2j/image/upload/v1739351640/Reel%20Photo/IMG-20240907-WA0006_1_-_Teena_Chhabra_ymq2d5_w3qde0.jpg",
  "https://res.cloudinary.com/dgimh0a2j/image/upload/v1739351640/Reel%20Photo/IMG_3187_-_Ishita_Rochlani_oz5tfb_rlktui.jpg",
  "https://res.cloudinary.com/dgimh0a2j/image/upload/v1739351639/Reel%20Photo/IMG_3338-1_-_Krishna_Sharma_aousis_nhih57.jpg",
];

const agraImages = [
  "https://res.cloudinary.com/dgimh0a2j/image/upload/v1739351638/Reel%20Photo/DSC_1098_-_0901CS221016_ANKUR_SHARMA_kwtcyy_ht9irv.jpg",
  "https://res.cloudinary.com/dgimh0a2j/image/upload/v1739351638/Reel%20Photo/IMG_2698_-_Yathartha_Jain_l7jbmy_kdbvcv.jpg",
  "https://res.cloudinary.com/dgimh0a2j/image/upload/v1739351636/Reel%20Photo/DSC_0010_1_-_Ankur_Sharma_etymle_fcdftb.jpg",
  "https://res.cloudinary.com/dgimh0a2j/image/upload/v1739351636/Reel%20Photo/Black_Grey_Yellow_Archival_GreetingsSlogans_Banner_Landscape_20240916_030620_0000_-_Thakral_Sahab_nahoxb_qgked8.jpg",
  "https://res.cloudinary.com/dgimh0a2j/image/upload/v1739351636/Reel%20Photo/team_iete_1_-_Avishi_Asati_qjwmlz_ijfkpq.png",
  "https://res.cloudinary.com/dgimh0a2j/image/upload/v1739351635/Reel%20Photo/9e5fbe87-b9a5-44f2-b61e-32d7647e91a4_-_AYUSHI_SARSWAT_sbztng_pw9myc.jpg",
];

const AboutUS = () => {
  const [displayText, setDisplayText] = useState("");
  const themetext = `Hello, how are you?`;
  const indexRef = useRef(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (indexRef.current < themetext.length) {
        setDisplayText((prev) => prev + themetext[indexRef.current]);
        indexRef.current++;
      } else {
        clearInterval(intervalId);
      }
    }, 50);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="flex flex-col md:flex-row h-screen bg-black text-white overflow-hidden">
      {/* Left Image Section */}
      <div className="hidden md:flex w-1/4 justify-center items-center overflow-hidden relative">
        <div className="w-full relative px-2 rounded-md bg-white shadow-lg h-full overflow-hidden">
          <div className="absolute inset-0 flex flex-col space-y-2 animate-scroll-y ">
            {gwaliorImages.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`Gwalior ${index + 1}`}
                className="object-cover border-dashed border-4 border-black h-full"
                loading="lazy"
              />
            ))}
          </div>
        </div>
      </div>

      {/* Center Content Section */}
      <div
        className="w-full md:w-2/4 flex flex-col justify-center items-center p-6  space-y-6"
        // style={{
        //   backgroundColor: "#AC7347",
        // }}
      >
        {/* About us Box */}
        <div className="w-full bg-opacity-20 bg-black p-6 rounded-lg border-2 border-yellow-500">
          <h1 className="text-4xl font-bold text-[#ff5733] text-center">
            ABOUT AARUNYA
          </h1>
          <p className="text-lg mt-4 px-4 text-center">
            AARUNYA, the annual cultural festival of MITS Gwalior, is one of the
            largest and most anticipated festivals throughout Asia. Translated
            literally to "The Fire Within," it has been a touchstone of India's
            college cultural heritage for over 58 years.
          </p>
        </div>

        {/* Theme Box */}
        <div className="w-full bg-opacity-20 bg-black p-6 rounded-lg border-2 border-yellow-500">
          <h2 className="text-yellow-400 text-lg font-bold tracking-widest text-center">
            THEME
          </h2>
          <h1 className="text-white text-2xl font-bold my-4 text-center">
            AARUNYA 2025: A Syncretic Jaunt
          </h1>
          <p className="text-white text-sm leading-relaxed text-center">
            Set sail on a timeless journey with Antaragni’s legendary ship,
            embarking from the heart of the ocean to explore the world’s diverse
            cultures. Our voyage culminates in India, a celebration of unity in
            diversity, where all cultures blend into one grand finale of music,
            dance, and art.
          </p>
        </div>
      </div>

      {/* Right Image Section */}
      <div className="hidden md:flex w-1/4 justify-center items-center overflow-hidden relative">
        <div className="w-full relative px-2 rounded-md bg-white shadow-lg h-full overflow-hidden">
          <div className="absolute inset-0 flex flex-col space-y-2 animate-scroll-y-reverse">
            {agraImages.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`Agra ${index + 1}`}
                className="object-cover border-dashed border-4 border-black h-full"
                loading="lazy"
              />
            ))}
          </div>
        </div>
      </div>

      {/* CSS Animation */}
      <style>
        {`
          @keyframes scroll-y {
            0% { transform: translateY(0); }
            50% { transform: translateY(-100%); }
            100% { transform: translateY(0); }
          }
          .animate-scroll-y {
            animation: scroll-y 15s linear infinite;
          }
          @keyframes scroll-y-reverse {
            0% { transform: translateY(-100%); }
            50% { transform: translateY(0); }
            100% { transform: translateY(-100%); }
          }
          .animate-scroll-y-reverse {
            animation: scroll-y-reverse 15s linear infinite;
          }
        `}
      </style>
    </div>
  );
};

export default AboutUS;
