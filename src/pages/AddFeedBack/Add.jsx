import React from "react";
import styled from "styled-components";
import ProductForm from "../../components/ProductForm/ProductForm";
import { motion } from "framer-motion";
import { StyledMain } from "../home/Home";

const Body = styled(StyledMain)`
  
`;

const Container = styled.div`
  height: 85vh;
  width: 35vw;
  background-color: white;
  border-radius: 10px;
  display: flex;
  justify-content: center;
`;

const AddFeedBackPage = () => {
  return (
    <Body
      initial={{ x: '60vw', opacity: 0 }}
      animate={{ x: 0, opacity: 1, transition: { duration: 0.8 } }}
      exit={{ x: '-60vw', opacity: 0, transition: { duration: 0.8 } }}
    >
      <Container>
        <ProductForm />
      </Container>
    </Body>
  );
};

export default AddFeedBackPage;
