import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { ReactComponent as ArrowIcon } from "../../../assets/icons/arrow-icon.svg";
import { ReactComponent as CommentIcon } from "../../../assets/icons/comment-icon.svg";
import { FeedbacksProvider } from "../../../Context/FeedBackContext";
import { motion } from "framer-motion";

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


  @media (max-width: 1000px){



    & {
      flex-flow: column;
      gap: 1rem;
    }

    

    .mobile-product-info {
      display: flex;
      width: 100%;
      justify-content: space-between;
    }

    .vote, .comment-length {
      display: none;
    }
  }
`;

const VoteButton = styled.button`
  background-color: ${(props) => (props.active ? "#4661e6" : "#f2f4ff")};
  border-radius: 8px;
  display: flex;
  flex-flow: column;
  justify-content: space-around;
  align-items: center;
  width: 38px;
  height: 47px;
  cursor: pointer;

  &:hover {
    background-color: ${(props) => (props.active ? "#4661e6" : "#cfd7ff")};
  }

  h3 {
    color: ${(props) => (props.active ? "#fff" : "#373f68")};
    font-weight: 700;
  }
`;

const StyledArrow = styled(ArrowIcon)`
  path {
    transform: scale(1);
    stroke: ${(props) => (props.active ? "white" : null)};
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


  @media (max-width: 1000px){
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

  const handleVote = (e) => {
    e.stopPropagation();
    let copy = productsData;

    let product = copy.productRequests.find((product) => product.id === id);
    product.active = !product.active;

    product.active ? (product.upvotes += 1) : (product.upvotes -= 1);

    sessionStorage.setItem("products", JSON.stringify(copy));
    setProductsData(copy);
    handleFilteredData();
  };

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
        duration: .8,
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
      <VoteButton className="vote" active={active ? "true" : ""} onClick={handleVote}>
        <StyledArrow active={active ? "true" : ""} />
        <h3>{upvotes}</h3>
      </VoteButton>
      <Description>
        <h2>{title}</h2>
        <p>{description}</p>
        <h3>{category}</h3>
      </Description>
      <div className="mobile-product-info">
        <VoteButton active={active ? "true" : ""} onClick={handleVote}>
          <StyledArrow active={active ? "true" : ""} />
          <h3>{upvotes}</h3>
        </VoteButton>
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
