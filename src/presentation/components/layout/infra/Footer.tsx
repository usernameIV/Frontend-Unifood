import './infra.style/Footer.style.css'
import logo_unifood from '../../../assets/images/logo_unifood.png'
export const Footer = () => {
    return(
        <>
        <div className="footer">
            <img src={logo_unifood} alt="" className="logo"/>
            <article>
                Meu pau ta morto 
                <br />
                Minha bolas estão de luto
                <br />
                <br />
                Unifood@email.com
                <br />
                ₢Unifo
            </article>
        </div>
        </>
    )
}