import { BrowserRouter, Routes, Route } from "react-router-dom";

//pages & componnents
import Authentication from "./pages/authentication/authentication";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/authentication" element={<Authentication />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App;
