const React = require("react")


class NumberBaseball extends React.Component{
    state={
        number:0,
        value:"",
        result:"",
        tryCount:[]
    }

    changeInput=(e)=>{
        this.setState({value:e.target.value})
    }

    checkResult=(e)=>{
        e.preventDefault();
        console.log("click")
    }

    render(){
        const {number,value,result,tryCount}=this.state
        return (
            <div>
                <h2>숫자야구</h2>
                <h3>네자리 숫자를 맞춰주세요</h3>
                <input maxLength={4} type="number" value={value} onChange={this.changeInput}/>
                <button onClick={this.checkResult}>확인</button>
                <p>{result}</p>
                <p>시도횟수 : {tryCount.length}</p>
                <ul>
                    {[
                        {fruit:"사과",taste:"달다"},
                        {fruit:"딸기",taste:"맛있다"},
                        {fruit:"키위",taste:"새콤하다"},
                        {fruit:"귤",taste:"시다"},
                        {fruit:"포도",taste:"달다"},
                        {fruit:"복숭아",taste:"말랑하다"},
                        {fruit:"오렌지",taste: "달다"},
                        {fruit:"딸기",taste:"맛있다"},
                    ].map((props)=>{
                        return <li key={props.fruit+props.taste}><b>{props.fruit}</b> => {props.taste}</li>
                    })}
                </ul>
            </div>
        )
    }
}

module.exports=NumberBaseball