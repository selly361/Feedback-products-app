import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { FeedbacksProvider } from "../../Context/FeedBackContext";
import styled from "styled-components";

const StyledHeader = styled.header`
  width: 250px;
  height: 82vh;
  display: flex;
  flex-flow: column;
  gap: 1rem;
  border-radius: 10px;
`;

const TopSection = styled.section`
  border-radius: 10px;
  background: radial-gradient(
    128.88% 128.88% at 103.9% -10.39%,
    #e84d70 0,
    #a337f6 53.09%,
    #28a7ed 100%
  );
  display: flex;
  flex-flow: column;
  justify-content: end;
  padding: 1rem;
  color: white;

  h2 {
  }

  h4 {
    font-weight: 300;
  }
`;

const MiddleSection = styled.section`
  background-color: white;
  display: flex;
  gap: 1rem;
  flex-flow: wrap;
  padding: 1rem;
  border-radius: 10px;
`;

const FilterButton = styled.button`
  font-size: 0.9rem;
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

const BottomSection = styled.section`
  padding: 1rem;
  background-color: white;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  border-radius: 10px;
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

const NavBar = () => {
  const { productsData, filter, setFilter } = useContext(FeedbacksProvider);

  let roadmapsStatus = (status) => {
    let copy = productsData;
    return copy.productRequests.filter((product) => product.status == status)
      .length;
  };
  return (
    <StyledHeader>
      <TopSection>
        <h2>Frontend Mentor</h2>
        <h4>Feedback Board</h4>
      </TopSection>
      <MiddleSection>
        <FilterButton
          className={filter.category == "all" ? "active" : ""}
          onClick={(e) =>
            setFilter({ category: "all", filterType: filter.filterType })
          }
        >
          All
        </FilterButton>
        <FilterButton
          className={filter.category == "ui" ? "active" : ""}
          onClick={(e) =>
            setFilter({ category: "ui", filterType: filter.filterType })
          }
        >
          UI
        </FilterButton>
        <FilterButton
          className={filter.category == "ux" ? "active" : ""}
          onClick={(e) =>
            setFilter({ category: "ux", filterType: filter.filterType })
          }
        >
          UX
        </FilterButton>
        <FilterButton
          className={filter.category == "enhancement" ? "active" : ""}
          onClick={(e) =>
            setFilter({
              category: "enhancement",
              filterType: filter.filterType,
            })
          }
        >
          Enhancement
        </FilterButton>
        <FilterButton
          className={filter.category == "bug" ? "active" : ""}
          onClick={(e) =>
            setFilter({ category: "bug", filterType: filter.filterType })
          }
        >
          Bug
        </FilterButton>
        <FilterButton
          className={filter.category == "feature" ? "active" : ""}
          onClick={(e) =>
            setFilter({ category: "feature", filterType: filter.filterType })
          }
        >
          Feature
        </FilterButton>
      </MiddleSection>
      <BottomSection>
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
      </BottomSection>
    </StyledHeader>
  );
};

export default NavBar;
