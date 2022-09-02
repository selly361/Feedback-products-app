import React, { useContext } from 'react'
import Product from './Product/Product'
import styled from 'styled-components'
import ProductHeader from './ProductHeader/ProductHeader'
import { FeedbacksProvider } from '../Context/FeedBackContext'


const Container = styled.div`
    width: 60vw;
    min-height: max-content;
    border-radius: 10px;
    display: flex;
    flex-flow: column;
    gap: 1rem;

`

const Products = () => {
  const { filteredData, setFilter, filter, productsData } = useContext(FeedbacksProvider)

  return (
    <Container>
      <ProductHeader setFilter={setFilter} filter={filter} productRequests={productsData.productRequests} />
      {
        filteredData && filteredData.map(data => (
          <Product key={data.id} {...data} />
        ))
      }
    </Container>
  )
}

export default Products