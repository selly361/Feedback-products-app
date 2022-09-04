import React, { useContext } from "react";
import styled from "styled-components";
import EditProduct from "../../components/ProductForm/EditProduct";
import { useParams } from "react-router-dom";
import { FeedbacksProvider } from "../../Context/FeedBackContext";
import { motion } from "framer-motion";
import { StyledMain } from "../home/Home";

const Body = styled(StyledMain)``;

const Container = styled.div`
  width: 40vw;
  height: 90vh;
  background-color: white;
  border-radius: 10px;
  display: flex;
  justify-content: center;
`;

const EditFeedBackPage = () => {
  const { setProductsData, productsData, handleFilteredData } =
    useContext(FeedbacksProvider);
  const { id } = useParams();

  let copy = productsData;
  let productDetails = copy.productRequests.find((p) => p.id === id);
  return (
    <Body
      initial={{ x: '60vw', opacity: 0 }}
      animate={{ x: 0, opacity: 1, transition: { duration: 0.8 } }}
      exit={{ x: '-60vw', opacity: 0, transition: { duration: 0.8 } }}
    >
      <Container>
        <EditProduct
          setProductsData={setProductsData}
          productsData={productsData}
          {...productDetails}
          productDetails={productDetails}
          handleFilteredData={handleFilteredData}
        />
      </Container>
    </Body>
  );
};

export default EditFeedBackPage;
