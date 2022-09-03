import React, { useContext } from 'react'
import { useParams } from 'react-router-dom'
import styled from 'styled-components'
import { FeedbacksProvider } from '../../Context/FeedBackContext'
import { AddFeedBack } from '../../components/Products/ProductHeader/ProductHeader'
import BackButton from '../../components/shared/BackButton/BackButton'
import Product from '../../components/shared/Product/Product'


const StyledProductPage = styled.div`
  width: 800px;
  min-height: 80vh;
  display: flex;
  flex-flow: column;
  gap: 2rem;
`

const TopSection = styled.section`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const EditFeedbackButton = styled(AddFeedBack)`
  background-color: #4661e6;

  &:hover {
    background-color: #7c91f9;
  }
`


const ProductPage = () => {
    const { productsData } = useContext(FeedbacksProvider)
    const { id } = useParams()

    let copy = productsData;
    let productDetails = copy.productRequests.find(p => p.id === id)

  return (
    <StyledProductPage>
      <TopSection>
        <BackButton />
        <EditFeedbackButton>Edit Feedback</EditFeedbackButton>
      </TopSection>
       <Product {...productDetails} hover={false} />
    </StyledProductPage>
  )
}

export default ProductPage