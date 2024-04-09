import CardList from "./CardList";
import Delete from "./Delete";
import Reset from "./Reset";
import "../App.css"

const Player = ({deck,owner,addCard,resetHand, deleteCard,you2,setYou2,splitHand,miniFont}) => {

    const isntAddedPlayer = ((owner.name === "DEALER") || (owner.name === "YOU") || (owner.name === "YOU 2"))
    const splitable =  owner.name === "YOU" && you2.active === false && owner.poss.length === 2 && 
                       (owner.poss[0].number === owner.poss[1].number || (owner.poss[0].number > 9 && owner.poss[1].number > 9)) 

    return (
        <div style={{height:"100%",width:"100%"}} key={owner.name}>
            <div className='name-area flex-center' >
                <div className='flex-center' style={{width:"75%"}}>
                    <p className='text'
                        style={{fontSize: miniFont && "12px"}}
                    >
                        {owner.name}
                    </p>
                </div>
                <div className='btn-area flex-center'>
                   <Delete owner={owner} deleteCard={deleteCard}/>
                   <Reset owner={owner}  resetHand={resetHand}/>
                    { owner.name === "YOU 2" &&
                        <div className="delete-you2-area flex-center btn"
                            onClick={() => {
                                resetHand(you2);
                                setYou2({...you2,active:false});
                            }}
                        >
                            <img src="image/delete-you2.png" alt="" 
                                 style={{width:"100%", borderRadius:"50%",backgroundColor:"red"}}/>  
                        </div>
                    }
                    {   splitable &&
                        <div className="split-area flex-center">
                            <div className="split-btn flex-center btn" 
                                 onClick={() => splitHand()}
                            >
                                <p className="text"
                                   style={{fontSize: miniFont && "10px"}}
                                >
                                   split
                                </p>
                            </div>
                        </div>
                    }
                </div>
            </div>
            <div className='score-area flex-center' style={{flexDirection:"row"}}>
            {owner.name === "YOU" 
            ?   owner.total.filter((total) => total < 22).map((element, index) => {
                    let notFirst = index !== 0;
                    return (
                        <div className="flex-center" key={element}>
                            {notFirst && 
                                <p className="text">or</p>
                            }
                            <p className="text" key={element}>
                                {element}
                            </p>
                        </div>
                    );
                })
            :   Math.max.apply(null, owner.total) < 22 
                ?   <p className='text'>{Math.max.apply(null, owner.total)}</p>
                :   Math.min.apply(null,owner.total) < 22 &&   
                    <p className='text'>{Math.min.apply(null, owner.total)}</p>
            }
            {owner.total.filter((total) => total < 22).length === 0
            && <p className="text">bust</p>}
            </div>
            <div className='flex-center ' style={{width:"100%",
                 height:isntAddedPlayer ? "60%" : "80%"}}>
                <CardList deck={deck} owner={owner} addCard={addCard}/>
            </div>
            
            
        </div>
        
    )

}


export default Player