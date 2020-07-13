const React = require("react")
const Try = require("./Try")

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
                result:"홈런!",
                tries:[...this.state.tries, {tryNum:value,result:"홈런!"}]
                // 배열:[기존배열,{추가할 내용}]  기존배열은 ...으로 가지고있는 모든것을 가져와야한다  => push 대신 리액트에서 변화된 배열을 체크할수있게 사용
            })
        }
        else {
            const answerArr = value.split("").map((props)=>{
                parseInt(props)
            })
            let strike=0
            let ball=0

            // 10번이상 틀렸을 경우 
            if(tries.length>=9){
                this.setState({
                    result:`기회 10번 모두 사용하셨습니다. 답은 ${value.join(",")}`
                })
                alert("게임을 다시 시작합니다.")
                this.setState({number:getNum(),tries:[],value:""})
            }
            else{
                for(let i=0;i<4;i++){
                    if(answerArr[i]===value[i]){
                        strike+=1
                    }
                    else if(value.includes(answerArr[i])){
                        ball+=1
                    }
                }
                this.setState({
                    tries:[...this,state,tries, {try:value,rsult:`${strike}스트라이크, ${ball}볼 입니다.`,value:""}]
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
                <input maxLength={4} type="number" value={value} onChange={this.changeInput}/>
                <button onClick={this.checkResult}>확인</button>
                <ul>
                    {tries.map((props,i)=>{
                        <Try key={`${i+1}차시도:`} tryInfo={props} />})}
                </ul>
            </div>
        )
    }
}

module.exports=NumberBaseball