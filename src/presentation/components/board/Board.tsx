import { CardText } from "../card/Card.component"
import "./Board.css"

export const Board = () => {
    return (
        <div className="main_board">
            <CardText 
                name="Lasanha" 
                imageUrl="https://vitarella.com.br/wp-content/uploads/2020/12/08_LASANHA_FINAL-1-min.jpg" 
                cents=',90' 
                value={24}
            />
            <CardText 
                name="Bolo de pote" 
                imageUrl="https://nossodocesv.lojazap.com/_core/_uploads/4680/2023/05/2335280523g80afai4d8.jpeg" 
                cents=',90' 
                value={24}
            />
            <CardText 
                name="Hamburguer" 
                imageUrl="https://www.cnnbrasil.com.br/viagemegastronomia/wp-content/uploads/sites/5/2022/05/mafe-estudio-LV2p9Utbkbw-unsplash.jpg" 
                cents=',90' 
                value={24}
            />
            <CardText 
                name="Mousse de limão" 
                imageUrl="https://guiadacozinha.com.br/wp-content/uploads/2019/10/mousse-limao-farofa.jpg" 
                cents=',90' 
                value={24}
            />
        </div>
    )
}