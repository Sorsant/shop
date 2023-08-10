import { XMarkIcon } from '@heroicons/react/24/solid'
import { ShoppingCartContext } from '../../Context/index';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { totalPrice } from '../../utils';
import OrderCard from '../OrderCard/index';
import './styles.css'

const CheckoutSideMenu = () => {
    const context = useContext(ShoppingCartContext)

    const handleDelete = (id) => {
        const filteredProducts = context.cartProducts.filter(product => product.id != id)
        context.setCartProducts(filteredProducts)
    }
    const handleCheckout = () => {
        const orderToAdd = {
            date: '01.02.2023',
            products: context.cartProducts,
            totalProducts: context.cartProducts.lenght,
            totalPrice: totalPrice(context.cartProducts),
        };

        context.setOrder([...context.order, orderToAdd]);
        context.setCartProducts([]);
        context.setCount(0);
    }
    return (
        <aside className={`${context.isCheckoutSideMenu ? 'flex' : 'hidden'} checkout-side-menu   flex-col fixed right-0 border bg-white border-black rounded-lg `}>
            <div className='flex justify-between items-center p-6'>
                <h2 className='font-medium text-xl'>My Order</h2>
                <div>
                    < XMarkIcon className="h-6 w-6 text-black cursor-pointer" onClick={() => context.closeCheckoutSideMenu()} />

                </div>
            </div>
            <div className='px-6 overflow-y-scroll flex-1'>

                {
                    context.cartProducts.map((product) => (
                        <OrderCard
                            key={product.id}
                            id={product.id}
                            title={product.title}
                            imageUrl={product.images}
                            price={product.price}
                            handleDelete={handleDelete}

                        />

                    ))
                }
            </div>
            <div className='px-6 '>
                <p className='flex justify-between items-center mt-3'>
                    <span className='font-ligth'>Total:</span>
                    <span className='font-medium text-2xl'>${totalPrice(context.cartProducts)}</span>
                </p>
                <Link to='/my-orders/last'>
                    <button className='w-full bg-lime-500 py-3 text-white rounded-lg mb-3 mt-3  ' onClick={() => handleCheckout()}>Checkout</button>
                </Link>
            </div>
        </aside>
    )
}

export default CheckoutSideMenu
