import { Route, Routes, useLocation } from "react-router-dom";
import FeedBackContextWrapper, {
  FeedbacksProvider,
} from "./Context/FeedBackContext";
import styled, { createGlobalStyle } from "styled-components";
import AddFeedBackPage from "./pages/AddFeedBack/Add";
import ProductPage from "./pages/ProductPage/ProductPage";
import { AnimatePresence } from "framer-motion";
import EditFeedBackPage from "./pages/EditFeedBack/Edit";
import Home from "./pages/home/Home";
import { useContext } from "react";
import RoadMapPage from "./pages/RoadMap/RoadMapPage";

function App() {
  const Location = useLocation();
  return (
    <FeedBackContextWrapper>
      <GlobalStyle />
      <AnimatePresence mode="wait">
        <Routes location={Location} key={Location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/add" element={<AddFeedBackPage />} />
          <Route path="/edit/:id" element={<EditFeedBackPage />} />
          <Route path="/:id" element={<ProductPage />} />
          <Route path="/roadmap" element={<RoadMapPage />} />
        </Routes>
      </AnimatePresence>
    </FeedBackContextWrapper>
  );
}

export default App;

const GlobalStyle = createGlobalStyle`

::-webkit-scrollbar {
  width: 5px;
  height: 5px;
}

::-webkit-scrollbar-track {
  box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  -webkit-border-radius: 10px;
  border-radius: 10px;
}

::-webkit-scrollbar-thumb {
  -webkit-border-radius: 10px;
  border-radius: 10px;
  background: rgba(255, 255, 255, 0.3);
  box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.5);
}

::-webkit-scrollbar-thumb:window-inactive {
  background: rgba(255, 255, 255, 0.3);
}

  
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Jost", sans-serif;
}

body, #root {
  background-color: #f2f4ff;
  height: 100vh;
  width: 100vw;
  overflow-x: hidden;

}


a, a:active, button, button:active, input, form, fieldset {
  color: unset;
  text-decoration: unset;
  border: unset;
  outline: unset;
}


@media (max-width: 600px){
  html {
    font-size: 13px;

  }
}

`;
