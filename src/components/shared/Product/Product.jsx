import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { ReactComponent as CommentIcon } from "../../../assets/icons/comment-icon.svg";
import { FeedbacksProvider } from "../../../Context/FeedBackContext";
import { motion } from "framer-motion";
import VoteButton from "./VoteButton";

const StyledProduct = styled(motion.div)`
  display: flex;
  align-items: flex-start;
  background-color: white;
  width: 100%;
  height: max-content;
  border-radius: 10px;
  align-items: center;
  justify-content: space-between;
  padding: 2rem;
  border: 1px solid transparent;

  .mobile-product-info {
    display: none;
  }

  &:hover {
    border-color: ${(props) => (props.hover ? "#ad1fea" : "none")};
    cursor: ${(props) => (props.hover ? "pointer" : "initial")};
  }

  @media (max-width: 1000px) {
    & {
      flex-flow: column;
      gap: 1.5rem;
    }

    .mobile-product-info {
      display: flex;
      width: 100%;
      justify-content: space-between;
    }

    .comment-length {
      display: none;
    }
  }
`;

const StyledArrow = styled.img`
  transition: 1s transform;
  height: 20px;
  transform: rotate(180deg);
  filter: invert(42%) sepia(87%) saturate(3459%) hue-rotate(218deg)
    brightness(90%) contrast(100%);

  &.activeArrow {
    transform: rotate(0);
    filter: invert(97%) sepia(31%) saturate(787%) hue-rotate(179deg)
      brightness(100%) contrast(102%);
  }
`;

const ProductInformationContainer = styled.div`
  width: 90%;
  display: flex;
  align-items: center;
  justify-content: space-around;
`;
const ProductInformation = styled.div`
  display: flex;
  width: 90%;
  gap: 4rem;
`;

const Description = styled.div`
  display: flex;
  gap: 0.7rem;
  flex-flow: column;
  width: 80%;

  h2 {
    color: #373f68;
    font-size: 1.2rem;
  }

  p {
    color: #647196;
    font-weight: 300;
  }

  h3 {
    color: #4661e6;
    background-color: #f2f4ff;
    width: max-content;
    padding: 0.1rem 0.4rem;
    border-radius: 10px;
    font-size: 1rem;
  }

  @media (max-width: 1000px) {
    & {
      width: 100%;
    }
  }
`;

const CommentLength = styled.div`
  display: flex;
  gap: 0.5rem;
  align-items: center;
`;

const Product = ({
  upvotes,
  title,
  category,
  id,
  comments,
  hover,
  active,
  description,
}) => {
  const { setProductsData, productsData, handleFilteredData } =
    useContext(FeedbacksProvider);

  const Navigate = useNavigate();

  const animation = {
    hidden: {
      opacity: 0,
      y: 100,
    },
    exit: {
      opacity: 0,
      y: -100,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.02, 0.6, -0.01, 0.91],
      },
    },
  };

  return (
    <StyledProduct
      variants={animation}
      initial="hidden"
      animate="visible"
      onClick={(e) => Navigate(`/${id}`)}
      hover={hover ? "true" : ""}
    >
      <VoteButton removeIcon="set-display-none" active={active} upvotes={upvotes} id={id} />
      <Description>
        <h2>{title}</h2>
        <p>{description}</p>
        <h3>{category}</h3>
      </Description>
      <div className="mobile-product-info">
      <VoteButton active={active} upvotes={upvotes} id={id} />
        <CommentLength>
          <CommentIcon />
          <h3>{comments && comments.length}</h3>
        </CommentLength>
      </div>
      <CommentLength className="comment-length">
        <CommentIcon />
        <h3>{comments && comments.length}</h3>
      </CommentLength>
    </StyledProduct>
  );
};

export default Product;
