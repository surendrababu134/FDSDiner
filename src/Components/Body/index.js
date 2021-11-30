import React from 'react';
import { Route, Routes} from 'react-router-dom';
import Restuarants from './Restuarants';
import SavedOrders from './SavedOrder';
import ItemsPage from './Restuarants/item';
const Body = () => {
    return (
        <div className="bodyCSS">
            
            {/* <Link to="/">Restuarants</Link> */}
            <Routes>
            <Route path="/" element={<Restuarants />} />
            <Route path="/saved" element={<SavedOrders />} />
            <Route path="/items/:id" element={<ItemsPage />} />
            </Routes>
            
        </div>
    )
}


export default Body
