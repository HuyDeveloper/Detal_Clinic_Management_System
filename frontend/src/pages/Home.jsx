import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext.jsx";
import Header from "../components/Header.jsx";
export default function Home() {
  const { user } = useContext(AuthContext);
  return (
    <div>
      <Header />
      Home
      <h1>{user}</h1>
    </div>
  );
}
