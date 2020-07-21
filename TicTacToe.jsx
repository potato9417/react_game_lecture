const React =require("react")
const Table = require("./Table")

const initialState={
    winner:"",
    turn:"O",
    tableDate:[["","",""],["","",""],["","",""]]
}

const reducer=(state,action)=>{
    switch(action.type){
        case "SET_WINNER":
            return{
                ...state,
                winner:action.winner
            }
    }
}

const TicTacToe=()=>{
    const [state,dispatch]=React.useReducer(reducer,initialState); // useState의 갯수가 많아질때 useReducer로 하나로 사용가능
    // const [winner,setWinner]=React.useState("")
    // const [turn,setTurn]=React.useState("O")
    // const [tableDate,setTableDate]=React.useState([["","",""],["","",""],["","",""]])

    const tableClick=React.useCallback(()=>{
        dispatch({type:"SET_WINNER",winner:"O"})
    },[])

    return(
        <div>
            <h2>틱택토</h2>
            <Table />
            {state.winner&&<p>{state.winner}님의 승리</p>}
        </div>
    )
}

module.exports= TicTacToe