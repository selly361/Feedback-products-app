import React, { useContext } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import BackButton from "../../components/shared/BackButton/BackButton";
import { FeedbacksProvider } from "../../Context/FeedBackContext";

const Body = styled.main`
  min-height: 100vh;
  width: 100vw;
  display: flex;
`;

const Container = styled.div`
  margin: auto;
  width: 80%;
  min-height: 80vh;
  border: 1px solid black;
  border-radius: 10px;
`;

const RoadMapNavBar = styled.header`
  width: 100%;
  height: 15vh;
  background-color: #373f68;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;


  nav {
    width: 90%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    
    h2 {
        color: white;
    }

      a {
    border-radius: 10px;
    color: #f2f4ff;
    background-color: #ad1fea;
    padding: .6rem .8rem;

    &:hover {
      cursor: pointer;
      background-color: #c75af6;
      outline: 1px dashed #ad1fea;

    }

    &:active {
      outline: 1px dashed #ad1fea;
      color: #f2f4ff;
    }

  }
    }
`;

const RoadMapPage = () => {
  const {} = useContext(FeedbacksProvider);

  return (
    <Body>
      <Container>
        <RoadMapNavBar>
          <nav>
            <div>
              <BackButton classname="customStyles" />
              <h2>Roadmap</h2>
            </div>
            <Link to="/add">+ Add Feedback</Link>
          </nav>
        </RoadMapNavBar>
      </Container>
    </Body>
  );
};

export default RoadMapPage;
