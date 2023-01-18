import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { theme } from "../../../design";
import { FaBeer } from "react-icons/fa";

export default function LoginForm() {
  //state
  const [inputValue, setInputValue] = useState("");
  const navigate = useNavigate();

  //comportements
  const handleSubmit = (event) => {
    event.preventDefault();
    setInputValue("");
    navigate(`order/${inputValue}`);
  };

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };
  return (
    <LoginFormStyled action="Submit" onSubmit={handleSubmit}>
      <h1>
        CRAZEE <img src="/images/logo.png" alt="burger-logo" />
        BURGER{" "}
      </h1>
      <br />

      <h2>

        CONNECTER-VOUS
      </h2>
      <div>
      <FaBeer />
      <input
        value={inputValue}
        onChange={handleChange}
        type="text"
        placeholder="Entrez votre prénom..."
        required
      />
      </div>
      <br />
      <button>Accédez à mon espace</button>
    </LoginFormStyled>
  );
}

const LoginFormStyled = styled.form`

  h1 {
    color: ${theme.colors.primary_burger};
    text-align: center;
  }
  h2 {
    text-align: center;
    color: ${theme.colors.white};
  }
`;
