import "./App.css";
import About from "./components/about/About";
import Bars from "./components/Bars";
import Booking from "./components/booking/Booking";
import Header from "./components/Header";
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
    </div>
  );
}

export default App;
