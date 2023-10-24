import React, { useState } from 'react'
import './ItemCount.css'

const ItemCount = ({ stock, initial, onAdd }) => {

    const [count, setCount] = useState(initial)

    const incrementar = () => {

        count < stock ? setCount(count + 1) : alert('La cantidad a comprar no puede superar el stock disponible');
    }

    const decrementar = () => {

        count > initial && setCount(count - 1);
    }

    return (
        <>
            <div className='counter'>
                <button onClick={incrementar}>+</button>
                <h4>{count}</h4>
                <button onClick={decrementar}>-</button>
            </div>
            <div className='add'>
                <button onClick={()=> onAdd(count)} disabled={!stock}>Agregar al carrito</button>
            </div>
        </>
    )
}

export default ItemCount