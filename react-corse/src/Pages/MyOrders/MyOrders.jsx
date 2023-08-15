import { ShoppingCartContext } from '../../Context/index';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import OrdersCard from '../../Components/OrdersCard/index'
import Layout from '../../Components/Layout/Layout'

const MyOrders = () => {
    const context = useContext(ShoppingCartContext);
    const currentPath = window.location.pathname;
    let index = currentPath.substring(currentPath.lastIndexOf('/') + 1);

    return (
        <Layout>
            <div className='flex items-center justify-center w-80 relative'>
                <h1>MyOrders </h1>

            </div>
            {context.order?.map((order, index) => (

                <Link key={index} to={`/my-orders/${index}`}>
                    <OrdersCard
                        totalPrice={order.totalPrice}
                        totalProducts={order.totalProducts} />
                </Link>

            ))}



        </Layout>
    )
}

export default MyOrders
