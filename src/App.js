import "./App.css";
import Pecuscan from "./PecuScan/Pecuscan";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Addblock from "./PecuScan/AddBlock/Addblock";

function App() {
  return (
    <>
      <BrowserRouter>
      
       
        <Routes>
          <Route path="/" element={<Pecuscan />} />
          <Route path="/addblock" element={<Addblock/>} />
          </Routes>
          </BrowserRouter>
    </>
  );
}

export default App;
