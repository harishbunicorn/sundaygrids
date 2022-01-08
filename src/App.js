import Banner from "./components/Banner";
import Credits from "./components/Credits";
import GettingStarted from "./components/GettingStarted";
import NavBar from "./components/NavBar";
import Portion from "./components/Portion";
import logo from "./LogoDark.png";

function App() {
  return (
    <div className="bg-gray-100">
      <NavBar logo={logo}/>
      <Banner/>
      <Portion/>
      <GettingStarted/>
      <Credits/>
    </div>
  );
}

export default App;
