import React, { useContext } from "react";
import styled from "styled-components";
import { FeedbacksProvider } from "../../Context/FeedBackContext";
import { SharedBottomSection, SharedMiddleSection } from "../NavBar/NavBar";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const StyledModal = styled(motion.aside)`
  display: none;

  @media (max-width: 600px) {
    & {
      position: absolute;
      display: flex;
      flex-direction: column;
      align-items: center;
      right: 0;
      height: 0;
      bottom: 0;
      width: 60vw;
      height: 100vh;
      background-color: white;
      z-index: 50;
      gap: 1rem;
      padding-top: 8rem;
      background-color: #f7f8fd;
    }
  }
`;

const MiddleSection = styled(SharedBottomSection)`
  width: 80%;
`;

const TopSection = styled(SharedMiddleSection)`
  width: 80%;
`;

const OverLayStyle = styled(motion.div)`
  display: none;
  transition: 1s opacity;
  opacity: 0;

  @media (max-width: 600px) {
    & {
      display: block;
      position: fixed;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      height: 100vh;
      width: 100vw;
      z-index: 10;
      background-color: black;
      opacity: 0.5;
      overflow: hidden;

    }
  }
`;

const FilterButton = styled.button`
  font-size: 1.1rem;
  height: max-content;
  font-weight: 800;
  background-color: #f2f4ff;
  color: #4661e6;
  padding: 0.6rem;
  border-radius: 10px;
  cursor: pointer;

  &:hover {
    background-color: #cfd7ff;
  }

  &.active {
    transition: color background 1s;
    color: white;
    background-color: #4661e6;
  }
`;

const RoadMap = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  h2 {
    font-size: 1.3rem;
    color: #3a4374;
  }

  a {
    color: #4661e6;
    text-decoration: underline;

    &:hover {
      color: #62bcfa;
    }
  }
`;

const StatusContainer = styled.div`
  display: flex;
  flex-flow: column;
  justify-content: space-around;
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

const StatusName = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
  color: #647196;
  font-size: 14px;

  h3 {
    font-weight: 300;
  }
`;

const PlannedStatus = styled.div`
  display: flex;
  justify-content: space-between;
`;

const InProgressStatus = styled(PlannedStatus)``;

const LiveStatus = styled(PlannedStatus)``;

const StatusLength = styled.h3`
  color: #647196;
  font-size: 1.2rem;
`;

const Modal = ({ setOpen }) => {
  const { setFilter, filter, productsData } = useContext(FeedbacksProvider);

  let roadmapsStatus = (status) => {
    let copy = productsData;
    return copy.productRequests.filter((product) => product.status == status).length;
  };
  
  return (
    <>
      <StyledModal>
        <TopSection>
          <FilterButton
            className={filter.category == "all" ? "active" : ""}
            onClick={(e) => {
              setFilter({ category: "all", filterType: filter.filterType });
              
            }}
          >
            All
          </FilterButton>
          <FilterButton
            className={filter.category == "ui" ? "active" : ""}
            onClick={(e) => {
              setFilter({ category: "ui", filterType: filter.filterType });
              
            }}
          >
            UI
          </FilterButton>
          <FilterButton
            className={filter.category == "ux" ? "active" : ""}
            onClick={(e) => {
              setFilter({ category: "ux", filterType: filter.filterType });
              
            }}
          >
            UX
          </FilterButton>
          <FilterButton
            className={filter.category == "enhancement" ? "active" : ""}
            onClick={(e) => {
              setFilter({
                category: "enhancement",
                filterType: filter.filterType,
              });
              
            }}
          >
            Enhancement
          </FilterButton>
          <FilterButton
            className={filter.category == "bug" ? "active" : ""}
            onClick={(e) => {
              setFilter({ category: "bug", filterType: filter.filterType });
              
            }}
          >
            Bug
          </FilterButton>
          <FilterButton
            className={filter.category == "feature" ? "active" : ""}
            onClick={(e) => {
              setFilter({ category: "feature", filterType: filter.filterType });
              
            }}
          >
            Feature
          </FilterButton>
        </TopSection>
        <MiddleSection>
          <RoadMap>
            <h2>Roadmap</h2>
            <Link to="/roadmap">View</Link>
          </RoadMap>
          <StatusContainer>
            <PlannedStatus>
              <StatusName>
                <PlannedDot />
                <h3>Planned</h3>
              </StatusName>
              <StatusLength>{roadmapsStatus("planned")}</StatusLength>
            </PlannedStatus>
            <InProgressStatus>
              <StatusName>
                <InProgressDot />
                <h3>In-Progress</h3>
              </StatusName>
              <StatusLength>{roadmapsStatus("in-progress")}</StatusLength>
            </InProgressStatus>
            <LiveStatus>
              <StatusName>
                <LiveDot />
                <h3>Live</h3>
              </StatusName>
              <StatusLength>{roadmapsStatus("live")}</StatusLength>
            </LiveStatus>
          </StatusContainer>
        </MiddleSection>
      </StyledModal>
      <OverLayStyle initial={{opacity: 0}} animate={{ opacity: 0.5 }} onClick={() => setOpen(false)} />
    </>
  );
};

export default Modal;
