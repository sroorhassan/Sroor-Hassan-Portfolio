import Landing from "../sections/Landing";
import About from "../sections/About";
import Skills from "../sections/Skills";
import Projects from "../sections/Projects";
import Gallery from "../sections/Gallery";
import Footer from "../components/home/Footer";
import QuoteSection from "../sections/Qoute";
function Home() {
  return (
    <div className="page" style={{ width: "100%" }}>
      {/*Main Section*/}
      <Landing></Landing>
      {/*About Section*/}
      <About></About>
      {/*Skills Section*/}
      <Skills></Skills>
      {/*Projects Section*/}
      <Projects></Projects>
      {/*Gallery Section*/}
      <Gallery></Gallery>
      {/*Gallery Section*/}
      <QuoteSection></QuoteSection>

      {/*Footer Section*/}
      <Footer></Footer>

      
    </div>
  );
}

export default Home;
