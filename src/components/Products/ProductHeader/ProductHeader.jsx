import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { ReactComponent as BulbIcon } from "../../../assets/icons/buld-icon.svg";
import Select from "react-select";
import { Link } from "react-router-dom";

const Container = styled.div`
  width: 100%;
  height: 13vh;
  background-color: #373f68;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 2rem;

  svg {
    transform: scale(1.3);
  }

  
  @media (max-width: 600px){
    height: 12vh;
    border-radius: 0;
    align-items: center;
  }
`;

const FilterContainer = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;

  h5 {
    color: #f2f4ff;
    font-weight: 300;
    font-size: 1rem;
  }

  h3 {
    color: white;
    font-size: 1.1rem;
  }

  @media (max-width: 600px){
    h3 {
      display: none;
    }
  }
`;

const AddFeedBackContainer = styled.div``;

export const AddFeedBack = styled(Link)`
  font-size: 1rem;
  padding: 0.6rem 1rem;
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

  &.mobile-addfeedback {
    display: none;
  }

  @media (max-width: 500px){
    & {
      display: none;
    }

    &.mobile-addfeedback {
      display: block;
      font-size: 2rem;
      padding: .2rem .8rem;
    }
  }
`;


const LightBulb = styled(BulbIcon)`

  @media (max-width: 900px){
    display: none;
  }
`

const options = [
  { value: "+votes", label: "Most Upvotes" },
  { value: "-votes", label: "Least Upvotes" },
  { value: "+comments", label: "Most Comments" },
  { value: "-comments", label: "Least Comments" },
];

const customStyles = {

  control: (base, state) => ({
    ...base,
    background: "transparent",
    borderColor: "transparent",
    "&:hover": {
      borderColor: "transparent"
    },
    color: "white"

  }),
  menu: (base) => ({
    ...base,
    borderRadius: 0,
    marginTop: 0,
  }),
  menuList: (base) => ({
    ...base,
    padding: 0,
  })
};

const ProductHeader = ({ filter, setFilter, productRequests }) => {
  const [selectedOption, setSelectedOption] = useState({
    value: "+votes",
    label: "Most Upvotes",
  });

  useEffect(() => {
    setFilter({ category: filter.category, filterType: selectedOption.value });
  }, [selectedOption]);

  return (
    <Container>
      <FilterContainer>
        <LightBulb />
        <h3>
          {productRequests.filter((p) => p.status === "suggestion").length}{" "}
          Suggestions
        </h3>
        <Select
          className="select"
          onChange={setSelectedOption}
          options={options}
          value={selectedOption}
        />
      </FilterContainer>
      <AddFeedBackContainer>
        <AddFeedBack to="/add">+ Add FeedBack</AddFeedBack>
        <AddFeedBack to="/add" className="mobile-addfeedback">+</AddFeedBack>
      </AddFeedBackContainer>
    </Container>
  );
};

export default ProductHeader;
