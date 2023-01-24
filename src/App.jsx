import React from "react";
import Header from "./components/header/Header";
import { GlobalStyles } from "./components/shared/Global";
import Hero from "./components/hero/Hero";
import Cta from "./components/cta/Cta";

function App() {
  return (
    <>
      <GlobalStyles />

      <div className="container-app">
        <Header />
        {/* <Hero /> */}
        <Cta />
      </div>
    </>
  );
}

export default App;
