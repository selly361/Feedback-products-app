import { Route, Routes } from "react-router-dom";
import FeedBackContextWrapper from "./components/Context/FeedBackContext";
import Home from "./pages/home/Home";
import styled, { createGlobalStyle } from "styled-components";
import AddFeedBackPage from "./pages/AddFeedBack/Add";

function App() {
  return (
    <Container>
      <FeedBackContextWrapper>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="add" element={<AddFeedBackPage />} />
      </Routes>
    </FeedBackContextWrapper>
    </Container>
  );
}

export default App;

const Container = styled.div`
  min-height: 100vh;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
`

const GlobalStyle = createGlobalStyle`
  
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body, #root {
  font-family: "Jost", sans-serif;
  background-color: #f2f4ff;
  min-height: 100vh;
  width: 100vw;
  overflow-x: hidden;

  
}



a, a:active, button, button:active, input, form, fieldset {
  color: unset;
  text-decoration: unset;
  border: unset;
  outline: unset;
}


`;
