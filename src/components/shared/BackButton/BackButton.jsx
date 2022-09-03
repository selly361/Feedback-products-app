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
    
`

const LeftArrow = styled(Icon)`
    transform: scale(1.4)
`

const BackButton = () => {
    const Navigate = useNavigate();

  return (
    <StyledBackButton onClick={() => Navigate(-1)}>
        <LeftArrow />
        <h4>Go Back</h4>
    </StyledBackButton>
  )
}

export default BackButton