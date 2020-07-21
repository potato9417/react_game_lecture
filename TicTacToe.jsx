const React =require("react")
const Table = require("./Table")

const initialState={
    winner:"",
    turn:"O",
    tableDate:[["","",""],["","",""],["","",""]]
}

const SET_WINNER = "SET_WINNER" // action의 이름

const reducer=(state,action)=>{
    switch(action.type){
        case SET_WINNER:
            return{
                ...state,
                winner:action.winner
            }
    }
}

const TicTacToe=()=>{
    const [state,dispatch]=React.useReducer(reducer,initialState); // useState의 갯수가 많아질때 useReducer로 하나로 사용가능
    // state를 직접 수정할수 없고 이벤트가 발생했을떄 action을 dispatch해서 state를 변경해주도록 함 => action의 행동을 reducer에 저장

    const tableClick=React.useCallback(()=>{
        dispatch({type:SET_WINNER,winner:"O"})
    },[])

    return(
        <div>
            <h2>틱택토</h2>
            <Table onClick={tableClick} tableDate={state.tableDate} />
            {state.winner&&<p>{state.winner}님의 승리</p>}
        </div>
    )
}

module.exports= TicTacToe