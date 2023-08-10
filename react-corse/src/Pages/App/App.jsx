import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom'
import { ShoppingCartProvider } from '../../Context/index'
import Home from '../Home'
import MyAccount from '../MyAccount/MyAccount'
import MyOrder from '../MyOrder/MyOrder'
import MyOrders from '../MyOrders/MyOrders'
import SignIn from '../SignIn/SignIn'
import NotFound from '../NotFound/NotFound'
import Navbar from '../../Components/Navbar/nav'
import CheckoutSideMenu from '../../Components/CheckoutSideMenu'
import './App.css'


const App = () => {

  return (
    <ShoppingCartProvider>
      <BrowserRouter >
        <Navbar />
        <CheckoutSideMenu />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/my-account' element={<MyAccount />} />
          <Route path='/my-orders' element={<MyOrders />} />
          <Route path='/my-orders/last' element={<MyOrder />} />
          <Route path='/my-order' element={<MyOrder />} />
          <Route path='/sing-in' element={<SignIn />} />
          <Route path='/*' element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </ShoppingCartProvider>
  )
}

export default App
