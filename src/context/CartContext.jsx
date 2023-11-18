import React from 'react'
import { useState, createContext } from 'react'

export const CartContext = createContext({
    cart: []
});

export const CartProvider = ({ children }) => {

    const [cart, setCart] = useState([]);

    const totalPrice = cart.map((items) => (
        (items.price * items.quantity)
    ))

    //función para agregar prod al carrito
    const addToCart = (item, quantity) => {
        !isInCart(item.id) ? setCart(product => [...product, { ...item, quantity }]) : alert('El producto que desea agregar ya se encuentra en el carrito');
    }

    //función para quitar prod del carrito
    const removeToCart = (itemId) => {
        const remove = cart.filter(product => product.id !== itemId);
        setCart(remove);
    }

    //función para limpiar el carrito
    const clearCart = () => {
        setCart([]);
    }

    //función para comprobar si el prod ya se encuentra en el carrito
    const isInCart = (itemId) => {
        return cart.some(product => product.id === itemId);
    }

    const totalQuantity = () => {
        return cart.reduce((total, item) => total + item.quantity, 0).toFixed(0);
    }

    return (
        <CartContext.Provider value={{ cart, addToCart, removeToCart, clearCart, totalQuantity, totalPrice }}>
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider