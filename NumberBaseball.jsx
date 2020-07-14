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
 
const NumberBaseball=()=>{
    const [number,setNumber]=React.useState(getNum())
    const [value,setValue]=React.useState("")
    const [tries,setTries]=React.useState([])
    const inputRef=React.useRef(null)

    const changeInput=(e)=>{
        setValue(e.target.value)
    }

    const checkResult=(e)=>{
        e.preventDefault();
        console.log("click")
        if(value===number.join("")){
            alert("홈런! 새 게임을 다시 시작합니다.")
            
            setValue("")
            setNumber(getNum())
            setTries([])
        }
        else {
            const answerArr = value.split("")
            let strike=0
            let ball=0
            // console.log(answerArr)

            // 10번이상 틀렸을 경우 
            if(tries.length>=9){
                alert(`기회 10번 모두 사용하셨습니다. 답은 ${number.join(",")}`)

                setNumber(getNum())
                setTries([])
                setValue("")
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
                setTries([...tries, {tryNum:value,result:`${strike}S, ${ball}B`}])
                setValue("")
                
            }
        }
        inputRef.current.focus()
    }

    return (
        <div>
            <h2>숫자야구</h2>
            <h3>네자리 숫자를 맞춰주세요 {number}</h3>
            <input  ref={inputRef} type="number" value={value} onChange={changeInput}/>
            <button onClick={checkResult}>확인</button>
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

// render가 반복되는것을 방지하기위해서 사용
// PureComponent, shouldComponentUpdate => class component
// React.memo => function component 

module.exports=NumberBaseball