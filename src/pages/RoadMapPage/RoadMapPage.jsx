import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import RoadMap from "../../components/RoadMap/RoadMap";
import BackButton from "../../components/shared/BackButton/BackButton";
import { FeedbacksProvider } from "../../Context/FeedBackContext";

const Body = styled.main`
  min-height: 100vh;
  width: 100vw;
  display: flex;
  padding: 0.5rem;

  @media (max-width: 850px) {
    & {
      padding: 0;
    }
  }
`;

const Container = styled.div`
  margin: auto;
  width: 1000px;
  height: 80vh;
  border-radius: 10px;

  @media (max-width: 1050px) {
    & {
      width: 900px;
    }
  }

  @media (max-width: 850px) {
    & {
      width: 100%;
      border-radius: 0;
      margin: 0;
    }
  }
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
      padding: 0.6rem 0.8rem;

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

  @media (max-width: 850px) {
    & {
      border-radius: 0;
    }
  }
`;

const RoadMapContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 2rem;

  @media (max-width: 850px) {
    display: none;
  }
`;

const Details = styled.div`
  height: 100%;

  h3 {
    color: #3a4374;
    height: 100%;
    display: flex;
    align-items: center;
    border-bottom: 2px solid transparent;
    width: 105%; 

    &:hover {
      cursor: pointer;
    }
  }

  h3.planned1 {
    border-bottom-color: #f49f85;
  }

  h3.in-progress2 {
    border-bottom-color: #ad1fea;
  }

  h3.live3 {
    border-bottom-color: #62bcfa;
  }
`;

const MobileNavBar = styled.div`
  display: none;

  @media (max-width: 850px) {
    display: flex;
    gap: 0.2rem;
    width: 100vw;
    justify-content: space-around;
    height: 10vh;
    align-items: center;
    border-bottom: 1px solid black;
    box-sizing: content-box;
  }
`;

const RoadMapPage = () => {
  const { productsData } = useContext(FeedbacksProvider);

  const findProduct = (status) =>
    productsData.productRequests.filter((product) => product.status === status);
  const [inProgress, setInProgress] = useState(findProduct("in-progress"));
  const [planned, setPlanned] = useState(findProduct("planned"));
  const [live, setLive] = useState(findProduct("live"));

  const [selected, setSelected] = useState(planned);

  return (
    <>
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
          <MobileNavBar>
            <Details>
              <h3
                className={selected[0].status + "1"}
                onClick={() => setSelected(planned)}
              >
                Planned ({planned.length})
              </h3>
            </Details>
            <Details>
              <h3 className={selected[0].status + "2"} onClick={() => setSelected(inProgress)}>
                In-Progress ({inProgress.length})
              </h3>
            </Details>
            <Details>
              <h3 className={selected[0].status + "3"} onClick={() => setSelected(live)}>Live ({live.length})</h3>
            </Details>
          </MobileNavBar>
          <br />
          <RoadMapContainer>
            {planned.length ? (
              <RoadMap
                items={planned}
                setItems={setPlanned}
                statusName="Planned"
              />
            ) : null}
            {inProgress.length ? (
              <RoadMap
                items={inProgress}
                setItems={setInProgress}
                statusName="In-Progress"
              />
            ) : null}
            {live.length ? (
              <RoadMap items={live} setItems={setLive} statusName="Live" />
            ) : null}
          </RoadMapContainer>
          <RoadMap className="mobile-version" items={selected} setItems={setSelected} />
        </Container>
      </Body>
    </>
  );
};

export default RoadMapPage;
