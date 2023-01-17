import { Link } from "react-router-dom";

export default function ErrorPage() {
  //state
  //comportements

  return (
    <div>
      <h1>ErrorPage</h1>
      <Link to="/">
      <button>Retour la page d'acceuil</button>
      </Link>
    </div>
  );
}
