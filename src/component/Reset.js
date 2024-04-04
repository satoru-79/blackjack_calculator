import "../App.css"

const Reset = ({owner,resetHand}) => {

    return(
        <div style={{width:"25%",maxWidth:"22px"}} className="flex-center">
            <div onClick={() => {owner.poss.length !== 0 && resetHand(owner)}}
                style={{width:"100%"}} className="flex-center"
            >
               <img src="image/reset.png" alt=''
                    className="btn"
                    style={{width:"100%",backgroundColor:"white",
                            border:"0.01px solid black",borderRadius:"50%"}}/>
            </div>
        </div>
    )
} 

export default Reset