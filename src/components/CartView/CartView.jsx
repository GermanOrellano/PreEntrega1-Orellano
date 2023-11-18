import React from 'react'

const CartView = ({ id, title, price, quantity, remove }) => {
    return (
        <>
            <article className='cart-container'>
                <p>{`Producto: ${title}`}</p>
                <p>{`Precio unitario: $${price}`}</p>
                <p>{`Cantidad: ${quantity}`}</p>
                <p>{`Subtotal: $${(price) * (quantity)}`}</p>
                <button onClick={() => remove(id)}>Eliminar</button>
            </article>
        </>
    )
}

export default CartView