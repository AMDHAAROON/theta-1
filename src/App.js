import { useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Analytics } from "@vercel/analytics/react";

import AOS from "aos";
import "./App.css";
import "aos/dist/aos.css";

import Home from "./Pages/Home";
import Emulsion from "./Pages/ClustersPages/Emulsion";
import Informatica from "./Pages/ClustersPages/Informatica";
import Robotics from "./Pages/ClustersPages/Robotics";
import AllEvents from "./Pages/EventsPages/AllEvents";
import Day1 from "./Pages/EventsPages/Day1";
import Day2 from "./Pages/EventsPages/Day2";
import Day3 from "./Pages/EventsPages/Day3";
import ContactUs from "./Pages/ContactUs";
import Workshops from "./Pages/Workshops";
import Developers from "./Pages/Developers ";
import Cluster from "./Pages/Cluster";
import NotFound from "./Component/NotFound";
import Gal from "./Pages/Gal";
import Tshirt from "./Pages/Tshirt";
import Access from "./Pages/ClustersPages/Access";
import Electronica from "./Pages/ClustersPages/Electronica";
import Equilibria from "./Pages/ClustersPages/Equilibria";
import Mathematica from "./Pages/ClustersPages/Mathematica";
import Biogenesis from "./Pages/ClustersPages/Biogenesis";
import Optica from "./Pages/ClustersPages/Optica";
import Sportiva from "./Pages/ClustersPages/Sportiva";
import Strategia from "./Pages/ClustersPages/Strategia";
import Vv from "./Pages/ClustersPages/Vv";

function App() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/emulsion" element={<Emulsion />} />
        <Route path="/robotics" element={<Robotics />} />
        <Route path="/informatica" element={<Informatica />} />
        <Route path="/Access" element={<Access />} />
        <Route path="/Electronica" element={<Electronica />} />
        <Route path="/Equilibria" element={<Equilibria />} />
        <Route path="/Mathematica" element={<Mathematica />} />
        <Route path="/Biogenesis" element={<Biogenesis />} />
        <Route path="/Optica" element={<Optica />} />
        <Route path="/Sportiva" element={<Sportiva />} />
        <Route path="/Strategia" element={<Strategia />} />
        <Route path="/Vv" element={<Vv />} />
        <Route path="/allEvents" element={<AllEvents />} />
        <Route path="/day-one" element={<Day1 />} />
        <Route path="/day-two" element={<Day2 />} />
        <Route path="/day-three" element={<Day3 />} />
        <Route path="/workshops" element={<Workshops />} />
        <Route path="/developers" element={<Developers />} />
        <Route path="/cluster" element={<Cluster />} />
        <Route path="/gallery" element={<Gal />} />
        <Route path="/merchandise" element={<Tshirt />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Analytics />
    </BrowserRouter>
  );
}

export default App;
