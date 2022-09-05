import React, { Fragment, useState } from "react";
import styled from "styled-components";
import Modal from "./Modal";

const StyledHeader = styled.div`
  display: none;

  @media (max-width: 600px) {
    & {
      position: relative;
      z-index: 100;
      display: flex;
      align-items: center;
      justify-content: center;
      width: 100vw;
      height: 12vh;
      background: radial-gradient(
        128.88% 128.88% at 103.9% -10.39%,
        #e84d70 0,
        #a337f6 53.09%,
        #28a7ed 100%
      );

      nav {
        width: 90%;
        display: flex;
        justify-content: space-between;
        height: 100%;
        align-items: center;
        color: white;

        h4 {
          font-weight: 700;
          font-size: 1.3rem;
        }

        p {
          font-weight: 300;
          font-size: 1.2rem;
        }
      }
    }
  }
`;

const Header = () => {
  const [open, setOpen] = useState(false);
  
  document.documentElement.style.overflow = open ? "hidden" : "auto";
  return (
    <Fragment>
      <StyledHeader>
        <nav>
          <div>
            <h4>Frontend Mentor</h4>
            <p>Feedback Board</p>
          </div>
          <div>
            {!open ? (
              <img
                onClick={() => setOpen(true)}
                src="https://lm-product-feedback-app.netlify.app/static/media/icon-hamburger.a8bc4c8c.svg"
              />
            ) : (
              <img
                onClick={() => setOpen(false)}
                src="https://lm-product-feedback-app.netlify.app/static/media/icon-close.dd55c392.svg"
              />
            )}
          </div>
        </nav>
      </StyledHeader>
      {
        open && <Modal setOpen={setOpen} />
      }
    </Fragment>
  );
};

export default Header;
