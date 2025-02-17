import Main from "../Components/Main.jsx";
import AboutUS from "../Components/AboutSection.jsx";
import DiscoverSection from "../Components/Discover.jsx";

const Home = () => {
  return (
    <div>
      {/* Main Section */}
      <Main />

      {/* About Section */}
      <AboutUS />

      {/* Discover Section */}
      <DiscoverSection />
    </div>
  );
};

export default Home;
