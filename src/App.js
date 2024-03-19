import { AuthProvider } from "./context/authContext";
import { useRoutes } from "react-router-dom";

import Header from "./components/Header";
import Home from "./pages/home";
import SignUp from "./pages/signup";
import Login from "./pages/login";

function App() {
  const routes = useRoutes([
    { path: "/", element: <Login /> },
    { path: "/signup", element: <SignUp /> },
    { path: "/login", element: <Login /> },
    { path: "/home", element: <Home /> },
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
