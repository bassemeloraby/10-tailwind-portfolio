import { Fragment } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Skills from "./components/Skills"
import About from "./components/About";
const App = () => {
  return (
    <Fragment>
      <Navbar />
      <Hero/>
      <Skills/>
      <About/>
    </Fragment>
  );
};

export default App;
