const React = require("react")

class WordRelay extends React.Component{
    state={
        word:"고양이",
        value:"",
        result:""
    }

    changeInput=(e)=>{
        this.setState({value:e.target.value})
    }

    checkResult=(e)=>{
        const {word,value,result}=this.state
        e.preventDefault();
        console.log("click")
        if(word[word.length-1]===value[0]){
            this.setState({word:value,result:"정답입니다!",value:""})
        }
        else{
            this.setState({result:"틀렸습니다!",value:""})
        }
        this.input.focus();
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
                <button onClick={this.checkResult}>확인!!</button>
                <p>{result}</p>
            </div>
        )
    }
}

module.exports = WordRelay;