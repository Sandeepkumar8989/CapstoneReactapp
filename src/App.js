
import './App.css';
import Header from './Components/Header';

import Furnitures from './Pages/Furnitures';
import Contactus from './Pages/Contactus';


import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';

import Appliances from './Pages/Appliances';
import TV from './Pages/TV';
import Fashion from './Pages/Fashion';
import Mobiles from './Pages/Mobiles';

import Electronic from './Pages/Electronic';
import Buyerlogin from './Pages/Buyerlogin';
import Sellerlogin from './Pages/Sellerlogin';
import Addproduct from './Pages/Addproduct';
import Home from './Pages/Home';
import Cart from './Pages/Cart';

function App() {
  return (
    
<>


    <Router>
      <div className="App">
        <Header/>

        <Routes>
          <Route>
              <Route index element={<Home/>}/>
              <Route exact path='/Home' element={<Home/>}/>
            <Route exact path='/Fashion' element={<Fashion/>}/>
            <Route exact path='/Electronic' element={<Electronic/>}/>
            <Route exact path='/Mobiles' element={<Mobiles/>}/>
            <Route exact path='/TV' element={<TV/>}/>
            <Route exact path='/Appliances' element={<Appliances/>}/>
            <Route exact path='/Furnitures' element={<Furnitures/>}/>
            <Route exact path='/Contactus' element={<Contactus/>}/>
            <Route exact path='/Buyerlogin' element={<Buyerlogin/>}/>
            <Route exact path='/Sellerlogin' element={<Sellerlogin/>}/>
            <Route exact path='/Addproduct' element={<Addproduct/>}/>
            <Route exact path='/Cart' element={<Cart/>}/>

          </Route>
        </Routes>
        </div>
    </Router>
    
    </>
   
  );
}

export default App;
