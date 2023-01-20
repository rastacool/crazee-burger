import { Link, useParams } from "react-router-dom";
import styled from "styled-components";

export default function OrderPage() {
  // state
  const { username } = useParams();

  // comportements

  //affichage
  return (
    <OrderPageStyle>
      <div>
        <h1>Bonjour {username}</h1>
        <Link to="/">
          <button>Déconnexion</button>
        </Link>
      </div>
    </OrderPageStyle>
  );
}
const OrderPageStyle = styled.div`
  background-color: orange;
`;
