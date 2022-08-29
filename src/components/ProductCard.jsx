import React from 'react'
import { useDispatch } from 'react-redux';
// import { ADD_TO_CART } from '../store/actions/actionTypes/cart';
import {addToCart} from '../store/reducers/cart'

function ProductCard({product}) {

  const dispatch = useDispatch()
  return (
    <div class="ingredient">
        <div class="ingredient__image">
          <figure>
            <img src= {product.image}  alt= {product.title}/>
          </figure>
        </div>
        <div class="ingredient__title">
          <h3>
            {product.title}
          </h3>
        </div>
        <div class="ingredient__content">
          <p>
            {product.category}
          </p>
          <p class="price">
            <span>
              ${product.oldPrice}
            </span> From ${product.newPrice}
          </p>
        </div>
        <div class = "ingredient__btn">
          <button onClick = {() => dispatch(addToCart(product))} class="btn-white">
            ADD TO CART
          </button>
        </div>

    </div>
  )
}

export default ProductCard