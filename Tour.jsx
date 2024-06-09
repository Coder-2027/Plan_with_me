import Card from './Card.jsx'

function Tour({tours, onRemoveTour}){
    return(
        tours.map((desc) => {
            // console.log(desc);
            return <Card key={desc.id} {...desc} removeTour = {onRemoveTour}></Card>
        })
    )
}

export default Tour;