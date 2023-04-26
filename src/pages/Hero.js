import React from 'react'
import useFetch from '../Fetcher/useFetch'
import Carousel from 'react-bootstrap/Carousel'
import { Card, Button } from 'react-bootstrap'
import BeatLoader from 'react-spinners/BeatLoader'
import '../styles/Hero.css'
import { ToastContainer, toast } from 'react-toastify'
import { Link, useParams } from 'react-router-dom'

const Hero = ({ cartItem, setCartItems, handleAddToCart }) => {
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
  const notify = () => {
    // toast('An item has been added')
    toast.success('An item has been added !', {
      position: toast.POSITION.TOP_CENTER,
    })
  }
  return (
    <>
      <div className='container mt-3 text-center'>
        <h2> {isLoading2 && <BeatLoader />}</h2>
        {error2 && <h2> {error2.message} </h2>}
        <div className='row justify-content-between hero'>
          <div className='col-sm-12 col-lg-7 col-md-6'>
            <Carousel className=''>
              {data2.map((ss) => {
                const { image, title } = ss
                return (
                  <Carousel.Item className=''>
                    <img className='w-100 hero-img' src={image} alt={title} />
                  </Carousel.Item>
                )
              })}
            </Carousel>
          </div>
          <div className=' col-sm-12 col-md-6 col-lg-5'>
            <div className='card-container'>
              {data3.map((ss) => {
                return (
                  <div className='h-100'>
                    <Card className='p-1 shadow-lg '>
                      <Link to={`/SingleProduct/${ss.id}`}>
                        <Card.Img
                          variant='top'
                          src={ss.image}
                          className='p-1'
                        />
                        <Card.Body className=''>
                          <Card.Title className=''>
                            <h6>{ss.title.slice(0, 11)}</h6>
                          </Card.Title>
                          <Card.Text>
                            <p>$ {ss.price}</p>
                          </Card.Text>

                          {/* <Button variant='primary'>Go somewhere</Button> */}
                        </Card.Body>
                      </Link>
                      <button
                        onClick={() => {
                          handleAddToCart(ss)
                          notify()
                        }}
                      >
                        add to cart
                      </button>
                    </Card>
                    <ToastContainer />

                    {/* <h2 className='p-1'> {ss.title.slice(0, 5)}</h2>

                    <img
                      className='w-75 mx-3 p-4 text-center'
                      src={ss.image}
                      alt=''
                    />
                    <p className='text-center'> {ss.price} </p>
                    <button className=' w-75 m-auto text-center'>
                      Add to cart
                    </button> */}
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
