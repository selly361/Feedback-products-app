import React from "react";
import styled from "styled-components";
import EditProduct from "../../components/ProductForm/EditProduct";

const Container = styled.div`
  width: 40vw;
  height: 105vh;
  background-color: white;
  border-radius: 10px;
  display: flex;
  justify-content: center;
`;

const EditFeedBackPage = () => {
  return (
    <Container>
      <EditProduct />
    </Container>
  );
};

export default EditFeedBackPage;
