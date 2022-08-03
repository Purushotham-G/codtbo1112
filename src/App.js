import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Cart from "./Component/Cart";
import Category from "./pages/Category";
import Profile from "./Component/Profile";
import DashBoard from "./Component/DashBoard";
import DashBoard1 from "./Component/DashBoard1";
import PopupScreen from "./Component/PopupScreen";
import NewPage from "./pages/NewPage";

function App() {
  const routes = (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/category" element={<Category />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/dashboard" element={<DashBoard />} />
        <Route path="/dashboard1" element={<DashBoard1 />} />
        <Route path="/popup" element={<PopupScreen />} />
        <Route path="/newPage" element={<NewPage />} />
      </Routes>
    </BrowserRouter>
  );
  return <>{routes}</>;
}

export default App;
