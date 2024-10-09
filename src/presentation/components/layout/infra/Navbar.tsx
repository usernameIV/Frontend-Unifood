import logo_unifood from '../../../assets/images/coxinha.png'
import './infra.style/Navbar.style.css'


export const Navbar = () => {
    return (
        <div>
            <div className="navbar"> 
                    <img src={logo_unifood} alt="" className="logo"/>
                    <ul>
                        <li><a href="/">Início</a></li>
                        <li><a href="Items">Cardápio</a></li>
                        <li><a href="">Contato</a></li>
                        <li><a href="">Sobre</a></li>
                    </ul>
            </div>       
        </div>  
    )
}
