import { BrowserRouter, Routes, Route } from "react-router-dom";
import 'react-toastify/dist/ReactToastify.css';

//pages & componnents
import Authentication from "./pages/authentication/authentication";
import SignUp from "./pages/signin-signup/signUp";
import SignIn from "./pages/signin-signup/signIn";
import Landing from "./pages/landing/landing";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />}></Route>
        <Route path="/authentication" element={<Authentication />}>
          <Route path="signup" element={<SignUp />}></Route>
          <Route path="signin" element={<SignIn />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App;
