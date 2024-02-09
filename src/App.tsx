import Navbar from "@/Scenes/Navbar";
import AboutMe from "@/Scenes/AboutMe";
import Portfolio from "@/Scenes/Portfolio";
import Benefits from "@/Scenes/Benefits";
import ContactMe from "@/Scenes/ContactMe";
import Footer from "@/Scenes/Footer";
import { useEffect, useState } from "react";
import { SelectedPage } from "@/shared/type";

function App() {
  const [selectedPage, setSelectedPage] = useState<SelectedPage>(
    SelectedPage.AboutMe
    );
  const [isTopOfPage, setIsTopOfPage] = useState<boolean>(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setIsTopOfPage(true);
        setSelectedPage(SelectedPage.AboutMe);
      }
      if (window.scrollY !== 0) setIsTopOfPage(false);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="app bg-pilka">
      <Navbar
        isTopOfPage={isTopOfPage}
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage}
        />

      <AboutMe setSelectedPage={setSelectedPage}/>
      <Portfolio setSelectedPage={setSelectedPage}/>
      <Benefits setSelectedPage={setSelectedPage}/>
      <ContactMe setSelectedPage={setSelectedPage}/>
      <Footer />
  </div>
  );
}

export default App
