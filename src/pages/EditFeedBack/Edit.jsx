import React, { useContext } from "react";
import styled from "styled-components";
import EditProduct from "../../components/ProductForm/EditProduct";
import { useParams } from "react-router-dom";
import { FeedbacksProvider } from "../../Context/FeedBackContext";

const Container = styled.div`
  width: 40vw;
  height: 105vh;
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
    <Container>
      <EditProduct setProductsData={setProductsData} productsData={productsData}  {...productDetails} productDetails={productDetails} handleFilteredData={handleFilteredData} />
    </Container>
  );
};

export default EditFeedBackPage;
