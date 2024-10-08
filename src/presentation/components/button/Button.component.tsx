import { IconType } from "react-icons"
import "./Button.component.css"

interface IButton {
    text : string
    icon : IconType
}

export const Button = ({text : texto, icon : Icone} : IButton) => {
    return(
        <>
            <button className="bttn">
                <Icone style={{marginRight: '8px' }}/>      
                {texto} 
            </button>
        </>
    )
}