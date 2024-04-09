import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./Main";
import Infomation from "./Infomation";


function App() {
  return (
    <BrowserRouter basename="https://satoru-79.github.io/blackjack_calculator">
        <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/information" element={<Infomation />} />
        </Routes>
    </BrowserRouter>
  );
}

export default App