import React, { useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import useFetch from '../Fetcher/useFetch'
import BeatLoader from 'react-spinners/BeatLoader'
import { ToastContainer, toast } from 'react-toastify'

const SingleProduct = ({ handleAddToCart }) => {
  const { id } = useParams()
  const { data, isLoading, error } = useFetch(
    `https://fakestoreapi.com/products/${id}`
  )
  const { title, image, description, price, rating, idx } = data
  const notify = () => {
    // toast('An item has been added')
    toast.success('An item has been added !', {
      position: toast.POSITION.TOP_CENTER,
    })
  }
  useEffect(() => {
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth',
    })
  }, [data])
  return (
    <>
      <div className='container'>
        {isLoading && <BeatLoader />}
        <div className='row justify-content-center align-items-center'>
          <div className='col-lg-4 '>
            <img className='w-75' src={image} alt={title}  />
          </div>
          <div className='col-lg-8'>
            <h1 className='text-danger'> {title} </h1>
            <h4 className='text-success'>{description} </h4>
            <h3>${price} </h3>
            <button
              onClick={() => {
                handleAddToCart(data)
                notify()
              }}
            >
              add to cart
            </button>
            <Link to='/'>bak 2 home</Link>
          </div>
          <ToastContainer />

          {/* <p> rate {rating.rate} </p> */}
        </div>
      </div>
    </>
  )
}

export default SingleProduct
