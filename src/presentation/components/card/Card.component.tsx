import "../card/Card.style.css"


interface ICardText {
    name: string
    imageUrl: string
    cents : string
    value : number
}

export const CardText = ({name: title, imageUrl: url, cents : centsAndComma, value : value} : ICardText) => {
    return (

    <div className="product-card">
        <div className="thumbnail">
            <img src={url} alt={title}/>
        </div>
        <div className="inner">
            <h4>{title}</h4>
            <div className="price">
                <h4>
                    <span className="sub">R$</span>{value}
                </h4>
                <div className="sup">{centsAndComma}</div>
            </div>
        </div>
    </div>

    )
}