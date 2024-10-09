import "./HomeComponent.css"
import uniLeak from "../../assets/images/UniLeak.png"
import phoneTmpl from "../../assets/images/app_phone_template.png"
import { Board } from "../board/BoardComponent"
import getApp from "../../assets/images/disponivel.png"

export const HomeOne = () => {
    return (
        <div className="god">
            <main>
                <div className="head">
                    <div className="faixa_a">
                        <img src={uniLeak} alt="logo-uniLeaked" className="title"/>
                        <p className="slogan">Solucionando a alimentação universitária.
                            <br />
                            <br />
                            
                            <br />
                            @Unifood
                        </p>
                        UNIFOOD é um app que conecta estudantes <br /> universitários para compras de comida conveniente e segura, <br />
                         com perfis de usuário, correspondência de preferências,
                          pagamentos seguros e avaliações.
                    </div>

                    <div className="faixa_b">
                        <div className="wrapper_middle_center">
                            <h1 className="asside_description"> Mate sua fome <br /> com apenas um clique! </h1>
                            <div className="sub_wrapper_middle_center">
                                <Board/>
                            </div>
                        </div>
                    
                    </div>

                    <div className="faixa_c">
                        <div className="wrapper_bottom_center">
                                <img src={phoneTmpl} alt="" className="phn"/>
                                <h1 className="asside_description_bottom">
                                     Acesse agora <br /> e aproveite! 
                                     <a href="www.googlestore.com"><img src={getApp} alt="" /></a>
                                    
                                </h1>
                        </div>
                    </div>
                </div>
            </main>          
        </div>
    )
}