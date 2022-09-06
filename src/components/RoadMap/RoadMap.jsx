import { motion } from "framer-motion";
import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import VoteButton from "../shared/Product/VoteButton";
import { ReactComponent as CommentIcon } from "../../assets/icons/comment-icon.svg";

const StyledRoadMap = styled.div`
  &.mobile-version {
    display: none;
  }

  @media (max-width: 850px) {
   &.mobile-version {
    display: block;
    padding: 1.5rem;
   }
  }
`;

const Details = styled.div`
  h3 {
    color: #3a4374;
  }

  p {
    color: #647196;
  }
`;

const Items = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const Dot = styled.div`
  height: 10px;
  width: 10px;
  border-radius: 50%;
`;

const PlannedDot = styled(Dot)`
  background: #f49f85;
`;

const InProgressDot = styled(Dot)`
  background: #ad1fea;
`;

const LiveDot = styled(Dot)`
  background: #62bcfa;
`;

const Item = styled(motion.div)`
  display: flex;
  flex-direction: column;
  background-color: white;
  border-radius: 10px;
  padding: 1rem;
  justify-items: center;
  justify-content: space-evenly;
  height: 45vh;

  p {
    color: #647196;
    font-weight: 300;
  }

  .vote-comment-wrap {
    width: 100%;
    display: flex;
    justify-content: space-between;
  }

  .status-indicator {
    display: flex;
    gap: 0.4rem;
    align-items: center;
    color: #647196;
    font-size: 1rem;
    padding: 0.2rem;
  }

  .title {
    font-size: 1rem;
    color: #3a4374;
    font-weight: bold;

    &:hover {
      color: #4661e6;
      cursor: pointer;
    }
  }

  .category {
    color: #4661e6;
    background-color: #f2f4ff;
    width: max-content;
    padding: 0.3rem 0.7rem;
    border-radius: 10px;
    font-size: 1rem;
  }

  &.Planned {
    border-top: 5px solid #f49f85;
  }

  &.In-Progress {
    border-top: 5px solid #ad1fea;
  }

  &.Live {
    border-top: 5px solid #62bcfa;
  }
`;

const CommentLength = styled.div`
  display: flex;
  gap: 0.5rem;
  align-items: center;

  h3 {
    color: #3a4374;
  }
`;

const RoadMap = ({ items, setItems, className }) => {
  let statusDescription;
  let StatusDot;

  let statusName =
    items[0].status == "live"
      ? "Live"
      : items[0].status == "planned"
      ? "Planned"
      : "In-Progress";

  switch (statusName) {
    case "Planned":
      statusDescription = "Ideas prioritized for research";
      StatusDot = <PlannedDot />;
      break;

    case "In-Progress":
      statusDescription = "Currently being developed";
      StatusDot = <InProgressDot />;
      break;
    case "Live":
      statusDescription = "Released features";
      StatusDot = <LiveDot />;
  }

  return (
    <StyledRoadMap className={className}>
      <Details>
        <h3>
          {statusName} ({items.length})
        </h3>
        <p>{statusDescription}</p>
      </Details>
      <br />
      <Items>
        {items.map((item) => (
          <Item
            className={statusName}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { duration: 1 } }}
          >
            <h6 className="status-indicator">
              {StatusDot}
              {statusName}
            </h6>
            <Link to={`/${item.id}`} className="title">
              {item.title}
            </Link>
            <p>{item.description}</p>
            <h5 className="category">{item.category}</h5>
            <div className="vote-comment-wrap">
              <VoteButton
                classname="customClass"
                upvotes={item.upvotes}
                active={item.active}
                id={item.id}
              />
              <CommentLength className="comment-length">
                <CommentIcon />
                <h3>{item.comments.length}</h3>
              </CommentLength>
            </div>
          </Item>
        ))}
      </Items>
    </StyledRoadMap>
  );
};

export default RoadMap;
