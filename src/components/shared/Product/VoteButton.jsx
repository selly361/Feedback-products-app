import React, { useContext } from "react";
import styled from "styled-components";
import { FeedbacksProvider } from "../../../Context/FeedBackContext";

const StyledVoteButton = styled.button`
  background-color: ${(props) => (props.active ? "#4661e6" : "#f2f4ff")};
  border-radius: 8px;
  display: flex;
  flex-flow: column;
  justify-content: space-around;
  align-items: center;
  width: 38px;
  height: 47px;
  cursor: pointer;

  &.customClass {
    flex-flow: row;
    width: 70px;
    height: 35px;
  }

  &:hover {
    background-color: ${(props) => (props.active ? "#4661e6" : "#cfd7ff")};
  }

  &:hover,
  &:active {
    outline: 2px dashed ${(props) => (props.active ? "#4661e6" : "#cfd7ff")};
  }

  h3 {
    color: ${(props) => (props.active ? "#fff" : "#373f68")};
    font-weight: 700;
  }

  @media (max-width: 600px) {
    & {
      flex-flow: row;
      width: 70px;
      height: 35px;
    }
  }

  @media (max-width: 1000px){
    &.set-display-none {
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

const VoteButton = ({ upvotes, id, active, classname = '', removeIcon = '' }) => {
  const { setProductsData, productsData, handleFilteredData } =
    useContext(FeedbacksProvider);

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

  return (
    <StyledVoteButton
      className={`vote ${classname} ${removeIcon}`}
      active={active ? "true" : ""}
      onClick={handleVote}
    >
      <StyledArrow
        src="https://www.reshot.com/preview-assets/icons/EUCMLYADT9/arrow-chevron-down-EUCMLYADT9.svg"
        className={active ? "activeArrow" : ""}
      />
      <h3>{upvotes}</h3>
    </StyledVoteButton>
  );
};

export default VoteButton;
