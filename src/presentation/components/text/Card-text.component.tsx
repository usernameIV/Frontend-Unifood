
interface ICardText {
    title: string
    id: number
    paragraph: string
    description: string
}

export const CardText = ({title, id, paragraph, description} : ICardText) => {
    return (
        <div>
            <h1>{title}{id}</h1>
            <p>{paragraph}</p>
            <h5>{description}</h5>
        </div>
    )
}