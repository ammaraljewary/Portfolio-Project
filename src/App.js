import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Particles from "react-particles-js";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import AboutMe from "./components/AboutMe";
import Education from "./components/Education";
import MyProjects from "./components/MyProjects";
import ContactMe from "./components/ContactMe";
import Footer from "./components/Footer";

function App() {
  return (
    <>
    <Particles 
    className="particles-canvas"
      params={{
        particles: {
          Number: {
            value: 50,
            density: {
              enable: true,
              value_area: 900
            }
          },
          shape: {
            type: "circle",
            stroke: {
              width: 6,
              color: "#f9ab00"
            }
          }
          
        }
      }}
    />
   <Navbar />
   <Header />
   <AboutMe />
   <Education />
   <MyProjects />
   <ContactMe />
   <Footer />
   </>
  );
}

export default App;
