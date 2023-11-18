import React from 'react'
import './ItemList.css'
import Item from '../Item/Item.jsx'

const ItemList = ({ product }) => {

    return (
        <div className='list-group'>
            {product.map(prod => <Item key={prod.id} id={prod.id} {...prod} />)}
        </div>
    )
}

export default ItemList