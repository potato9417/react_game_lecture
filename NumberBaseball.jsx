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
        tries:[]
    }

    changeInput=(e)=>{
        this.setState({value:e.target.value})
    }

    checkResult=(e)=>{
        e.preventDefault();
        const {number,value,result,tries}=this.state
        console.log("click")
        if(value===number.join("")){
            this.setState({
                value:"",
                result:"홈런!",
                tries:[...this.state.tries, {tryNum:value,result:"홈런!"}]
                // 배열:[기존배열,{추가할 내용}]  기존배열은 ...으로 가지고있는 모든것을 가져와야한다  => push 대신 리액트에서 변화된 배열을 체크할수있게 사용
            })
            alert("홈런! 새 게임을 다시 시작합니다.")
            this.setState({
                value:"",
                number:getNum(),
                tries:[]
                // 배열:[기존배열,{추가할 내용}]  기존배열은 ...으로 가지고있는 모든것을 가져와야한다  => push 대신 리액트에서 변화된 배열을 체크할수있게 사용
            })
        }
        else {
            const answerArr = value.split("")
            let strike=0
            let ball=0
            // console.log(answerArr)

            // 10번이상 틀렸을 경우 
            if(tries.length>=3){
                alert(`기회 10번 모두 사용하셨습니다. 답은 ${number.join(",")}`)
                this.setState({number:getNum(),tries:[],value:""})
            }
            else{
                for(let i=0;i<4;i++){
                    console.log(JSON.parse(answerArr[i]),number[i])
                    if(JSON.parse(answerArr[i])===number[i]){
                        strike+=1
                    }
                    else if(number.includes(JSON.parse(answerArr[i]))){
                        ball+=1
                    }
                }
                this.setState({
                    tries:[...this.state.tries, {tryNum:value,result:`${strike}S, ${ball}B`}],value:""
                })
            }
        }
    }

    render(){
        const {number,value,tries}=this.state
        return (
            <div>
                <h2>숫자야구</h2>
                <h3>네자리 숫자를 맞춰주세요 {number}</h3>
                <input maxLength="4" type="number" value={value} onChange={this.changeInput}/>
                <button onClick={this.checkResult}>확인</button>
                <p>{tries.length}회 시도</p>
                <ul>
                    {tries.map((props,index)=>{
                        return (
                            <li key={index}>
                                <p>{props.tryNum}</p>
                                <p>{props.result}</p>
                            </li>
                        )
                    })}
                </ul>
            </div>
        )
    }
}

module.exports=NumberBaseball