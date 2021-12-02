import React from 'react';
import { Route, Routes} from 'react-router-dom';
import Restuarants from './Restuarants';
import SavedOrders from './SavedOrder';
import ItemsPage from './Restuarants/item';
import OrdersPage from './Restuarants/orderPage';
import SignUp from './SignUp';
import SignIn from './SignIn';
const Body = () => {
    return (
        <div className="bodyCSS">
            
            {/* <Link to="/">Restuarants</Link> */}
            <Routes>
            <Route path="/" element={<Restuarants />} />
            <Route path="/saved" element={<SavedOrders />} />
            <Route path="/items/:id" element={<ItemsPage />} />
            <Route path="/order/:id" element={<OrdersPage />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/signin" element={<SignIn />} />
            </Routes>
            
        </div>
    )
}


export default Body
