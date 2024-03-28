import { AuthProvider } from "./context/authContext";
import { useRoutes } from "react-router-dom";

import Header from "./components/Header";
import Dashboard from "./pages/Dashboard";
import Home from "./pages/home";
import SignUp from "./pages/Signup";
import SignIn from "./pages/Signin";
import Board from "./pages/Board";
import CreateBoard from "./pages/CreateBoard";

function App() {
  const routes = useRoutes([
    { path: "/", element: <Home /> },
    { path: "/signup", element: <SignUp /> },
    { path: "/login", element: <SignIn /> },
    { path: "/Home", element: <Home /> },
    { path: "/dashboard", element: <Dashboard /> },
    { path: "/board/:id", element: <Board /> },
    { path: "/createboard", element: <CreateBoard /> },
  ]);

  return (
    <AuthProvider>
      <div className="App">
        <Header />
        {routes}
      </div>
    </AuthProvider>
  );
}

export default App;
