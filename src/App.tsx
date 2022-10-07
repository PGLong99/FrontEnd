import React from "react";
import "./App.css";
import Banner from "./Component/Banner/Banner";
import Display from "./Component/Body/Display";
import Footer from "./Component/Footer/Footer";
import Info from "./Component/Info/Info";

function App() {
  return (
    <div className="App">
      <Banner />
      <Display />
      <Info />
      <Footer />
    </div>
  );
}

export default App;
