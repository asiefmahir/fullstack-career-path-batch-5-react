import React from 'react'
import { useDispatch } from 'react-redux';
import { ADD_TO_CART } from '../store/actions/actionTypes/cart';

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
          <button onClick = {() => dispatch({type: ADD_TO_CART, payload: product})} class="btn-white">
            ADD TO CART
          </button>
        </div>

    </div>
  )
}

export default ProductCard