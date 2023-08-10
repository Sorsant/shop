import { useContext } from 'react'
import { ShoppingCartContext } from '../../Context/index'
import Layout from '../../Components/Layout/Layout';
import OrderCard from '../../Components/OrderCard/index'

const MyOrder = () => {
    const context = useContext(ShoppingCartContext)
    return (
        <Layout>
            My Order
            <div className='flex flex-col w-80'>

                {
                    context.order?.slice(-1)[0].products.map((product) => (
                        <OrderCard
                            key={product.id}
                            id={product.id}
                            title={product.title}
                            imageUrl={product.images}
                            price={product.price}


                        />

                    ))
                }
            </div>
        </Layout>
    )
}

export default MyOrder
