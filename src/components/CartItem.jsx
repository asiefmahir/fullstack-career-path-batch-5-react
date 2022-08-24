/* eslint-disable jsx-a11y/alt-text */
import {useState} from 'react';
import {useDispatch} from 'react-redux'

import {icons} from '../assets'
import { MODIFY_QUANTITY_OF_A_ITEM, REMOVE_ITEM_FROM_CART } from '../store/actions/actionTypes/cart';

function CartItem({item}) {

    const [quantity, setQuantity] = useState(item.quantity)

    const dispatch = useDispatch()
    return (
        <tr>
            <td>
                <div class="product">
                    <img
                        // src="images/card-image.png"
                        src = {item.image}
                        class="product-img"
                        alt=""
                    />
                    <p>{item.title}</p>
                </div>
            </td>
            <td>$ {item.newPrice}</td>
            <td>
                <div class="qty_input">
                    <button
                        class="qty-count qty-count--minus"
                        data-action="minus"
                        type="button"
                    >
                        <figure onClick={() => {
                                if (quantity > 0) {
                                    setQuantity((prevQuantity) => {
                                        dispatch({type: MODIFY_QUANTITY_OF_A_ITEM, payload: {id: item.id, quantity: prevQuantity - 1}})
                                        return prevQuantity - 1
                                    })
                                    
                                }

                                
                            }}>
                            <img  src= {icons.minusIcon} />
                        </figure>
                    </button>
                    <input
                        class="product-qty"
                        type="number"
                        name="product-qty"
                       
                        value= {quantity}
                        min ='1'
                        onChange = {(e) => {
                            if (parseInt(e.target.value) >= 0) {
                                
                                    setQuantity(parseInt(e.target.value))
                                    dispatch({type: MODIFY_QUANTITY_OF_A_ITEM, payload: {id: item.id, quantity: quantity}}) 
                                
                            }
                        }}
                        // onChange = {}
                    />
                    <button
                        class="qty-count qty-count--add"
                        data-action="add"
                        type="button"
                    >
                        <figure onClick={() => {
                               if (quantity >= 0) {
                                    setQuantity((prevQuantity) => {
                                        dispatch({type: MODIFY_QUANTITY_OF_A_ITEM, payload: {id: item.id, quantity: prevQuantity + 1}})
                                        return prevQuantity + 1
                                    })
                                     
                                } 
                                
                            }}>
                            <img  src={icons.plusIcon} />
                        </figure>
                    </button>
                </div>
            </td>
            <td>$  {item.quantity ? item.newPrice * item.quantity : 0}</td>
            <td>
                <img class="cross-icon" src = {icons.crossIcon} onClick = {() => dispatch({type: REMOVE_ITEM_FROM_CART, payload: item.id})} />
                
            </td>
        </tr>
    )
}

// dispatch({
//         type: 'REMOVE_ITEM',
//         payload : {id: item.id}
//     })

export default CartItem