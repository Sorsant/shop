import { createContext, useState } from "react";

export const ShoppingCartContext = createContext()

export const ShoppingCartProvider = ({ children }) => {
    const [count, setCount] = useState(0)

    const [isProductDetailOpen, setIsProductDetailOpen] = useState(false)
    const openProductDetail = () => setIsProductDetailOpen(true)
    const closeProductDetail = () => setIsProductDetailOpen(false)

    const [isCheckoutSideMenu, setIsCheckoutSideMenu] = useState(false)
    const openCheckoutSideMenu = () => setIsCheckoutSideMenu(true)
    const closeCheckoutSideMenu = () => setIsCheckoutSideMenu(false)

    const [productToShow, setProductToShow] = useState({})
    const [cartProducts, setCartProducts] = useState([])

    const [order, setOrder] = useState([])


    return (
        <ShoppingCartContext.Provider value={{
            count,
            setCount,
            openProductDetail,
            closeProductDetail,
            isProductDetailOpen,
            productToShow,
            setProductToShow,
            closeCheckoutSideMenu,
            openCheckoutSideMenu,
            isCheckoutSideMenu,
            setCartProducts,
            cartProducts,
            order,
            setOrder
        }}>
            {children}
        </ShoppingCartContext.Provider>
    )
}