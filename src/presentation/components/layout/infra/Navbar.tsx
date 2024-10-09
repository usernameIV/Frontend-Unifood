import logo_unifood from '../../../assets/images/coxinha.png'
import './infra.style/Navbar.style.css'


export const Navbar = () => {
    return (
        <div>
            <div className="navbar"> 
                    <img src={logo_unifood} alt="" className="logo"/>
                    <ul>
                        <li>Início</li>
                        <li>Cardápio</li>
                        <li>Contato</li>
                        <li>Sobre</li>
                    </ul>
            </div>       
        </div>  
    )
}
