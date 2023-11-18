import React, { useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import CartView from '../CartView/CartView';
import { Link } from 'react-router-dom';
import SendOrder from '../SendOrder/SendOrder';
import './Cart.css'

const Cart = () => {

    const { cart, removeToCart, clearCart, totalPrice } = useContext(CartContext);

    return (
        <>
            <div className='cart'>
                <h2>{'Tu carrito'}</h2>
                {cart.map((items) => (
                    <CartView key={items.id} id={items.id} title={items.title} price={items.price} quantity={items.quantity} remove={removeToCart} />
                ))}
                <div className='btn-clear'>
                    <button onClick={() => clearCart()} >Limpiar carrito</button >
                </div>
                <p>{`Total: $${totalPrice}`}</p>
            </div>
            <div className='order'>
                {cart.length > 0 && <SendOrder />}
            </div>
        </>
    )
}

export default Cart