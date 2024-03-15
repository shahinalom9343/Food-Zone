import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import ContainerHeader from "./components/container/ContainerHeader";
import Cards from "./components/container/cards/Cards";
import Sidebars from "./components/container/sidebars/Sidebars";
function App() {
  return (
    <>
      <Navbar></Navbar>
      <Banner></Banner>
      <ContainerHeader></ContainerHeader>
      <div className="lg:px-32 mx-auto mt-2 lg:mt-7 grid grid-cols-1 lg:grid-cols-8">
        <div className="col-span-5">
          <Cards></Cards>
        </div>
        <div className="col-span-3">
          <Sidebars></Sidebars>
        </div>
      </div>
    </>
  );
}

export default App;
