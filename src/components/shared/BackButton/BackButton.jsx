import React from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import { ReactComponent as Icon } from '../../../assets/icons/left-arrow-icon.svg'


const StyledBackButton = styled.div`
    display: flex;
    align-items: center;
    gap: .4rem;

    h4 {
        color: #647196;

        &:hover {
            text-decoration: underline;
            cursor: pointer;
        }
    }

    &.customStyles {
        font-size: 0.9rem;
        gap: 1rem;

        h4 {
            color: white;
        }
    }
    
`

const LeftArrow = styled(Icon)`
    transform: scale(1.4);

    &.customStyles-icon {
        path {
            stroke: white;
        }
        transform: scale(1.2);
    }
`

const BackButton = ({ classname }) => {
    const Navigate = useNavigate();

  return (
    <StyledBackButton onClick={() => Navigate("/")} className={classname}>
        <LeftArrow className={classname + "-icon"} />
        <h4>Go Back</h4>
    </StyledBackButton>
  )
}

export default BackButton