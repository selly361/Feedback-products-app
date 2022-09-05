import React, { useContext } from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import { motion } from "framer-motion";
import EditProduct from "../../components/ProductForm/EditProduct";
import { FeedbacksProvider } from "../../Context/FeedBackContext";
import { StyledMain } from "../home/Home";


const Body = styled(StyledMain)``;

const Container = styled.div`
  width: 500px;
  height: 93vh;
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
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
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
