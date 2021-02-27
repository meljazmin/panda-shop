import { createContext, useEffect, useState } from 'react';

export const CartContext = createContext();

export default function CartProvider({ defaultValue = [], children }) {
    const [cache, setCache] = useState(defaultValue);

    useEffect(() => {
        const cacheInStorage = localStorage.getItem('cart');
        if (cacheInStorage) {
            setCache(JSON.parse(cacheInStorage));
        }
    }, []);

    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cache));
    }, [cache]);

    const getItemById = (itemId) => {
        return cache.find(item => item.item.id === parseInt(itemId));
    }

    const addItem = (item, quantity) => {
        setCache((cart) => {
            if (isInCart(item.id)) {
                const index = cart.findIndex(i => i.item.id === item.id);
                const existingItem = cart.splice(index, 1)[0];
                existingItem.quantity += quantity;
                return [...cart, existingItem];
            } else {
                return [...cart, { item, quantity }];
            }
        });
    }

    const removeItem = (itemId) => {
        let item = getItemById(itemId);
        if (item) {
            setCache((cart) => {
                return cart.filter(i => i.item.id !== item.item.id);
            });
        }
    }

    const clear = () => {
        setCache(defaultValue);
    }

    const isInCart = (itemId) => {
        return getItemById(itemId) ? true : false;
    }

    const changeItemQuantity = (id, quantity) => {
        const item = getItemById(id);
        if (item) {
            setCache((cart) => {
                const index = cart.findIndex(i => i.item.id === item.item.id);
                cart[index].quantity = parseInt(quantity);
                return cart;
            });
        }
    }

    return (
        <CartContext.Provider value={{ addItem, removeItem, clear, isInCart, changeItemQuantity, cart: cache }}>
            { children}
        </CartContext.Provider >
    )
}