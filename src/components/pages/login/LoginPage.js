import styled from "styled-components";
import Logo from "../../reusable-ui/Logo";
import LoginForm from "./LoginForm";

export default function LoginPage() {
  //affichage
  return (
    <LoginPageStyle>
      <Logo/>
      <LoginForm />
    </LoginPageStyle>
  );
}
const LoginPageStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;

  ::before{
    content: "";
  background: url("/images/burger-background.jpg");
  background-size: cover;
  background-position: center;
  background-blend-mode: darken;
  

  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index  : -1;
  }
`;