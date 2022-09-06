import React, { useContext, useState, useEffect, Fragment } from "react";
import styled from "styled-components";
import ReplyToReply from "./ReplyToReply";

const Container = styled.div`
`;

const CommentsContainer = styled.div`
  display: flex;
  gap: 2rem;
`;



const RepliesWrapper = styled.div`
  display: flex;
  flex-flow: column;
  align-items: flex-end;
`;

const Replies = styled.div`
  display: flex;
  gap: 1.5rem;
  width: 90%;
`;

const ImageWrapper = styled.div`
  height: 40px;
  width: 50px;
  img {
    height: 100%;
    border-radius: 50%;
  }

  &.mobile-image {
    display: none;
  }

  @media (max-width: 700px) {
    & {
      display: none;
    }

    &.mobile-image {
      display: block;
    }
  }
`;
const CommentDetails = styled.div`
  display: flex;
  flex-flow: column;
  width: 100%;
  gap: 1rem;
  font-size: 0.9rem;
`;

const UserComment = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;

  .user-wrapper {
    display: flex;
    gap: .3rem;
  }

  .user-details {
    h4 {
      color: #3a4374;
    }

    p {
      color: #647196;
    }
  }

  h5 {
    font-size: 0.9rem;
    color: #4661e6;

    &:hover {
      text-decoration: underline;
      cursor: pointer;
    }
  }
`;

const CommentContent = styled.p`
  color: #647196;
  width: 100%;

  span {
    color: #ad1fea;
    font-weight: 700;
  }

`;

const ReplyCommentForm = styled.form`
  width: 100%;
  background-color: white;
  border-radius: 15px;
  display: flex;
  padding: 2rem;
  flex-flow: row;
  height: 20vh;
  gap: 2rem;
  margin-left: 2rem;

  textarea {
    width: 80%;
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

  button {
    background-color: #ad1fea;
    border-radius: 10px;
    width: 20%;
    height: 40px;
    color: #f2f4ff;
    font-weight: bold;

    &:active {
      color: #f2f4ff;
    }

    &:hover {
      background-color: #c75af6;
      cursor: pointer;
    }
  }

  @media (max-width: 400px){
    & {
      margin-top: 2rem;
      padding: .5rem;
      margin-left: 0.2rem;
      gap: 1rem;
      flex-flow: column;
    }

    textarea {
      width: 100%;
    }

    button {
      width: 30%;
    }

  }
`;

const Comment = ({
  comment,
  productsData,
  setProductsData,
  handleFilteredData,
  productId,
}) => {
  const [replyContent, setReplyContent] = useState("");
  const [replyToComment, setReplyToComment] = useState(false);

  let props = {
    productsData,
    setProductsData,
    handleFilteredData,
    productId,
    comment,
  };

  let copy = productsData;
  let commentReply = copy.productRequests
    .find((p) => p.id === productId)
    .comments.find((r) => r.id === comment.id);
  const ReplyToCommentSubmit = (e) => {
    e.preventDefault();

    commentReply.replies.push({
      content: replyContent,
      replyingTo: commentReply.user.username,
      user: productsData.currentUser,
    });

    setProductsData(copy);
    sessionStorage.setItem("products", JSON.stringify(copy));
    handleFilteredData();
    setReplyToComment(false);
  };

  return (
    <Fragment>
      <Container>
        <div>
          <CommentsContainer>
            <ImageWrapper>
              <img src={comment.user.image} />
            </ImageWrapper>
            <CommentDetails>
              <UserComment>
                <div className="user-wrapper">
                  <ImageWrapper className="mobile-image">
                    <img src={comment.user.image} />
                  </ImageWrapper>
                  <div className="user-details">
                    <h4>{comment.user.name}</h4>
                    <p>@{comment.user.username}</p>
                  </div>
                </div>
                <h5 onClick={() => setReplyToComment(!replyToComment)}>
                  Reply
                </h5>
              </UserComment>
              <CommentContent>{comment.content}</CommentContent>
            </CommentDetails>
          </CommentsContainer>
          {replyToComment && (
            <ReplyCommentForm onSubmit={ReplyToCommentSubmit}>
              <textarea
                value={replyContent}
                onChange={(e) => setReplyContent(e.target.value)}
                placeholder="Type your reply here"
              />
              <button>Post Reply</button>
            </ReplyCommentForm>
          )}
        </div>
        {comment.replies.map((reply) => (
          <ReplyToReply {...props} reply={reply} />
        ))}
      </Container>
    </Fragment>
  );
};

export default Comment;
