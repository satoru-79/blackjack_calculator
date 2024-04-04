import "../Deck.css"

const Card = ({card, handed}) => {
    if (handed !== "") {
        return <div style={{ width: "100%", height: "100%",borderWidth:1,borderColor:"red"}} key={0}></div>;
    } else if (card.suit === 0) {
        switch (card.number) {
            case 1:
                return (
                    <img src={"../image/cards/s1.png"} alt="" className="card"/>
                );
            case 2:
                return (
                    <img src={"../image/cards/s2.png"} alt="" className="card"/>
                );
            case 3:
                return (
                    <img src={"../image/cards/s3.png"} alt="" className="card"/>
                );
            case 4:
                return (
                    <img src={"../image/cards/s4.png"} alt="" className="card"/>
                );
            case 5:
                return (
                    <img src={"../image/cards/s5.png"} alt="" className="card"/>
                );
            case 6:
                return (
                    <img src={"../image/cards/s6.png"} alt="" className="card"/>
                );
            case 7:
                return (
                    <img src={"../image/cards/s7.png"} alt="" className="card"/>
                );
            case 8:
                return (
                    <img src={"../image/cards/s8.png"} alt="" className="card"/>
                );
            case 9:
                return (
                    <img src={"../image/cards/s9.png"} alt="" className="card"/>
                );
            case 10:
                return (
                    <img src={"../image/cards/s10.png"} alt="" className="card"/>
                );
            case 11:
                return (
                    <img src={"../image/cards/s11.png"} alt="" className="card"/>
                );
            case 12:
                return (
                    <img src={"../image/cards/s12.png"} alt="" className="card"/>
                );
            case 13:
                return (
                    <img src={"../image/cards/s13.png"} alt="" className="card"/>
                );
            default:
        }
    } else if (card.suit === 1) {
        switch (card.number) {
            case 1:
                return (
                    <img src={"../image/cards/c1.png"} alt="" className="card"/>
                );
            case 2:
                return (
                    <img src={"../image/cards/c2.png"} alt="" className="card"/>
                );
            case 3:
                return (
                    <img src={"../image/cards/c3.png"} alt="" className="card"/>
                );
            case 4:
                return (
                    <img src={"../image/cards/c4.png"} alt="" className="card"/>
                );
            case 5:
                return (
                    <img src={"../image/cards/c5.png"} alt="" className="card"/>
                );
            case 6:
                return (
                    <img src={"../image/cards/c6.png"} alt="" className="card"/>
                );
            case 7:
                return (
                    <img src={"../image/cards/c7.png"} alt="" className="card"/>
                );
            case 8:
                return (
                    <img src={"../image/cards/c8.png"} alt="" className="card"/>
                );
            case 9:
                return (
                    <img src={"../image/cards/c9.png"} alt="" className="card"/>
                );
            case 10:
                return (
                    <img src={"../image/cards/c10.png"} alt="" className="card"/>
                );
            case 11:
                return (
                    <img src={"../image/cards/c11.png"} alt="" className="card"/>
                );
            case 12:
                return (
                    <img src={"../image/cards/c12.png"} alt="" className="card"/>
                );
            case 13:
                return (
                    <img src={"../image/cards/c13.png"} alt="" className="card"/>
                );
            default:
        }
    } else if (card.suit === 2) {
        switch (card.number) {
            case 1:
                return (
                    <img src={"../image/cards/d1.png"} alt="" className="card"/>
                );
            case 2:
                return (
                    <img src={"../image/cards/d2.png"} alt="" className="card"/>
                );
            case 3:
                return (
                    <img src={"../image/cards/d3.png"} alt="" className="card"/>
                );
            case 4:
                return (
                    <img src={"../image/cards/d4.png"} alt="" className="card"/>
                );
            case 5:
                return (
                    <img src={"../image/cards/d5.png"} alt="" className="card"/>
                );
            case 6:
                return (
                    <img src={"../image/cards/d6.png"} alt="" className="card"/>
                );
            case 7:
                return (
                    <img src={"../image/cards/d7.png"} alt="" className="card"/>
                );
            case 8:
                return (
                    <img src={"../image/cards/d8.png"} alt="" className="card"/>
                );
            case 9:
                return (
                    <img src={"../image/cards/d9.png"} alt="" className="card"/>
                );
            case 10:
                return (
                    <img src={"../image/cards/d10.png"} alt="" className="card"/>
                );
            case 11:
                return (
                    <img src={"../image/cards/d11.png"} alt="" className="card"/>
                );
            case 12:
                return (
                    <img src={"../image/cards/d12.png"} alt="" className="card"/>
                );
            case 13:
                return (
                    <img src={"../image/cards/d13.png"} alt="" className="card"/>
                );
            default:
        }
    } else if (card.suit === 3) {
        switch (card.number) {
            case 1:
                return (
                    <img src={"../image/cards/h1.png"} alt="" className="card"/>
                );
            case 2:
                return (
                    <img src={"../image/cards/h2.png"} alt="" className="card"/>
                );
            case 3:
                return (
                    <img src={"../image/cards/h3.png"} alt="" className="card"/>
                );
            case 4:
                return (
                    <img src={"../image/cards/h4.png"} alt="" className="card"/>
                );
            case 5:
                return (
                    <img src={"../image/cards/h5.png"} alt="" className="card"/>
                );
            case 6:
                return (
                    <img src={"../image/cards/h6.png"} alt="" className="card"/>
                );
            case 7:
                return (
                    <img src={"../image/cards/h7.png"} alt="" className="card"/>
                );
            case 8:
                return (
                    <img src={"../image/cards/h8.png"} alt="" className="card"/>
                );
            case 9:
                return (
                    <img src={"../image/cards/h9.png"} alt="" className="card"/>
                );
            case 10:
                return (
                    <img src={"../image/cards/h10.png"} alt="" className="card"/>
                );
            case 11:
                return (
                    <img src={"../image/cards/h11.png"} alt="" className="card"/>
                );
            case 12:
                return (
                    <img src={"../image/cards/h12.png"} alt="" className="card"/>
                );
            case 13:
                return (
                    <img src={"../image/cards/h13.png"} alt="" className="card"/>
                );
            default:
        }
    }
     
}


export default Card;