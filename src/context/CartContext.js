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
        return cache.find(item => item.item.id === itemId);
    }

    const addItem = (item, quantity) => {
        if (isInCart(item.id)) throw Error('El item ya fue agregado al carrito');
        setCache((cart) => {
            return [...cart, { item, quantity }];
        });
    }

    const removeItem = (itemId) => {
        let item = getItemById(itemId);
        if (item) {
            setCache((cart) => {
                return cart.filter(i => i.id !== item.id);
            });
        }
    }

    const clear = () => {
        setCache(defaultValue);
    }

    const isInCart = (itemId) => {
        return getItemById(itemId) ? true : false;
    }

    return (
        <CartContext.Provider value={{ addItem, removeItem, clear, isInCart, cart: cache }}>
            { children}
        </CartContext.Provider >
    )
}