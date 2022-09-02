import NavBar from "../../components/NavBar/NavBar";
import Products from "../../components/Products/Products";
import styled from "styled-components";

const StyledMain = styled.main`
  width: 100vw;
  min-height: 100vh;
  display: grid;
  padding-top: 3rem;
`;

const Container = styled.div`
  width: max-content;
  min-height: 90vh;
  width: max-content;
  display: grid;
  grid-template-columns: 1fr auto;
  align-self: center;
  justify-self: center;
  gap: 2rem;
`;

export default function Home() {
  return (
    <StyledMain>
      <Container>
        <NavBar />
        <Products />
      </Container>
    </StyledMain>
  );
}
