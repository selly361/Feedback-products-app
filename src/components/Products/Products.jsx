import React, { useContext } from 'react'
import Product from './Product/Product'
import styled from 'styled-components'
import ProductHeader from './ProductHeader/ProductHeader'
import { FeedbacksProvider } from '../Context/FeedBackContext'


const Container = styled.div`
    width: 60vw;
    height: 100%;
    border: 1px solid black;
    border-radius: 10px;

`

const Products = () => {
  const { filteredData, setFilter, filter } = useContext(FeedbacksProvider)

  return (
    <Container>
      <ProductHeader setFilter={setFilter} filter={filter} />
      {
        filteredData && filteredData.map(data => (
          <div>
            <h1>Title: {data.title}</h1>
            <h1>Upvotes: {data.upvotes}</h1>
            <h1>Category: {data.category}</h1>
            <h1>Status: {data.status}</h1>
            <h1>Comments: {data.comments.length}</h1>
            <br />
            <br />
            <br />
          </div>
        ))
      }
    </Container>
  )
}

export default Products