import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { FeedbacksProvider } from "../../Context/FeedBackContext";
import { AddFeedBack } from "../../components/Products/ProductHeader/ProductHeader";
import BackButton from "../../components/shared/BackButton/BackButton";
import Product from "../../components/shared/Product/Product";
import { motion } from "framer-motion";
import { StyledMain } from "../home/Home";

const Body = styled(motion.main)`
  width: 100vw;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  padding-top: 3rem;
`;

const StyledProductPage = styled.div`
  width: 800px;
  display: flex;
  flex-flow: column;
  min-height: 90;
  gap: 2rem;
`;

const TopSection = styled.section`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const EditFeedbackButton = styled(AddFeedBack)`
  background-color: #4661e6;

  &:hover {
    background-color: #7c91f9;
  }
`;

const ProductPage = () => {
  const { productsData } = useContext(FeedbacksProvider);
  const { id } = useParams();

  let copy = productsData;
  let productDetails = copy.productRequests.find((p) => p.id === id);

  return (
    <Body
      initial={{ x: '60vw', opacity: 0 }}
      animate={{ x: 0, opacity: 1, transition: { duration: 0.8 } }}
      exit={{ x: '-60vw', opacity: 0, transition: { duration: 0.8 } }}
    >
      <StyledProductPage>
        <TopSection>
          <BackButton />
          <EditFeedbackButton to={`/edit/${id}`}>
            Edit Feedback
          </EditFeedbackButton>
        </TopSection>
        <Product {...productDetails} hover={false} />
      </StyledProductPage>
    </Body>
  );
};

export default ProductPage;
