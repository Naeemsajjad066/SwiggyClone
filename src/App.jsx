import Catagory from "./components/Catagory";
import Header from "./components/Header";
import "./App.css";
import TopRest from "./components/TopRest";
import OnlineDelivery from "./components/OnlineDelivery";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <Catagory/>
      <TopRest/>
      <OnlineDelivery/>
      <div className="h-[120px]"></div>
      <Footer />
    </div>
  );
}

export default App;
