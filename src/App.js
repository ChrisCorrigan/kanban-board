import Header from "./components/Header";
import Home from "./pages/home";
import SignUp from "./pages/signup";
import Login from "./pages/login";

import { AuthProvider } from "./context/authContext";
import { useRoutes } from "react-router-dom";

function App() {
  const routes = useRoutes([
    { path: "/", element: <Home /> },
    { path: "/signup", element: <SignUp /> },
    { path: "/login", element: <Login /> },
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
