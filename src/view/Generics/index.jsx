import { useLocation } from "react-router-dom";
import { Container } from "../../components/Sidebar/style";

const Generics = () => {
  const location = useLocation();
  return (
    <Container>
      <h1>{location.pathname}</h1>
      <h2>Coming soon...</h2>
    </Container>
  );
};

export default Generics;
