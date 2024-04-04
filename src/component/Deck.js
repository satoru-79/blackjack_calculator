import "../App.css";
import "../Deck.css";
import "../CardList.css";
import Modal from "react-modal";
import Card from "./Card";
import { useState } from "react";
import { useMediaQuery } from 'react-responsive';

const Deck = ({deck,changeDeck,deckNum,type,shuffleCards,addCard,owner}) => {

    const usedCards = deck.filter((card) => card.handed === "used");
    const modalWidth = useMediaQuery({ query: '(min-width: 700px)'})
    const [editModalIsOpen, setEditModalIsOpen] = useState(false);
    const modalContainer = {
        overlay: {
         position:"fixed",
        },

        content: {
          position:"absolute",
          top:"10vh",
          left: modalWidth ? "10vw" : 0,
          width: modalWidth ? "80vw" : "100vw",
          maxHeight:"80vh",
          padding:0,
          borderRadius:10,
        }
    }

    return (
        <div style={{width:"100%"}} className="flex-center">

            { type !== "add"
            ?
            <div className='deck' >
                <img src='image/Bicyclebackside.jpg' alt='' className='card-img btn' 
                     onClick={() => {setEditModalIsOpen(true)}}
                />  
            </div> 
            :     
            <img src="image/add-card.png" alt="" className="add-btn" 
                 onClick={() => {setEditModalIsOpen(true)}}
            />  
            }    
            <Modal isOpen={editModalIsOpen} style={modalContainer}
                   onRequestClose={() => setEditModalIsOpen(false)}
                   ariaHideApp={false}
            >
                <div>
                    <div className="modal-head" 
                         style={{width: modalWidth ? "80vw": "100vw"}}
                    >
                        <div style={{width:"20vw",display:"flex",alignItems:"center"}}>
                            <p onClick={() => {setEditModalIsOpen(false)}} className='btn modal-text'>
                                ✖️
                            </p>
                        </div>
                        <div className="flex-center" 
                             style={{width: modalWidth ? "40vw" : "60vw"}}
                        >
                            { type === "used" && <p className="modal-text">USED</p>}
                            { type === "deck" && <p className='modal-text'>DECK</p>}
                            { type === "add"  && <p className="modal-text">ADD</p>}
                        </div>
                        { type === "deck" 
                        ?<div className="change-area">
                            <div className="change-btn" style={{height:"4vh",aspectRatio:1}}>
                                <img src="image/plus.png" className="btn" alt=""
                                     onClick={() => {
                                     deckNum < 5 && changeDeck("add")}}
                                />
                            </div>
                            <div className="change-btn" style={{height:"4vh",aspectRatio:1}}>
                                <img src="image/minus.png" className="btn" alt=""
                                     onClick={() => {
                                     deckNum > 1 && changeDeck("delete")}}
                                />
                            </div>
                        </div>
                        : type === "used" ?
                        <div className="change-area">
                            <div style={{height:"4vh"}} className="change-area">
                                <p className='modal-text shuffle-btn btn' style={{fontSize:"20px"}}
                                   onClick={() => {shuffleCards()}}>
                                    shuffle
                                </p>
                            </div>
                        </div>
                        : <div style={{width:"20vw"}}></div>
                        }
                    </div>
                    <div className="deck-content">
                        { type === "used"  
                          ? usedCards.map((card) => {
                                return (
                                <div className="item" key={card.key}>
                                    <Card card={card} handed={""}/>
                                </div>
                                )
                            }) 
                          : deck.map((card) => {
                                return (
                                <div className="item" 
                                     key={card.key}
                                     onClick={() => {
                                       type === "add" && 
                                       card.handed === "" && addCard(card,owner) 
                                    }}
                                >
                                    <Card card={card} handed={card.handed}/>
                                </div>
                                )
                            })    
                        
                        }
                    </div>
                    
                </div>
            </Modal>
        </div>   
    )

}

export default Deck;