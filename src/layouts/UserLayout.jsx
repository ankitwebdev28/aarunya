import PropTypes from "prop-types";
import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";
const UserLayout = ({ children }) => {
  return (
    <>
      <Navbar />
    
      <main className="relative isolate pt-18">{children}</main>
      <Footer />
    </>
  );
};

UserLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default UserLayout;
