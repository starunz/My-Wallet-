import { ExitOutline } from "react-ionicons";
import { Container, UserName ,ExitIcon } from "./styleHeader";
import useAuth from "../../../hooks/useAuth";
import { useNavigate } from "react-router-dom";

export default function Header() {
  const { auth, logoff } = useAuth();
  const navigate = useNavigate()

  const userName = auth.name.replace(auth.name[0], auth.name[0].toUpperCase())

  return (
    <Container>
      <UserName>Olá, {userName}</UserName>
      <ExitIcon onClick={() => { logoff(); navigate('/')} }>
        <ExitOutline
          color={"#ffffff"}
          title={"Sair"}
          height="25px"
          width="25px"
        />
      </ExitIcon>
    </Container>
  );
}