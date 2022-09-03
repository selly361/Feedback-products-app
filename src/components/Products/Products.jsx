import React, { useContext } from "react";
import Product from "../shared/Product/Product";
import styled from "styled-components";
import ProductHeader from "./ProductHeader/ProductHeader";
import { FeedbacksProvider } from "../../Context/FeedBackContext";
import { Link } from "react-router-dom";

const Container = styled.div`
  width: 60vw;
  min-height: max-content;
  border-radius: 10px;
  display: flex;
  flex-flow: column;
  gap: 1rem;
`;

const Products = () => {
  const { filteredData, setFilter, filter, productsData } =
    useContext(FeedbacksProvider);

  return (
    <Container>
      <ProductHeader
        setFilter={setFilter}
        filter={filter}
        productRequests={productsData.productRequests}
      />
      {filteredData &&
        filteredData.map((data) => (
          <Link to={`/${data.id}`} key={data.id}>
            <Product {...data} hover={true} />
          </Link>
        ))}
    </Container>
  );
};

export default Products;
