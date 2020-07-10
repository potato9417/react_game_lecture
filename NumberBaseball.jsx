const React = require("react")

const getNum=()=>{

}

class NumberBaseball extends React.Component{
    state={
        number:getNum(),
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
                <h3>네자리 숫자를 맞춰주세요{JSON.parse(number)}</h3>
                <input maxLength={4} type="number" value={value} onChange={this.changeInput}/>
                <button onClick={this.checkResult}>확인</button>
                <p>{result}</p>
                <p>시도횟수 : {tryCount.length}</p>
            </div>
        )
    }
}

module.exports=NumberBaseball