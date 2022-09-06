import React, { useContext } from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import { motion } from "framer-motion";
import EditProduct from "../../components/ProductForm/EditProduct";
import { FeedbacksProvider } from "../../Context/FeedBackContext";
import { StyledMain } from "../home/Home";


export const Body = styled(motion.main)`
  height: 100vh;
  display: flex;
  min-height: none;
`;

const Container = styled.div`
  margin: auto;
  width: 500px;
  height: 90vh;
  background-color: white;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 700px){
    & {
      height: 100vh;
      width: 100vw;
    }
  }
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
