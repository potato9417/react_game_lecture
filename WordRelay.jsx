const React = require("react")

class WordRelay extends React.Component{
    state={
        word:"고양이",
        value:"",
        result:""
    }

    changeInput=(e)=>{
    }

    checkResult=(e)=>{
        e.preventDefault();
        console.log("click")
    }
    input;

    inputRef=(e)=>{
        this.input=e;
    }

    render(){
        const {word,value,result}=this.state
        return(
            <div>
                <h2>끝말잇기 게임</h2>
                <h3>{word}</h3>
                <input ref={this.inputRef} type="text" value={value} onChange={this.changeInput}/>
                <button onClick={this.checkResult}>확인</button>
                <p>{result}</p>
            </div>
        )
    }
}

module.exports = WordRelay;