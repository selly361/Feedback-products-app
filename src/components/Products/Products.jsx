import React, { useContext, useEffect, useState } from "react";
import Product from "../shared/Product/Product";
import styled from "styled-components";
import ProductHeader from "./ProductHeader/ProductHeader";
import { FeedbacksProvider } from "../../Context/FeedBackContext";
import { Link } from "react-router-dom";

const Container = styled.div`
  width: 70vw;
  min-height: max-content;
  border-radius: 10px;
  display: flex;
  flex-flow: column;
  gap: 1rem;

  .products-wrap {
    display: flex;
  flex-flow: column;
  gap: 1rem;
  }

  @media (max-width: 1000px){
    & {
      width: 100%;
    }
  }

  @media (max-width: 600px){
    .products-wrap {
      padding: 1rem;
    }
  }
`;

const Products = () => {
  const { filteredData, setFilter, filter, productsData } =
    useContext(FeedbacksProvider);

  return (
    filteredData && (
        <Container>
          <ProductHeader
            setFilter={setFilter}
            filter={filter}
            productRequests={productsData.productRequests}
          />
         <div className="products-wrap">
         {filteredData.map((data, index) => (
            <DelayAnimationChildren delay={100 * index}>
              <Product key={data.id} {...data} hover={true} />
            </DelayAnimationChildren>
          ))}
         </div>
        </Container>
    )
  );
};

export const DelayAnimationChildren = ({ children, delay }) => {
  const [completed, setCompleted] = useState(false);

  useEffect(() => {
    const showTimer = setTimeout(() => setCompleted(true), delay);
    return () => clearTimeout(showTimer);
  });

  return completed && <>{children}</>;
};

export default Products;
