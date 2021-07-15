import "./App.css";
import About from "./components/about/About";
import Bars from "./components/Bars";
import Booking from "./components/booking/Booking";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Gallery from "./components/Gallery";
import Header from "./components/Header";
import News from "./components/News";
import Pool from "./components/Pool";
import Rooms from "./components/Rooms";
import Screen from "./components/Screen";
import SocialMedia from "./components/SocialMedia";

function App() {
  return (
    <div className="App">
      <Header />
      <Screen />
      <SocialMedia media={"home"} />
      <Booking />
      <About />
      <Rooms />
      <Bars />
      <Pool />
      <Gallery />
      <News />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
