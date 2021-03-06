const React = require("react")

const Gugudan=()=>{
    const [first, setFirst]=React.useState(Math.floor(Math.random()*9)+1)
    const [second, setSecond]=React.useState(Math.floor(Math.random()*9)+1)
    const [value, setValue]=React.useState("")
    const [result, setResult]=React.useState("")
    const [rigntCount, setRigntCount]=React.useState(0)
    const [wrongCount, setWrongCount]=React.useState(0)
    const inputRef=React.useRef(null)

    const changeValue=(e)=>{
        setValue(e.target.value)
    }

    const checkResult=(e)=>{
        e.preventDefault();
        console.log("click",value)
        if(value===""){
            setResult("값을 입력해주세요.")
        }
        if(first*second===JSON.parse(value)){
            setResult("정답! ")
            setRigntCount(rigntCount+1)
            setFirst(Math.floor(Math.random()*9)+1)
            setSecond(Math.floor(Math.random()*9)+1)
        }
        else{
            setResult("떙!")
            setWrongCount(wrongCount+1)
        }
        setValue("")
        inputRef.current.focus()
    }
    return(
        <div>
            <h2>구구단게임</h2>
            <h3>{first} 곱하기 {second} 는?</h3>
            <input ref={inputRef} type="number" value={value} onChange={changeValue} />
            <button onClick={checkResult}>확인</button>
            <p>{result}</p>
            <p>정답 : {rigntCount}회</p>
            <p>오답 : {wrongCount}회</p>
        </div>
    )
}

module.exports=Gugudan