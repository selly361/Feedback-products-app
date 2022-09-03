import React, { createContext, useEffect, useState } from "react";
import { v4 as uuid } from "uuid";
import data from "../assets/data.json";

let feedBackData = data;

feedBackData.productRequests.map((product) => (product.id = uuid()));
feedBackData.productRequests.map((product) =>
  product.comments.map((comment) => (comment.id = uuid()))
);

export const FeedbacksProvider = createContext();

const FeedBackContextWrapper = ({ children }) => {
  const [productsData, setProductsData] = useState(() => JSON.parse(localStorage.getItem("products")) || feedBackData);

  const [filter, setFilter] = useState({
    category: "all",
    filterType: "+votes",
  });

  const handleFilteredData = () => {
    let copy = productsData.productRequests;
    copy = copy.filter(
      (product) =>
        product.status !== "planned" &&
        product.status !== "live" &&
        product.status !== "in-progress"
    );

    if (filter.category !== "all") {
      copy = copy.filter((product) => product.category == filter.category);
    }

    if (filter.filterType == "+votes") {
      copy = copy.sort((a, b) => b.upvotes - a.upvotes);
    } else if (filter.filterType == "-votes") {
      copy = copy.sort((a, b) => a.upvotes - b.upvotes);
    } else if (filter.filterType == "+comments") {
      copy = copy.sort((a, b) => b.comments.length - a.comments.length);
    } else if (filter.filterType == "-comments") {
      copy = copy.sort((a, b) => a.comments.length - b.comments.length);
    }

    setFilteredData(copy);
  };

  const [filteredData, setFilteredData] = useState();

  useEffect(() => {
    handleFilteredData();
    console.log(feedBackData.productRequests);
  }, [filter, productsData]);


  return (
    <FeedbacksProvider.Provider
      value={{ productsData, setProductsData, setFilter, filter, filteredData, handleFilteredData }}
    >
      {children}
    </FeedbacksProvider.Provider>
  );
};

export default FeedBackContextWrapper;
