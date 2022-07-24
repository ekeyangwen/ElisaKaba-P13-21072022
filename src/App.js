import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Components/Header";
import Home from "./pages/home";
import Footer from "./Components/Footer";
import Login from "./pages/login";
import Account from "./pages/account";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/account" element={<Account />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
