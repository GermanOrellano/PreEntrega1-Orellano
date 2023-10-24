import React from 'react'
import './ItemList.css'
import Item from '../Item/Item.jsx'

const ItemList = ({ item }) => {

    return (
        <div className='list-group'>
            {item.map(prod => <Item key={prod.id} {...prod} />)}
        </div>
    )
}

export default ItemList