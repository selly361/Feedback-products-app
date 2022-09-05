import React from "react";
import styled from "styled-components";
import ProductForm from "../../components/ProductForm/ProductForm";
import { motion } from "framer-motion";
import { StyledMain } from "../home/Home";
import { Body } from "../EditFeedBack/Edit";

const Container = styled.div`
  margin: auto;
  height: 95vh;
  width: 500px;
  background-color: white;
  border-radius: 10px;
  display: flex;
  justify-content: center;

  @media (max-width: 700px){
    & {
      height: 100vh;
      width: 100vw;
    }
  }
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
