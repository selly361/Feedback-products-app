import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { ReactComponent as BulbIcon } from "../../../assets/icons/buld-icon.svg";
import Select from "react-select";

const Container = styled.div`
  width: 100%;
  height: 13vh;
  background-color: #373f68;
  border-radius: 10px;
  display: flex;
  align-items: center;
  padding: 1rem;

  svg {
    transform: scale(1.3);
  }
`;

const FilterContainer = styled.div`
  display: flex;
  gap: 1rem;

  .Select {
    width: 200px;
  }
  
`;


const options = [
  { value: "+votes", label: "Most Upvotes" },
  { value: "-votes", label: "Least Upvotes" },
  { value: "+comments", label: "Most Comments" },
  { value: "-comments", label: "Least Comments" },
];





const ProductHeader = ({ filter, setFilter }) => {
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
        <BulbIcon />
        <h2></h2>
        <Select
          className="Select"
          onChange={setSelectedOption}
          options={options}
          value={selectedOption}
        />
      </FilterContainer>
    </Container>
  );
};

export default ProductHeader;
