import React from "react";
import styled from "styled-components";
import ProductForm from "../../components/ProductForm/ProductForm";
import { motion } from "framer-motion";
import { StyledMain } from "../home/Home";

const Body = styled(StyledMain)``;

const Container = styled.div`
  height: 95vh;
  width: 600px;
  background-color: white;
  border-radius: 10px;
  display: flex;
  justify-content: center;
`;

const AddFeedBackPage = () => {
  return (
    <Body
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <Container>
        <ProductForm />
      </Container>
    </Body>
  );
};

export default AddFeedBackPage;
