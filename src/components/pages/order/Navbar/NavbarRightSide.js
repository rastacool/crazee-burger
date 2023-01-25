import styled from "styled-components";
import ToggleButton from "../../../reusable-ui/ToggleButton";
import Profile from "./Profile";

export default function NavbarRightSide({ username }) {
  return (
    <NavbarRightSideStyled className="right-side">
      <ToggleButton
        labelIfChecked="Désactiver le mode Admin"
        labelIfUnchecked="Activer le mode Admin"
      />
      <Profile username={username} />
    </NavbarRightSideStyled>
  );
}

const NavbarRightSideStyled = styled.div`
  display: flex;
  align-items: center;
  padding-right: 50px;
`;
