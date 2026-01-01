import "./App.css";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import MainSection from "./Components/MainSection";
import Footer from "./Components/Footer";

function App() {
  return (
    <>
      <div className="font-sans">
        <Navbar></Navbar>
        <Hero></Hero>
        <MainSection></MainSection>
        <Footer></Footer>
      </div>
    </>
  );
}

export default App;