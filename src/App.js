import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./Main";
import Infomation from "./Infomation";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={`/`} element={<Main />} />
        <Route path={`/infomation`} element={<Infomation />} />
        
      </Routes>
    </BrowserRouter>
  );
}

export default App