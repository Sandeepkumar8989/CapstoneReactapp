import '../CSS/Buyerlogin.css';
import { useNavigate, Link } from 'react-router-dom';
function Buyerlogin(){
    return(
        <div className="container">
        <h2>Buyer Login</h2>
        <form>
          <input type="email" placeholder="Email" required />
          <input type="password" placeholder="Password" required />
          <button type="submit"><Link to="/Fashion">Login</Link></button>
        </form>
        <div className="options">
        <Link to="#">Forgot Password?</Link>
        <Link to="#">Create Account</Link>
        </div>
        <div className="social-login">
          <img src="images/google.png" alt="Google" />
          <img src="images/facebook.png" alt="Facebook" />
          <img src="images/twitter (1).png" alt="twitter" />
        </div>
      </div>
    )
};

export default Buyerlogin;