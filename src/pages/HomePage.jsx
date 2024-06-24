import FrontPageShowcase from "../components/FrontPageShowcase";
import Cube3d from "../components/Cube";
import Navbar from "../components/navbar";
import Footer from "../components/Footer";
import WotawatiShortMessage from "../components/WotawatiShortMessage";


const HomePage = () => {
  return (
   <div className="overflow-hidden">
    <Navbar />
     <FrontPageShowcase />
     <WotawatiShortMessage/>
     <br />
     <br />
     <br />
     <br />
     <Footer/>
   </div>
  );
};

export default HomePage;
