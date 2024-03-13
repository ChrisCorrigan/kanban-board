import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import HomePageView from "./views/HomePageView";
import SignUpView from "./views/SignUpView";
import LoginView from "./views/LoginView";
import DashboardView from "./views/DashboardView";
// import BoardView from "./views/BoardView";

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePageView />} />
          <Route path="/signup" element={<SignUpView />} />
          <Route path="/login" element={<LoginView />} />
          <Route path="/dashboard" element={<DashboardView />} />
          {/* <Route path="/board/:id" element={<BoardView />} /> */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
