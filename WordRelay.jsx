const React = require("react")

const WordRelay=()=>{
    const [word,setWord]=React.useState("고양이");
    const [value,setValue]=React.useState("");
    const [result,setResult]=React.useState("");
    const inputRef=React.useRef(null)

    const changeInput=(e)=>{
        setValue(e.target.value)
    }

    const checkResult=(e)=>{
        e.preventDefault();
        console.log("click")
        if(word[word.length-1]===value[0]){
            setWord(value)
            setResult("정답입니다")
        }
        else{
            setResult("틀렸습니다.")
        }
        setValue("")
        inputRef.current.focus()
    }

    return(
        <div>
            <h2>끝말잇기 게임</h2>
            <h3>{word}</h3>
            <input ref={inputRef} type="text" value={value} onChange={changeInput}/>
            <button onClick={checkResult}>확인!!</button>
            <p>{result}</p>
        </div>
    )
}

module.exports = WordRelay;