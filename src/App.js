import { ThemeProvider } from "styled-components";
import GlobalStyles from "./styles/GlobalStyles";
import { dark } from "./styles/Theme";
import { useRef } from "react";
import Home from "./sections/Home";
import "locomotive-scroll/dist/locomotive-scroll.css";
import useLocoScroll from "./components/useLocomotiveScroll";
import { AnimatePresence } from "framer-motion";
import About from "./sections/About";
import Shop from "./sections/Shop";
import ScrollTriggerProxy from "./components/ScrollTriggerProxy";
import Banner from "./components/Banner";
import NewArrival from "./sections/NewArrival";

function App() {
  const containerRef = useRef(null);
  useLocoScroll();
  return (
    <>
      <GlobalStyles />
      <ThemeProvider theme={dark}>
        <ScrollTriggerProxy />
        <AnimatePresence>
          <main className="App" data-scroll-container ref={containerRef}>
            <Home />
            <About />
            <Shop />
            <Banner />
            <NewArrival />
          </main>
        </AnimatePresence>
      </ThemeProvider>
    </>
  );
}

export default App;
