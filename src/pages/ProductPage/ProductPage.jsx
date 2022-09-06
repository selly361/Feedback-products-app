import React, { useContext, useState } from "react";
import { useParams, Link } from "react-router-dom";
import styled from "styled-components";
import { FeedbacksProvider } from "../../Context/FeedBackContext";
import { AddFeedBack } from "../../components/Products/ProductHeader/ProductHeader";
import BackButton from "../../components/shared/BackButton/BackButton";
import Product from "../../components/shared/Product/Product";
import { motion } from "framer-motion";
import { StyledMain } from "../home/Home";
import Comment from "../../components/Comment/Comment";
import { v4 as uuid } from "uuid";

const Body = styled(motion.main)`
  width: 100vw;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  padding-top: 3rem;
`;

const StyledProductPage = styled.div`
  width: 60vw;
  display: flex;
  flex-flow: column;
  min-height: 90;
  gap: 2rem;

  @media (max-width: 1000px) {
    width: 90vw;
  }

  @media (max-width: 700px) {
    width: 93vw;
  }
`;

const TopSection = styled.section`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const EditFeedbackButton = styled(Link)`
  font-size: 1rem;
  padding: 0.6rem 1rem;
  background-color: #4661e6;
  border-radius: 10px;
  color: #f2f4ff;
  font-weight: bold;
  cursor: pointer;

  &:active {
    color: #f2f4ff;
  }

  &:hover {
    background-color: #c75af6;
  }

  &:hover {
    background-color: #7c91f9;
  }
`;

const CommentContainer = styled.div`
  height: max-content;
  width: 100%;
  background-color: white;
  border-radius: 10px;
  display: flex;
  flex-flow: column;
  gap: 2rem;
  padding: 3rem;

  & > div:not(:last-child) {
    border-bottom: 1px solid rgba(140, 146, 179, 0.25);
    padding-bottom: 4rem;
  }

  @media (max-width: 800px) {
    padding: 1rem;
  }
`;

const AddCommentForm = styled.form`
  width: 100%;
  height: 40vh;
  background-color: white;
  border-radius: 15px;
  display: flex;
  flex-flow: column;
  padding: 2rem;
  justify-content: space-around;

  h4 {
    color: #3a4374;
  }

  div {
    display: flex;
    justify-content: space-between;

    button {
      font-size: 1rem;
      padding: 0.6rem 1.2rem;
      background-color: #ad1fea;
      border-radius: 10px;
      color: #f2f4ff;
      font-weight: bold;
      cursor: pointer;

      &:active {
        color: #f2f4ff;
      }

      &:hover {
        background-color: #c75af6;
      }
    }
  }

  textarea {
    height: 80px;
    resize: none;
    padding: 10px;
    background-color: #f7f8fd;
    border-radius: 5px;
    cursor: pointer;

    &:hover,
    &:active,
    &:focus {
      border: 1px solid #4661e6;
      outline: none;
    }
  }

  @media (max-width: 500px) {
    & {
      padding: 0.5rem;
    }
  }
`;

const NumberOfComments = styled.h2`
  color: #3a4374;
  font-size: 1.2rem;
`;

const ProductPage = () => {
  const { productsData, setProductsData, handleFilteredData } = useContext(FeedbacksProvider);
  const { id } = useParams();

  let copy = productsData;

  let productDetails = copy.productRequests.find((p) => p.id === id);
  let comments = productDetails?.comments;
  const [content, setContent] = useState("");



  const handleSubmit = (e) => {
    e.preventDefault();

    let copiedProductsData = productsData;

    copiedProductsData.productRequests
      .find((p) => p.id === id)
      .comments.push({
        id: uuid(),
        content: content,
        user: copy.currentUser,
        replies: [],
      });

    setProductsData(copiedProductsData);
    localStorage.setItem("products", JSON.stringify(copiedProductsData));
    handleFilteredData();
  };

    return  (
      <Body
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <StyledProductPage>
        
          <TopSection>
            <BackButton />
            <EditFeedbackButton to={`/edit/${id}`}>
              Edit Feedback
            </EditFeedbackButton>
          </TopSection>
          <Product {...productDetails} hover={false} />
          <CommentContainer>
            <NumberOfComments>
              {comments.length} Comments
            </NumberOfComments>
            {
             comments.map((comment) => (
                <Comment
                  productId={id}
                  productsData={productsData}
                  setProductsData={setProductsData}
                  handleFilteredData={handleFilteredData}
                  comment={comment}
                />
              ))}
          </CommentContainer>
          <AddCommentForm onSubmit={handleSubmit}>
            <h4>Add Comment</h4>
            <textarea
              value={content}
              onChange={(e) => setContent(e.target.value)}
            />
            <div>
              <h5>255 characters left</h5>
              <button>Post Comment</button>
            </div>
          </AddCommentForm>
        </StyledProductPage>
      </Body>
    )
};

export default ProductPage;
