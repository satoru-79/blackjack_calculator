import CardList from "./CardList";
import Delete from "./Delete";
import Reset from "./Reset";
import "../App.css"

const AdditionalPlayer = ({deck,owner,addCard,resetHand, deleteCard,miniFont}) => {

    return (
        <div style={{height:"100%",width:"100%"}} key={owner.key}>
            <div className='name-area flex-center' >
                <div className='flex-center' style={{width:"75%"}}>
                    <p className='text'
                        style={{fontSize: miniFont && "10px"}}
                    >
                        {owner.name}
                    </p>
                </div>
            </div>
            <div>
                <div className='flex-center' style={{marginBottom:"1%"}}>
                    <Delete owner={owner} deleteCard={deleteCard}/>
                    <Reset owner={owner}  resetHand={resetHand}/>
                </div>
            </div>
            <div className='flex-center ' 
                 style={{width:"100%",height: "80%"}}>
                <CardList deck={deck} owner={owner} addCard={addCard}/>
            </div>
        </div>
        
    )

}


export default AdditionalPlayer;