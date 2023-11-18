import React from 'react'
import './CartWidget.css'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { CartContext } from '../../context/CartContext'

const CartWidget = () => {

    const { totalQuantity } = useContext(CartContext);

    return (
        <>
            <div className='d-flex cart-container'>
                {/*condicional, si el carrito está vacío no se muestra*/}
                <Link to='/cart' className='badge-container' style={{ display: totalQuantity() > 0 ? 'flex' : 'none' }}>
                    <div >
                        <span className="badge text-bg-success">{totalQuantity()}</span>
                    </div>
                    <button className='cart-icon'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="45" height="45" viewBox="0 0 24 24"><path fill="#d22f27" d="M15.55 13c.75 0 1.41-.41 1.75-1.03l3.58-6.49A.996.996 0 0 0 20.01 4H5.21l-.94-2H1v2h2l3.6 7.59l-1.35 2.44C4.52 15.37 5.48 17 7 17h12v-2H7l1.1-2h7.45zM6.16 6h12.15l-2.76 5H8.53L6.16 6zM7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2s-.9-2-2-2zm10 0c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2s2-.9 2-2s-.9-2-2-2z" /></svg>
                    </button>
                </Link>
            </div>
        </>
    )
}

export default CartWidget