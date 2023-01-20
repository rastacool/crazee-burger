
import { Link, useParams } from "react-router-dom";

export default function Bonjour() {
  //state
  const {username} = useParams()
  //comportements

  return (
    <div>
    <form>
      <h1>Bonjour {username}</h1>
      <Link to="/">
         <button>Déconnexion</button>
      </Link >
    </form>
    </div>
  );
}
