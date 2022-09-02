import React from 'react'
import styled from 'styled-components'
import ProductForm from '../../components/ProductForm/ProductForm'


const Container = styled.div`
  height: 85vh;
  width: 35vw;
  background-color: white;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  


`

const AddFeedBackPage = () => {
  return (
    <Container>
        <ProductForm />
    </Container>
  )
}

export default AddFeedBackPage