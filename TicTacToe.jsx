const React =require("react")
const Table = require("./Table")

const TicTacToe=()=>{
    const [winner,setWinner]=React.useState("")
    const [turn,setTurn]=React.useState("O")
    const [tableDate,setTableDate]=useState([["","",""],["","",""],["","",""]])

    return(
        <div>
            <h2>틱택토</h2>
            <Table />
            {<p></p>}
        </div>
    )
}

module.exports= TicTacToe