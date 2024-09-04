import React from 'react'
import MainLayout from '../components/layout/MainLayout'
import Container from '../components/layout/Container'
import Footer from '../components/Footer'
import ProductCard from '../components/ProductCard'

const ProductPage = () => {
  return (
    <MainLayout
      pageTitle="Ansania Hijab"
      className="mt-8"
    >
        <Container>
          <ProductCard productsData={data}/>
          <Footer/>
        </Container>
    </MainLayout>
  )
}

export default ProductPage