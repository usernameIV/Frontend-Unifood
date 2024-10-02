import logo_unifood from '../../../assets/images/logo_unifood.png'
import { SearchBox } from '../../search-box/Search-box'


export const Navbar = () => {
    return (
        <div className="navbar"> 

            <img src={logo_unifood} alt="" className="logo"/>

            <ul>
                <li>Home</li>
                <li>Products</li>
                <li>Features</li>
                <li>About</li>
            </ul>

        <SearchBox/>
        </div>         
    )
}
