import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Login from "./Components/Login.jsx";
import Home from "./HomeComponent/HomePage.jsx";

const App = () => {
  return (
    <Router>
      <Routes>
        {/* shows login page */}
        <Route path="/" element={<Login />} />
        {/* shows home page */}
        <Route path="/Home" element={<Home />} />
      </Routes>
    </Router>
  );
};
export default App;
