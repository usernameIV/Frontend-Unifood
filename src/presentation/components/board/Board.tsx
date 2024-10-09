import { CardText } from "../card/Card.component"
import "./Board.css"

export const Board = () => {
    return (
        <div className="main_board">
            <CardText 
                name="Hamburguer" 
                imageUrl="https://www.cnnbrasil.com.br/viagemegastronomia/wp-content/uploads/sites/5/2022/05/mafe-estudio-LV2p9Utbkbw-unsplash.jpg" 
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
                name="Hamburguer" 
                imageUrl="https://www.cnnbrasil.com.br/viagemegastronomia/wp-content/uploads/sites/5/2022/05/mafe-estudio-LV2p9Utbkbw-unsplash.jpg" 
                cents=',90' 
                value={24}
            />
            <CardText 
                name="Hamburguer" 
                imageUrl="https://www.cnnbrasil.com.br/viagemegastronomia/wp-content/uploads/sites/5/2022/05/mafe-estudio-LV2p9Utbkbw-unsplash.jpg" 
                cents=',90' 
                value={24}
            />
        </div>
    )
}