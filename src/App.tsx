import { Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Home from "./pages/Home/Home";
import Leadership from "./pages/Leadership/Leadership";
import Tracks from "./pages/Tracks/Tracks";
import Events from "./pages/Events/Event";
function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/Leadership" element={<Leadership/>}/>
        <Route path="/Tracks" element={<Tracks/>}/>
        <Route path="/Events" element={<Events/>}/>
        
      </Routes>
     
      {/* <FooterElement/> */}
    </div>
  );
}

export default App;
