import Deck from "./Deck";
import Card from "./Card";
import "../CardList.css";

const CardList = ({ deck, owner, addCard,}) => {
  let min = Math.min.apply(null, owner.total);
  let max = Math.max.apply(null, owner.total);
  let length = owner.total.filter((total) => total < 22).length;  
  let isDealer = owner.name === "DEALER";
  let isntAddedPlayer = ((isDealer) || (owner.name === "YOU") || (owner.name === "YOU2"));
  const displayAddCard = (isDealer && ( (length === 1 && min < 17) || (length !== 1 && max < 18) ) )
                      || (!isDealer && min < 21) 

  return (
    <div className="cardlist" 
         style={{flexDirection: isntAddedPlayer ? "row" : "column",}}
    >
        {displayAddCard ?
        isntAddedPlayer ?
            <div className= "addcard" >
                <Deck deck={deck} type={"add"} addCard={addCard} owner={owner}/>
            </div>
        :   <div className="addcard2">
                <Deck deck={deck} type={"add"} addCard={addCard} owner={owner}/>
            </div>
        :   <div></div>
        }
        
        <div className="hand" 
             style={{height: isntAddedPlayer ? "100%" : "50%",}}>
            {owner.poss.map((value, index) => {
                let marginLeft = isntAddedPlayer ? index === 0 ? "1vh" : "-30px"  
                                                 : index === 0 ? "0"   : "-30px";
                return (
                    <div  key={value.key} 
                          style={{ marginLeft: marginLeft,maxWidth:"46px",
                          width:isntAddedPlayer ? "53.8%" : "77%"}}>              
                        <Card card={value} handed={""} />
                    </div>
                );
            })}
        </div>
    </div>
  );
};

export default CardList;