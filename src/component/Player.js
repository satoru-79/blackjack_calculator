import CardList from "./CardList";
import Reset from "./Reset";
import Delete from "./Delete";
import "../App.css";
import { useMediaQuery } from 'react-responsive';

const Player = ({ player, deck, addCard, resetHand, deleteCard,changePlayers}) => {
    const miniFont = useMediaQuery({ query: '(max-width: 370px)'})

    return(
        <div style={{display:"flex", height:"100%", width:"25%",justifyContent:"center"}}
             key={player.key}>
            { player.active === false 
            ? 
            <div className="flex-center add-player-btn" 
                 onClick={() => changePlayers("add",player.name)}
            >
                <img src="image/add-player-button.png" alt="" style={{width:"70%"}}/>
            </div>
            :<div style={{height:"100%",width:"100%"}}>
                <div className='name-area flex-center' >
                  <div className='flex-center' style={{width:"80%"}}>
                    <p className='text' 
                       style={{fontSize: miniFont && "10px" }}>
                        {player.name}
                    </p>
                  </div>
                </div>
                <div className='flex-center' style={{marginBottom:"1%"}}>
                    <Delete owner={player} deleteCard={deleteCard}/>
                    <Reset owner={player}  resetHand={resetHand}/>
                </div>
                <div className='flex-center' style={{width:"100%",height:"80%"}}>
                    <CardList deck={deck} owner={player} addCard={addCard}/>
                </div>
            </div>
            }
        </div>
    )
};

export default Player;