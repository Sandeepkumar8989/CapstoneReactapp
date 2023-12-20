
import '../CSS/Header.css';
import { useNavigate, Link } from 'react-router-dom';
function Header(){
    return(
        
        <div className="header">
        <div className="logo-container">
          <div className="navigation-container">
            <div className="menu-container">
              <div className="menu-item">
                <div className="item-content">Monster</div>
              </div>
            </div>
            <div className="home1">
              <div className="home2">
                <div className="home3">
                  <div className="home4">
                    <div className="home5">
                      <div className="home6">
                        <div className="home7"><Link to='/Home' className="mobile">Home</Link></div>
                      
                      </div>
                    </div>
                  </div>
                  <div className="about1">
                    <div className="about2">
                      <div className="about3">
                     
                       
                        <div className="about4"><Link to='/Fashion' className="mobile" >Fashion</Link> </div>
                       
                      </div>
                    </div>
                  </div>
                  <div className="appliances1">
                    <div className="appliances2">
                      <div className="appliances3">
                        <div className="appliances4 dropdown">
                          <Link to='/Electronic' className="mobile">Electronics</Link>
                          <div className="dropdown-content">
                            <Link to='/Mobiles'>Mobile</Link>
                            <Link to='/Tv'>TV</Link>
                            <Link to='/Appliances'>Appliances</Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="furniture1">
                    <div className="furniture2">
                      <div className="furniture3">
                        <div className="furniture4"><Link to='/Furnitures' className="mobile" >Furnitures</Link>  </div>
                      </div>
                    </div>
                  </div>
                  <div className="contact1">
                    <div className="contact2">
                      <div className="contact3">
                        <div className="contact4"><Link to='/Contactus' className="mobile" >Contactus</Link></div>
                        {/* <div style={{width: '60px', height: '5px', background: '#F9BF29'}} /> */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="userlogo1">
                <div className="userlogo2">
                  <div className="userlogo3 ">
                    <div className="userlogo4">
                      <div className="userlogo5 ">
                        <div className="userlogo6 dropdown ">
                          <div className="userlogo7 ">
                            <div className="userlogo8  ">
                              <div className="userlogo9 " />
                              <div className="userlogo10 "><img src="images/user.svg" alt="My Happy SVG" />
                                <div className="dropdown-content">
                                    
                                  <Link to="/Buyerlogin">Buyer Login</Link>
                                  <Link to="/Sellerlogin">Seller Login</Link>
                                  
                                </div>
                              </div>       
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="cart1">
                    <div className="cart2">
                      <div className="cart3">
                        <div className="cart4">
                          <div className="cart5">
                            <div className="cart6" />
                            <div className="cart7" />
                            <div className="cart8"><Link to='/Cart'><img src="images/cart.svg" alt="My Happy SVG" /></Link> </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        </div>
    )
};

export default Header;