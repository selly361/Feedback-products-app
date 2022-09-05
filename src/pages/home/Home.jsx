import NavBar from "../../components/NavBar/NavBar";
import Products from "../../components/Products/Products";
import styled from "styled-components";
import { motion } from "framer-motion";
import Header from "../../components/Mobile/Header";

export const StyledMain = styled(motion.main)`
  width: 100vw;
  min-height: 103vh;
  display: flex;
  padding-top: 3rem;
  align-items: center;
  justify-content: center;

  @media (max-width: 600px){
    padding-top: 0;

  }
`;

const Container = styled.div`
  width: max-content;
  min-height: 100vh;
  display: grid;
  grid-template-columns: 1fr auto;
  padding: 1rem;
  gap: 1rem;


  @media (max-width: 1000px){
  grid-template-columns: 1fr;

  }


  @media (max-width: 600px){
    display: block;
    width: 100vw;
    padding: 0;
  }
`;



export default function Home() {
  return (
    <StyledMain
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <Container>
        <Header />
        <NavBar />
        <Products />
      </Container>
    </StyledMain>
  );
}
