import { createContext, useEffect, useState } from 'react';

export const CartContext = createContext({});

export default function CartProvider({ defaultValue = [], children }) {
    const [cart, setCart] = useState(defaultValue);

    useEffect(() => {
        const cacheInStorage = localStorage.getItem('cart');
        if (cacheInStorage) {
            setCart(JSON.parse(cacheInStorage));
        }
    }, []);

    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cart));
    }, [cart]);

    const getItemById = (itemId) => {
        return cart.find(item => item.item.id === itemId);
    }

    const addItem = (item, quantity) => {
        setCart((cart) => {
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
            setCart((cart) => {
                return cart.filter(i => i.item.id !== item.item.id);
            });
        }
    }

    const clear = () => {
        setCart(defaultValue);
    }

    const isInCart = (itemId) => {
        return getItemById(itemId) ? true : false;
    }

    const changeItemQuantity = (id, quantity) => {
        const item = getItemById(id);
        if (item) {
            setCart((cart) => {
                const index = cart.findIndex(i => i.item.id === item.item.id);
                cart[index].quantity = parseInt(quantity);
                return cart;
            });
        }
    }

    const getTotal = () => {
        return cart.reduce((acum, item) => {
            acum += item.item.price * item.quantity;
            return acum;
        }, 0);
    }

    return (
        <CartContext.Provider value={{ addItem, removeItem, clear, isInCart, changeItemQuantity, getTotal, cart: cart }}>
            { children}
        </CartContext.Provider >
    )
}