import React, { useState, useContext } from "react";
import Select from "react-select";
import styled from "styled-components";
import { ReactComponent as EditIcon } from "../../assets/icons/edit-icon.svg";
import { FeedbacksProvider } from "../../Context/FeedBackContext";
import { Link, useNavigate } from "react-router-dom";

const categoryOptions = [
  { value: "feature", label: "Feature" },
  { value: "ui", label: "UI" },
  { value: "ux", label: "UX" },
  { value: "enhancement", label: "Enhancement" },
  { value: "bug", label: "Bug" },
];


const statusOptions = [
    { value: "suggestion", label: "Suggestion" },
    { value: "planned", label: "Planned" },
    { value: "in-progress", label: "In-progress" },
    { value: "live", label: "Live" },
  ];

export const StyledForm = styled.form`
  width: 95%;
  display: flex;
  flex-flow: column;
  justify-content: space-around;

  h2,
  h5 {
    color: #3a4374;
  }

  p {
    color: #647196;
    font-weight: 300;
  }
`;

export const StyledEditIcon = styled(EditIcon)`
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
  justify-content: space-between;
  gap: 1rem;
  align-items: center;

  .edit-and-cancel-button {
    display: flex;
    gap: 1rem;
  }
`;

const CancelButton = styled.button`
  font-size: 1.1rem;
  color: #f2f4ff;
  font-weight: bold;
  padding: 0.8rem 0.9rem;
  border-radius: 10px;
  cursor: pointer;

  background-color: #3a4374;

  &:hover {
    background-color: #656ea3;
  }
`;

const DeleteButton = styled(CancelButton)`
  background-color: #d73737;

  &:hover {
    background-color: #e98888;
  }
`;

const EditButton = styled(CancelButton)`
  background-color: #ad1fea;

  &:hover {
    background-color: #c75af6;
  }
`;

const EditProduct = () => {
  const { setProductsData, productsData, handleFilteredData } =
    useContext(FeedbacksProvider);

  const [feedbackTitle, setFeedbackTitle] = useState();
  const [description, setDescription] = useState();
  const [categoryOption, setCategoryOption] = useState();
  const [statusOption, setStatusOption] = useState();

  const Navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <StyledForm onSubmit={handleSubmit}>
      <StyledEditIcon />
      <h2>Edit 'Add tags for solutions'</h2>
      <h5>Feedback Title</h5>
      <p>Add a short, descriptive headline</p>
      <FeedBackTitleInput
        value={feedbackTitle}
        onChange={(e) => setFeedbackTitle(e.target.value)}
      />
      <h5>Category</h5>
      <p>Choose a category for your feedback</p>
      <Select
        onChange={setCategoryOption}
        value={categoryOption}
        options={categoryOptions}
      />
      <h5>Update Status</h5>
      <p>Change feedback state</p>
      <Select
        onChange={setStatusOption}
        value={statusOption}
        options={statusOptions}
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
        <DeleteButton>Delete</DeleteButton>
        <div className="edit-and-cancel-button">
          <CancelButton type="button" onClick={() => Navigate("/")}>
            Cancel
          </CancelButton>
          <EditButton type="submit">Save Changes</EditButton>
        </div>
      </ButtonContainer>
      <br />
    </StyledForm>
  );
};

export default EditProduct;
