import React from 'react'
import { useState, useEffect } from 'react'
import ItemList from '../ItemList/ItemList.jsx'
import './ItemListContainer.css'
import { useParams } from 'react-router-dom'
import { collection, getDocs, query, getFirestore, where } from 'firebase/firestore'


const ItemListContainer = () => {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)

    const { categoryId } = useParams()

    useEffect(() => {

        setLoading(true)
        const db = getFirestore()

        const itemsCollections = collection(db, 'vinos')

        getDocs(itemsCollections)
            .then((snapshot) => {
                const docs = snapshot.docs.map((doc) => {
                    const data = doc.data()
                    return { id: doc.id, ...data }
                })
                setProducts(docs)
            })
            .catch(error => {
                console.log(error);
            })
            .finally(() => {
                setLoading(false)
            })
    }, [])

    const categoryFilter = products.filter((cat) => {
        return cat.categoria === categoryId
    })

    return (
        <>
            {categoryId ? <ItemList product={categoryFilter} /> : <ItemList product={products} />}
        </>
    )
}

export default ItemListContainer