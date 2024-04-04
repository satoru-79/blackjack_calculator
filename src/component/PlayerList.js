import Player from "./Player";
import CardList from "./CardList";
import Delete from "./Delete";
import Reset from "./Reset";
import "../App.css"

const PlayerList = ({ players, deck, addCard, resetHand, deleteCard ,you,you2,setYou2,changePlayers,max300}) => {

    const splitHand = () => {
        setYou2({...you2, active:true});
        addCard(you.poss[1],you2);
        deleteCard(you);
        console.log(you2);
    }
    console.log(`render-playerlist : ${you2.total}`)

    return (
    <div className='player-area'>
        <div className="your-area">
            <div style={{display:"flex", height:"100%", width:"37.5%"}} >
                <div style={{height:"100%",width:"100%"}}>
                    <div className='name-area flex-center'>
                        <div className='flex-center' style={{width:"75%"}}>
                            <p className='text'
                               style={{fontSize: max300 && "12px"}}
                            >
                                YOU
                            </p>
                        </div>
                        <div className='btn-area flex-center'>
                            <Delete owner={you} deleteCard={deleteCard}/>
                            <Reset owner={you}  resetHand={resetHand}/>
                            { you.poss.length === 2 &&
                                you.poss[0].number === you.poss[1].number &&
                                <div className="split-area flex-center">
                                    <div className="split-btn flex-center btn" 
                                         onClick={() => splitHand()}
                                    >
                                        <p className="text"
                                           style={{fontSize: max300 && "10px"}}
                                        >
                                            split
                                        </p>
                                    </div>
                                </div>
                            }
                        </div>
                    </div>
                    <div className='score-area flex-center' style={{flexDirection:"row"}}>
                        {you.total.filter((total) => total < 22).map((element, index) => {
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
                        })}
                        {you.total.filter((total) => total < 22).length === 0
                        && <p className="text">bust</p>}
                    </div>
                    <div className='hand-area flex-center'>
                        <CardList deck={deck} owner={you} addCard={addCard}/>
                    </div>
                </div>
            </div>
            { you2.active === true &&
            <div style={{display:"flex", height:"100%", width:"37.5%"}} >
                <div style={{height:"100%",width:"100%"}}>
                    <div className='name-area flex-center'>
                        <div className='flex-center' style={{width:"75%"}}>
                            <p className='text'
                               style={{fontSize: max300 && "12px"}}
                            >
                                YOU - 2
                            </p>
                        </div>
                        <div className='btn-area flex-center'>
                            <Delete owner={you2} deleteCard={deleteCard}/>
                            <Reset owner={you2}  resetHand={resetHand}/>
                        </div>
                    </div>
                    <div className='score-area flex-center' style={{flexDirection:"row"}}>
                        {you2.total.filter((total) => total < 22).map((element, index) => {
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
                        })}
                        {you2.total.filter((total) => total < 22).length === 0
                        && <p className="text">bust</p>}
                    </div>
                    <div className='hand-area flex-center'>
                        <CardList deck={deck} owner={you2} addCard={addCard}/>
                    </div>
                </div>
            </div>
            }
        </div>
        <div className="additional-player-area">
            {
                players.map((player) => (
                    <Player player={player} deck={deck} addCard={addCard} 
                            resetHand={resetHand} deleteCard={deleteCard}
                            changePlayers={changePlayers} />
                ))
            }
        </div>
    </div>
    )
};

export default PlayerList;