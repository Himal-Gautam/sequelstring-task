import React from "react";
import ReactDOM from "react-dom/client";
import App from "./routes/App.jsx";
import SignIn from "./routes/SignIn.jsx";
import SignUp from "./routes/SignUp.jsx";
import { createContext } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";

const userContext = createContext(null);

const router = createBrowserRouter([
  {
    path: "/signup",
    element: <SignUp />,
  },
  {
    path: "/signin",
    element: <SignIn />,
  },
  {
    path: "/",
    element: <App />,
  },
]);

localStorage.setItem("user",  JSON.stringify({name:"himal", role:"A"}));

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <userContext.Provider value={{ user: localStorage.getItem("user") }}>
      <RouterProvider router={router} />
    </userContext.Provider>
  </React.StrictMode>
);
