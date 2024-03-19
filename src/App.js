import { AuthProvider } from "./context/authContext";
import { useRoutes } from "react-router-dom";

import Header from "./components/Header";
import Home from "./pages/Home";
import SignUp from "./pages/Signup";
import SignIn from "./pages/Signin";

function App() {
  const routes = useRoutes([
    { path: "/", element: <SignIn /> },
    { path: "/signup", element: <SignUp /> },
    { path: "/login", element: <SignIn /> },
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
