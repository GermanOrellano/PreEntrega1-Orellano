import React from 'react'
import { useState, useEffect } from 'react'
import ItemList from '../ItemList/ItemList.jsx'
import './ItemListContainer.css'
import { getItem, getProductByCategory } from '../../Mock.jsx'
import { useParams } from 'react-router-dom'


const ItemListContainer = ({ greeting }) => {
    const [item, setItem] = useState([])

    const { categoryId } = useParams()

    useEffect(() => {
        const asyncFunc = categoryId ? getProductByCategory : getItem;

        asyncFunc(categoryId)
            .then(response => {
                setItem(response)
            })
            .catch(error => {
                console.log(error);
            })
    }, [categoryId])

    return (
        <>
            <h1 className='greeting'>{greeting}</h1>
            <ItemList item={item} />
        </>
    )
}

export default ItemListContainer