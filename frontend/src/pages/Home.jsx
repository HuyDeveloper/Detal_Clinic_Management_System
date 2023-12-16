import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext.jsx";
export default function Home() {
  const { user } = useContext(AuthContext);
  return (
    <div>
      Home
      <h1>{user}</h1>
    </div>
  );
}
