import { AuthProvider } from "./context/authContext";
import { useRoutes } from "react-router-dom";

import Header from "./components/Header";
import Dashboard from "./pages/Dashboard";
import Home from "./pages/Home";
import SignUp from "./pages/Signup";
import SignIn from "./pages/Signin";

function App() {
  const routes = useRoutes([
    { path: "/", element: <Home /> },
    { path: "/signup", element: <SignUp /> },
    { path: "/login", element: <SignIn /> },
    { path: "/Home", element: <Home /> },
    { path: "/dashboard", element: <Dashboard /> },
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
