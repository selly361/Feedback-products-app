import React, { useState } from "react";
import styled from "styled-components";

const RepliesWrapper = styled.div`
  display: flex;
  flex-flow: column;
  align-items: flex-end;
`;

const Replies = styled.div`
  display: flex;
  gap: 1.5rem;
  width: 90%;

  @media (max-width: 500px){
    gap: 1rem;
    width: 100%;
  }
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
  gap: 0.5rem;
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

  span {
    color: #ad1fea;
    font-weight: 700;
  }
`;

const ReplyToReplyCommentForm = styled.form`
  width: 90%;
  background-color: white;
  border-radius: 15px;
  display: flex;
  padding: 2rem;
  flex-flow: row;
  height: 20vh;
  gap: 2rem;
  margin-left: 5rem;

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

  @media (max-width: 500px){
    & {
      margin-top: 1rem;
      width: 100%;
      margin-left: .5rem;
      padding: .4rem;
    }
  }
`;

const ReplyToReply = ({
  reply,
  productsData,
  setProductsData,
  productId,
  handleFilteredData,
  comment
}) => {
  const [replyToReply, setReplyToReply] = useState(false);
  const [replyContent, setReplyContent] = useState("");

  let copy = productsData;
  let commentReply = copy.productRequests.find((p) => p.id === productId).comments.find((r) => r.id === comment.id);

  const handleReply = (e) => {
    e.preventDefault();
    commentReply.replies.push({
      content: replyContent,
      replyingTo: reply.user.username,
      user: productsData.currentUser,
    });

    sessionStorage.setItem("products", JSON.stringify(copy))
    setProductsData(copy)
    handleFilteredData()
    setReplyToReply(false)
  };

  return (
    reply && (
      <RepliesWrapper>
        <br />
        <br />
        <Replies>
          <ImageWrapper>
            <img src={reply.user.image} />
          </ImageWrapper>
          <CommentDetails>
          <UserComment>
                <div className="user-wrapper">
                  <ImageWrapper className="mobile-image">
                    <img src={reply.user.image} />
                  </ImageWrapper>
                  <div className="user-details">
                    <h4>{reply.user.name}</h4>
                    <p>@{reply.user.username}</p>
                  </div>
                </div>
                <h5 onClick={() => setReplyToReply(!replyToReply)}>
                  Reply
                </h5>
              </UserComment>
            <CommentContent>
              <span>@{reply.replyingTo}</span> {reply.content}
            </CommentContent>
          </CommentDetails>
        </Replies>
        {replyToReply && (
          <ReplyToReplyCommentForm onSubmit={handleReply}>
            <textarea
              value={replyContent}
              onChange={(e) => setReplyContent(e.target.value)}
              placeholder="Type your reply here"
            />
            <button>Post Reply</button>
          </ReplyToReplyCommentForm>
        )}
      </RepliesWrapper>
    )
  );
};

export default ReplyToReply;
