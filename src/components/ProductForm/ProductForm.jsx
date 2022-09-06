import React, { useState, useContext } from "react";
import Select from "react-select";
import styled from "styled-components";
import { ReactComponent as AddIcon } from "../../assets/icons/add-icon.svg";
import { v4 as uuid } from "uuid";
import { FeedbacksProvider } from "../../Context/FeedBackContext";
import { Link, useNavigate }  from 'react-router-dom'

const options = [
  { value: "feature", label: "Feature" },
  { value: "ui", label: "UI" },
  { value: "ux", label: "UX" },
  { value: "enhancement", label: "Enhancement" },
  { value: "bug", label: "Bug" },
];

export const StyledForm = styled.form`
  width: 90%;
  display: flex;
  flex-flow: column;
  justify-content: space-evenly;

  .icon-wrap {
    height: 50px;
    width: 50px;
  }

  h2,
  h5 {
    color: #3a4374;
  }

  p {
    color: #647196;
    font-weight: 300;
  }

  
  @media (max-width: 700px) {
    .icon-wrap {
      display: none;
    }
  }
`;

export const StyledAddIcon = styled(AddIcon)`
  transform: translate(0, -50%);
`;

export const FeedBackTitleInput = styled.input`
  background-color: #f2f4ff;
  width: 100%;
  height: 45px;
  border-radius: 10px;
  padding: 0 20px;
  font-size: 1.1rem;
  color: #647196;
  border: 1px solid black;

  &:focus,
  &:hover {
    border: 1px solid #4661e6;
    cursor: pointer;
  }
`;

export const DescriptInput = styled(FeedBackTitleInput)`
  height: 80px;
  resize: none;
  padding: 20px;

  &:focus {
    outline: unset;
  }
`;

export const ButtonContainer = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: flex-end;
  gap: 1rem;
  align-items: center;

  button:first-child,
  button:last-child {
    font-size: 1rem;
    color: #f2f4ff;
    font-weight: bold;
    padding: 0.8rem 0.9rem;
    border-radius: 10px;
    cursor: pointer;
  }

  button:first-child {
    background-color: #3a4374;

    &:hover {
      background-color: #656ea3;
    }
  }

  button:last-child {
    background-color: #ad1fea;

    &:hover {
      background-color: #c75af6;
    }
  }
`;

const ProductForm = () => {
  const { setProductsData, productsData, handleFilteredData } =
    useContext(FeedbacksProvider);

  const [feedbackTitle, setFeedbackTitle] = useState("");
  const [description, setDescription] = useState("");
  const [selectedOption, setSelectedOption] = useState({
    value: "feature",
    label: "Feature",
  });

  const Navigate = useNavigate()


  const handleSubmit = (e) => {
    e.preventDefault();

    let copy = productsData;

    let newProduct = {
      id: uuid(),
      title: feedbackTitle,
      category: selectedOption.value,
      upvotes: 0,
      active: false,
      status: "suggestion",
      description: description,
      comments: [],
    };

    let productRequests = copy.productRequests;

    productRequests.push(newProduct);

    setProductsData(copy);
    localStorage.setItem("products", JSON.stringify(copy))
    handleFilteredData()
    Navigate(-1)
  };

  return (
    <StyledForm onSubmit={handleSubmit}>
      <div className="icon-wrap">
      <StyledAddIcon />
      </div>
      <h2>Create New Feedback</h2>
      <h5>Feedback Title</h5>
      <p>Add a short, descriptive headline</p>
      <FeedBackTitleInput
        value={feedbackTitle}
        onChange={(e) => setFeedbackTitle(e.target.value)}
      />
      <h5>Category</h5>
      <p>Choose a category for your feedback</p>
      <Select
        onChange={setSelectedOption}
        value={selectedOption}
        options={options}
      />
      <h5>Feedback Detail</h5>
      <p>
        Include any specific comments on what should be improved, added, etc.
      </p>
      <DescriptInput
        as="textarea"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <ButtonContainer>
        <button type="button" onClick={() => Navigate('/')}>Cancel</button>
        <button type="submit">Add Feedback</button>
      </ButtonContainer>
    </StyledForm>
  );
};

export default ProductForm;
