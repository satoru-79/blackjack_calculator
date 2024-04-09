import "../App.css"

const Delete = ({owner,deleteCard}) => {
    return (
        <div style={{width:"25%",maxWidth:"22px",marginRight:"2%"}} className="flex-center">
            <div onClick={() => {deleteCard(owner)}}
                 style={{width:"100%"}} className="flex-center">
                <img src="../image/delete.png" alt=""
                     className="btn"
                     style={{width:"100%",backgroundColor:"white",
                             border:"0.01px solid black",borderRadius:"50%"}}/>
            </div>
        </div>
    )
}

export default Delete;