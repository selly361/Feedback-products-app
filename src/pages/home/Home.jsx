import NavBar from "../../components/NavBar/NavBar";
import Products from "../../components/Products/Products";
import styled from "styled-components";
import { motion } from "framer-motion";

export const StyledMain = styled(motion.main)`
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
    <StyledMain
      initial={{ x: '60vw', opacity: 0 }}
      animate={{ x: 0, opacity: 1, transition: { duration: 0.8 } }}
      exit={{ x: '-60vw', opacity: 0, transition: { duration: 0.8 } }}
    >
      <Container>
        <NavBar />
        <Products />
      </Container>
    </StyledMain>
  );
}
