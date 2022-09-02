import { BrowserRouter, Routes, Route } from "react-router-dom";

//pages & componnents
import Main from "./pages/main";

//styles
import './App.scss';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App;
