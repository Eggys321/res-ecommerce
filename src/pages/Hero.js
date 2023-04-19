import React from 'react'
import useFetch from '../Fetcher/useFetch'
import Carousel from 'react-bootstrap/Carousel'

const Hero = () => {
  const {
    data: data2,
    error: error2,
    isLoading: isLoading2,
  } = useFetch('https://fakestoreapi.com/products')
  const {
    data: data3,
    error: error3,
    isLoading: isLoading3,
  } = useFetch('https://fakestoreapi.com/products?limit=4')
  return (
    <>
      <div className='container mt-5'>
        <div className='row'>
          <Carousel className='col-sm-8'>
            {data2.map((ss) => {
              const { image, title } = ss
              return (
                <Carousel.Item>
                  <img className='w-100 hero-img' src={image} alt={title} />
                </Carousel.Item>
              )
            })}
          </Carousel>
          <div className='col-sm-4 col-lg-4'>
            <div className='dddd'>
              {data3.map((ss) => {
                return (
                  <div className='d-flex flex-column'>
                    <img className='w-75 mx-3 p-4 text-center ' src={ss.image} alt='' />
                    <p className='text-center'> {ss.price}  </p>
                    <button className='btn w-75 m-auto text-center'>Add to cart</button>
                  </div>
                )
              })}
            </div>
            {/* {data3.map((datum3) => {
              const { image, title, id, price } = datum3
              return (
                <div key={id} className='inner-hero2-data'>
                  <div className='dddd'>
                   

                    <div>
                      <img className='w-25' src={image} alt={title} />
                    </div>
                
                  </div>
                </div>
              )
            })} */}
          </div>
        </div>
      
      </div>
    </>
  )
}

export default Hero
