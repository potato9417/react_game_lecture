const React = require("react")

class NumberBaseball extends React.Component{
    state={
        number:[],
        value:"",
        result:""
    }

    componentDidMount(){
        const numArr = [0,1,2,3,4,5,6,7,8,9]
        let num1 = numArr.splice(Math.floor(Math.random()*9),1)
        let num2 = numArr.splice(Math.floor(Math.random()*8),1)
        let num3 = numArr.splice(Math.floor(Math.random()*7),1)
        let num4 = numArr.splice(Math.floor(Math.random()*6),1)

        console.log(JSON.parse(num1))
        console.log(num2)
        console.log(num3)
        console.log(num4)
        // let newArr = [];
        // this.state({number:})
    }

    changeInput=(e)=>{
        this.setState({value:e.target.value})
    }

    checkResult=(e)=>{
        e.preventDefault();
        console.log("click")
    }

    render(){
        const {number,value,result}=this.state
        return (
            <div>
                <h2>숫자야구</h2>
                <h3>네자리 숫자를 맞춰주세요{number}</h3>
                <input type="number" value={value} onChange={this.changeInput}/>
                <button onClick={this.checkResult}>확인</button>
                <p>{result}</p>
            </div>
        )
    }
}

module.exports=NumberBaseball