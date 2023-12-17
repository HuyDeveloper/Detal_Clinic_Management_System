import "./App.css";
import Router from "./router";
import { RouterProvider } from "react-router-dom";
import Header from "./components/Header";
function App() {
  return (
    <>
      <Header />
      <RouterProvider router={Router} />
    </>
  );
}

export default App;
