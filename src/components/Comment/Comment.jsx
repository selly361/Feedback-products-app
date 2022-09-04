import React, { useContext, useState, useEffect, Fragment } from "react";
import styled from "styled-components";

const Container = styled.div``;

const CommentsContainer = styled.div`
  display: flex;
  gap: 1.5rem;
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

const NumberOfComments = styled.h2`
  color: #3a4374;
  font-size: 1.2rem;
`;

const ImageWrapper = styled.div`
  height: 40px;
  width: 50px;
  img {
    height: 100%;
    border-radius: 50%;
  }
`;
const CommentDetails = styled.div`
  display: flex;
  flex-flow: column;
  gap: 0.5rem;
  font-size: 0.9rem;
`;

const UserComment = styled.div`
  h4 {
    color: #3a4374;
  }

  p {
    color: #647196;
  }
`;

const CommentContent = styled.p`
  color: #647196;

  span {
    color: #ad1fea;
    font-weight: 700;
  }
`;

const Comment = ({ comments }) => {
  return (
    comments && (
      <Fragment>
        <NumberOfComments>{comments.length} Comments</NumberOfComments>
        {comments.map((comment) => (
          <Container>
            <CommentsContainer>
              <ImageWrapper>
                <img src={comment.user.image} />
              </ImageWrapper>
              <CommentDetails>
                <UserComment>
                  <h4>{comment.user.name}</h4>
                  <p>@{comment.user.username}</p>
                </UserComment>
                <CommentContent>{comment.content}</CommentContent>
              </CommentDetails>
            </CommentsContainer>
            {comment.replies.map((reply) => (
              <RepliesWrapper>
                <br />
                <Replies>
                  <ImageWrapper>
                    <img src={reply.user.image} />
                  </ImageWrapper>
                  <CommentDetails>
                    <UserComment>
                      <h4>{reply.user.name}</h4>
                      <p>@{reply.user.username}</p>
                    </UserComment>
                    <CommentContent>
                      <span>@{reply.replyingTo}</span> {reply.content}
                    </CommentContent>
                  </CommentDetails>
                </Replies>
              </RepliesWrapper>
            ))}
          </Container>
        ))}
      </Fragment>
    )
  );
};

export default Comment;
