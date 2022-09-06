import React, { useState, useContext } from "react";
import Select from "react-select";
import styled from "styled-components";
import { ReactComponent as EditIcon } from "../../assets/icons/edit-icon.svg";
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
  height: 100%;
  display: flex;
  flex-flow: column;
  justify-content: space-around;

  .error,
  .input-error {
    visibility: hidden;
    color: red;
  }

  .text-field:invalid + .error,
  .input-field:invalid + .input-error {
    visibility: initial;
  }

  .input-field:invalid {
    border: 1px solid red;
  }

  .icon-wrapper {
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
    & {
      padding: 1rem;
    }
    .icon-wrapper {
      display: none;
    }
  }
`;

export const StyledEditIcon = styled(EditIcon)`
  transform: translate(0, -50%);
`;

export const FeedBackTitleInput = styled.input`
  background-color: #f2f4ff;
  width: 100%;
  height: max-content;
  border-radius: 10px;
  padding: 10px;
  font-size: 0.9rem;
  color: #647196;
  border: 1px solid #4661e6;

  &:focus,
  &:hover {
    cursor: pointer;
    border: 1px solid #4661e6;
  }
`;

export const DescriptInput = styled(FeedBackTitleInput)`
  height: 80px;
  resize: none;
  padding: 10px;
  border: 1px solid #4661e6;

  &:focus {
    outline: unset;
  }

  &:invalid {
    border: 1px solid red;
  }
`;

export const ButtonContainer = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: space-between;
  gap: 1rem;
  align-items: center;
  margin-top: 1rem;

  .edit-and-cancel-button {
    display: flex;
    gap: 1rem;
  }
`;

const CancelButton = styled.button`
  font-size: 1rem;
  color: #f2f4ff;
  font-weight: bold;
  border-radius: 10px;
  cursor: pointer;
  height: 40px;
  padding: 0.2rem 0.8rem;

  background-color: #3a4374;

  &:hover {
    background-color: #656ea3;
  }

  &:active {
    color: white;
    outline: 2px dashed #656ea3;
  }
`;

const DeleteButton = styled(CancelButton)`
  background-color: #d73737;

  &:hover {
    background-color: #e98888;
  }

  &:active {
    background-color: #e98888;
    outline: 2px dashed #e98888;
  }
`;

const EditButton = styled(CancelButton)`
  background-color: #ad1fea;

  &:hover {
    background-color: #c75af6;
  }

  &:active {
    background-color: #c75af6;
    outline: 2px dashed #c75af6;
  }
`;

const EditProduct = ({
  upvotes,
  title,
  category,
  id,
  comments,
  hover,
  active,
  description,
  status,
  handleFilteredData,
  productDetails,
  setProductsData,
  productsData,
}) => {
  const [feedbackTitle, setFeedbackTitle] = useState(title);
  const [descriptionData, setDescriptionData] = useState(description);
  const [categoryOption, setCategoryOption] = useState(() =>
    categoryOptions.find((c) => c.value === category)
  );
  const [statusOption, setStatusOption] = useState(() =>
    statusOptions.find((c) => c.value === status)
  );

  const Navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    let copy = productsData;

    if (descriptionData.trim() && feedbackTitle.trim()) {
      let updatedProduct = {
        id,
        title: feedbackTitle,
        upvotes,
        status: statusOption.value,
        category: categoryOption.value,
        active,
        description: descriptionData,
        comments,
      };

      let index = copy.productRequests.findIndex((p) => p.id === id);
      copy.productRequests[index] = updatedProduct;

      setProductsData(copy);
      sessionStorage.setItem("products", JSON.stringify(copy));
      handleFilteredData();
      Navigate(-1);
    }
  };

  const handleDelete = () => {
    let copy = productsData;

    copy.productRequests = copy.productRequests.filter((p) => p.id !== id);
    setProductsData(copy);
    sessionStorage.setItem("products", JSON.stringify(copy));
    handleFilteredData();
    Navigate("/");
  };

  return (
    <StyledForm noValidate onSubmit={handleSubmit}>
      <div className="icon-wrapper">
        <StyledEditIcon />
      </div>
      <h2>Edit '{title}'</h2>
      <h5>Feedback Title</h5>
      <p>Add a short, descriptive headline</p>
      <FeedBackTitleInput
        required
        className="input-field"
        value={feedbackTitle}
        onChange={(e) => setFeedbackTitle(e.target.value)}
      />
      <p className="input-error">Cant be empty</p>
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
        className="text-field"
        required
        maxLength={225}
        as="textarea"
        value={descriptionData}
        onChange={(e) => setDescriptionData(e.target.value)}
      />
      <p className="error">Cant be empty</p>
      <ButtonContainer>
        <DeleteButton type="button" onClick={handleDelete}>
          Delete
        </DeleteButton>
        <div className="edit-and-cancel-button">
          <CancelButton type="button" onClick={() => Navigate(-1)}>
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
