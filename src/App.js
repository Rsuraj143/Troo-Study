import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Routes/Home";
import About from "./Routes/About";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Home/About" element={<About/> } />

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
