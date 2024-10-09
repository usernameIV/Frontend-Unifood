import { IconType } from "react-icons"
import "./Button.component.css"

interface IButton {
    text : string
    icon : IconType
    onClick: () => void;
}

export const Button = ({text : texto, icon : Icone, onClick } : IButton) => {
    return(
        <>
            <button className="bttn" onClick={onClick}>
                <Icone style={{marginRight: '8px' }}/>      
                {texto} 
            </button>
        </>
    )
}