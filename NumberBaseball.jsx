const React = require("react")

const getNum=()=>{
    const numArr = [0,1,2,3,4,5,6,7,8,9]
    const getNumArr =[];

    for(let i=0;i<4;i++){
        const choiceNum = numArr.splice(Math.floor(Math.random()*(9-i)),1)[0]
        getNumArr.push(choiceNum)
    }
    // console.log(getNumArr)
    return getNumArr
}

class NumberBaseball extends React.Component{
    state={
        number:getNum(),
        value:"",
        result:"",
        try:[]
    }

    changeInput=(e)=>{
        this.setState({value:e.target.value})
    }

    checkResult=(e)=>{
        e.preventDefault();
        const {number,value,result,tryCount}=this.state
        console.log("click")
        if(value===number.join("")){
            this.setState({
                result:"홈런!",
                try:[...this.state.try, {tryNum:value,result:"홈런!"}]
            })
        }
    }

    render(){
        const {number,value,result,tryCount}=this.state
        return (
            <div>
                <h2>숫자야구</h2>
                <h3>네자리 숫자를 맞춰주세요 {number}</h3>
                <input maxLength={4} type="number" value={value} onChange={this.changeInput}/>
                <button onClick={this.checkResult}>확인</button>
                <p>{result}</p>
                <p>시도횟수 : {tryCount.length}</p>
                <ul>
                     
                </ul>
            </div>
        )
    }
}

module.exports=NumberBaseball