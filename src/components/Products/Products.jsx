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

const NoSuggestionsContainer = styled.div`
  width: 100%;
  display: flex;
  flex-flow: column;
  justify-content: center;
  gap: 1rem;
  align-items: center;
  text-align: center;
  padding-top: 3rem;
  
  img {
    height: 100px;
  }
  h2 {
    color: #3a4374;
    font-size: 1.6rem;
  }

  p {
    color: #647196;
    font-weight: light;
  }

  a {
    font-size: 1.1rem;
    border-radius: 10px;
    color: white;
    background-color: #ad1fea;
    padding: .4rem .8rem;

    &:hover {
      cursor: pointer;
      background-color: #c75af6;
    }

    &:active {
      outline: 1.5px dashed black;
      color: white;
    }

  }
`

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
             <div className="products-wrap">
             {filteredData.length ?
                filteredData.map((data, index) => (
                <DelayAnimationChildren key={data.id} delay={100 * index}>
                  <Product {...data} hover={true} />
                </DelayAnimationChildren>
              )):  (

                <NoSuggestionsContainer>
                  <img src="https://lm-product-feedback-app.netlify.app/static/media/illustration-empty.bcc93d24.svg" />
                  <h2>There is no feedback yet.</h2>
                  <p>Got a suggestion? Found a bug that needs to be squashed?<br />
                   We love hearing about new ideas to improve our app.</p>
                  <Link to="/add">+ Add Feedback</Link>
                </NoSuggestionsContainer>

              )}
             </div>
            </Container>
        ) 


    }
  

export const DelayAnimationChildren = ({ children, delay }) => {
  const [completed, setCompleted] = useState(false);

  useEffect(() => {
    const showTimer = setTimeout(() => setCompleted(true), delay);
    return () => clearTimeout(showTimer);
  });

  return completed && <>{children}</>;
};

export default Products;
