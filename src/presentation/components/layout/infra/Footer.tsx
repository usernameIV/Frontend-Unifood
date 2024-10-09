import './infra.style/Footer.style.css';
import logo_unifood from '../../../assets/images/UniBleak.png';
import { AiOutlineInstagram, AiOutlineTwitter, AiOutlineMail } from "react-icons/ai";

export const Footer = () => {
    return (
        <div className="footer">
            <img src={logo_unifood} alt="Logo Unifood" className="logo" />
            <article> 
                <p className="footer-title">Unifood.Inc</p>
                <p>A unifood presa pela qualidade dos alimentos e do atendimento.</p>
                <p>Contate-nos: Unifood@email.com</p>
            </article>
            <div className="footer-icons">
                <a href="https://instagram.com" target="_blank" rel="noreferrer" aria-label="Instagram">
                    <AiOutlineInstagram />
                </a>
                <a href="https://twitter.com" target="_blank" rel="noreferrer" aria-label="Twitter">
                    <AiOutlineTwitter />
                </a>
                <a href="mailto:Unifood@email.com" aria-label="E-mail">
                    <AiOutlineMail />
                </a>
            </div>
            <p className="footer-copy">©2024 Unifood. Todos os direitos reservados.</p>
        </div>
    );
};
