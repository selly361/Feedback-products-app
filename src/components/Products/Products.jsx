import React, { useContext, useEffect, useState } from "react";
import Product from "../shared/Product/Product";
import styled from "styled-components";
import ProductHeader from "./ProductHeader/ProductHeader";
import { FeedbacksProvider } from "../../Context/FeedBackContext";
import { Link } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";

const Container = styled(motion.div)`
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

    const animation = {
      initial: { opacity: 0, x: -40 },
      animate: { opacity: 1, x: 0 },
      exit: { opacity: 0 },
      transition: {
        type: "tween",
        duration: 0.8
      }
    };
  return (
    <AnimatePresence>
      {filteredData && (
        <Container>
          <ProductHeader
            setFilter={setFilter}
            filter={filter}
            productRequests={productsData.productRequests}
          />
          {filteredData.map((data, index) => (
            <DelayAnimationChildren key={data.id} delay={index * 200}>
              <Product animation={animation} {...data} hover={true} />
            </DelayAnimationChildren>
          ))}
        </Container>
      )}
    </AnimatePresence>
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
