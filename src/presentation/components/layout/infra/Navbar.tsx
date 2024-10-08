import logo_unifood from '../../../assets/images/coxinha.png'
import './infra.style/Navbar.style.css'


export const Navbar = () => {
    return (
        <div>
            <div className="navbar"> 
                    <img src={logo_unifood} alt="" className="logo"/>
                    <ul>
                        <li>Home</li>
                        <li>Products</li>
                        <li>Features</li>
                        <li>About Us</li>
                    </ul>
            </div>       
        </div>  
    )
}
