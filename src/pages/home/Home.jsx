import NavBar from "../../components/NavBar/NavBar";
import Products from "../../components/Products/Products";
import styled from "styled-components";

const StyledMain = styled.main`
  width: 100vw;
  min-height: 100vh;
  display: flex;
  padding-top: 3rem;
  align-items: center;
  justify-content: center;
  
`;

const Container = styled.div`
  width: max-content;
  min-height: 90vh;
  width: max-content;
  display: grid;
  grid-template-columns: 1fr auto;
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
