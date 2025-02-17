import React from "react";

const ThemeSection = () => {
  return (
    <div
      className="relative flex flex-col items-center justify-center min-h-screen text-center text-white bg-cover bg-center"
      style={{
        backgroundColor: "black",
      }}
    >
      {/* Theme Box */}
      <div className="w-3/4 md:w-2/3 bg-opacity-20 bg-black p-6 md:p-10 rounded-lg border-2 border-yellow-500">
        <h2 className="text-yellow-400 text-lg md:text-xl font-bold tracking-widest">
          THEME
        </h2>
        <h1 className="text-white text-2xl md:text-3xl font-bold my-4">
          AARUNYA 2025: A Syncretic Jaunt
        </h1>
        <p className="text-white text-sm md:text-lg leading-relaxed">
          Set sail on a timeless journey with Antaragni’s legendary ship,
          embarking from the heart of the ocean to explore the world’s diverse
          cultures. From the mystical lands of Asia to the enchanting realms of
          Europe, the vibrant heart of Africa, the dynamic worlds of America,
          and finally, our cherished homeland, India – each stop unveils a rich
          tapestry of traditions, art, music, and beliefs. Experience the
          grandeur of ancient temples, the rhythm of exotic dances, the stories
          told through breathtaking architecture, and the wisdom of diverse
          philosophies.
          <br />
          <br />
          As we traverse through these zones, we gather the best cultural
          treasures – not just the famous, but the extraordinary essence that
          defines each land. Our voyage culminates in India, a celebration of
          unity in diversity, where all cultures blend into one grand finale of
          music, dance, and art. Join us on this unparalleled adventure, where
          every wave and wind echoes with the spirit of acceptance,
          inclusiveness, and the shared human soul. Together, let’s celebrate
          the world in its vibrant hues and boundless beauty.
        </p>
      </div>

    </div>
  );
};

export default ThemeSection;
