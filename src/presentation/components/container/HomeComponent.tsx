import "./HomeComponent.css"
import uniLeak from "../../assets/images/UniLeak.png"
import phoneTmpl from "../../assets/images/app_phone_template.png"
import { Board } from "../board/Board"

export const HomeOne = () => {
    return (
        <div className="god">
            <main>
                <div className="head">
                    <div className="faixa_a">
                        <img src={uniLeak} alt="logo-uniLeaked" className="title"/>
                        <p>A unifood presa pelo atendimento de qualidade e verifica recorrentemente a qualidade dos produtos oferecidos. 
                            <br />
                            <br />
                            É sempre um prazer cuidar da sua alimentação...
                            <br />
                            @Unifood
                        </p>
                    </div>

                    <div className="faixa_b">
                        <div className="wrapper_middle_center">
                            <h1 className="asside_description"> Coma do bom <br /> e do melhor! </h1>
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
                                </h1>
                        </div>
                    </div>
                </div>
            </main>          
        </div>
    )
}